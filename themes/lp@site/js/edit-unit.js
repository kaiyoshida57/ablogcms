$(function(){

    $(document).on('click','.js-original-fader',function(){
        var $target = $(this).attr('href');
        $($target).fadeToggle();
        return false;
    });

    // カスタムフィールドに登録されているアイコンのクラス名を取得
    // 登録されているクラス名と一致するものがあったら、.selectedを適用する
    $(document).on('click','.js-select-icon-start',function(){
        var selectedItem = $('#selected-icon').attr('class');
        var $parent = $(this).parents('.js-edit-icon');
        $('.js-select-icon li', $parent).each(function() {
            var listItem = $(this).children().attr('class');
            if( selectedItem === listItem ) {
                $(this).children().addClass('selected');
            }
        });
    });

    // .js-select-icon内のa要素をクリックしたとき
    $(document).on('click','.js-select-icon a' ,function(e){
        e.preventDefault();
        var $parent = $(this).parents('.js-edit-icon');

        var selectedIcon = $(this).attr('class');
        $('.js-select-icon a', $parent).removeClass('selected');
        $(this).addClass('selected');
        //クラスを一旦外して、新しいクラス名を付与する
        $('.js-selected-icon',$parent).removeClass(function(index, className) {
            return (className.match(/\bacms-\S+/g) || []).join(' ');
        }).addClass(selectedIcon);
        // カスタムフィールドにクラス名を挿入する
        $('.js-insert-icon',$parent).val(selectedIcon);
    });

    // 削除ボタン をクリックしたとき
    $(document).on('click','.js-delete-icon',function(e){
        e.preventDefault();
        var $parent = $(this).parents('.js-edit-icon');
        var selectedIcon = '';
        $('.js-selected-icon',$parent).removeClass(function(index, className) {
            return (className.match(/\bacms-\S+/g) || []).join(' ');
        });
        $('.js-insert-icon',$parent).val(selectedIcon);
    });

    // 入力内容が変更されたとき、背景色を変える
    $(document).on('change','.js-colorpicker-bg',function(e){
        var val = $(this).val();
        $(this).closest('.js-edit-icon').find('.js-edit-icon-area').css('background-color',val);
    });

    // 入力内容が変更されたとき、文字色を変える
    $(document).on('change','.js-colorpicker-text',function(e){
        var val = $(this).val();
        $(this).closest('.js-edit-icon').find('.js-edit-icon-area').css('color',val);
    });


    function colorPicker() {
        $('.js-colorpicker').each(function(){
            $(this).minicolors({
                control: $(this).attr('data-control') || 'hue',
                defaultValue: $(this).attr('data-defaultValue') || '',
                format: $(this).attr('data-format') || 'rgb',
                keywords: $(this).attr('data-keywords') || '',
                inline: $(this).attr('data-inline') === 'true',
                letterCase: $(this).attr('data-letterCase') || 'lowercase',
                opacity: $(this).attr('data-opacity'),
                position: $(this).attr('data-position') || 'bottom left',
                swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
                change: function(hex, opacity) {
                    var log;
                    try {
                        log = hex ? hex : 'transparent';
                        if( opacity ) log += ', ' + opacity;
                        console.log(log);
                    } catch(e) {}
                },
                theme: 'default'
            });
        });
    }

    // ユニットを挿入したとき
    ACMS.addListener('acmsAddUnit', function() {
        colorPicker();
    });

    ACMS.addListener("acmsAddCustomFieldGroup",function(){
        colorPicker();
    });

});

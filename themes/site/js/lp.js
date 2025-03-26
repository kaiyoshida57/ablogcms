$(function() {
  /**
   * アコーディオン
   */
  $('.js-lp-accordion .js-lp-accordion-title').each(function () {
    const $this = $(this);
    const wrapper = $('.js-lp-accordion');

    $(wrapper).addClass('js-active');

    const utid = $(this).closest(wrapper).attr('data-utid');
    const id = `accordion-${utid}${$this.index()}`;

    $this.nextUntil('.js-lp-accordion-title').wrapAll(`<div id="${id}" aria-hidden="true" class="lp-accordion-content">`);
    const panel = $this.next();
    $this.wrapInner(`<button aria-expanded="false" aria-controls="${id}">`);
    const button = $this.children('button');

    button.on('click', function () {
      const state = $(this).attr('aria-expanded') === 'false';
      $(this).attr('aria-expanded', state);
      panel.attr('aria-hidden', !state);
      panel.slideToggle();
    });
  });
});

ACMS.Ready(() => {
  ACMS.Config.autoHeightRArray = [{
    mark: '.js-autoheight-r-item',
    config: {
      style: 'height',
      element: '',
      offset: 0,
      parent: '.js-autoheight-r-container',
      list: '.js-autoheight-r-list',
    },
  }];
});

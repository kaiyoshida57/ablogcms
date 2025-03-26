$.fn.delayAddClass = function (className, delay) {
  return $(this)
    .delay(delay)
    .queue(function (next) {
      $(this).addClass(className);
      next();
    });
};
$.fn.delayRemoveClass = function (className, delay) {
  return $(this)
    .delay(delay)
    .queue(function (next) {
      $(this).removeClass(className);
      next();
    });
};

$(() => {
  /**
   * ページ上部へ戻るボタンの表示の設定
   */
  const scrollToTopButton = document.querySelector(".page-top-btn");
  const offset = 50;

  if (scrollToTopButton) {
    window.addEventListener("scroll", () => {
      if ($(window).scrollTop() > offset) {
        scrollToTopButton.classList.add("page-top-btn-appear");
      } else {
        scrollToTopButton.classList.remove("page-top-btn-appear");
      }
    });
  }

  /**
   * 郵便番号の「-」の挿入
   */
  $(".js-insert-hyphen").blur((e) => {
    const insertStr = (str, index, insert) =>
      str.slice(0, index) + insert + str.slice(index, str.length);
    const input = e.currentTarget;
    const zip = input.value;
    if (zip.length > 6 && !zip.match("-")) {
      input.value = insertStr(zip, 3, "-");
    }
  });

  /**
   * アイコンの選択UI
   */
  // カスタムフィールドに登録されているアイコンのクラス名を取得
  // 登録されているクラス名と一致するものがあったら、.selectedを適用する
  $(document).on("click", ".js-select-icon-start", () => {
    const selectedItem = $("#selected-icon").attr("class");
    $(".js-select-icon li").each(function () {
      const listItem = $(this).children().attr("class");
      if (selectedItem === listItem) {
        $(this).children().addClass("selected");
      }
    });
  });
  // .js-select-icon内のa要素をクリックしたとき
  $(document).on("click", ".js-select-icon a", function (e) {
    e.preventDefault();
    const selectedIcon = $(this).attr("class");
    $(".js-select-icon a").removeClass("selected");
    $(this).addClass("selected");
    // クラスを一旦外して、新しいクラス名を付与する
    $("#selected-icon").removeClass().addClass(selectedIcon);
    // カスタムフィールドにクラス名を挿入する
    $("#js-insert-icon").val(selectedIcon);
  });
  // 削除ボタン をクリックしたとき
  $(document).on("click", ".js-delete-icon", (e) => {
    e.preventDefault();
    const selectedIcon = "";
    $("#selected-icon").removeClass();
    $("#js-insert-icon").val(selectedIcon);
  });

  /**
   * ナビゲーションのa11y対応
   */
  const $mobileNavTrigger = $(".js-mobile-nav-btn");
  const $mobileNavContents = $(".js-mobile-nav");

  $($mobileNavTrigger).on("click", () => {
    $("body").toggleClass("is-locked");
    const $mobileNavAttr = $($mobileNavTrigger).attr("aria-expanded");
    if ($mobileNavAttr === "true") {
      $($mobileNavTrigger).attr("aria-expanded", false);
      $($mobileNavContents)
        .delayRemoveClass("is-opened", 1)
        .delayRemoveClass("is-active", 100);
    } else {
      $($mobileNavTrigger).attr("aria-expanded", true);
      $($mobileNavContents)
        .delayAddClass("is-active", 1)
        .delayAddClass("is-opened", 100);
    }
    $($mobileNavContents)
      .find("[href*='#']")
      .on("click", () => {
        $($mobileNavTrigger).attr("aria-expanded", false);
        $($mobileNavContents)
          .delayRemoveClass("is-opened", 1)
          .delayRemoveClass("is-active", 100);
        $("body").removeClass("is-locked");
      });
  });
});

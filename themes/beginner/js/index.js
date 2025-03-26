ACMS.Ready(function () {
  // オフキャンバスのブレイクポイントの設定
  ACMS.Config.offcanvas.breakpoint = 1023;

  // ページ上部へ戻るボタンの表示の設定
  var scrollToTopButton = document.querySelector(".page-top-btn");
  var offset = 50;

  if (scrollToTopButton) {
    window.addEventListener("scroll", function () {
      if ($(window).scrollTop() > offset) {
        scrollToTopButton.classList.add("page-top-btn-appear");
      } else {
        scrollToTopButton.classList.remove("page-top-btn-appear");
      }
    });
  }

  // 郵便番号の「-」の挿入
  if ($(".js-insert-hyphen").length > 0) {
    $(".js-insert-hyphen").on("blur", (e) => {
      var insertStr = function (str, index, insert) {
        return str.slice(0, index) + insert + str.slice(index, str.length);
      };
      var input = e.currentTarget;
      var zip = input.value;
      if (zip.length > 6 && !zip.match("-")) {
        input.value = insertStr(zip, 3, "-");
      }
    });
  }

  // トップページのスライダーの設定
  if ($(".js-slider").length > 0) {
    $(".js-slider").slick({
      accessibility: true,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">前へ</button>',
      nextArrow: '<button type="button" class="slick-next">次へ</button>',
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
    });
  }

  // ナビゲーション
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

  var $mobileNavTrigger = $(".js-mobile-nav-btn");
  var $mobileNavContents = $(".js-mobile-nav");

  $($mobileNavTrigger).on("click", function () {
    $("body").toggleClass("is-locked");
    var $mobileNavAttr = $($mobileNavTrigger).attr("aria-expanded");
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
      .find('[href*="#"]')
      .on("click", function () {
        $($mobileNavTrigger).attr("aria-expanded", false);
        $($mobileNavContents)
          .delayRemoveClass("is-opened", 1)
          .delayRemoveClass("is-active", 100);
        $("body").removeClass("is-locked");
      });
  });
});

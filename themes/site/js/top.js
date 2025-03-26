$(function() {
  // トップページのスライダーの設定
  const $slider = $(".js-slider");
  $slider.slick({
    accessibility: true,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">前へ</button>',
    nextArrow: '<button type="button" class="slick-next">次へ</button>',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // スライダーの内容を通達する時をフォーカスしている時のみに変更
  const $slickList = $(".slick-list");
  $slickList.removeAttr("aria-live");
  $slickList.on("focus", () => {
    $slickList.attr("aria-live", "polite");
  });
  $slickList.on("blur", () => {
    $slickList.removeAttr("aria-live", "polite");
  });
  // autoPlay:true時に使用する再生・停止ボタンを追加（autoPlayを使用しない場合は削除してください）
  const $pauseBtn = $(
    '<button type="button" id="autoplay-btn" aria-live="polite"><span class="js-slider-text acms-hide-visually">スライダーを自動再生を停止する</span></button>'
  );
  $pauseBtn.prependTo($slider);
  const $innerText = $(".js-slider-text");

  $(".autoplay-btn-play:first-child").hide();
  let play = true;
  // 停止ボタンをクリックした時の処理
  $("#autoplay-btn").click(() => {
    $pauseBtn.toggleClass("active");
    if (play === true) {
      $(".js-slider").slick("slickPause");
      $innerText.text("スライダーを自動再生する");
      play = false;
    } else {
      $(".js-slider").slick("slickPlay");
      $innerText.text("スライダーの自動再生を停止する");
      play = true;
    }
  });
});

// アニメーション
ACMS.Ready(() => {
  const observer = ACMS.Library.lozad(".js-animation", {
    rootMargin: "-30% 0px",
    threshold: 0.1,
    loaded: (el) => {
      el.classList.add("is-show");
    },
  });
  observer.observe();
});

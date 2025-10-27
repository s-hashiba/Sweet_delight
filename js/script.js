// Menuがクリックされた時にドロワーメニューを開く
jQuery(".menu-toggle").on("click", function(){
    jQuery("#menu-drawer").slideToggle();
});

// トップに戻るボタンの実装
$(function () {
  const pageTop = $("#page-top");
  pageTop.hide(); // 最初はボタンを非表示にする
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) { // 80pxスクロールしたら表示
      pageTop.fadeIn(); // 80px以上スクロールしたらボタンをフェードイン
    } else {
      pageTop.fadeOut(); // 80px以下になったらボタンをフェードアウト
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, // 上から0pxの位置に戻る
      },
      500 // 500ミリ秒かけて戻る
    );
    return false;
  });

  //モーダルで画像の拡大表示
jQuery(".menu-img a").click(function(){//画像のdivとaタグがクリックされたら
    var imgSrc = jQuery(this).children().prop("src");//子要素のsrc属性を取得
    jQuery(".menu-bigimg").prop("src",imgSrc);//拡大htmlのsrc属性に上書き
    jQuery(".menu-modal").fadeIn();//フェードイン表示
    jQuery("body").css("overflow", "hidden");//画面下をスクロールさせない
    return false;//aタグの無効化
});
jQuery(window).click(function(){//画面のどこかがクリックされたら
    jQuery(".menu-modal").fadeOut();//フェードアウト表示
    jQuery("body").css("overflow","auto");//スクロールロック解除
});
});
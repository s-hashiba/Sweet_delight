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
});
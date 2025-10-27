// Menuがクリックされた時にドロワーメニューを開く
jQuery(".menu-toggle").on("click", function(){
    jQuery("#menu-drawer").slideToggle();
});
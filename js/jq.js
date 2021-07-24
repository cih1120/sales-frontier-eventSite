function scheduleimg(w) {
    var width = $(w).width();
    if (width <= 500) {
        $('.schedule>img').attr("src", 'img/sec3/agenda_MB.png')
    } else {
        $('.schedule>img').attr("src", 'img/sec3/agenda_PC.png')
    }
}
$(document).ready(function () {
    scheduleimg(window);
});
$(window).resize(function () {
    scheduleimg(this);
});
// schedule 更改圖片

$(document).ready(function () {

    $('#btn_signup').click(function (event) {
        event.preventDefault();

        // 取得目標區塊的y座標
        var target_top = $('#signup').offset().top;
        // 取得body物件 這種寫法在各瀏覽器上最保險
        var b_top = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

        // 移動捲軸有動畫效果
        b_top.animate({
            scrollTop: target_top
        }, 800);
    });

})

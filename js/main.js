(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    const names = ["良食局自助餐","川味兒川菜館","天鍋宴集團","山櫻精緻涮涮鍋","川揚郁坊","大橋頭油飯","紅林鐵板燒","樂活涮涮鍋(中和)","新莊龜山島熱炒","真好味","小南門(總店)","陳記燒臘","北北車滷肉飯","昌吉紅燒鰻","五分埔魯肉飯","美麗餐廳","海霸王","矮仔財滷肉飯","吉美海鮮餐廳","靜壽司","阿輝牛肉城","中華餡餅粥","麗媽四季鍋","天町燒肉屋芝山店","貓下去","雅博股份有限公司","南海漁村","好所在","玉須龍","小飯館兒","冠冕團膳-立人國小","純發-松山店","四方阿九-土城店","日新軟體股份有限公司","佳典滷肉飯","海山滷肉飯","阿明炒鱔魚","四方阿九（萬華店）","圓和素食","下港滷肉飯（樂華總店）","上海鄉村（仁愛店）","純發-東湖店","樂天羊肉","大胖肉羹-莒光店","民治小火鍋","詠豐堂 EIHODO","龍華科技大學-龍華食堂","三重湯米粉","麗媽香香鍋（三重溪尾店）","原源牛肉麵","滷三塊五花肉飯","祝你行運","阿益魯肉飯","黃記酸菜魯肉飯"];
    const buttonContainer = document.getElementById("customer-name-list");

    names.forEach((name, index) => {
        const div = document.createElement("div");
        div.className = "btn btn-sm border rounded-pill text-primary px-3 mb-3";
        div.textContent = name;
        buttonContainer.appendChild(div);

        // 插入不間斷空格，除非是最後一個元素
        if (index < names.length - 1) {
            const emsp = document.createTextNode('\u00A0');
            buttonContainer.appendChild(emsp);
        }
    });
});
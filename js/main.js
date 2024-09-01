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
    // 添加CSS样式到页面
    const style = document.createElement('style');
    style.textContent = `
        #customer-name-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center; /* 使按钮容器的子元素居中 */
        }
        #customer-name-list .btn {
            margin: 5px; /* 添加外边距，使按钮之间有间隔 */
        }
    `;
    document.head.appendChild(style);

    const names = ["良食局自助餐","老罈香川味兒","天鍋宴集團","山櫻精緻涮涮鍋","川揚郁坊小館",
        "珠記大橋頭油飯","紅林鐵板燒","樂活養身鍋 連城總店","龜山島現撈海鮮","真好味茶餐廳","小南門福州傻瓜乾麵 延平總店",
        "香港陳記燒臘便當粥麵","北北車滷肉飯","娥嬤炖鰻 （原昌吉紅燒鰻）","夯・魯肉飯","美麗餐廳",
        "海霸王 長安店","矮仔財滷肉飯","吉美海鮮","靜壽司-公館美食","阿輝牛肉城","中華餡餅粥","麗媽四季鍋-幸福店","天町燒肉屋芝山店",
        "貓下去敦北俱樂部","雅博股份有限公司","南海漁村 蘆洲店","好所在","玉須龍炭火燒肉","小飯館兒","純發魯肉飯","四方阿九滷肉飯-土城",
        "日新軟體股份有限公司","佳典滷肉飯","海山魯肉飯","台南阿明炒鱔魚店","四方阿九滷肉飯-萬華","圓和素鍋 養身素食小火鍋","下港排骨酥湯",
        "純發魯肉飯-東湖","樂天羊肉","大胖肉焿 莒光店","民治小火鍋","詠豐堂 EIHODO","龍華科技大學-龍華食堂",
        "湯米粉 TOM FANS","麗媽香香鍋（三重溪尾店）","原源牛肉麵-新店","滷三塊五花肉飯","祝您行運","阿益魯肉飯","黃家酸菜滷肉飯","金山客家小館 創始店",
        "秦味館 Qin Wei Guan", "四季古早味麻油雞", "太發生猛海鮮"];
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
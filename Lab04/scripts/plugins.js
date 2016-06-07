$(document).ready(function () {
    $('.carousel').carousel({
        interval: 6000
    });

//Show Color OPtion Div When Click On The Gear
$('.gear-check').click(function () {
    $('.color-option').fadeToggle();
});

    //Change Theme Color On Click
var colorLi = $('.color-option ul li');
colorLi
.eq(0).css('backgroundColor', '#E41B17').end()
.eq(1).css('backgroundColor', '#E426D5').end()
.eq(2).css('backgroundColor', '#009AFF').end()
.eq(3).css('backgroundColor', '#4cff00');

colorLi.click(function ()
{
    $("link[href*='Theme']").attr("href", $(this).attr("data-value"));
    //console.log($(this).attr('data-value'))
    //console.log($("link[href*='theme']"))
});
});

//Loading Screen //////////dont working here problem
//$(window).load(function()
//{
//    $(".loading-overlay.loading-overlay.spinner").fadeOut(2000);
//});
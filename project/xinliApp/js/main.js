/**
 * Created by qinglan on 2014/10/14.
 */
$(function(){

    $('.quicklink.fleft span').each(function(){
        $(this).hover(function(){
            $(this).addClass('animated bounceIn');
        },function(){
            $(this).removeClass('animated bounceIn');
        });
    });
    $('#phone1').hover(function(){
        $(this).addClass('animated pulse');
    },function(){
        $(this).removeClass('animated pulse');
    });
    $('#phone2').hover(function(){
        $(this).addClass('animated pulse');
    },function(){
        $(this).removeClass('animated pulse');
    })

});
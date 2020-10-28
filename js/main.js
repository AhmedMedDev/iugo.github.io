/*global $, jquery, alert, console, window*/
$(document).ready(function () {
    
    'use strict';
    
     //FOR NAVBAR RESPONSIVE
    if($(window).width() <= 990 ){
        
    $('.nav .icon-nav, .nav ul li a ').click(function () {
            $('.nav-links').animate({
                "height" : "toggle"
    
            });
        });
    }
    ///////////////////////////////////
    //FOR NAVBAR ICON ANIMATION
    var counter = 1;
    $('.nav .icon-nav , .nav ul li a').click(function(){
        counter++;
        if( counter %2 == 0 ){
            $('.nav .icon-nav .inSecond').css({
                "transform" : "rotateY(90deg)"
            });
            $('.nav .icon-nav .inFerst').css({
                "marginBottom" : "-9px",
                "transform" : "rotate(-45deg)"
            });
            $('.nav .icon-nav .inThird').css({
                "marginTop" : "-9px",
                "transform" : "rotate(45deg)"   
            });
            
        }else{
            $('.nav .icon-nav .inSecond').css({
                "transform" : "rotateY(0deg)"
            });
            $('.nav .icon-nav .inFerst').css({
                "margin" : "6px 0",
                "transform" : "rotate(0deg)"
            });
            $('.nav .icon-nav .inThird').css({
                "margin" : "6px 0",
                "transform" : "rotate(0deg)"   
            });
        }
    })
    /////////////////////////////////////////////
    //FOR ANIMATION NAVNAR
    
    $(window).on("scroll",function(){
        if( $(window).scrollTop() == 0  && $(window).width() < 990) {
            
            $('.nav').css({
                "height":"70px",
            })
            $('.nav .nav-links').css({
                "top":"70px",
            })
        }else{
            $('.nav').css({
                "height":"60px",
            });
            $('.nav .nav-links').css({
                "top":"60px",
            })
        }
    });
    $(window).on("scroll",function(){
        if( $(window).scrollTop() == 0  && $(window).width() > 990) {
            $('.nav').css({
                "paddingTop":"40px",
                "paddingBottom":"250px",
                "background": "transparent" ,
                "height":"70px",
            });
            $('.nav ul li a').css({
                "color":"#000",
            });
            $('.nav .logo img').attr("src", "img/logo2.png");
        }else{
            $('.nav').css({
                "paddingTop":"10px",
                "paddingBottom":"0px",
                "background": "#000" ,
                "height":"60px !important",
            });
            $('.nav ul li a').css({
                "color":"#fff",
            })
            $('.nav .logo img').attr("src", "img/Rectangle.png");
            
        }
    });
    if($(window).width() < 990){
        $('.nav ul li a').css({
            "color":"#fff",
        })
        $('.nav .logo img').attr("src", "img/Rectangle.png");
    }
    /////////////////////////////////////////
    
    ///////////////////////////////////////////////////
    //FOR SIGN UP FEATURE
    $('.signUp .content h4').click(function(){
        $(this).addClass('activeSignUpfeat').siblings().removeClass('activeSignUpfeat');
    })
    
//    $('.signUp .content h4:nth-child(1)').click(function(){
//        $('.signUp .content .signUpForm1').toggle(500).siblings('.signUpForm').hide()
//    });
//    $('.signUp .content h4:nth-child(2)').click(function(){
//        $('.signUp .content .signUpForm2').toggle(500).siblings('.signUpForm').hide()
//    });
//    $('.signUp .content h4:nth-child(3)').click(function(){
//        $('.signUp .content .signUpForm3').toggle(500).siblings('.signUpForm').hide()
//    });
    
//    $('.signUp .content h4:nth-child(1)').dblclick(function(){
//        $('.signUp .content .signUpForm1').toggle(500).siblings('.signUpForm').hide()
//    });
//    $('.signUp .content h4:nth-child(2)').dblclick(function(){
//        $('.signUp .content .signUpForm2').toggle(500).siblings('.signUpForm').hide()
//    });
//    $('.signUp .content h4:nth-child(3)').dblclick(function(){
//        $('.signUp .content .signUpForm3').toggle(500).siblings('.signUpForm').hide()
//    });
    ///////////////////////////////////////////////////
    $('.content .inputs input').focus(function(){
        $(this).parent().children('span.underline').css({
            "transform": "scale(1)"
        })
    });
    $('.content .inputs input').blur(function(){
        $(this).parent().children('span.underline').css({
            "transform": "scale(0, 1)"
        })
    })
    ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    $('input').after('<span class="underline"></span>')
    ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    //FOR SIGN UP FEATURE
    if($(window).width() <= 470){
        $('.signUp .content .inputs .slidBox select option.placeholder ').text("Member of regulatory ?");
    }
    if($(window).width() <= 500){
        $('.plc ').text(".........");
    }
    
    
    ///////////////////////////////////////////////////
    //FOR HOME PAGE FEATURE//////////////////////////
    
    //FEATURE HEADER
    $('.feature .box').click(function(){
        $(this).addClass('activefeatHeader').parent().siblings().children().removeClass('activefeatHeader');
    })
    
    $('.feature .content .featHead .col-md-4:nth-child(1) .box').click(function(){
        $('.feature .content .feat1Con').
        slideToggle(500).siblings('.featCon').hide()
    });
    $('.feature .content .featHead .col-md-4:nth-child(2) .box').click(function(){
        $('.feature .content .feat2Con').
        slideToggle(500).siblings('.featCon').hide()
    });
    $('.feature .content .featHead .col-md-4:nth-child(3) .box').click(function(){
        $('.feature .content .feat3Con').
        slideToggle(500).siblings('.featCon').hide()
    });
    //FEATURE CONTENT
    $('.feature .content .featCon .box').click(function(){
        $(this).addClass('activefeatCon').parent().siblings().children().removeClass('activefeatCon');
    })
    
    $('.feature .content .featCon .col-md-4:nth-child(1) .box').click(function(){
        $('.feature .content .featCon .featCon1').
        slideToggle(500).siblings('.featConhid').hide()
    });
    $('.feature .content .featCon .col-md-4:nth-child(2) .box').click(function(){
        $('.feature .content .featCon .featCon2').
        slideToggle(500).siblings('.featConhid').hide()
    });
    $('.feature .content .featCon .col-md-4:nth-child(3) .box').click(function(){
        $('.feature .content .featCon .featCon3').
        slideToggle(500).siblings('.featConhid').hide()
    });
    
    ///////////////////////////////////////////////////
    //FOR INPUTS FIX
    $('input#email,input#password,input#name').addClass('col-md-10')
    
    ///////////////////////////////////////
    //Lender DASHBOARD
    $('.dashboard .navDash .menu ').click(function () {
        $('.dashCon .dashAside').animate({
            "height" : "toggle"

        });
    });
    ///////////////////////////////////////
    //Lender DASHBOARD person prfile
    $(' .boxPer i.fa-caret-down  ').click(function(){
        $('.slideBox').animate({
            "height" : "toggle"

        });
    });
    $(' .dashCon .content .change   ').click(function(e){
        e.preventDefault();
        $('.dashCon .passChan').slideDown(500)
    });
    ///////////////////////////////////////
    //Lender DASHBOARD NEXT
    $('.dashCon .content .ansBox').click(function(){
        $(this).addClass('active').parent().siblings().children().removeClass('active');
    })
    ///////////////////////////////////////
    //Lender DASHBOARD MAP
    $('.dashCon .content .search .box i').click(function(){
        $(this).parent().hide(500);
    })
    
    
    
    ///////////////////////////////////////
    //SIGN IN PAGE SELECT BOX
    $('.signUp .content .signUpFooter button').click(function(){

        if($('.signUp .content .inputs .slidBox select').val() == "Lenders"){

            $('.signUp .content .signUpFooter a').attr("href", "LenderDashboard.html")
        }

    })
    
    
    
    
    
    
    
    
    
});
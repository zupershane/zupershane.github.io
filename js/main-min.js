// Sticky Header
var mainMenuTop=$("#container").offset().top,stickyReveal=mainMenuTop+20,brandyReveal=mainMenuTop+200,skillsReveal=mainMenuTop+340;$(window).scroll(function(){var e=$(window).scrollTop();e>stickyReveal?$("#sticky-header").is(":visible")===!1&&$("#sticky-header").fadeIn("fast"):$("#sticky-header").is(":visible")&&$("#sticky-header").fadeOut("fast");e>brandyReveal?$(".branding-min").is(":visible")===!1&&$(".branding-min").fadeIn("fast"):$(".branding-min").is(":visible")&&$(".branding-min").fadeOut("fast");e>skillsReveal?$(".skills-min").is(":visible")===!1&&$(".skills-min").fadeIn("fast"):$(".skills-min").is(":visible")&&$(".skills-min").fadeOut("fast")});$(".navicon").sidr();
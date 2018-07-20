// 浏览器判断
var browerObj = checkBrowser();
function checkBrowser() {
    var u = window.navigator.userAgent.toLocaleLowerCase(),
            msie = /(msie) ([\d.]+)/,
            chrome = /(chrome)\/([\d.]+)/,
            firefox = /(firefox)\/([\d.]+)/,
            safari = /(safari)\/([\d.]+)/,
            opera = /(opera)\/([\d.]+)/,
            ie11 = /(trident)\/([\d.]+)/,
            b = u.match(msie) || u.match(chrome) || u.match(firefox) || u.match(safari) || u.match(opera) || u.match(ie11);
    return {name: b[1], version: parseInt(b[2])};
}
//console.log(browerObj.name,browerObj.version)
if(browerObj.name == "msie" && browerObj.version == 10) {
    $('.shadow').css({'display':'none'});
}else if(browerObj.name == "msie" && browerObj.version < 10) {
    $('body').addClass('lt10');
}
var boolean1 = true,boolean2 = true,boolean3 = true,boolean4 = true,boolean5 = true;
$(document).ready(function() {
	$('#fullpage').fullpage({
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
        menu: '#nav',
        'afterLoad': function(anchorLink, index){
            //console.log(index)
            if(index == 2){
                if (hasVideo && boolean1){video2.play();video2.addEventListener('timeupdate', opFn, false);}
            }else if(index == 3){
                if (hasVideo && boolean2){video3.play();video3.addEventListener('timeupdate', opFn, false);}
            }else if(index == 4){
                if (boolean3){$('.section3').addClass('play');
                boolean3 = false;}                
            }else if(index == 5){
                if (hasVideo && boolean4){video4.play();video4.addEventListener('timeupdate', opFn, false);}
            }else if(index == 6){
                if (boolean5){$('.section5').addClass('play');
                boolean5 = false;}                
            }index
            PTTSendClick('nav','moveTo'+index,'进入第'+index+'屏');
        },
        onLeave: function(index, nextIndex, direction) {
            //console.log(nextIndex);
            if(nextIndex>1){
                $('#ost_box').css({"display":"none"});
                $('body').css({"paddingTop":"0"});
                $('.nav').show();
                video1.pause();
            }else{
                $('#ost_box').css({"display":"block"});
                $('body').css({"paddingTop":"42px"});  
                $('.nav').hide();    
                video1.play();            
            }
            if(nextIndex==7){
                $('.scroll_tips').hide();
            }else{
                $('.scroll_tips').show();                
            }
        }
    });
    $('#scene1').parallax();
    $('#scene2').parallax();
    if(browerObj.name == "msie" || browerObj.name == "trident") { 
        $('body').addClass('ie');
        resizeWeb();
        $(window).bind("resize", function () {
            resizeWeb();
        });
    }
});
function opFn() {
    if ($(this).get(0).currentTime) {
        if($(this).get(0).currentTime>$(this).get(0).duration/4){
            $(this).parent().parent().addClass('show');
            $(this).get(0).removeEventListener("timeupdate", opFn, false);
        }
    }
    //console.log($(this).get(0).currentTime)
}
/* 视频加载 */
var video1 = document.getElementById('video1'),
    video2 = document.getElementById('video2'),
    video3 = document.getElementById('video3'),
    video4 = document.getElementById('video4'),
    video5 = document.getElementById('video5'),
    video6 = document.getElementById('video6');
function videoLoad() {
    var mediaArr = [mediaURLData[2308], mediaURLData[2307], mediaURLData[2298], mediaURLData[2299], mediaURLData[2336], mediaURLData[2337]]
    for (var index = 0; index < 6; index++) {
        $('#video'+(index+1)).attr("src",mediaArr[index]);
    }
}
var hasVideo = !! (document.createElement('video').canPlayType);
if (hasVideo) {
    $.getScript("//ossweb-img.qq.com/images/spiderMediaData/pubg_new/mediaURLData.js",function(){
        videoLoad();
    })
}
/* 第二屏 */
$('.section1 .tips_click').click(function(){
    $('.section1').addClass('play');
    $(this).fadeOut();
    $('#video2').fadeOut('normal', function (){$('#video2').attr('src',' ');});
    setTimeout(function(){
        $('.section1').addClass('stop');               
    }, 1000);
    if(browerObj.name == "msie" && browerObj.version == 10) {
        setTimeout(function(){
            $('.section1').addClass('ieS1');
        }, 2500);
    }else if(browerObj.name == "trident"){      
        setTimeout(function(){
            $('.section1').addClass('ieS1');               
        }, 2500);
    }
    if(!(browerObj.name == "msie" && browerObj.version < 10)){
        setTimeout(function(){
            $('.section1 .equip1').addClass('on');               
        }, 3000);
    }
    PTTSendClick('btn','section1','第二屏进入');    
    boolean1 = false;
});
if(!(browerObj.name == "msie" && browerObj.version < 10)){$('.equip_list .layer').hover(function(){$('.equip1').removeClass('on');});}
/* 第三屏 */
$('.section2 .tips_click').click(function(){
    $('.section2').addClass('play');
    $(this).fadeOut();
    $('#video3').fadeOut('normal', function (){$('#video3').attr('src',' ');});
    setTimeout(function(){
        $('.section2').addClass('stop');               
    }, 1000);
    if(browerObj.name == "msie" && browerObj.version == 10) {
        setTimeout(function(){
            $('.section2').addClass('ieS2');
        }, 1500);
    }else if(browerObj.name == "trident"){      
        setTimeout(function(){
            $('.section2').addClass('ieS2');               
        }, 1500);
    }
    var tabs03 = new tabs("tab3", "tab-panel", {
        timeout: 80, // 延迟切换时间。默认参数为 60;
        currCls: "on", // 设置当前标签（li）class 名。默认参数为 "on";
        disCls: "dis", // 控制显示 class 名。默认参数为 "dis";
        animation: "fade",
        event: "click", // 事件类型。默认为 "mouseover";
        auto: true, // 是否自动切换。默认为 false
        Pause: 1500 // 每次自动停顿时间 (auto为true时有效)
    });
    setTimeout(function(){
        var tabs04 = new tabs("tab4", "tab-panel", {
            timeout: 80, // 延迟切换时间。默认参数为 60;
            currCls: "on", // 设置当前标签（li）class 名。默认参数为 "on";
            disCls: "dis", // 控制显示 class 名。默认参数为 "dis";
            animation: "fade",
            event: "click", // 事件类型。默认为 "mouseover";
            auto: true, // 是否自动切换。默认为 false
            Pause: 1500 // 每次自动停顿时间 (auto为true时有效)
        });
    }, 1000);
    PTTSendClick('btn','section2','第三屏进入');    
    boolean2 = false;
});
$('.weather_list li').hover(function(){
    $(this).css({'width':'56%'}).siblings().css('width', '22%');
    $(this).find('img').css({'opacity':'1'});
    $(this).find('.title_sub').stop(true).fadeOut();
    if($(this).index()==0){
        $(this).find('img').css({'left':'0'});
    }else if($(this).index()==2){
        $(this).find('img').css({'right':'0'});
    }
},function(){
    $('.weather_list li').css({'width':'33%'});
    $(this).find('img').css({'opacity':'.6'});
    $('.weather_list li:nth-child(2)').css('width', '34%');  
    $(this).find('.title_sub').stop(true).fadeIn();  
    if($(this).index()==0){
        $(this).find('img').css({'left':'-1.5rem'});
    }else if($(this).index()==2){
        $(this).find('img').css({'right':'-1.5rem'});
    }      
});
$('.terrain_list li').hover(function(){
    $(this).css({'width':'40%'}).siblings().css('width', '15%');
    $(this).find('img').css({'opacity':'1'});
    $(this).find('.title_sub').stop(true).fadeOut();
    if($(this).index()==0 || $(this).index()==1){
        $(this).find('img').css({'left':'0'});
    }else if($(this).index()==3 || $(this).index()==4){
        $(this).find('img').css({'right':'0'});
    }
},function(){
    $('.terrain_list li').css({'width':'20%'}); 
    $(this).find('img').css({'opacity':'.6'});  
    $(this).find('.title_sub').stop(true).fadeIn();    
    if($(this).index()==0 || $(this).index()==1){
        $(this).find('img').css({'left':'-1rem'});
    }else if($(this).index()==3 || $(this).index()==4){
        $(this).find('img').css({'right':'-1rem'});
    }
});
/* 第四屏 */
var tabs01 = new tabs("tab1", "tab-panel", {
    timeout: 80, // 延迟切换时间。默认参数为 60;
    currCls: "on", // 设置当前标签（li）class 名。默认参数为 "on";
    disCls: "dis", // 控制显示 class 名。默认参数为 "dis";
    animation: "fade",
    event: "click" // 事件类型。默认为 "mouseover";
});
/* 第五屏 */
var tabs02 = new tabs("tab2", "tab-panel", {
    timeout: 80, // 延迟切换时间。默认参数为 60;
    currCls: "on", // 设置当前标签（li）class 名。默认参数为 "on";
    disCls: "dis", // 控制显示 class 名。默认参数为 "dis";
    animation: "fade",
    event: "click" // 事件类型。默认为 "mouseover";
});
$('.section4 .tips_click').click(function(){
    $('.section4').addClass('play');
    $(this).fadeOut();
    $('#video4').fadeOut('normal', function (){$('#video4').attr('src',' ');});
    setTimeout(function(){
        $('.section4').addClass('stop');               
    }, 1000);
    PTTSendClick('btn','section4','第四屏进入');
    boolean4 = false;
});
/* 第六屏 */
$('.section5 .tips_click').hover(function(){
    $(this).parents().addClass('on');
    $(this).siblings().find('.video_s')[0].play();
    PTTSendClick('btn','section5','视频介绍');    
},function(){
    $(this).parents().removeClass('on'); 
    $(this).siblings().find('.video_s')[0].pause();    
});
/* 导航点击 */
$('.nav_up a').click(function() {
    $.fn.fullpage.moveSectionUp();
});
$('.nav_down a').click(function() {
    $.fn.fullpage.moveSectionDown();
});
/* IE视频自适应高度 */
function resizeWeb() {
    var cH = $(window).height();
    $('.video').css({'height':cH});  
}
/* 弹窗视频 */
var showDialog;
var showLayer = function(pid) {
    if (showDialog) {
        showDialog.show({
            id: pid + "_box",
            bgcolor: "#000",
            opacity: 80
        })
    } else {
        $.getScript("//game.gtimg.cn/images/js/comm/showDialog.min.js", function() {
            showDialog.show({
                id: pid + "_box",
                bgcolor: "#000",
                opacity: 80
            })
            showPopFlg = 1;
            //console.log(showDialog)

        })
    }
}
function video_play(vid) {
    if (typeof(showDialog) == 'function') {
        videoInit(vid)
    } else {
        $.getScript("https://vm.gtimg.cn/tencentvideo/txp/js/txplayer.js", function() {
            videoInit(vid)
        })
    }

    function videoInit(vid) {
        var player = new Txplayer({
            containerId: 'player',
            vid: vid,
            width: '900',
            height: '600',
            autoplay: true
        });
    }
}
function vplay(pid, vid, auto) {
    video_play(vid, auto, pid);
    showLayer(pid);
}
function vplay_close() {
    showDialog.hide();
    document.getElementById("player").innerHTML = "";
}
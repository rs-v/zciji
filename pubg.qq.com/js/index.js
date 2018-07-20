// ������ж�
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
            PTTSendClick('nav','moveTo'+index,'�����'+index+'��');
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
/* ��Ƶ���� */
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
/* �ڶ��� */
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
    PTTSendClick('btn','section1','�ڶ�������');    
    boolean1 = false;
});
if(!(browerObj.name == "msie" && browerObj.version < 10)){$('.equip_list .layer').hover(function(){$('.equip1').removeClass('on');});}
/* ������ */
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
        timeout: 80, // �ӳ��л�ʱ�䡣Ĭ�ϲ���Ϊ 60;
        currCls: "on", // ���õ�ǰ��ǩ��li��class ����Ĭ�ϲ���Ϊ "on";
        disCls: "dis", // ������ʾ class ����Ĭ�ϲ���Ϊ "dis";
        animation: "fade",
        event: "click", // �¼����͡�Ĭ��Ϊ "mouseover";
        auto: true, // �Ƿ��Զ��л���Ĭ��Ϊ false
        Pause: 1500 // ÿ���Զ�ͣ��ʱ�� (autoΪtrueʱ��Ч)
    });
    setTimeout(function(){
        var tabs04 = new tabs("tab4", "tab-panel", {
            timeout: 80, // �ӳ��л�ʱ�䡣Ĭ�ϲ���Ϊ 60;
            currCls: "on", // ���õ�ǰ��ǩ��li��class ����Ĭ�ϲ���Ϊ "on";
            disCls: "dis", // ������ʾ class ����Ĭ�ϲ���Ϊ "dis";
            animation: "fade",
            event: "click", // �¼����͡�Ĭ��Ϊ "mouseover";
            auto: true, // �Ƿ��Զ��л���Ĭ��Ϊ false
            Pause: 1500 // ÿ���Զ�ͣ��ʱ�� (autoΪtrueʱ��Ч)
        });
    }, 1000);
    PTTSendClick('btn','section2','����������');    
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
/* ������ */
var tabs01 = new tabs("tab1", "tab-panel", {
    timeout: 80, // �ӳ��л�ʱ�䡣Ĭ�ϲ���Ϊ 60;
    currCls: "on", // ���õ�ǰ��ǩ��li��class ����Ĭ�ϲ���Ϊ "on";
    disCls: "dis", // ������ʾ class ����Ĭ�ϲ���Ϊ "dis";
    animation: "fade",
    event: "click" // �¼����͡�Ĭ��Ϊ "mouseover";
});
/* ������ */
var tabs02 = new tabs("tab2", "tab-panel", {
    timeout: 80, // �ӳ��л�ʱ�䡣Ĭ�ϲ���Ϊ 60;
    currCls: "on", // ���õ�ǰ��ǩ��li��class ����Ĭ�ϲ���Ϊ "on";
    disCls: "dis", // ������ʾ class ����Ĭ�ϲ���Ϊ "dis";
    animation: "fade",
    event: "click" // �¼����͡�Ĭ��Ϊ "mouseover";
});
$('.section4 .tips_click').click(function(){
    $('.section4').addClass('play');
    $(this).fadeOut();
    $('#video4').fadeOut('normal', function (){$('#video4').attr('src',' ');});
    setTimeout(function(){
        $('.section4').addClass('stop');               
    }, 1000);
    PTTSendClick('btn','section4','����������');
    boolean4 = false;
});
/* ������ */
$('.section5 .tips_click').hover(function(){
    $(this).parents().addClass('on');
    $(this).siblings().find('.video_s')[0].play();
    PTTSendClick('btn','section5','��Ƶ����');    
},function(){
    $(this).parents().removeClass('on'); 
    $(this).siblings().find('.video_s')[0].pause();    
});
/* ������� */
$('.nav_up a').click(function() {
    $.fn.fullpage.moveSectionUp();
});
$('.nav_down a').click(function() {
    $.fn.fullpage.moveSectionDown();
});
/* IE��Ƶ����Ӧ�߶� */
function resizeWeb() {
    var cH = $(window).height();
    $('.video').css({'height':cH});  
}
/* ������Ƶ */
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
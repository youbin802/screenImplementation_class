// 주메뉴 슬라이드 
$(".menu>ul>li").hover(
    function(){
        $(this).children("ul").stop().slideDown("slow");
    },function(){
        $(this).children("ul").stop().slideUp("fast");
    }
);

// 공지사항POPUP__________START
$("#exit").click(function (e) { 
    //e.preventDefault();
    $(".noticePop").hide();
});
$("#contents a").click(function (e) { 
    // alert("a__" + e.target.text);
    $("#tit").text(e.target.text);
    $(".noticePop").show();    
});
// 공지사항POPUP__________END 

// 파트너 작품사진POPUP__________START
function popupImg(){
    $(".partnerPop").show();
    $(".partnerPop img").attr("src", this.src);
}
function imgExit(){
    $(".partnerPop").hide();
}
$(".partner img").on("click", popupImg);
$(".partnerPop button").on("click", imgExit);
// 파트너 작품사진POPUP__________END

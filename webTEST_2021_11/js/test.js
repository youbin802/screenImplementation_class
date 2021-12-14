$(".menu>ul>li").hover(
    function(){
        $(this).children("ul").stop().slideDown("slow");
    },function() {
        $(this).children("ul").stop().slideUp("fast");
    }
);

$("#exit").click(function(e) {
    $("#tit").text(e.target.text);
    $(".noticePop").show();
});

function popupImg() {
    $(".partenerPop").show();
    $(".partenerPop img").attr("src", this.src);
}

function imgExit(){
    $(".partnerPop").hide();
}

$(".partner img").on("click", popupImg);
$(".partnerPop button").on("click", imgExit);


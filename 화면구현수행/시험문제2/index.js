let sunit = document.querySelector("#s-unit"); //인치
let tunit = document.querySelector("#t-unit"); //센티미터
let source = document.querySelector('#s-value'); //인치 인풋
let target = document.querySelector('#t-value'); //센티미터 인풋
let cmin = true;

// 인치와 센티미터 위치 바꾸기
function exUnit() {
    source.value = "";
    target.value = "";
    
    // 여긴 혹시모르니까 통째로 외워야할 듯
    if (cmin) {
        cmin = false; //센티미터 -> 인치 변환 
        sunit.innerHTML="cm";
        tunit.innerHTML="inch";
    } else {
        cmin = true; //인치 -> 센티미터 변환
        sunit.innerHTML="inch";
        tunit.innerHTML="cm";
    }
}

//cmin == True -> 현재 입력하는 인풋이 인치다.
//cmin == False -> 현재 입력하는 인풋이 센티미터다.

function convertier() {
    // 여기서 계산식이 나누기인지 곱하기인지 제대로 외우기
    if (cmin) {
        // 소수점 n자리수까지 변환
        target.value = (source.value * 2.54).toFixed(2); //인치
    } else {
        target.value = (source.value / 2.54).toFixed(2); //센티미터
    }
}
// toFixed 시험(나올 거 같음)
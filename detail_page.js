function change(style) {
    
    if( style == "early_1" )
        {
        view1.style.display = "inline"
        result.style.display = "inlene"
        }
    if( style == "early_2" )
       {
        result.style.display = "inlene"
        view2.style.display = "inline"
        }
     if( style == "normal_1" )
       {
        result.style.display = "inlene"
        view3.style.display = "inline"
        }

    if( style == "normal_2" )
        {
        result.style.display = "inlene"
        view4.style.display = "inline"
        }
}


        
function form_btn1(n){

    var text = document.getElementById("text1"); // 폼 선택
            
    text_val = parseInt(text.value); // 폼 값을 숫자열로 변환
            
    text_val += n; // 계산
            
    text.value = text_val; // 계산된 값을 바꾼다
            
    if(text_val <= 0){
        text.value = 1;   // 만약 값이 0 이하면 1로 되돌려준다, 1보다 작은 수는 나타나지 않게하기 위해   
    }
            
}
function form_btn2(n){

    var text = document.getElementById("text2"); // 폼 선택
            
    text_val = parseInt(text.value); // 폼 값을 숫자열로 변환
            
    text_val += n; // 계산
            
    text.value = text_val; // 계산된 값을 바꾼다
            
    if(text_val <= 0){
        text.value = 1;   // 만약 값이 0 이하면 1로 되돌려준다, 1보다 작은 수는 나타나지 않게하기 위해   
    }
            
}
function form_btn3(n){

    var text = document.getElementById("text3"); // 폼 선택
            
    text_val = parseInt(text.value); // 폼 값을 숫자열로 변환
            
    text_val += n; // 계산
            
    text.value = text_val; // 계산된 값을 바꾼다
            
    if(text_val <= 0){
        text.value = 1;   // 만약 값이 0 이하면 1로 되돌려준다, 1보다 작은 수는 나타나지 않게하기 위해   
    }
            
}
function form_btn4(n){

    var text = document.getElementById("text4"); // 폼 선택
            
    text_val = parseInt(text.value); // 폼 값을 숫자열로 변환
            
    text_val += n; // 계산
            
    text.value = text_val; // 계산된 값을 바꾼다
            
    if(text_val <= 0){
        text.value = 1;   // 만약 값이 0 이하면 1로 되돌려준다, 1보다 작은 수는 나타나지 않게하기 위해   
    }
            
}



function rowDel1(obj) { 
    view1.style.display = "none"     
}
function rowDel2(obj) { 
    view2.style.display = "none"     
}
function rowDel3(obj) { 
    view3.style.display = "none"     
}
function rowDel4(obj) { 
    view4.style.display = "none"     
}



    var product_price = {
        "one":15000,
        "two":30000,
        "three":17000,
        "four":34000
    };
    var total = 0;
    var p1 = document.getElementById("text1").value;
    var p2 = document.getElementById("text2").value;
    var p3 = document.getElementById("text3").value;
    var p4 = document.getElementById("text4").value;
    console.log(text4)

    if(p1 != null){
        total += product_price.one*p1;
    }
    if(p2 != null){
        total += product_price.two*p2;
    }
    if(p3 != null){
        total += product_price.three*p3;
    }
    if(p4 != null){
        total += product_price.four*p4;
    }
    document.querySelector("#total_result").innerHTML = total;


// footer, header html 
function includeHTML(){
    let z, elmnt, file, xhttp;
    z=document.getElementsByTagName('*');

    for(let i=0;i<z.length;i++){
        elmnt=z[i];
        file=elmnt.getAttribute("data-include");
        if(file){
            xhttp=new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
                if(this.readyState==4){
                    // 리소스 받기 성공했을 때
                    if(this.status==200){elmnt.innerHTML=this.responseText;}
                    // 실패했을 때
                    if(this.status==404){elmnt.innerHTML="page not found";}
                    elmnt.removeAttribute("data-include");
                    includeHTML();
                }
            }
            xhttp.open("GET",file,true);
            xhttp.send();
            return;
        }
    }
}

window.addEventListener("DOMContentLoaded",includeHTML());

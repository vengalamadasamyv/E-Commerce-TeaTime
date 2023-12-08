// over all nav bar
var fun=document.getElementById("navbar");
var i=true;
function nav(){
    if(i === true){
        fun.style.left="0";
    }else{
        fun.style.left="-800px";
    }
    i=!i;
}

// service - sidebar
var fun1=document.getElementById("location_sidebar");
var i1=true;
function loc(){
    if(i1 === true){
        fun1.style.top="155px";
        fun1.style.left="2px";
    }else{
        fun1.style.left="-492px";
    }
    i1=!i1;
}

// service current location
function curloc(){
    if(navigator.geolocation){
    window.navigator.geolocation.getCurrentPosition(showPosition);
    }
}


function showPosition(position){
    // console.log(position.coords.longitude);
    var d =position.coords.longitude;
    // console.log(position.coords.latitude);
    var s =position.coords.latitude;
}
var f = document.getElementById("location_alert");

setTimeout(()=>{
    // f.style.position="absolute";
    f.style.top="150px"; 
    // f.style.transform="scale(1)"
},200);
setTimeout(()=>{
    f.style.top="-990px"; 
    // f.style.transform="rotate(166deg)";
},5700);

// service content arrow dropdown
// recommend
var drop1=document.getElementById("content1");
var drop2=document.getElementById("content_arrow1");
var drop0=document.getElementById("content_body1");
var i2=true;
function krop1(){
    if(i2 === true){
        drop1.style.height="43px";
        drop0.style.display="none";
    }else{
        drop1.style.height="78rem";
        drop0.style.display="unset";
        // drop2.innerHTML= <i class="fa-solid fa-chevron-down"></i>;
    }
    i2=!i2;
}
// tea flask
var drop3=document.getElementById("content2");
var drop4=document.getElementById("content_arrow2");
var drop5=document.getElementById("content_body2");
var i3=true;
function krop2(){
    if(i3 === true){
        drop5.style.display="none";
        drop3.style.height="43px";
    }else{
        drop3.style.height="53rem";
        drop5.style.display="unset";
        // drop2.innerHTML= <i class="fa-solid fa-chevron-down"></i>;
    }
    i3=!i3;
}
// black tea flask
var drop6=document.getElementById("content3");
var drop7=document.getElementById("content_arrow3");
var drop8=document.getElementById("content_body3");
var i4=true;
function krop3(){
    if(i4 === true){
        drop8.style.display="none";
        drop6.style.height="43px";
    }else{
        drop6.style.height="53rem";
        drop8.style.display="unset";
        // drop2.innerHTML= <i class="fa-solid fa-chevron-down"></i>;
    }
    i4=!i4;
}
// hot milk
var drop9=document.getElementById("content4");
var drop10=document.getElementById("content_arrow4");
var drop11=document.getElementById("content_body4");
var i5=true;
function krop4(){
    if(i5 === true){
        drop11.style.display="none";
        drop9.style.height="43px";
    }else{
        drop9.style.height="28rem";
        drop11.style.display="unset";
        // drop2.innerHTML= <i class="fa-solid fa-chevron-down"></i>;
    }
    i5=!i5;
}
// cookies
var drop12=document.getElementById("content5");
var drop13=document.getElementById("content_arrow5");
var drop14=document.getElementById("content_body5");
var i6=true;
function krop5(){
    if(i6 === true){
        drop14.style.display="none";
        drop12.style.height="43px";
    }else{
        drop12.style.height="29rem";
        drop14.style.display="unset";
        // drop2.innerHTML= <i class="fa-solid fa-chevron-down"></i>;
    }
    i6=!i6;
}
// cake cambo
var drop15=document.getElementById("content6");
var drop16=document.getElementById("content_arrow6");
var drop17=document.getElementById("content_body6");
var i7=true;
function krop6(){
    if(i7 === true){
        drop17.style.display="none";
        drop15.style.height="43px";
    }else{
        drop15.style.height="55rem";
        drop17.style.display="unset";
        // drop2.innerHTML= <i class="fa-solid fa-chevron-down"></i>;
    }
    i7=!i7;
}
// cambo puffs
var drop18=document.getElementById("content7");
var drop19=document.getElementById("content_arrow7");
var drop20=document.getElementById("content_body7");
var i8=true;
function krop7(){
    if(i8 === true){
        drop20.style.display="none";
        drop18.style.height="43px";
    }else{
        drop18.style.height="82rem";
        drop20.style.display="unset";
        // drop2.innerHTML= <i class="fa-solid fa-chevron-down"></i>;
    }
    i8=!i8;
}

// side design
var n=document.getElementById("side");
var n1=document.getElementById("phn");
var n2=document.getElementById("wht");
var n3=true;
function side_design(){
    if(n3 === true){
        n1.style.marginLeft="-100px";
        n2.style.marginLeft="-100px";
        n1.style.backgroundColor="transparent";
        n2.style.backgroundColor="transparent";
        n.style.backgroundColor="transparent";
    }else{
        n1.style.marginLeft="0px";
        n2.style.marginLeft="0px";
        n1.style.backgroundColor="var(--green)";
        n2.style.backgroundColor="var(--green)";
        n.style.backgroundColor="lightgreen";
    }
    n3=!n3;
}
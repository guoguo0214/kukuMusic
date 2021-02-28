function remSize(){
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if(deviceWidth>=750){
        deviceWidth = 750;
    }
    if(deviceWidth<=320){
        deviceWidth = 320
    }
    document.documentElement.style.fontSize = (deviceWidth / 7.5) +'px';    //此处就会产生 1rem = 100px       => 100vw / 7.5
    document.body.style.fontSize = "0.3rem";
}
remSize();
window.onresize = function () {
    remSize();
}
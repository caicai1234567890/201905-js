;(function(designWidth){
    function computedFont(){
        // let winW = document.documentElement.clientWidth || document.body.clientWidth;
        let winW = document.documentElement.clientWidth || document.body.clientWidth ;
        // document.documentElement.style.fontSize = winW / designWidth * 100 + 'px';
        document.documentElement.style.fontSize = winW / designWidth * 100 + 'px';
    }
    computedFont();
    addEventListener('resize',computedFont);
    addEventListener('orientationchange' , computedFont);
})(750);
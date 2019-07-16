// 点击切换城市的时候会出现切换城市的界面
let switCity = document.querySelector('.switCity');
let loadBox = document.querySelector('#loadedBox');
let countryList = document.getElementsByClassName('countryList')[0]; // loaded country List 
let close = document.getElementById('close'); // 叉号
let tbar_wholeCity = document.getElementsByClassName('tbar_wholeCity')[0]; // header 的全国站
let wholeCountry = document.querySelector('.wholeCountry');
let loadedContent = loadBox.querySelector('.loadedContent');
let imgData = null;
let queryJson = "data.json";
switCity.onclick = function () {
    loadBox.style.display = "block";
    // 选择城市缓慢出现
    // loadedContent.classList.add('linear');
    wholeCountry.innerText = tbar_wholeCity.innerText;
    queryData(bindHTML);
};
close.onclick = function () {
    loadBox.style.display = "none";
};
countryList.onclick = function (e) {
    // console.log(tbar_wholeCity);
    tbar_wholeCity.innerText = e.target.innerText;

    loadBox.style.display = 'none';
};
wholeCountry.onclick = function () {
    loadBox.style.display = "none";
};
function bindHTML({ address }) {
    let addressStr = ``;
    address.forEach((addr) => {
        if (wholeCountry.innerText === addr) {
            addr = "全国站";
            addressStr = `<li><a>${addr}</a></li>`;
        }
    });
    address.forEach((item) => {
        if (wholeCountry.innerText === item) return;
        addressStr += `<li><a>${item}</a></li>`;
    });
    countryList.innerHTML = addressStr;
}



// 搜索框搜索 
let searchInput = document.querySelector('.searchInput');
let searchList = document.getElementsByClassName('searchList')[0];
let recommPosition = document.querySelector('.recommPosition');
// console.log(searchList);
searchInput.oninput = trigerInput;
searchInput.onfocus = trigerFocus;
searchInput.onblur = trigerBlur;
function trigerInput() {
    // console.log(this.value);
    let { value } = this;
    searchList.style.display = 'block';
    recommPosition.style.display = 'none';
    if (!value) {
        searchList.style.display = 'none';
        recommPosition.style.display = 'block';
        return;
    }
    queryJson = "search.json";
    queryData(bindSearchHTML);

    // bind company and position info to HTML page 
    function bindSearchHTML({ COMPANY, POSITION }) {
        // console.log(COMPANY);
        // console.log(POSITION);
        let searchReg = new RegExp(value, 'ig');
        // console.log(value);
        let companyStr = `<li class = "ui-autocomplete-category category-company"  style = "border-top:1px dashed #ededed">公司</li>`;
        let positionStr = `<li class = "ui-autocomplete-category">职位</li> `;
        let searchListStr = null;
        COMPANY.forEach(({ cont, hot }) => {
            cont = cont.replace(searchReg, function (a) {
                return `<span style = "color:red">${a}</span>`;
            });
            companyStr += `
        <li class = "ui-menu-item category-company"> 
        <a class ="ui-corner-all">
        <span class = "fl">${cont}</span>
        <span class = "fr">共
        <i>${hot}个</i> 职位
        </span>
        </a>
        </li>
        `;
        });
        POSITION.forEach(({ cont, hot }) => {
            cont = cont.replace(searchReg, function (a) {
                return `<span style = "color:red">${a}</span>`;
            });
            positionStr += ` 
        <li class = "ui-menu-item">
        <a class ="ui-corner-all">
            <span class = "fl">${cont}</span>
            <span class = "fr">
                共
                <i>${hot}个</i>
                职位
            </span>
        </a>
    </li>
     `;
        });
        searchListStr = positionStr + companyStr;
        searchList.innerHTML = searchListStr;
    } // bindSearchData end-----
}

function trigerFocus() {
    searchInput.setAttribute('placeholder', '探索职位，公司和地点');
};
function trigerBlur() {
    searchInput.setAttribute('placeholder', '超级雇主节');
    searchList.style.display = 'none'
};

// body 内容 
// mainNavs 
let mainNavsLi = document.querySelectorAll('.mainNavs > ul li');
let menuSub = document.querySelectorAll('.menuSub');
// console.log(Array.from(mainNavsLi));
([].slice.call(mainNavsLi)).forEach((item, index) => {
    item.onmouseenter = function () {
        menuSub[index].style.display = 'block';
        item.classList.add('current');
        item.classList.add('atrHover');

    }
    item.onmouseleave = function () {
        menuSub[index].style.display = 'none';
        item.classList.remove('current');
        item.classList.remove('atrHover');
    }
});
// get record through ajax 
function queryData(successFn) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `./json/${queryJson}`, true);
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            imgData = JSON.parse(xhr.responseText);
            // console.log(imgData);
            successFn(imgData);
        }
    }
    xhr.send();
};


// banner 自动滚动使用jquery 和promise 实现渐隐渐现的效果
let $contain = $('.contain'),
    $wrapper = $contain.children('.wrapper'),
    $slideList = $('.slideList'),
    $slideLi = null;
$focus = $('.focusUl'),
    $focusList = null,
    stepIndex = 0,
    lastIndex = 0;
$icon_left = $('.icon-left'),
    $icon_right = $('.icon-right');
let queryRecord = function () {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: './json/banner.json',
            method: 'GET',
            async: true,
            error: reject,
            success: resolve

        });
    });
}();
/* let p =  new Promise(function(resolve,reject){
    $.ajax({
        url : './json/banner.json',
        method : 'GET',
        async : true,
        error : reject ,
        success:resolve

    });
}); */
queryRecord.then((data) => {
    console.log(data);
    bindRecord(data);
    // 实现功能  自动轮播
    init();
}, (error) => { });
function bindRecord(imgData) {
    let slideStr = ``, focusStr = ``;
    slideStr += `<i class = "icon-font i-v-left icon-left" style="z-index:0;" ></i>`;
    [...imgData].forEach(({ img, desc, link }, index) => {
        slideStr += `<li><a href="javascript:;"><img src="${img}" alt="${desc}"></a></li>`;

        focusStr += `<li class = "${index === 0 ? 'focusTurns' : ''} "><a href="javascript:;"></a></li>`;
        /*  focusStr += `<li class = "focusTurns"><a href="javascript:;"></a></li>`; */
    });
    slideStr += `<i class = "icon-font i-v-right icon-right"></i>`;
    $slideList.html(slideStr);
    $focus.html(focusStr);
    $slideLi = $('.slideList li');
    $focusList = $('.focusUl li');

}
function init() {
    let autoTimer;
    $contain.mouseenter(function () {
        $slideLi.stop();
        clearInterval(autoTimer);
    });
    $contain.mouseleave(function () {
        autoTimer = setInterval(autoMove, 3000);
    });
    $focusList.click(focusClick);
    autoTimer = setInterval(autoMove, 3000);
};
function autoMove() {
    // speed之后让opacity 缓慢增加直至变为1
    // 同时让index变成1，让其余原素的opacity，z-index 变为0
    stepIndex++;
    // console.log($slideLi);
    if (stepIndex >= $slideLi.length) {
        stepIndex = 0;
    }
    $slideLi.eq(stepIndex).css('zIndex', 1).stop().animate({
        opacity: 1,
    }, 500, () => {
        $slideLi.eq(lastIndex).css({
            zIndex: 0,
            opacity: 0
        });
        lastIndex = stepIndex;
    });

    autoFocus();
}
function autoFocus() {
    $focusList.eq(stepIndex).addClass('focusTurns').siblings().removeClass('focusTurns');
}
function focusClick() {
    stepIndex = $(this).index();
    stepIndex -= 1;
    autoMove();
}

// 最新职位细节
let firstP = document.querySelectorAll('.firstP');
let mousAct = document.querySelectorAll('.mouseActive');
let hotLi = document.querySelectorAll('.hot24Dl li');
let desc = document.querySelectorAll('.firstP > a');

let hot_posi = document.querySelector('.hot_posi');
let hot24Top = hot_posi.querySelector('.hot24Top'),
    hotPosTop = hot_posi.querySelector('.hotPosTop'),

    hot24Dl = document.querySelector('.newest > .hot24Dl'),
    hotPosi = document.querySelector('.newest > .hotPosi');
// console.log(hot24Dl);
// console.log(desc);
[].slice.call(desc).forEach((item, index) => {
    // let desc = document.querySelector('.firstP > a');
    // console.log(item);
    item.onmouseenter = mouseEnter;
    item.onmousemove = mouseMove;
    item.onmouseleave = mouseLeave;

    function mouseEnter(e) {
        let { pageX, pageY } = e;
        // console.log(e);
        // mousAct.style.display = 'block';
        // console.log(e);
        let startX = pageX - offset(firstP[index]).left;
        let startY = pageY - offset(firstP[index]).top + 20;

        // console.log(offset(firstP[index]).left,offset(firstP[index]).top);
        mousAct[index].style.display = 'block';
        mousAct[index].innerText = item.innerText;
        mousAct[index].style.left = startX + 'px';
        mousAct[index].style.top = startY + 'px';
    }
    function mouseMove({ pageX, pageY }) {
        let moveX = pageX - offset(firstP[index]).left;
        let moveY = pageY - offset(firstP[index]).top + 20;
        mousAct[index].style.left = moveX + 'px';
        mousAct[index].style.top = moveY + 'px';
    }
    function mouseLeave() {
        // console.log('leave');
        mousAct[index].style.display = 'none';
    }
});
hot24Top.onclick = function () {
    // hot24Dl.style.display = 'block';
    // hotPosi.style.display = 'none';
    linearChange(hot24Dl);
    hot24Dl.style.display = 'block';
    hotPosi.style.opacity = 0;
    hotPosi.style.display = 'none';
    this.classList.add('current');
    hotPosTop.classList.remove('current');
}
hotPosTop.onclick = function () {
    // console.log('click');
    // hotPosi.style.display = 'block';
    linearChange(hotPosi);
    hotPosi.style.display = 'block';
    hot24Dl.style.opacity = 0;
    hot24Dl.style.display = 'none';
    this.classList.add('current');
    hot24Top.classList.remove('current');
}
function linearChange(ele) {
    let opa = parseFloat(window.getComputedStyle(ele, null).opacity);
    // console.log(typeof(opa));
    let timer = setInterval(() => {
        // console.log(opa);
        opa += 0.3;
        if (opa >= 1) {
            opa = 1;
            clearInterval(timer);
        }
        ele.style.opacity = opa;
    }, 200);

}
function offset(ele) {
    let left = ele.offsetLeft;
    let top = ele.offsetTop;
    let parent = ele.offsetParent;
    // console.log(ele.offsetParent);
    // console.log(parent);
    while (parent && parent.nodeName !== 'BODY') {
        left += parent.clientLeft + parent.offsetLeft;
        top += parent.clientTop + parent.offsetTop;
        parent = parent.offsetParent;
        // console.log(left,top);
        // console.log(parent.offsetLeft);
    }
    return {
        left,
        top
    }
}

// hover span 的时候图标会出现 
let chat = document.querySelectorAll('.hot24Dl .chat'),
    chatLogo = document.querySelectorAll('.chat .chatLogo'),
    chat_pop = document.querySelectorAll('.chat .chat-pop');
// console.log(chatLogo);
[...chatLogo].forEach((item, index) => {
    item.onmouseenter = function () {
        // console.log('enter');
        chat_pop[index].style.display = 'block';
    }
    item.onmouseleave = function () {
        chat_pop[index].style.display = 'none';
    }
});

// 友情链接 
let $likBoxBot = $('.linkBoxDl #likBoxBot'),
    $down = $('.linkBoxDl #down'),
    $desc = $('.down span');
flag = false,
    $img = $('.down img');
// console.log($down);
$down.click(function () {
    // console.log(flag);
    if (flag) {
        $likBoxBot.css({
            display: 'none'
        });
        $img.css({
            transform: 'rotate(0deg)'
        });
        $desc[0].innerText = '展开';
        flag = false;
    } else {
        $likBoxBot.css({
            display: 'block',
        });
        $desc[0].innerText = '收起';
        $img.css({
            transform: 'rotate(180deg)'
        });
        flag = true;
    }

});
// 拉钩微信 
let $footer = $('.footer'),
    $chatImg = $('.footer_item .chatImg'),
    $wechat = $('.footer_item .wechat'),
    $wechatI = $('.footer_item .wechat i');
// console.log($wechatI);
$wechat.mouseenter(function () {
    // console.log('enter');
    $wechatI.css({
        backgroundPositionY: -217 + 'px'
    });
    $chatImg.css({
        display: 'block'
    });
});
$wechat.mouseleave(function () {
    // console.log('enter');
    $wechatI.css({
        backgroundPositionY: -184 + 'px'
    });
    $chatImg.css({
        display: 'none'
    });
});
// 拉钩微博
let $blog = $('.footer_item .blog');
let $blogI = $('.footer_item .blog i');
$blog.mouseenter(function () {
    $blogI.css({
        backgroundPositionX: -172 + 'px'
    });
});
$blog.mouseleave(function () {
    $blogI.css({
        backgroundPositionX: -214 + 'px'
    });
});
// 下载拉钩APP 
let $footerApp = $('.wrapperLeft .footerApp');
let $footerAppI = $('.wrapperLeft .footerApp i');
$footerApp.mouseenter(function () {
    $footerAppI.css({
        backgroundPositionX: -182 + 'px'

    });
    $footerApp.css({
        backgroundColor: '#00b38a'
    });
});
$footerApp.mouseleave(function () {
    $footerAppI.css({
        backgroundPositionX: -147 + 'px'
    });
    $footerApp.css({
        backgroundColor: '#fff'
    });
});
// 下载微信小程序
let $footerChat = $('.footerChat'),
    $wechatTop = $('.footerChat .wechat');
$footerChat.mouseenter(function () {
    $wechatTop.css({
        backgroundPositionX: -172 + 'px'
    });
    $footerChat.css({
        backgroundColor: '#00b38a'
    });
});
$footerChat.mouseleave(function () {
    $wechatTop.css({
        backgroundPositionX: -214 + 'px'
    });
    $footerChat.css({
        backgroundColor: '#fff'
    });
});

// top top 
// 滚动条没有卷曲高度的时候小火箭消失,当滚动条开始有卷曲高度的时候小火箭出现 
let toTop = document.querySelector('#backTop');
toTop.style.backgroundPositionX =  'left';   
window.onscroll = function () {
    let scrolTop = document.documentElement.scrollTop;
    // console.log(scrolTop);
    if (scrolTop > 0){
        toTop.style.display = 'block';
        // toTop.style.backgroundPositionX =  'left';
    }else{
        toTop.style.display = 'none'; 
    }
}
// 点击小箭头的时候回到顶部 
// 滚动条卷曲的高度慢慢的为0m固定步长动画
let duration = 1000 ,
scroT = document.documentElement.scrollHeight || document.body.scrollHeight ,
winH = document.documentElement.clientHeight || document.body.clientHeight , 
maxH = scroT - winH ,
// speed = maxH / duration ,
interval = 20;

toTop.onclick = clickEvent;
function clickEvent(){
    // document.documentElement.scrollTop = 0;
    let step = 0 ;
    // console.log('click',isOnClick);
    all = true;
    clearInterval(this.timer);
    // let time = 0;
    let top = document.documentElement.scrollTop ;
    this.timer = setInterval(()=>{
        // time += interval ;
        // console.log(speed * time);
        toTop.style.backgroundPositionX =  -38 + 'px';
        step += 10;
        if(step >= maxH/2 ){
            step += 30;
            all = false ; 
        };
        if( document.documentElement.scrollTop <= 1000 && all){
            step -= 5;
        }
        // console.log(document.documentElement.scrollTop,step);
        if(step >= maxH){
            step = maxH;
            clearInterval(this.timer);
            // isOnClick = false;
        }

        document.documentElement.scrollTop =  top - step ;
        if(step === maxH ){
            toTop.style.backgroundPositionX =  0 + 'px'; 
        }
        
    },interval);

};
toTop.onmouseenter = function(){
    toTop.style.backgroundPositionX =  -38 + 'px';
}
toTop.onmouseleave = function(){
    // console.log('leave');
    toTop.style.backgroundPositionX =  0;     
}



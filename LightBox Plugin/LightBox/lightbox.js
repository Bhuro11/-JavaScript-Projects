function includePopupHtml(){
    let html ='<div id="vis-popup" class="w-screen h-screen bg-[rgba(0,0,0,0.75)] fixed top-0 left-0 text-center pt-[70px] pb-[30px] z-[99999] hidden"><span id="close" onclick="closeBtnPopup()"><img id="npop" src="LightBox/image/close.png" alt="" class="absolute top-[20px] right-[20px] w-[40px] h-[40px] cursor-pointer"></span><img id="leftarrow" src="LightBox/image/left.png" alt="" class="absolute top-[50vh] left-[35px] w-[40px] h[40px] cursor-pointer"><img id="rightarrow" src="LightBox/image/right.png" alt="" class="absolute top-[50vh] right-[40px] w-[40px] h[40px] cursor-pointer"><img id="mainPopImg" src="images/images/HPlaptop.png" alt="" class="w-[250px] h-[30vh] my-28 mx-20 md:mx-96 md:w-[400px] md:h-[50vh]"></div>'

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild);
}

let img;
let current;

function imagePopupInit(target){
    //select image with class
    img = document.getElementsByClassName(target);

    //add event listner on all img
    for(let i=0; i<img.length; i++){
        img[i].style.cursor = "pointer";
        img[i].addEventListener('click', function(){
            document.getElementById('mainPopImg').src = this.src;
            document.getElementById('vis-popup').style.display = 'block';
            checkArrowHideShow();
        });
    }
    includePopupHtml();

    document.getElementById("rightarrow").addEventListener('click', function(){
        nextImg();
    });

    document.getElementById("leftarrow").addEventListener('click', function(){
        prevImg();
    });
}

function closeBtnPopup(){
    document.getElementById('mainPopImg').src = '';
    document.getElementById('vis-popup').style.display = 'none';
}

function getCurrentImg(){
    for(let i=0; i<img.length; i++){
        if(img[i].src == document.getElementById('mainPopImg').src){
            current = i;
        }
    }
}

function nextImg(){
    getCurrentImg();
    current++;
    document.getElementById('mainPopImg').src = img[current].src;
    checkArrowHideShow();
}

function prevImg(){
    getCurrentImg();
    current--;
    document.getElementById('mainPopImg').src = img[current].src;
    checkArrowHideShow();
}

function checkArrowHideShow(){
    getCurrentImg();
    if(current == '0'){
        document.getElementById('leftarrow').style.display = 'none';
        document.getElementById('rightarrow').style.display = 'block';
    }
    else if(current == img.length - 1){
        document.getElementById('rightarrow').style.display = 'none';
        document.getElementById('leftarrow').style.display = 'block';
    }
    else{
        document.getElementById('leftarrow').style.display = 'block';
        document.getElementById('rightarrow').style.display = 'block';
    }
}
function changBG(color){
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName('text1');
    if(color = "#991b1b"){
        for(let elm of txt){
            elm.style.color = "white";
        }
    }else if(color = "#166534"){
        for(let elm of txt){
            elm.style.color = "white";
        }
    }else if(color = "#854d0e"){
        for(let elm of txt){
            elm.style.color = "white";
        }
    }else if(color = "#5b21b6"){
        for(let elm of txt){
            elm.style.color = "white";
        }
    }else{
        for(let elm of txt){
            elm.style.color = "black";
        }
    }   
}

window.addEventListener('scroll',function(){
    let navbar = this.document.getElementById('menubar');
    if(this.window.pageYOffset >= 200){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
})
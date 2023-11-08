let unm = document.getElementById('unm');
let pwd = document.getElementById('pwd');
let flag = 1;

function validateForm(){
    if (unm.value == "") {
        document.getElementById('unmerror').innerHTML = "Please Enter Username..."
        flag = 0;
    }else if (unm.value.length < 3) {
        document.getElementById('unmerror').innerHTML = "Username Requirment Min 3 Char"        
        flag = 0;
    }
    else{
        document.getElementById('unmerror').innerHTML = "";
        flag = 1;
    } 
    
    if (pwd.value == "") {
        document.getElementById('pwderror').innerHTML = "Please Enter Password..."
        flag = 0;
    }else{
        document.getElementById('unmerror').innerHTML = "";
        flag = 1;
    }
    
    if (flag) {
        return true;
    }else{
        return false;
    }
}
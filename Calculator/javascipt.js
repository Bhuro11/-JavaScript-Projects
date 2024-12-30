let inpt = document.querySelector('.result_input')

inpt.focus();

let body = document.body.addEventListener('click', () => {
    inpt.focus();
})

function clear_input(){
    inpt.value = ''
}

function inpt_value(val){
    inpt.value += val;
}

function final(){
    inpt.value = eval(inpt.value)
}

function remove(){
    inpt.value = inpt.value.slice(0, -1)
}

function sqrt_value(){
    inpt.value = Math.sqrt(inpt.value)
}

function power(){
    inpt.value = inpt.value * inpt.value
}

function change_value(){
    if (inpt.value == -(inpt.value)) {
        inpt.value = +(inpt.value)
    } else {
        inpt.value = -(inpt.value)
    }
}

function one_of(){
    inpt.value = 1/inpt.value
}
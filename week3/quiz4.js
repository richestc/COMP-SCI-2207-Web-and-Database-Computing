
function a(){
    console.log(document.getElementById('in').innerText);
}

function b(){
    console.log(document.querySelector('input[name_given]').innerText);
}

function c(){
    console.log(document.getElementsByClassName('in')[0].textContent);
}

function d(){
    console.log(document.querySelector('input[name=name_given]').value);
}

function e(){
    console.log(document.querySelector('.in').value);
}

function f(){
    console.log(document.getElementById('in1').textContent);
}

function g(){
    console.log(document.getElementById('in1').value);
}

function h(){
    console.log(document.getElementsByClassName('in')[0].textContent);
}

// console.log( document.getElementById('in').innerText );
// console.log( document.querySelector('input[name_given]').innerText );
// console.log( document.getElementsByClassName('in')[0].text );
// console.log( document.querySelector('input[name=name_given]').value );
// console.log( document.querySelector('.in').value );
// console.log( document.getElementById('in1').text );
// console.log( document.getElementById('in1').value );
// console.log( document.getElementsByClassName('in').innerText );
let content = document.querySelector('#content');

let body = document.querySelector('body');

body.style.backgroundColor = '#212529';

let kullanici = prompt('Kullanici adinizi giriniz');

function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let days = date.getDay();
    const HAFTA = ['Pazartesi' , 'Salı' , 'Çarşamba' , 'Perşembe' , 'Cuma' , 'Cumartesi' , 'Pazar'];
    let gun = HAFTA[days-1]  


    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time = hours + ":" + minutes + ":" + seconds + " " + gun;

    content.textContent = time;
    content.innerHTML += `<h1>Merhaba, ${kullanici} ! Hoş geldin!</h1><p><h1></h1></p><p><h1>Kodluyoruz Frontend Web Development Patikası'nın Javascript bölümü 1. Ödevindesiniz.</h1></p>`
    content.style.color = 'orange';

    setTimeout(clock, 1000);
}

clock();


//skills progress
let section = document.querySelector('.skills-sec');
let progress = document.querySelectorAll('.skill-prgress span');

window.onscroll = function() {

    if (window.scrollY >= section.offsetTop - 250) {
        progress.forEach(span => {

            span.style.width = span.dataset.width;
        })
    }
}

//Event count down function
// let openDate = new Date('9 19 2022');
let openDate = new Date('9 19 2022 22:32:50');

let counter = setInterval(() => {
    let currentDate = new Date();
    let remain = openDate.getTime() - currentDate.getTime();

    let days = Math.floor(remain / (24 * 60 * 60 * 1000));
    let hours = Math.floor(remain % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
    let minuets = Math.floor(remain % (60 * 60 * 1000) / (60 * 1000));
    let seconds = Math.floor(remain % (60 * 1000) / 1000)

    document.querySelector('.days').innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.minutes').innerHTML = minuets < 10 ? `0${minuets}` : minuets;
    document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (remain < 1) {
        clearInterval(counter);
        document.querySelector('.days').innerHTML = '00';
        document.querySelector('.hours').innerHTML = '00';
        document.querySelector('.minutes').innerHTML = '00';
        document.querySelector('.seconds').innerHTML = '00';
    }

}, 1000);

//top video section
let videoList = document.querySelectorAll('.video-link');
let videoShow = document.querySelector('.screen');

 function getUrl(e){
     videoShow.setAttribute('src', e.target.getAttribute('data-url'));

     videoList.forEach(title=>{
        title.classList.remove('selected')
     })
     e.target.classList.add('selected')

}

videoList.forEach(url=>{
    url.addEventListener('click', getUrl) 
})

// fetch("https://api.github.com/users/mohamed-alex/repos")

// .then(res =>{
//     // console.log(res.json());
//     let data = res.json()
//     console.log(data)
//     return(data)
// })
// .then(all =>{
//     console.log(all[2].name)
//     return(all[2].name)
// })


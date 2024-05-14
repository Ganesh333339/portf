const home = document.querySelector('.home');
const about = document.querySelector('.about');
const edu = document.querySelector('.edu');
const skill = document.querySelector('.skill');
const port = document.querySelector('.port');
const con = document.querySelector('.cta');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const fifth = document.querySelector('.fifth');
const sixth = document.querySelector('.sixth');
home.addEventListener('click',()=>{
    first.scrollIntoView({behavior:"smooth",marginTop:"-100px"});
});
about.addEventListener('click',()=>{
    second.scrollIntoView({behavior:"smooth"});
});
edu.addEventListener('click',()=>{
    third.scrollIntoView({behavior:"smooth"});
});
skill.addEventListener('click',()=>{
    fourth.scrollIntoView({behavior:"smooth"})
});
port.addEventListener('click',()=>{
    fifth.scrollIntoView({behavior:"smooth"});
});
con.addEventListener('click',()=>{
    sixth.scrollIntoView({behavior:"smooth"});
});
const all = document.querySelectorAll('.in');
all.forEach((el) => {
    el.addEventListener('click', () => {
        all.forEach((item) => {
            item.style.color = "white";
        });
        el.style.color = "aqua";
    });
});





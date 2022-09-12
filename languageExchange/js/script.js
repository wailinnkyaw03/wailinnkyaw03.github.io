const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

link.forEach(el=>{
    el.addEventListener('click', ()=>{
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        
        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;
    });
});

var data = {
    "english":
    {
        "title": "Hello World",
        "description": "Welcome to WLK, I am now testing for language exchange technique by using HTML, CSS, JavaScript. Thanks for Watching!!!!"
    },
    "japanese":{
        "title": "こんにちは、政界",
        "description": "ようこうそ、WLK、私は今LanguageTesting　しています。どうも、ありがとう　ございます。"
    },
    "myanmar":{
        "title": "WLK မှ မင်္ဂလာပါ။",
        "description":"ကျနော် ကတော့ ခု ဘာသာစကား ပြောင်းလဲခြင်း ကို စမ်းသပ်နေပါတယ်။ ကျေးဇူးတင်ပါတယ်။ ခင်မျာ။"
    }
}
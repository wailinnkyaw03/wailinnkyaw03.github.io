const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const homeEl = document.querySelector('.home');
const aboutEl = document.querySelector('.about');
const personalEl = document.querySelector('.personal');
const famousEl = document.querySelector('.famous');
const commentEl = document.querySelector('.comment');

link.forEach(el=>{
    el.addEventListener('click', ()=>{
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        
        homeEl.textContent = data[attr].home;
        aboutEl.textContent = data[attr].about;
        personalEl.textContent = data[attr].personal;
        famousEl.textContent = data[attr].famous;
        commentEl.textContent = data[attr].comment;
    });
});

var data = {
    "english":
    {
        "home": "Home",
        "about": "About Jackie",
        "personal": "Personal Life",
        "famous": "Famous Films & Music",
        "comment": "Comments"
    },
    "japanese":{
        "home": "事",
        "about": "Jackieの事",
        "personal": "自分の事",
        "famous": "有名な映画と歌",
        "comment": "Comments"
    },
    "myanmar":{
        "home": "ပင်မစာမျက်နှာ",
        "about":"ဂျက်ကီချန်းအကြောင်း",
        "personal": "ဘဝအကြောင်း",
        "famous": "ကျော်ကြားခဲ့သော ရုပ်ရှင်နှင့် သီချင်းများ",
        "comment": "အကြံပြုချက်များ"
    }
}
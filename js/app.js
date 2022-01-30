const animatedBG = document.querySelector('.bg-animated');
const heroTitle = document.querySelectorAll('.hero img');
const hero = document.querySelector('.hero');
const heroSelector = document.querySelectorAll('.hero_selector li');
let index = 0;


hero.addEventListener('click', switchHeroTitle)

function switchHeroTitle(){
    document.querySelector('img.display').classList.remove('display');
    document.querySelector('.hero').classList = `hero`;
    
    if(index<heroTitle.length-1){
        heroTitle[index+1].classList.add('display');
        hero.classList.add(heroTitle[index+1].getAttribute('id')+`-border`);

        document.body.classList = `main-bg ${heroTitle[index+1].getAttribute('id')}`;
        document.querySelector('.bg-animated').classList = `bg-animated ${heroTitle[index+1].getAttribute('id')}-bg`;

        index++;
        
    }else if(index==heroTitle.length-1){
        heroTitle[0].classList.add('display');
        hero.classList.add(heroTitle[0].getAttribute('id')+`-border`);
        
        document.body.classList = `main-bg ${heroTitle[0].getAttribute('id')}`;
        document.querySelector('.bg-animated').classList = `bg-animated ${heroTitle[0].getAttribute('id')}-bg`;

        index = 0;
    }
}


function heroSelection(hero){
    heroTitle.forEach((title, idx) => {
        if(title.getAttribute('id') == hero){
            index = idx;
        }
    })
    document.querySelector('img.display').classList.remove('display');
    document.querySelector(`#${hero}`).classList.add('display');
    document.querySelector('.hero').classList = `hero ${hero}-border`;
    document.querySelector('.bg-animated').classList = `bg-animated ${hero}-bg`;
    document.body.classList = `main-bg ${hero}`;
}


heroSelector.forEach(each => each.addEventListener('click', e => heroSelection(e.target.getAttribute('data-hero'))))

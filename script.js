let rightSide = document.querySelector('.right-side');
let leftSide = document.querySelector('.left-side');
let cardHobi = document.querySelectorAll('.card');
let cardSkill = document.querySelectorAll('.skill-card');
window.addEventListener("scroll" , function(){
    let scrollValue = (Math.floor(this.scrollY / 3));
    console.log(scrollValue)
    if(scrollValue > 100 && scrollValue < 667){
        rightSide.classList.add('showRight');
        leftSide.classList.add("showleft");
        cardHobi.forEach((card) => {
        setTimeout(() => {
            card.classList.add('showcardHobi');
        },1000)
        })
    }else{
        rightSide.classList.remove('showRight');
        leftSide.classList.remove("showleft");
        cardHobi.forEach((card) => {
        setTimeout(() => {
            card.classList.remove('showcardHobi');
        },1000)
        })
    }

    if(scrollValue > 440 && scrollValue < 1100){
        cardSkill.forEach((card , i) => {
            this.setTimeout(() => {
            card.classList.add('showskill')
            },i * 1000)
        })
    }else{
        cardSkill.forEach((card , i) => {
            this.setTimeout(() => {
            card.classList.remove('showskill')
            },i * 1000)
        })
    }
})
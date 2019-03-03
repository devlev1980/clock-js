const secondHand = document.querySelector('.sec-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(params) {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360)+90;
    console.log(seconds);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    
    const min = now.getMinutes();
    const minDegrees = ((min/60)*360)+90;
    minHand.style.transform = `rotate(${minDegrees}deg)`
    console.log(min);

    const hour = now.getHours();
    const hourDegrees = ((hour/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    console.log(hour);



}
setInterval(setDate,1000);
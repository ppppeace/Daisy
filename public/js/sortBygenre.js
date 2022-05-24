let action = document.getElementById('action'),
    thriller = document.getElementById('thriller'),
    drama = document.getElementById('drama'),
    adventure = document.getElementById('adventure'),
    animation = document.getElementById('animation'),
    fantasy = document.getElementById('fantasy'),
    romance = document.getElementById('romance'),
    horror = document.getElementById('horror'),
    comedy = document.getElementById('comedy');
    
let actionb = document.querySelector('#actionb'),
    thrillerb = document.querySelector('#thrillerb'),
    dramab = document.querySelector('#dramab'),
    adventureb = document.querySelector('#adventureb'),
    animationb = document.querySelector('#animationb'),
    fantasyb = document.querySelector('#fantasyb'),
    romanceb = document.querySelector('#romanceb'),
    horrorb = document.querySelector('#horrorb'),
    comedyb = document.querySelector('#comedyb');

actionb.addEventListener('click', function(){
    action.scrollIntoView();
});

thrillerb.addEventListener('click', function(){
    thriller.scrollIntoView();
});

dramab.addEventListener('click', function(){
    drama.scrollIntoView();
});

adventureb.addEventListener('click', function(){
    adventure.scrollIntoView();
});

comedyb.addEventListener('click', function(){
    comedy.scrollIntoView();
});

animationb.addEventListener('click', function(){
    animation.scrollIntoView();
});

fantasyb.addEventListener('click', function(){
    fantasy.scrollIntoView();
});

romanceb.addEventListener('click', function(){
    romance.scrollIntoView();
});

horrorb.addEventListener('click', function(){
    horror.scrollIntoView();
});
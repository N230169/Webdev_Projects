const cards = document.querySelectorAll('.card, .skill-box');

cards.forEach(card=>{
    card.addEventListener('mouseenter',()=>{
        card.style.boxShadow='0 0 25px #00c3ff';
    });

    card.addEventListener('mouseleave',()=>{
        card.style.boxShadow='0 0 15px rgba(0,195,255,0.3)';
    });
});
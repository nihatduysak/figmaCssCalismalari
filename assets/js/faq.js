const faq3loremAns = document.querySelector('#faq3loremAns');
const lorem3 = document.querySelector('#lorem3');

function showFaqAns(e){
    e.preventDefault();
    faq3loremAns.classList.add('visible');
}

for (const lorem of lorem3) {
    lorem.addEventListener('click', showFaqAns);
}

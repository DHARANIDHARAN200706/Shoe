const par_el = document.querySelectorAll(".l1");

let x = 0, y = 0,z=0;
window.addEventListener("mousemove", (e) => {
    x = e.clientX - window.innerWidth/2 ;
    y = e.clientY - window.innerHeight / 2;
    z = e.clientz - window.innerHeight / 2;

    par_el.forEach((el) => {
        let speedx = parseFloat(el.dataset.speedx);
        let speedy = parseFloat(el.dataset.speedy);
        

        
        el.style.transform = `translateX(calc(5% + ${x * speedx}px)) translateY(calc(4% + ${y * speedy}px)) `;
           });
});


let nextbo = document.getElementById('next');
let prevbo = document.getElementById('prev');
let backbo = document.getElementById('back');

let seemore = document.querySelectorAll('c1');
let list = document.querySelectorAll('l1');

nextbo.onclick = function() {
    showSlider('next');
}
prevbo.onclick = function() {
    showSlider('prev');
}



const showSlider = (type) => {
    let items = document.querySelectorAll('.item');
    let firstItem = items[0]; 

    if (type === 'next') {
        
        firstItem.parentElement.appendChild(firstItem);
    } else if (type === 'prev') {
        
        let lastItem = items[items.length - 1];
        firstItem.parentElement.insertBefore(lastItem, firstItem);
    }

}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        showSlider('next');  
    } else if (event.key === 'ArrowLeft') {
        showSlider('prev');  
    }
    else if (event.key === 'ArrowUp') {
        showSlider('next');  
    } else if (event.key === 'ArrowDown') {
        showSlider('prev');  
    }
});

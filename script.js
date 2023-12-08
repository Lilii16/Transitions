let btn = document.querySelectorAll('.btn');
let img = document.querySelectorAll('.slider ul li')


for (let i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener('click', (e)=>{

        const imgActive = document.querySelector('.active');
        console.log([...img].indexOf(imgActive));

        console.log(imgActive);
    
    })
}
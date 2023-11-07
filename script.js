let modal = document.getElementsByClassName('modal')[0]
function setClose(){

    let close = document.getElementsByClassName('close')[0]

    close.addEventListener('click',(e)=>{
        console.log('clicked')
        modal.classList.remove('fade')
        setTimeout(() => {
            modal.style.display='none';
    
        }, 1100);
    })
}
modal.style.display='none';


setClose()
// treatments.forEach(element => {
//     console.log(element)
// });

let buttons = document.getElementsByTagName('button');

for (let index = 1; index < 13; index++) {
    buttons[index].addEventListener('click',(e)=>{
        console.log('clicked ' + index)
        // console.log(treatments[index-1])
        modal.innerHTML=treatments[index-1];
        setTimeout(() => {
            
            modal.style.display='flex';
            modal.classList.add('fade')
            setClose()
            setClose()
        }, 100);
        setClose()

    })
    
}

document.addEventListener("DOMContentLoaded", function () {
    // Select all links with href starting with '#' and smooth scrolling
    const links = document.querySelectorAll('nav li');
    console.log(links)

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            
            // const targetId = this.getAttribute("secid").substring(1); // Get the target section's ID
            const targetId = this.getAttribute("secid") // Get the target section's ID
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Scroll smoothly to the target section
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});


let burg = document.getElementById('burg');
burg.addEventListener('click',(e)=>{
    document.getElementById('menu').classList.toggle('expa')
})

document.addEventListener("DOMContentLoaded", function () {
    // Select all links with href starting with '#' and smooth scrolling
    const links = document.querySelectorAll('.menu ul li');
    console.log(links)

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.getElementById('menu').classList.remove('expa')
            // const targetId = this.getAttribute("secid").substring(1); // Get the target section's ID
            const targetId = this.getAttribute("secid") // Get the target section's ID
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Scroll smoothly to the target section
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
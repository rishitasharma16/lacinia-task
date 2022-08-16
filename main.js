let text = document.querySelectorAll(".slide-name")
let fruit = document.querySelectorAll(".slide-fruit")
let nameLeft = document.querySelector(".arrow-name-left")
let nameRight = document.querySelector(".arrow-name-right")

let navbarBtn = document.querySelector('.navbar-toggler')

// =========================collapse control total =========================

navbarBtn.addEventListener("click",()=>{
    let total = document.querySelector(".total-con")
   
    
    if(navbarBtn.ariaExpanded=="true"){
        total.classList.add("total-con-open")
    }else{
        total.classList.remove("total-con-open")
    }
})

// ================================end========================

// ======================slider right========================

function slideRight(p) {
    for (let x of text) {
        anime({
            targets: x,
            translateY: { value: [-270, 0], duration: 800, delay: 800 },
            loop: false

        });
    }

    for (let y of fruit) {
        anime({
            targets: y,
            scale: {
                value: [0, 1],
                duration: 500,
                delay: 0,
                easing: 'linear'
            },
            translateX: {
                value: [-500, 0],
                delay: 0,
                duration: 100,
                direction: 'reverse'
            },




        });
    }

    let textElement = p.previousElementSibling.previousElementSibling.children
    console.log(textElement)

    for (let z of textElement) {
        if (z.classList.contains("active")) {
          
            if (z.dataset.fname == "orange") {
                nameLeft.innerHTML = "ORANGE"
                nameRight.innerHTML = "APPLE"
            }
            else if (z.dataset.fname == "apple") {
                nameLeft.innerHTML = "APPLE"
                nameRight.innerHTML = "PEAR"
            }

            else if (z.dataset.fname == "pear") {
                nameLeft.innerHTML = "PEAR"
                nameRight.innerHTML = "ORANGE"
            }


        }
    }
}

// ===========================slider-right end========================

// ==============================slider-left=================

function slideLeft(p) {
    for (let x of text) {
        anime({
            targets: x,
            translateY: [
                { value: -270, duration: 800, delay: 0 },
                { value: 0, duration: 500, delay: 200 }

            ],
            loop: false

        });


    }

    for (let y of fruit) {
        anime({
            targets: y,
            scale: {
                value: [0, 1],
                duration: 500,
                delay: 0,
                easing: 'linear'
            },
            translateX: {
                value: [-500, 0],
                delay: 0,
                duration: 100,
                direction: 'reverse'
            },




        });
    }


    let textElement = p.previousElementSibling.children
    for (let z of textElement) {
        if (z.classList.contains("active")) {
           
            if (z.dataset.fname == "orange") {
                nameLeft.innerHTML = "PEAR"
                nameRight.innerHTML = "ORANGE"
            }
            else if (z.dataset.fname == "apple") {
                nameLeft.innerHTML = "ORANGE"
                nameRight.innerHTML = "APPLE"
            }

            else if (z.dataset.fname == "pear") {
                nameLeft.innerHTML = "ORANGE"
                nameRight.innerHTML = "PEAR"
            }


        }
    }

}

// ===========================slider-left-end =====================
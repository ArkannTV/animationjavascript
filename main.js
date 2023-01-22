// const tp = document.querySelector("#tp")
//     console.log(tp)
// tp.insertAdjacentHTML()

// top.addEventListener(`click`, )

// setInterval(() => {
//     console.log("1 seconde")
// }, 1000);

let i = 0
const homer = document.querySelector(".homer")

const interval = setInterval(() => {
    homer.style.transform = `translateX(${i}px)`
    i++
    
    if (i >= window.innerWidth) {
        i = -400
    }
})


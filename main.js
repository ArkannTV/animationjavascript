let i = 0
const homer = document.querySelector(".homer")

// const interval = setInterval(() => {
//     homer.style.transform = `translateX(${i}px)`
//     i++
    
//     if (i >= window.innerWidth) {
//         i = -400
//     }
// })

// const bouton = document.querySelector("#bouton")


const interval2 = setInterval(() => {
    const x = Math.floor(Math.random() * window.innerWidth)
    const y = Math.floor(Math.random() * window.innerHeight)

    homer.style.top = `${y}px`
    homer.style.right = `${x}px`
}, 5500)



// const bouton = document.querySelector("#bouton")

// bouton.addEventListener("click", () => {
//     const x = Math.floor(Math.random() * window.innerWidth)
//     const y = Math.floor(Math.random() * window.innerHeight)

//     homer.style.top = `${y}px`
// })


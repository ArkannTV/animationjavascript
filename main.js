let i = 0
const homer = document.querySelector(".homer")

const interval = setInterval(() => {
    homer.style.transform = `translateX(${i}px)`
    i++
    
    if (i >= window.innerWidth) {
        i = -400
    }
})


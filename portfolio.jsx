document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelectorAll('.navigation-spot')
    const vh = window.innerHeight
    
    window.addEventListener('scroll', (e) => {
        // debugger
        const y = window.scrollY
        // console.log(vh)
        nav.forEach((el, idx) => {
            console.log(Math.floor((y + 300 + 16 * idx)/vh))
            el.classList.remove('black')
            if (Math.floor((y + 300 + 16 * (idx + 0.5))/vh) == 2) {
            el.classList.add('black')
        }
        })

      
    })
    for(let i = 0; i<4; i++) {
        nav[i].addEventListener('click', (e) => {
            window.scrollTo(0, i * vh)
        })


    }
})
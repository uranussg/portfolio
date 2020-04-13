document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelectorAll('.navigation-spot')
    const vh = window.innerHeight
    
    window.addEventListener('scroll', (e) => {
        // debugger
        const y = window.scrollY
        // console.log(vh)
        nav.forEach((el, idx) => {
            // console.log(Math.floor((y + 300 + 16 * idx)/vh))
            el.classList.remove('black')
            if (Math.floor((y + 300 + 16 * (idx + 0.5))/vh) == 2) {
            el.classList.add('black')
        }
        })

        const about = document.getElementsByClassName('about')[0]
        const education = document.getElementsByClassName('education')[0]
        about.style.opacity = '0'
        education.style.opacity = '0'
        console.log(y/vh)
        if ( y/vh > 0.8 && y/vh < 1.2)
        {
        about.style.opacity = '1'
        education.style.opacity = '1'
        education.transform ='translate(137%, 160%)'

        }

      
    })
    for(let i = 0; i<4; i++) {
        nav[i].addEventListener('click', (e) => {
            window.scrollTo(0, i * vh)
        })


    }

    window.addEventListener
})
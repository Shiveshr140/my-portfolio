

const anchor = document.querySelectorAll(".nav__link")
console.log(anchor)
anchor.forEach(a => {
    a.addEventListener('click', (e) => {
      console.log(e);
      a.classList.add('active')

      })

    })

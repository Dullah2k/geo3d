const navToggler = document.getElementById("nav-toggler")
const nav = document.getElementById("nav")
const closeNav = document.querySelector(".close-nav")

navToggler.addEventListener("click", () => {
  nav.classList.add("show-nav")
})

closeNav.addEventListener("click", ()=>{
  nav.classList.remove("show-nav")
})

// const observer  = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if(entry.isIntersecting) {
//       entry.target.classList.add('show')
//     } else {
//       entry.target.classList.remove('show')
//     }
//   })
// })

// const hiddenElements = document.querySelectorAll('.section')
// hiddenElements.forEach((el) => observer.observe(el))

// const options = {
//   theshold: 1.5,
// }
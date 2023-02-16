// ----------------------- SHOW MENU ----------------------------
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

// ----------------------- MENU SHOW ----------------------------
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// ----------------------- MENU HIDDEN ----------------------------
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// ----------------------- REMOVE MENU MOBILE ----------------------------
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ----------------------- SWTPER PROJECT ----------------------------
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: false,
    keyboard: true,
});

// ----------------------- TESTIMONIAL ----------------------------
let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// ----------------------- EMAIL JS ----------------------------
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  contactProject = document.getElementById('contact-project'),
  contactMessage = document.getElementById('contact-message')
const sendEmail = (e) =>{
  e.preventDefault()

  // Check if the field has a value
  if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '' ){
    //add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    //show message
    contactMessage.textContent = 'Please Write all fields'
  }else{
                  // serviceID, template, #form, Publickey
    emailjs.sendForm('service_kptf8dg','template_eyhhwvo','#contact-form','zNR1ZswnWYG3wDltP')
      .then(() =>{
        alert ('Your message has been sent!')

        //show message color
        // contactMessage.classList.add('color-blue')
        // contactMessage.textContent = 'Message Sent'

        //remove after 5sec
        // setTimeout(() =>{
        //   contactMessage.textContent = ''
        // }, 5000)
      }, (error)=>{
        alert ('OOPS! Something has failed...', error)
      })
      
      // clear input data
      contactName.value = ''
      contactEmail.value = ''
      contactProject.value = ''
  }
}
contactForm.addEventListener('submit', sendEmail)

// ----------------------- SCROLL SECTION ACTIVE LINK  ----------------------------
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// ----------------------- SHOW SCROLL UP  ----------------------------
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
  : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ----------------------- DARK LIGHT THEME  ----------------------------
const themeButton =  document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface hasby validating the dark-theme class
const getcurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getcurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if(selectedTheme){
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivate the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  //we save the theme and the current icon that the user
  localStorage.setItem('selected-theme', getcurrentTheme())
  localStorage.setItem('selected-icon', getcurrentIcon())
})
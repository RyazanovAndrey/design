window.addEventListener('scroll', () => {
  const scrollAct = window.scrollY

  headerAct(scrollAct)
  actLink(scrollAct)
  showToUp(scrollAct)
})

function headerAct(scrollAct){
  if(document.querySelector('.header').offsetHeight < scrollAct){
    document.querySelector('.header').classList.add('scroll-act')
  }else{
    document.querySelector('.header').classList.remove('scroll-act')
  }
}

function actLink(scrollAct){
  document.querySelectorAll('section').forEach(item => {
    if(scrollAct + 150 >= item.offsetTop ){
      document.querySelector('.act-link').classList.remove('act-link')
      document.querySelector(`[href="#${item.id}"]`).classList.add('act-link')
    }
  })
}

function showToUp(scrollAct){
  if(scrollAct  >= document.documentElement.clientHeight * 2){
    document.querySelector('.btn-top').classList.add('show')
  }else{
    document.querySelector('.btn-top').classList.remove('show')
  }
}

// Burger

const burger = document.querySelector('.burger .bx')
burger.addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('open')
})

// Popup

const btn = document.querySelector('.home__btn ')
const stopScroll = document.body
const popUp = document.querySelector('.pop-up')

const scrollMargin = window.innerWidth - document.documentElement.clientWidth + 'px'

btn.addEventListener('click', () => {
  stopScroll.style.paddingRight = scrollMargin
  popUp.classList.add('show')
  stopScroll.style.overflow = 'hidden'
})


document.addEventListener('click', (event) => {
  if(event.target == popUp){
    removeAllstyle()
  }
})

document.addEventListener('keydown', (event) => {
  if(event.key == 'Escape'){
    removeAllstyle()
  }
})

function removeAllstyle () {
  stopScroll.style.paddingRight = 0
  popUp.classList.remove('show')
  stopScroll.style.overflow = 'auto'
}

// Gallery

lightGallery(document.querySelector('.works__gallery'))

// Accordion

const servHead = document.querySelectorAll('.services__head')

servHead.forEach(item => {
  item.addEventListener('click', () => {
    
    const actTitle = item.closest('.services__block')
    const actTab =  actTitle.classList.toggle('open')

    if(actTitle.classList.contains('open')){
      item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px'
    }else{
      item.nextElementSibling.style.maxHeight = 0
    }
  })
})

// Swiper

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    speed: 1000,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',	
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {			
      delay: 2000,
      disableOnInteraction: false,
      }
      
  });
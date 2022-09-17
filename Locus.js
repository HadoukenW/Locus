function burgerMenu(){
    let burger = document.querySelector('.burger')
    let menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    const menu__btn = document.querySelector('.menu__btn')
    const elan = document.querySelector('.element-animation')
    burger.addEventListener('click', () =>{
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
            menu__btn.classList.add('active')
            menu__btn.classList.remove('element-animation')
        }
        else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
            menu__btn.classList.remove('active')
            menu__btn.classList.add('element-animation')
        }
    })

    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })

}
burgerMenu()

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('nav')

    // тут мы указываем в пикселях сколько нужно проскролить, чтобы наше меню стало фиксированным
    const breakpoint = 1
    if(window.scrollY >= breakpoint) {
        nav.classList.add('fixed__nav')
    }
    else {
        nav.classList.remove('fixed__nav')
    }
}

//getting uncommented if we need to execute this function
// window.addEventListener('scroll', fixedNav)

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }

      // getting uncommented if needs to be shown on rescrolling
       else {
        change.target.classList.remove('element-show');
      }
      
    });

    
  }
  let options = { 
    threshold: [0.5],
    rootMargin: "150px"
};
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }


//video 





/// 

//modal
function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger)
    modal = document.querySelector(modal)
    close = document.querySelector(close)
    const body = document.querySelector('body')
    let video = document.querySelector('.how__video')


    document.addEventListener('keydown', e => {
        switch (e.key.toLowerCase()) {
        
                case 'escape':
                    modal.style.display = 'none'
                    body.classList.remove('locked')
                    video.pause()
                    video.currentTime = 0
                    video.volume = 0
                    break
               
        }
    })

    trigger.addEventListener('click', e =>{
        e.preventDefault()
        video.volume = 0.5
        modal.style.display = 'flex'
        body.classList.add('locked')
        document.querySelector('.modal__wrapper').removeAttribute("closed", "true")
        // let video = document.createElement('video')
        // video.setAttribute("src", "/media/DEsNxG8rDO9Cx6Ab.mp4")
        // video.setAttribute("class", "how__video")
        // modal.prepend(video)
    })

    close.addEventListener('click', e =>{
        modal.style.display = 'none'
        body.classList.remove('locked')
        video.currentTime = 0
        
        document.querySelector('.modal__wrapper').setAttribute("closed", "true")
    })

    modal.addEventListener('click', e => {
        if(e.target == modal){
            modal.style.display = 'none'
            body.classList.remove('locked')
            video.currentTime = 0
            
            document.querySelector('.modal__wrapper').setAttribute("closed", "true")
        }
        
    })
}

bindModal('.modal__btn', '.modal__wrapper', '.modal__close')

//modal
function bindModal2(trigger, modal, close) {
    trigger = document.querySelector(trigger)
    modal = document.querySelector(modal)
    close = document.querySelector(close)
    const body = document.querySelector('body')
    const video = document.querySelector('.how__video')


    const playBtn = document.querySelector('.video__play-btn')
    const pauseBtn = document.querySelector('.video__pause-btn')
    trigger.addEventListener('click', e =>{
        e.preventDefault()
        video.volume = 0.5
        modal.style.display = 'flex'
        body.classList.add('locked')
        document.querySelector('.modal__wrapper').removeAttribute("closed", "true")
    })

    close.addEventListener('click', e =>{
        modal.style.display = 'none'
        body.classList.remove('locked')
        video.pause()
        playBtn.style.display = 'flex'
        pauseBtn.style.display = 'none'
        
        document.querySelector('.modal__wrapper').setAttribute("closed", "true")
        
    })

    modal.addEventListener('click', e => {
        if(e.target == modal){
            modal.style.display = 'none'
            body.classList.remove('locked')
            video.pause()
            
            document.querySelector('.modal__wrapper').setAttribute("closed", "true")
        }
        
    })
}

bindModal2('.how__whiteCircle', '.modal__wrapper', '.modal__close')



// let vid = document.querySelector(".vd23")
// const fullScreenMode = document.querySelector('.fullScreenMode')
// const videoct = document.querySelector('.video-ct')
// document.addEventListener('keydown', e => {
//     switch (e.key.toLowerCase()) {
//         case " ":
//         case "k":
//             togglePlay()
//             break

//         case "f":
//         case "а":
//             fullScreenMode1()
//             break
//     }
// })

// fullScreenMode.addEventListener('click', fullScreenMode1)


// function fullScreenMode1 () {
//     if (document.fullscreenElement == null) {
//         videoct.requestFullscreen()

//     }
//     else {
//         document.exitFullscreen()

//     }
// }

// document.addEventListener('fullscreenchange', () => {
//     videoct.classList.toggle('fullScreenMode', document.fullscreenElement)
// })

// vid.addEventListener('', togglePlay) 
    
//  function togglePlay () {
//     if (vid.paused) {
//         vid.play()
//     }
//     else {
//         vid.pause()
//     }
//  }


// vid.addEventListener('click', () => {
//     if (vid.muted) {
//         vid.muted = false
//     }
//     else {
//         vid.muted = true
//     }
// })

const video = document.querySelector('.how__video')
const playBtn = document.querySelector('.video__play-btn')
const pauseBtn = document.querySelector('.video__pause-btn')
playBtn.addEventListener('click', playBtnFunction)
pauseBtn.addEventListener('click', pauseBtnFunction)
let speedBtn = document.querySelector('.video__speed-btn')
const soundBar = document.querySelector('.video__sound-bar')
const soundProgress = document.querySelector('.sound-bar__progress')
const speaker = document.querySelector('.sound-speaker')
const speakerMuted = document.querySelector('.sound-speaker-muted')
speaker.addEventListener('click', speakerFunction)



function speakerFunction () {
    if (video.muted) {
        soundBar.value = 50
        video.volume = 0.5
        video.muted = false
        speakerMuted.style.transform = 'rotate(45deg) scale(0)'
        soundProgress.style.width = '50%'
        
    }
    else {
        video.muted = true
        speakerMuted.style.transform = 'rotate(45deg) scale(1)'
        soundBar.value = 0
        video.volume = 0
        soundProgress.style.width = 0
    }
}

soundBar.addEventListener('input', soundFunction)



function soundFunction () {
    let v = this.value
    console.log(v)

    video.volume = v / 100
    soundProgress.style.width = this.value + "%"

    
    if (this.value == 0) {
        video.muted = true
        speakerMuted.style.transform = 'rotate(45deg) scale(1)'
    }

    else if (this.value < 20) {
        video.muted = false
        speakerMuted.style.transform = 'rotate(45deg) scale(0)'
    }

    else {
        video.muted = false
        speakerMuted.style.transform = 'rotate(45deg) scale(0)'
    }
    

}

speedBtn.addEventListener('click', speedFunction)

function speedFunction() {

   let summary = video.playbackRate + 0.25
    if (summary > 2) 
        summary = 0.25
        video.playbackRate = 0.25
        video.playbackRate = summary 

    speedBtn.textContent = summary + ' ' + 'X'
    console.log(video.playbackRate)
}

document.addEventListener('keydown', e => {
    switch (e.key.toLowerCase()) {
    
            case ' ':
            case 'k':
                buttonsBody.classList.toggle('visibility')
                // <--im not letting these functions get caused since i dont for that thing to be activated while modal window isnt opened
                if (document.querySelector('.modal__wrapper').hasAttribute('closed')){
                    
                }
                else {
                    playBtnFunction()
                    
                }
                
                
                break
           case 'm':
            if (document.querySelector('.modal__wrapper').hasAttribute('closed')){
                    
            }
            else {
                speakerFunction()
            }
            //-->
            break
            
    }
})  

const buttonsBody = document.querySelector('.buttons__body')

video.addEventListener('click', () => {
    if (video.paused) {
        video.play()
        
    }
    else {
        video.pause() 
        
    }
})

function playBtnFunction () {
    if (video.paused) {
        video.play()
    }
    else {
        video.pause() 
    }
    
}

video.addEventListener('play', () => {
    pauseBtn.style.display = 'flex' 
    playBtn.style.display = 'none'
    buttonsBody.style.visibility = 'hidden'
    
})

video.addEventListener('pause', () => {
    pauseBtn.style.display = 'none'
    playBtn.style.display = 'flex'
    buttonsBody.style.visibility = 'visible'
})

function pauseBtnFunction () {
    if (video.paused) {
        video.play()
    } 
        else {
        
        video.pause()
    }

     
    
}


let progress = document.querySelector('.progress')
let videoFollowing = document.querySelector('.video__progress-following')
video.ontimeupdate = progressUpdate
progress.addEventListener('click', Rewind)


function progressUpdate() {
    progress.value = (100 * video.currentTime) / video.duration
    videoFollowing.style.width = progress.value + "%"
}

function Rewind() {
    this.value = 100 * event.offsetX / progress.offsetWidth
    video.currentTime = video.duration * event.offsetX / progress.offsetWidth
}



const fullscreenIcon = document.querySelector('.video__fullscreen-icon')
const videoWrapper = document.querySelector('.video__wrapper')
const videoLeaving = document.querySelector('.video__fullscreen-leaving-icon')
fullscreenIcon.addEventListener('click', fullscreenIconFucntion)




function fullscreenIconFucntion() {
    video.style.maxWidth = 'none'
    video.style.maxHeight = 'none'
    video.style.width = '100%'
    video.style.height = '100%'
    videoLeaving.style.display = 'flex'
    fullscreenIcon.style.display = 'none'
    
    if (document.videoWrapper == null) {
        videoWrapper.requestFullscreen()
        
    }
    
    else {
        document.exitFullscreen() 
        videoWrapper.style.width = 'none'
        videoWrapper.style.maxHeight = '500px'
        video.style.maxWidth = '1024px'
        video.style.maxHeight = '500px'
        
    }

    

    // videoLeaving.addEventListener('click', () => {
    //     videoWrapper.exitFullscreen()
    //     videoLeaving.style.display = 'none' 
    //     fullscreenIcon.style.display = 'flex'
        
    // })

    // if (video.matches('.vid__fullMode')) {
    //     fullscreenIcon.onclick = fullscreenLeaving

    //     function fullscreenLeaving() {
    //         video.classList.remove('vid__fullMode')
    //         videoWrapper.exitFullscreen()
    //     }
    // }

    // document.addEventListener('keydown', e => {
    //     switch (e.key.toLowerCase()) {
        
    //             case 'escape':
    //                 video.classList.remove('vid__fullMode')  
    //             break
    //     }
    // })  
}

videoLeaving.addEventListener('click', () => {
    document.exitFullscreen()
    videoWrapper.style.maxHeight = '500px'
        video.style.maxWidth = '1024px'
        video.style.maxHeight = '500px'
    videoLeaving.style.display = 'none'
    fullscreenIcon.style.display = 'flex'
    videoWrapper.style.width = 'none'
    
    
})

let arr = []

arr[0] = 'asap rocky'
arr[1] = ' lil uzi vert'
arr[2] = ' playboi carti'

arr.forEach((item, index, array, currentValue) =>{
    console.log(`${item} is at ${index} position in ${array} + ${currentValue}`)
})


const lamp = document.querySelectorAll('.lamp')
const dropdown = document.querySelector('.lamp__dropdown')
document.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-dropdown-button' || e.target.closest('[data-dropdown-button]'))) {
        e.target.classList.toggle('active')
        dropdown.style.display = 'flex'
    }

    else {
        dropdown.style.display = 'none'
    }

    
})

// function ghjf(GH) {
//     alert(GH)
// }

// ghjf(56 + 6)
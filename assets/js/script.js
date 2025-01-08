AOS.init()

// music
let tempMusic= ''
music = document.querySelector('.music')
if (tempMusic) {
    music.srv = tempMusic
}

// door mulai
function mulai() {
    window.scrollTo(0,0)

    // sound door
    let soundDoor = document.querySelector('.sound-door')
    soundDoor.play()

    // door section
    let doorSection = $('#door-section')
    let doors = document.querySelectorAll('.door')
    doors.forEach(function (door, index) {
        let direction = (index === 0) ? -1 : 1
        door.style.transform = 'rotateY(' + (70 * direction) + 'deg)'
    }) 

    // set time out music
    setTimeout(function () {
        // music play
        music.play()
        doorSection.css('transform', 'scale(6)')
    }, 600)

    // set time out for door
    setTimeout(function () {
        doorSection.css('opacity', 0)
        $('body').removeClass('overflow-hidden')
        $('body').addClass('transition')
        doorSection.css('display', 'none')
    }, 2000)
}


// button music
let isPlaying = true;

function toogleMusic(event) {
    event.preventDefault()

    const musicButton = document.getElementById(music-button)

    if(isPlaying) {
        musicButton.innerHTML = '<i class="fas fa-fw fa-pause"><i/>'
        musicButton.classList.remove('rotate')
        musicButton.style.transform = 'translateY(0)'
        music.pause()
    } else {
        musicButton.innerHTML = '<i class="fas fa-fw fa-compact-disc"><i/>'
        musicButton.classList.add('rotate')
        music.play()

    }

    isPlaying = !isPlaying
}



//  coundtdown
let coundtdownDate = new Date("Jan 28, 2025 11:00:00").getTime()

let x = setInterval(function () {
    let now = new Date().getTime()

    let distance = coundtdownDate - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000 )

    document.getElementById('countdown-wedding').innerHTML = `
                <div class="col-lg-1 col-3">
              <div class="text-center p-2 rounded text-bg-light">
                <h5>${days}</h5> Hari
            </div>
          </div>
            <div class="col-lg-1 col-3">
              <div class="text-center p-2 rounded text-bg-light">
                <h5>${hours}</h5> Jam
            </div>
          </div>
            <div class="col-lg-1 col-3">
              <div class="text-center p-2 rounded text-bg-light">
                <h5>${minutes}</h5> Menit
            </div>
          </div>
            <div class="col-lg-1 col-3">
              <div class="text-center p-2 rounded text-bg-light">
                <h5>${seconds}</h5> Detik
            </div>
          </div>
    `

    if (distance < 0) {
        clearInterval(x)
        document.getElementById('countdown-wedding').innerHTML = "<span class='text-center p-3 rounded text-light m-2'><h2>Acara Sudah Dimulai!</h2></span>"
    }
}, 1000)

// #### nama tamu 

const urlParams = new URLSearchParams(window.location.search)
const panggilan = urlParams.get('p')
const nama = urlParams.get('n')
const namaSambuatan = document.querySelector('#nama-tamu')
namaSambuatan.innerText = `${panggilan} ${nama},`
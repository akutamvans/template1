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
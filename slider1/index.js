let wrapper = document.querySelector('.wrapper')
let slider = document.querySelector('.slider')
let scrollDash = document.querySelector('.scroll')

scrollDash.addEventListener('mousedown', (event) => {
    let target = event.target
    let shift = event.clientX - target.getBoundingClientRect().left
    
    function move(pageX){
        let newPlaceForTarget = pageX - shift - target.clientLeft
        let sliderLeft = slider.getBoundingClientRect().left 
        let sliderRight = slider.getBoundingClientRect().right - target.offsetWidth

        if(newPlaceForTarget < sliderLeft) newPlaceForTarget = sliderLeft
        if(newPlaceForTarget > sliderRight) newPlaceForTarget = sliderRight 
        
        target.style.left = newPlaceForTarget - slider.offsetLeft + 'px'
    }

    function moveAt(event){
        move(event.pageX)
    }

    move(event.pageX)
    wrapper.addEventListener('mousemove', moveAt)
    wrapper.addEventListener('mouseup',() => {
        wrapper.removeEventListener('mousemove',moveAt)
    })
})

scrollDash.addEventListener('dragstart',(event) => {
    event.preventDefault()
})


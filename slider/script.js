let wrapper = document.querySelector('.wrapper')
let slider = document.querySelector('.slider')
let scrollDash = document.querySelector('.scroll')

scrollDash.addEventListener('mousedown',(event) => {
    let target = event.target;
    let shift = event.clientX - target.getBoundingClientRect().left 
    
    
    function move(pageX) {
        let targetLeft = pageX - shift
        let sliderLeft = slider.getBoundingClientRect().left 
        let sliderRight = slider.getBoundingClientRect().right
        
        if(targetLeft < sliderLeft) targetLeft = sliderLeft 
        if(targetLeft > sliderRight) targetLeft = sliderRight - scrollDash.offsetWidth
        
        target.style.left = targetLeft - slider.offsetLeft  + 'px'
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


document.body.addEventListener('mousedown',(event) => {
    event.preventDefault()
    const target = event.target
    if(!target.classList.contains('draggable')) return

    let body = document.body
    let shiftX = event.clientX - target.getBoundingClientRect().left
    let shiftY = event.clientY - target.getBoundingClientRect().top

    target.style.position = 'absolute'

    function take(pageX,pageY){
        let htmlEl = document.documentElement
        let newPlaceX = pageX - shiftX
        let newPlaceY = pageY - shiftY
        
        if(newPlaceY >= window.pageYOffset + htmlEl.clientHeight - target.offsetHeight) {
            newPlaceY = window.pageYOffset + htmlEl.clientHeight - target.offsetHeight
            window.scrollBy(0,10)
        }

        if(newPlaceY <= window.pageYOffset){
            newPlaceY = window.pageYOffset
            window.scrollBy(0,-10)
        }    
        
        if(newPlaceX >= window.pageXOffset + htmlEl.clientWidth - target.offsetWidth){
            newPlaceX = window.pageXOffset + htmlEl.clientWidth - target.offsetWidth
        }

        if(newPlaceX <= window.pageXOffset) {
            newPlaceX = window.pageXOffset
        }
        
        target.style.left = newPlaceX + 'px'
        target.style.top = newPlaceY + 'px'
    }
    
    function move(event) {
        take(event.pageX,event.pageY)
    }

    function onMouseUp(){
        body.removeEventListener('mousemove',move)
    }

    take(event.pageX,event.pageY)
    body.addEventListener('mousemove',move)
    body.addEventListener('mouseup', onMouseUp)
})

document.body.addEventListener('dragstart',(event) => {
    event.preventDefault()
})



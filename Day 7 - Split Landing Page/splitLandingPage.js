let panelA = document.getElementById('panelA')
let panelB = document.getElementById('panelB')

panelA.addEventListener('mouseover', ()=> {
    panelA.classList.remove('active', 'notActive')
    panelA.classList.remove('active')
    panelA.classList.add('active')
    panelB.classList.add('notActive')

})

panelB.addEventListener('mouseover', ()=> {
    panelB.classList.add('active')
    panelA.classList.remove('active')
})
empty = document.querySelector('#empty')
full = document.querySelector('#full')
incrementers = document.querySelectorAll('.incrementer')
h6 = document.querySelector('h6')

for (let i = 0; i < incrementers.length; i++){
    incrementers[i].addEventListener('click', () => {
        full.style.display = 'flex'
        empty.style.height = `${100 - (i * 12.5) - 12.5}%`
        full.style.height = `${(i * 12.5) + 12.5}%`
        h6.style.display = 'block'

        if (full.style.height == '100%') {
            empty.style.display = 'none'
        } else {
            empty.style.display = 'flex'
        }
    })
}
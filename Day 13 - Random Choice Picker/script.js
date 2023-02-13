textArea = document.querySelector('#textArea')
choiceArea = document.querySelector('#choiceArea')

textArea.addEventListener('keyup', () => {
    choiceArea.innerHTML = ''
    textArray = textArea.value.split(',').filter(function(entry) { return entry.trim() != ''; })
    for (let i = 0; i < textArray.length; i++) {
            newH2 = document.createElement('h2')
            newH2.innerText = textArray[i]
            choiceArea.appendChild(newH2)
    }
})


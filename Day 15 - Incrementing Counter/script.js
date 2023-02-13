h2 = document.querySelectorAll('h2')

increment = function (number, k, counter) {
    for (let i = 0; i < 251; i++) {
        setTimeout(function () {
            h2[k].innerText = counter
            counter += number
        }, 0+ (i*3))
    } 
}

increment(48, 0, 0)
increment(20, 1, 0)
increment(30, 2, 0)


/*
Create an input field to filter the list items
*/
const indexElement = document.querySelector('.tsd-index-panel')

onInput = (evt) => {
    var value = evt.target.value || ''
    value = value.toLowerCase().replace(/\s/g, '')
    var elements = indexElement.getElementsByTagName('li')
    Array.from(elements).forEach((element) => {
        const elementText = element.innerText.toLowerCase()
        element.setAttribute('style', (elementText.includes(value)) ? '' : 'display: none;')
    })
}

initInputField = () => {
    var inputElement = document.createElement('input')
    inputElement.id = 'filterInput'
    inputElement.setAttribute('placeholder', 'filter items')
    inputElement.setAttribute('type', 'text')
    inputElement.addEventListener('input', onInput)
    
    var contentElement = indexElement.firstChild
    contentElement.parentNode.insertBefore(inputElement, contentElement)
}

if (indexElement) {
    setInterval(() => {
        var filterInputElement = document.getElementById('filterInput')
        if (!filterInputElement) {
            initInputField()
        }
    }, 250)
}
let lightButton = document.querySelector('.white-theme')
let darkButton = document.querySelector('.black-theme')


lightButton.addEventListener('click', () => {
    document.body.classList.remove('theme--dark')
})

darkButton.addEventListener('click', () => {
    document.body.classList.add('theme--dark')
})

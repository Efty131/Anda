const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navberLinks = document.getElementsByClassName('naav-links')[0]

toggleButton.addEventListener('click', () => {
    navberLinks.classList.toggle('active')
})
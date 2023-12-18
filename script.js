const background = document.getElementById('background')
const password = document.getElementById('password')

password.addEventListener('input', (e) => {
    passwordLen = e.target.value.length

    background.style.filter = `blur(${20 - passwordLen * 2}px)`
})
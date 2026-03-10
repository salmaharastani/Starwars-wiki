document.addEventListener('DOMContentLoaded', () => {
  const numStars = 100
  const container = document.body.querySelector('#stars')
  for (let i = 0; i < numStars; i++) {
    let star = document.createElement('div')
    star.classList.add('star')
    star.style.top = Math.random() * window.innerHeight + 'px'
    star.style.left = Math.random() * window.innerWidth + 'px'
    star.style.animationDuration = Math.random() * 2 + 1 + 's'
    star.style.zIndex = -1
    container.append(star)
  }
})



const trailer = document.getElementById('trailer')
const trailerIcon = document.getElementsByClassName('material-icons')[0]

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2
  const y = e.clientY - trailer.offsetHeight / 2

  const keyFrames = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
  }

  trailer.animate(keyFrames, {
    duration: 800,
    fill: 'forwards'
  })
}

window.onmousemove = e => {
  const interactable = e.target.closest('.interactable'),
    interacting = interactable != null;

  animateTrailer(e, interacting);

  const dataType = interactable.dataset.type;
  if (interacting) {
    trailerIcon.innerHTML = dataType == 'video' ? 'skip_next' : 'videogame_asset'
  } else {
    trailerIcon.innerHTML = ''
  }
}

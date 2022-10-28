const subtitle = document.getElementsByClassName('card-subtitle')[0]

const createWord = (content, index) => {
  const span = document.createElement('span')
  span.innerHTML = content + ' ';
  span.classList.add('card-subtitle-word')
  span.style.transitionDelay = `${index * 40}ms`
  return span;
}

const addWord = (word, index) => subtitle.appendChild(createWord(word, index))

const createString = text => text.split(" ").map(addWord)

window.onload = createString("But in a much more real sense, I have no idea what I'm doing.")
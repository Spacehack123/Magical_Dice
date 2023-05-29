const img = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const answers = ['Tak!', 'Nie!', 'Może', 'No jasne, że nie!', 'No jasne, że tak!']

const shake = () => {
	img.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		checkAnswer()
		error.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem zapytania "?".'
		answer.textContent = ''
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie!'
		answer.textContent = ''
	}
	img.classList.remove('shake-animation')
}

const checkAnswer = () => {
	const number = Math.floor(Math.random() * 5)

	answer.innerHTML = `<span>Odpowiedź:</span> ${answers[number]}`
}

img.addEventListener('click', shake)

export default function initBurger() {
	const body = document.querySelector('body')
	const headerInner = document.querySelector('.header__inner')
	const navigation = document.querySelector('.navigation')
	const burgerBtn = document.querySelector('.burger-menu')

	burgerBtn.addEventListener('click', () => {
		body.classList.toggle('overflow')
		headerInner.classList.toggle('active')
		navigation.classList.toggle('active')
		burgerBtn.classList.toggle('active')
	})
}

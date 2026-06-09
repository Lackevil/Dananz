export default function initAccordion() {
	const accordionItems = document.querySelectorAll('.accordion__item')

	accordionItems.forEach(item => {
		item.addEventListener('click', () => {
			accordionItems.forEach(i => {
				if (i !== item) {
					i.querySelector('.accordion__text').classList.remove('active')
					i.querySelector('.accordion__arrow').classList.remove('active')
				}
			})
			item.querySelector('.accordion__text').classList.toggle('active')
			item.querySelector('.accordion__arrow').classList.toggle('active')
		})
	})
}

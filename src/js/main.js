// Styles

import '../scss/main.scss'

// Burger menu

import initBurger from './burger'

// Accordion

import initAccordion from './accordion'

// Start

document.addEventListener('DOMContentLoaded', () => {
	initBurger()
	initAccordion()
})

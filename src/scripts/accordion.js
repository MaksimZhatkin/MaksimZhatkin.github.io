const controls = document.querySelectorAll('.js-accordion-button')

controls.forEach((control) => {
  control.addEventListener('click', () => {
    const accordion = document.querySelector(
      `#${control.getAttribute('aria-controls')}`
    )

    if (accordion.getAttribute('data-expanded') == 'false') {
      accordion.setAttribute('data-expanded', true)
      control.setAttribute('aria-expanded', true)
      control.querySelector('.js-accordion-button-label').textContent = 'Скрыть'
    } else if (accordion.getAttribute('data-expanded') == 'true') {
      accordion.setAttribute('data-expanded', false)
      control.setAttribute('aria-expanded', false)
      control.querySelector('.js-accordion-button-label').textContent =
        'Показать все'
    }
  })
})

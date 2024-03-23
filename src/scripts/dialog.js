function enableBodyScrolling() {
  const scrollY = document.body.style.top
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.paddingInlineEnd = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
}

function disableBodyScrolling(scrollY) {
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollY}px`
  document.body.style.paddingInlineEnd = '15px'
  document.body.style.left = `${window.innerWidth > 1220 ? Math.abs(window.innerWidth / 2 - 1440 / 2) : 0}px`
}

// Function to initialize a modal dialog
function initModal(dialogNode, closeButtons, openButtons) {
  dialogNode.addEventListener('click', (e) => {
    let rect = e.target.getBoundingClientRect()

    if (
      rect.left > e.clientX ||
      rect.right < e.clientX ||
      rect.top > e.clientY ||
      rect.bottom < e.clientY
    ) {
      dialogNode.setAttribute('aria-hidden', 'true')
      dialogNode.close()
      enableBodyScrolling()
    }
  })

  openButtons.forEach((item) => {
    item.addEventListener('click', () => {
      disableBodyScrolling(window.scrollY)
      dialogNode.showModal()
      dialogNode.setAttribute('aria-hidden', 'false')
    })
  })

  closeButtons.forEach((item) => {
    item.addEventListener('click', () => {
      enableBodyScrolling()
      dialogNode.close()
      dialogNode.setAttribute('aria-hidden', 'true')
    })
  })
}

const feedbackDialog = document.querySelector('.js-dialog-feedback')
const openFeedbackDialog = document.querySelectorAll('.js-open-dialog-feedback')
const closeFeedbackDialog = document.querySelectorAll(
  '.js-close-dialog-feedback'
)
initModal(feedbackDialog, closeFeedbackDialog, openFeedbackDialog)

const orderCallDialog = document.querySelector('.js-dialog-order-call')
const openOrderCallDialog = document.querySelectorAll(
  '.js-open-dialog-order-call'
)
const closeOrderCallDialog = document.querySelectorAll(
  '.js-close-dialog-order-call'
)

initModal(orderCallDialog, closeOrderCallDialog, openOrderCallDialog)

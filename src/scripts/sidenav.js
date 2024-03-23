const sidenav = document.querySelector('.js-sidenav')
const openSidenavButton = document.querySelector('.js-sidenav-open')
const closeSidenavButton = document.querySelector('.js-sidenav-close')
const pageMain = document.querySelector('.js-page-main')

function openSidenav() {
  disableMainScrolling()
  sidenav.classList.add('page__sidenav_open')
}

function closeSidenav() {
  enableMainScrolling()
  sidenav.classList.remove('page__sidenav_open')
}

function enableMainScrolling() {
  pageMain.style.position = ''
  pageMain.style.left = ''
  pageMain.style.right = ''
}

function disableMainScrolling() {
  pageMain.style.position = 'fixed'
  pageMain.style.left = '0'
  pageMain.style.right = '0'
}

sidenav.addEventListener('click', (e) => {
  let rect = e.target.getBoundingClientRect()

  if (
    rect.left > e.clientX ||
    rect.right < e.clientX ||
    rect.top > e.clientY ||
    rect.bottom < e.clientY
  ) {
    closeSidenav()
  }
})

closeSidenavButton.addEventListener('click', () => {
  closeSidenav()
})

openSidenavButton.addEventListener('click', () => {
  openSidenav()
})

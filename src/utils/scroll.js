export const goToSection = (sectionClass) => {
  const sectionElement = document.getElementsByClassName(sectionClass)[0]
  window.scrollTo({
    top: sectionElement.offsetTop,
    behavior: 'smooth',
  })
}

export const goToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}

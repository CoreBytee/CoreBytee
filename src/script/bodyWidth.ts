function onBodyResize() {
    document.body.style.setProperty(
        '--body-width',
        `${document.body.clientWidth}px`
    )
}

onBodyResize()
window.addEventListener('resize', onBodyResize)
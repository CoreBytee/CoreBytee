function onResize(element: HTMLElement) {
    const elementHeight = element.clientHeight
    element.style.fontSize = elementHeight + "px"
    element.style.lineHeight = elementHeight + "px"
}

const resizeObserver = new ResizeObserver(
    (entries) => {
        for (const entry of entries) {
            const element = entry.target as HTMLElement
            onResize(element)
        }
    }
)

Array.from(
    document.querySelectorAll('[fontsize]')
).forEach(
    element => {
        resizeObserver.observe(element)
        onResize(element as HTMLElement)
    }
)
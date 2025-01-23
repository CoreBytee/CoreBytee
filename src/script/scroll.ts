function onScroll() {
    const percentage = window.scrollY / window.innerHeight * 100
    document.body.style.setProperty(
        "--scroll-percentage",
        percentage + "%"
    )

    document.body.style.setProperty(
        "--capped-scroll-percentage",
        Math.min(percentage, 100) + "%"
    )

    document.body.style.setProperty(
        "--reversed-capped-scroll-percentage",
        (100 - Math.min(percentage, 100)) + "%"
    )

    if (percentage === 0) {
        document.body.classList.add("scroll-top")
        document.body.classList.remove("scroll-bottom")
    } else if (percentage >= 100) {
        document.body.classList.add("scroll-bottom")
        document.body.classList.remove("scroll-top")
    } else {
        document.body.classList.remove("scroll-top")
        document.body.classList.remove("scroll-bottom")
    }

}

onScroll()
document.addEventListener(
    "scroll",
    onScroll
)
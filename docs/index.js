const ProjectBlocks = Array.from(document.querySelectorAll('.block-data'))
ProjectBlocks.forEach(
    (Block) => {
        Block.addEventListener(
            "mouseover",
            () => {
                Block.style.height = `${Block.querySelector(".data-body").offsetHeight}px`
            }
        )

        function MouseLeave() {
            Block.style.height = "auto"//`${Block.querySelector("img").offsetHeight}px`
        }

        Block.addEventListener(
            "mouseleave",
            MouseLeave
        )

        Block.querySelector("img").onload = MouseLeave

        MouseLeave()
    }
)
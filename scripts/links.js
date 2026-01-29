export const generateLinksHTML = () => {
    return `<h1 class="bandLinks"
             data-type="links">
             Links
             </h1>`
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const bioClickEvent = clickEvent.target

        if (bioClickEvent.dataset.type === "links") {
            window.alert(`This will take you to the links page`)
        }
    }
)


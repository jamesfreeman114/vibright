export const generateMerchHTML = () => {
    return `<h1 class="merchlist"
             data-type="merch">
             Merch</h1>`
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const bioClickEvent = clickEvent.target

        if (bioClickEvent.dataset.type === "merch") {
            window.alert(`This will take you to the merch page`)
        }
    }
)


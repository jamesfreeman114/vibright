export const generateBioHTML = () => {
    return `<h1 class ="bandBio"
             data-type="bio">
             Bio
             </h1>`
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const bioClickEvent = clickEvent.target

        if (bioClickEvent.dataset.type === "bio") {
            window.alert(`This will take you to the bio page`)
        }
    }
)


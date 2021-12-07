import { getInteriors, setInterior } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interiorstyle") {
            setInterior(parseInt(event.target.value))
        }
    }
)

const interiors = getInteriors()

export const InteriorHTML = () => {
    return `
        <select id="interiorstyle">
            <option value="0">Select an interior package</option>
            ${
                interiors.map(
                    (interior) => {
                        return `<option value="${interior.id}">${interior.style}</option>`
                    }
                ).join("")
            }
        </select>
    `
}
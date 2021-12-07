import { getPaintColors, setPaint } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paintstyle") {
            setPaint(parseInt(event.target.value))
        }
    }
)

const paints = getPaintColors()

export const PaintColorHTML = () => {
    return `
        <select id="paintstyle">
            <option name="paint" value="0">Select a paint color</option>
            ${
                paints.map(
                    (paint) => {
                        return `<option value="${paint.id}">${paint.style}</option>`
                    }
                ).join("")
            }
        </select>
    `
}



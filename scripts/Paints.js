import { getPaintColors } from "./database.js";

const paints = getPaintColors()

export const PaintColorHTML = () => {
    return `
        <select id="choices--paint">
            <option value="0">Select a paint color</option>
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



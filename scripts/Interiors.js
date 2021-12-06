import { getInteriors } from "./database.js";

const interiors = getInteriors()

export const InteriorHTML = () => {
    return `
        <select id="choices--interior">
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
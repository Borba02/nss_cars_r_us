import { getWheels } from "./database.js";

const wheels = getWheels();

export const WheelsHTML = () => {
    return `
        <select id="choices--wheels">
            <option value="0">Select a wheel package</option>
            ${
                wheels.map(
                    (wheel) => {
                        return `<option value="${wheel.id}">${wheel.style}</option>`
                    }
                ).join("")
            }
        </select>
    `
}
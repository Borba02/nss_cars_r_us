import { getWheels, setWheels } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheelstyle") {
            setWheels(parseInt(event.target.value))
        }
    }
)


const wheels = getWheels();

export const WheelsHTML = () => {
    return `
        <select id="wheelstyle">
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
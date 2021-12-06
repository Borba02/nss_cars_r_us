import { TechnologiesHTML } from "./Technologies.js"
import { PaintColorHTML } from "./Paints.js"
import { WheelsHTML } from "./Wheels.js"
import { InteriorHTML } from "./Interiors.js"

export const CarsRUs = () => {
    return `
        <h1>Cars R Us</h1>
        
        <article class="choices">
            <section class="choices--paint options">
                <h2>Paint Color</h2>
                ${PaintColorHTML()}
            </section>
            <section class="choices--interior options">
                <h2>Interior</h2>
                ${InteriorHTML()}
            </section>
            <section class="choices--tech options">
                <h2>Technology</h2>
                ${TechnologiesHTML()}
            </section>
            <section class="choices--wheel options">
                <h2>Wheels</h2>
                ${WheelsHTML()}
            </section>
        </article>
        `
}

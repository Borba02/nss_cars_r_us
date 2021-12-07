import { TechnologiesHTML } from "./Technologies.js"
import { PaintColorHTML } from "./Paints.js"
import { WheelsHTML } from "./Wheels.js"
import { InteriorHTML } from "./Interiors.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener("click", (event) => {
    if (event.target.id === "orderButton") {
      addCustomOrder();
    }
  });

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
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        `
}

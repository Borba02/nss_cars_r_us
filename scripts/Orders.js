import { getOrders } from "./database.js";
import { getPaintColors } from "./database.js";
import { getInteriors } from "./database.js";
import { getTechnology } from "./database.js";
import { getWheels } from "./database.js";

export const Orders = () => { const orders = getOrders();
    let html = "<ul>";
  
  const listItems = orders.map(buildOrderListItem);
  
    html += listItems.join("");
    html += "</ul>";
  
    return html;
  };
  
  const paints = getPaintColors();
  const interiors = getInteriors();
  const technology = getTechnology();
  const wheels = getWheels();
  
  const buildOrderListItem = (order) => {
  const foundPaints = paints.find((paint) => {return paint.id === order.paintId});
  const foundInteriors = interiors.find((interior) => {return interior.id === order.interiorId})
  const foundTechnology = technology.find((tech) => {return tech.id === order.techId})
  const foundWheels = wheels.find((wheel) => {return wheel.id === order.wheelId})
  const totalCost = foundPaints.price + foundInteriors.price + foundTechnology.price + foundWheels.price
  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }) 
    return `<li>
      Order #${order.id} cost ${costString}
    </li>`
  }
  
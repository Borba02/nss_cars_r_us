

const database = {
    customOrders: [
        {
        id: 1,
        paintId: 1,
        interiorId: 1,
        techId: 1,
        wheelId: 1 

    },
        {
        id: 2,
        paintId: 1,
        interiorId: 1,
        techId: 1,
        wheelId: 1 

        }],

    orderBuilder: {},
    paintColors: [
        { id: 1, style: "Silver", price: 500},
        { id: 2, style: "Midnight Blue", price: 750},
        { id: 3, style: "Firebrick Red", price: 1000},
        { id: 4, style: "Spring Green", price: 1250}
    ],
    interiors: [
        { id: 1, style: "Beige Fabric", price: 300},
        { id: 2, style: "Charcoal Fabric", price: 600},
        { id: 3, style: "White Leather", price: 900},
        { id: 4, style: "Black Leather", price: 1200}
    ],
    technology: [
        { id: 1, package: "Basic Package", price: 100},
        { id: 2, package: "Navigation Package", price: 600},
        { id: 3, package: "Visibility Package", price: 1100},
        { id: 4, package: "Ultra Package", price: 1500}
    ],
    wheels: [
        { id: 1, style: "17-inch Pair Radial Silver", price: 400},
        { id: 2, style: "17-inch Pair Radial Black", price: 800},
        { id: 3, style: "18-inch Pair Spoke Silver", price: 1200},
        { id: 4, style: "18-inch Pair Spoke Black", price: 1600}
    ]
};

export const getPaintColors = () => {
    return database.paintColors.map((paintColor) => ({ ...paintColor}));
};
export const getInteriors = () => {
    return database.interiors.map((interior) => ({ ...interior}));
};
export const getTechnology = () => {
    return database.technology.map((tech) => ({ ...tech}));
};
export const getWheels = () => {
    return database.wheels.map((wheel) => ({ ...wheel}));
};
export const getOrders = () => {
    return database.customOrders.map((order) => ({ ...order}));
  };

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    const newOrder = { ...database.orderBuilder };
    const lastIndex = database.customOrders.length - 1;
    newOrder.id = database.customOrders[lastIndex].id + 1;
    newOrder.timestamp = Date.now();
    database.customOrders.push(newOrder);
    database.orderBuilder = {};
    document.dispatchEvent(new CustomEvent("stateChanged"));
  };
  
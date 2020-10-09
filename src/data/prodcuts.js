import { imageCodes } from "./imageCodes";
import { productTypes } from "./enums/productType";
import { weightUOMs } from "./enums/weightUOMs";

export const products = [
    {
        id: "LA01",
        name: "Lays",
        code: "LA01",
        price: 8.0,
        realPrice: 10.0,
        imageCodes: [imageCodes.demoImg],
        primaryImageCode: imageCodes.demoImg,
        weight: 50.0,
        productType: productTypes.ITEM,
        categoryCode: "CH001",
        weightUOM: weightUOMs.KG,
        isTopic : true,
        topicCode : "TR01"
    },
    {
        id: "UC01",
        name: "Uncle Chips",
        code: "UC01",
        price: 8.0,
        realPrice: 10.0,
        imageCodes: [imageCodes.demoImg],
        primaryImageCode: imageCodes.demoImg,
        weight: 50.0,
        productType: productTypes.ITEM,
        categoryCode: "CH001",
        weightUOM: weightUOMs.KG,
    },
    {
        id: "SC01",
        name: "Surf Excel",
        code: "SC01",
        price: 8.0,
        realPrice: 10.0,
        imageCodes: [imageCodes.demoImg],
        primaryImageCode: imageCodes.demoImg,
        weight: 50.0,
        productType: productTypes.ITEM,
        categoryCode: "DT001",
        weightUOM: weightUOMs.KG,
    },
    {
        id: "TD001",
        name: "Tide",
        code: "TD01",
        price: 8.0,
        realPrice: 10.0,
        imageCodes: [imageCodes.demoImg],
        primaryImageCode: imageCodes.demoImg,
        weight: 50.0,
        productType: productTypes.ITEM,
        categoryCode: "WP001",
        weightUOM: weightUOMs.KG,
        isTopic : true,
        topicCode : "TR01"
    },
];

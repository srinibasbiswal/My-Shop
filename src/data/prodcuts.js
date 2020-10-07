import imageCodes from "./imageCodes";
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
    },
];

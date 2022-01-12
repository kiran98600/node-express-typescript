"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const getDataOfAllDataType = (dataTypesExample) => {
    return dataTypesExample;
};
app.get('/', (req, res, next) => {
    const Object = { Name: "Kiran Gurung", Age: 27, IsActive: true };
    const Array = [Object, { Name: "Dolma Sherpa", Age: 23, IsActive: false }];
    const ExampleData = {
        Object,
        Array
    };
    const ExampleDataResponse = getDataOfAllDataType(ExampleData);
    res.send(ExampleDataResponse);
});
const port = 5000;
app.listen(port, () => console.log("listening to port", port));

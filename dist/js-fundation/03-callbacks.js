"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByAge = exports.getUserById = void 0;
const customers_1 = require("../data/customers");
const users = [
    {
        id: 1,
        name: "John Doe",
    },
    {
        id: 2,
        name: "Jane Doe",
    },
];
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    if (!user) {
        return callback(`User not found with id ${id}`);
    }
    return callback(undefined, user);
};
exports.getUserById = getUserById;
const getUserByAge = (age, callback) => {
    const customer = customers_1.customers.filter((customer) => customer.age < age);
    if (!customer) {
        return callback(`Customer less than 18 years dosen't exist`);
    }
    if (customer.length === 0) {
        return callback(`No exixtse usuario con ese rango de edad`);
    }
    return callback(undefined, customer);
};
exports.getUserByAge = getUserByAge;
//# sourceMappingURL=03-callbacks.js.map
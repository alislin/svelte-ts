const { faker } = require("@faker-js/faker");
const _ = require("lodash");
faker.locale = "en";
const response = {
    Data: {},
    Status: 1,
    Error: null,
    ErrorCode: null,
    Succeeded: true,
    Failed: false
};
// 创建 faker 对象
module.exports = {
    user: _.times(20, function (n) {
        let result = JSON.parse(JSON.stringify(response));
        result.Data = {
            id: n,
            name: faker.name.findName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            address: faker.address.streetAddress(),
        };
        return result;
    }),
    customer_info: { language: faker.random.locale() }
}

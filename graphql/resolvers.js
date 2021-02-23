const provinceModel = require('../models/provinces.model')

const resolvers = {
    Query: {
        provinces: async () => {
            const result = await provinceModel.find().sort('id')
            return result
        },
    },
    Mutation: {
        world: () => 'Update!',
    }
};

module.exports = resolvers;
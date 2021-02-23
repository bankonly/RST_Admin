const provinceModel = require('../models/provinces.model')

const resolvers = {
    Query: {
        provinces: async () => {
            const result = await provinceModel.find()
            return result
        }
    },
    Mutation: {
        world: () => 'Update!',
    }
};

module.exports = resolvers;
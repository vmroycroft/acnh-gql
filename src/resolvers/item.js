const { Item } = require('../models');

module.exports = {
	Query: {
		items: async (_, args) => await Item.find(args).exec()
	},
	Mutation: {
		addItem: async (_, args) => {
			try {
				let response = await Item.create(args);
				return {
					success: true,
					message: null,
					item: response
				};
			} catch (e) {
				return {
					success: false,
					message: e.message,
					item: null
				};
			}
		}
	}
};

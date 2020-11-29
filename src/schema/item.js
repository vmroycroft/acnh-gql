const { gql } = require('apollo-server');

const schemas = gql`
	extend type Query {
		"""
		Returns all items.
		"""
		items: [Item]
	}

	extend type Mutation {
		addItem(name: String, category: String, location: String, sellPrice: Int, notes: String): AddItemResponse
	}

	type AddItemResponse {
		success: Boolean
		message: String
		item: Item
	}

	type Item {
		id: ID!
		name: String
		category: String
		location: String
		sellPrice: Int
		notes: String
	}
`;

module.exports = schemas;

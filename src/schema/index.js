const { gql } = require('apollo-server');
const itemSchema = require('./item');

const linkSchema = gql`
	type Query {
		_: Boolean
	}
	type Mutation {
		_: Boolean
	}
`;

module.exports = [linkSchema, itemSchema];

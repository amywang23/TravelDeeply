const mongoose = require('mongoose');

let OrganizationSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		url: {
			type: String,
			required: true
		},
		events: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Event'
			}
		]
	}
);

module.exports = mongoose.model('Organization', OrganizationSchema);
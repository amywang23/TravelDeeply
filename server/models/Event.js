const mongoose = require('mongoose');

let EventSchema = new mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		title: {
			type: String,
			required: true
		},
		organization: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		additionalDetails: String,
		location: {
			type: String,
			required: true
		},
		tags: [String],
		startTime: {
			type: Date,
			required: true
		},
		endTime: {
			type: Date,
			required: true
		},
		img: String
	}
);
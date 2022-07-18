const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema(
	{
		name: String,
		email: String,
		provider: String,
		provider_id: String,
		token: String,
		provider_pic: String,
		following: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Organization'
			}
		],
		signups: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Event'
			}
		]
	}
);

/**
* @param {String} organization_id
* @return {Promise}
* adds an organization id to a User's following
*/
UserSchema.methods.follow = function (organization_id) {
	if (this.following.indexOf(organization_id) === -1) {
		this.following.push(organization_id);
	}
	return this.save();
};

module.exports = mongoose.model('User', UserSchema);
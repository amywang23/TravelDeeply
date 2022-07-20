const User = require('../models/User.js');

module.exports = {
	/** Display list of all Users */
	user_list: (_req, res) => {
		res.send('User List');
	},

	/** Display details for a specific User */
	user_detail: (req, res) => {
		res.send('User detail: ' + req.params.id);
	},

	/** Display User create form on GET */
	user_create_get: (_req, res) => {
		res.send('User Create GET');
	},

	/** Handle User create on POST */
	user_create_post: (_req, res) => {
		res.send('User Create POST');
	},

	/** Display User delete form on GET */
	user_delete_get: (_req, res) => {
		res.send('User Delete GET');
	},

	/** Handle User delete on POST */
	user_delete_post: (_req, res) => {
		res.send('User Delete POST');
	},

	/** Display User update form on GET */
	user_update_get: (_req, res) => {
		res.send('User Update GET');
	},

	/** Handle User update on POST */
	user_update_post: (_req, res) => {
		res.send('User Update POST');
	}
};
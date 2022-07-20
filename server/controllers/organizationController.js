const Organization = require('../models/Organization.js');

module.exports = {
	/** Display list of all Organizations */
	organization_list: (_req, res) => {
		res.send('Organization List');
	},

	/** Display details for a specific Organization */
	organization_detail: (req, res) => {
		res.send('Organization detail: ' + req.params.id);
	},

	/** Display Organization create form on GET */
	organization_create_get: (_req, res) => {
		res.send('Organization Create GET');
	},

	/** Handle Organization create on POST */
	organization_create_post: (_req, res) => {
		res.send('Organization Create POST');
	},

	/** Display Organization delete form on GET */
	organization_delete_get: (_req, res) => {
		res.send('Organization Delete GET');
	},

	/** Handle Organization delete on POST */
	organization_delete_post: (_req, res) => {
		res.send('Organization Delete POST');
	},

	/** Display Organization update form on GET */
	organization_update_get: (_req, res) => {
		res.send('Organization Update GET');
	},

	/** Handle Organization update on POST */
	organization_update_post: (_req, res) => {
		res.send('Organization Update POST');
	}
};
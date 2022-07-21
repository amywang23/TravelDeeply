const Event = require('../models/Event.js');

module.exports = {
	/** Display list of all Events */
	event_list: (_req, res) => {
		res.send('Event List');
	},

	/** Display details for a specific Event */
	event_detail: (req, res) => {
		res.send('Event detail: '+req.params.id);
	},

	/** Display Event create form on GET */
	event_create_get: (_req, res) => {
		res.send('Event Create GET');
	},

	/** Handle Event create on POST */
	event_create_post: (_req, res) => {
		res.send('Event Create POST');
	},

	/** Display Event delete form on GET */
	event_delete_get: (_req, res) => {
		res.send('Event Delete GET');
	},

	/** Handle Event delete on POST */
	event_delete_post: (_req, res) => {
		res.send('Event Delete POST');
	},

	/** Display Event update form on GET */
	event_update_get: (_req, res) => {
		res.send('Event Update GET');
	},

	/** Handle Event update on POST */
	event_update_post: (_req, res) => {
		res.send('Event Update POST');
	}
};
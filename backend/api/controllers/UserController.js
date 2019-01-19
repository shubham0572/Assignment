/**
 * StudentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 * @url : 
 */

module.exports = {
	
	/**
	 * Login student using its code 
	 * @param STRING login_code
	 *
	 * @return INTIGER code
	 * @return STRING Status
	 */
	login: async function(req, res) {
		var isError = true;
		var response = {};
		var values = req.allParams();
		var username = values.username;
		var password = values.password;
		if(typeof username == 'undefined' || username == ''){
			return res.json({
				code :1001,
				status : 'Username and password doesnot matched.',
			});
		}
		else{
			var user = await User.find({ email: username, passwd:password });
			if(!user){
				return res.json({
					code :1001,
					status : 'Username and password doesnot matched.',
				});
			}
			else{
	    		response.code = 1000;
				response.status = 'Login Successful';
				response.user = user;
				return res.json(response);			
			}
		}
	},

	addRule: async function(req, res) {
		var isError = true;
		var response = {};
		var values = req.allParams();
		var name = req.param('name');
		var company = req.param('company');
		var rule1 = req.param('rule1');
		var formula = req.param('formula');
		var value = req.param('value');
		if(typeof name == 'undefined' || name == '' || company == '' || rule1 == '' || formula == '' || value == ''){
			return res.json({
				code :1001,
				status : 'Somthing is missing! please check.',
			});
		}
		else{
			var rules = await Rules.create({ name: name, company:company, rule1:rule1, formula:formula, value:value}).fetch();
			if(!rules){
				return res.json({
					code :1001,
					status : 'Some Quesy error',
				});
			}
			else{
				var rules = await Rules.find();
	    		response.code = 1000;
				response.status = 'Create Sussess full.';
				response.rules = rules;
				return res.json(response);			
			}
		}
	},

	getrule:async function(req, res){
		var response = {};
		var rules = await Rules.find();
		if(!rules){
				response.code = 1001;
				response.status = 'Data not found';
				return res.json(response);	
		}
		else{
			response.code = 1000;
			response.status = 'Success';
			response.rules = rules;
			return res.json(response);	
		}
	}
};


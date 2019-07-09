class ReqBodyValidator {
	static parseReqBodyValidationErrorsUser = errors => {
		let reqBodyValidationErrors = {
			account: {
				email: '',
				secondaryEmail: ''
			},
			contact: {
				firstName: '',
				lastName: '',
				phoneNumber: ''
			},
			company: {
				name: '',
				city: '',
				address: ''
			}
		};
		errors.forEach(error => {
			if (error.param === 'account.email') {
				reqBodyValidationErrors.account.email = error.msg;
			}

			if (error.param === 'account.secondaryEmail') {
				reqBodyValidationErrors.account.secondaryEmail = error.msg;
			}

			if (error.param === 'contact.firstName') {
				reqBodyValidationErrors.contact.firstName = error.msg;
			}

			if (error.param === 'contact.lastName') {
				reqBodyValidationErrors.contact.lastName = error.msg;
			}

			if (error.param === 'contact.phoneNumber') {
				reqBodyValidationErrors.contact.phoneNumber = error.msg;
			}

			if (error.param === 'company.name') {
				reqBodyValidationErrors.company.name = error.msg;
			}

			if (error.param === 'company.city') {
				reqBodyValidationErrors.company.city = error.msg;
			}

			if (error.param === 'company.address') {
				reqBodyValidationErrors.company.address = error.msg;
			}
		});

		return reqBodyValidationErrors;
	}; 
}

export default ReqBodyValidator;

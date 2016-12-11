export default function(state = {}, action) {
	switch(action.type) {
		case 'REGISTER_SAVE_USERNAME':
			console.log('my state --- ', state);
			const prevUsername = state.username;
			if(prevUsername.length === 0 && action.payload.length > 0) {
				return { ...state, username: action.payload, numberOfValidAnswers: ++state.numberOfValidAnswers};
			} else if (prevUsername.length > 0 && action.payload.length === 0) {
				return { ...state, username: action.payload, numberOfValidAnswers: --state.numberOfValidAnswers};
			} else {
				return { ...state }
			}
		case 'REGISTER_SAVE_PASSWORD':
			const prevPassword = state.password;
			if(prevPassword.length === 0 && action.payload.length > 0) {
				return { ...state, password: action.payload, numberOfValidAnswers: ++state.numberOfValidAnswers};
			} else if (prevPassword.length > 0 && action.payload.length === 0) {
				return { ...state, password: action.payload, numberOfValidAnswers: --state.numberOfValidAnswers};
			} else {
				return { ...state }
			}
		case 'REGISTER_SAVE_EMAIL':
			const prevEmail = state.email;
			if(prevEmail.length === 0 && action.payload.length > 0) {
				return { ...state, email: action.payload, numberOfValidAnswers: ++state.numberOfValidAnswers};
			} else if (prevEmail.length > 0 && action.payload.length === 0) {
				return { ...state, email: action.payload, numberOfValidAnswers: --state.numberOfValidAnswers};
			} else {
				return { ...state }
			}
		case 'REGISTER_SAVE_FIRSTNAME':
			const prevFirstName = state.firstName;
			if(prevFirstName.length === 0 && action.payload.length > 0) {
				return { ...state, firstName: action.payload, numberOfValidAnswers: ++state.numberOfValidAnswers};
			} else if (prevFirstName.length > 0 && action.payload.length === 0) {
				return { ...state, firstName: action.payload, numberOfValidAnswers: --state.numberOfValidAnswers};
			} else {
				return { ...state }
			}
		case 'REGISTER_SAVE_LASTNAME':
			const prevLastName = state.lastName;
			if(prevLastName.length === 0 && action.payload.length > 0) {
				return { ...state, lastName: action.payload, numberOfValidAnswers: ++state.numberOfValidAnswers};
			} else if (prevLastName.length > 0 && action.payload.length === 0) {
				return { ...state, lastName: action.payload, numberOfValidAnswers: --state.numberOfValidAnswers};
			} else {
				return { ...state }
			}
		case 'REGISTRATION_FAIL':
			return { ...state, isEmail: action.payload }
		default:
			return state;
	}
}

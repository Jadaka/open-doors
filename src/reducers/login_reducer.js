export default function(state = {}, action) {
	switch(action.type) {
		case 'SAVE_USERNAME':
			return {...state, username: action.payload }
		case 'SAVE_PASSWORD':
			return {...state, password: action.payload }
		case 'LOGIN_STATUS':
			console.log('login status payload', action.payload)
			return { ...state, isLoginSuccess: action.payload }
		default:
			return state;
	}
}

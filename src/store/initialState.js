const initialState = {
  register: {
    username            : '',
    password            : '',
    email               : '',
    firstName           : '',
    lastName            : '',
    numberOfFields      : 5,
    numberOfValidAnswers: 0,
    isValid             : false,
    isEmail             : true,
    isRegisterSuccess   : null,
  },
  login: {
    username            : '',
    password            : '',
    numberOfFields      : 2,
    numberOfValidAnswers: 0,
    isValid             : false,
    isLoginSuccess      : null,
  },
}

export default initialState;

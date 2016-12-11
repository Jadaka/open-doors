export const saveUsername = (payload)  => {
  return { type: 'SAVE_USERNAME', payload }
}

export const savePassword = (payload) => {
  return { type: 'SAVE_PASSWORD', payload }
}

export const postLogin = (payload) => {
  return { type: 'POST_LOGIN', payload }
}

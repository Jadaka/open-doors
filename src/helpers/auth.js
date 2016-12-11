function getToken() {
  return localStorage.getItem('token');
}

function isAuth() {
  return Boolean(getToken());
}

export function destroyToken() {
  localStorage.removeItem('token');
}

export function requireAuth(nextState, replace) {
  console.log('inside requireAuth');
  if (!isAuth()) {
    replace({
      pathname: '/login',
      state   : { nextPathname: nextState.location.pathname },
    })
  }
}

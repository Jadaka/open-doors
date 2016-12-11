import axios from 'axios';
import { browserHistory } from 'react-router';

export const POST_SIGNIN = 'POST_SIGNIN';

export function postLogin(data) {
  return axios.post('/api/auth/signin', data)
    .then((response) => {
      console.log('this is response', response)
      if (response.status === 200) {
        console.log('status 200')
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/search');
        return true;
      } else {
        return false;
      }
    });
}

export function postSignup(data) {
  return axios.post('/api/auth/signup', data)
    .then((response) => {
      console.log('this is response on signup', response);
      if (response.data.status === 200) {
        console.log('signup works!');
        localStorage.setItem('token', response.data.token);
        // browserHistory.push('/search');
        return true;
      } else {
        return false;
      }
    })
}


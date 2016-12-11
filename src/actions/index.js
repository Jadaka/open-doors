import axios from 'axios';
import { browserHistory } from 'react-router';

export const POST_SIGNIN = 'POST_SIGNIN';

export function postLogin(data) {
  axios.post('/api/auth/signin', data)
    .then((response) => {
      console.log('this is response', response)
      if (response.status === 200) {
        console.log('status 200')
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
        return true;
      } else {
        return false;
      }
    });
}

export function postSignup(data) {
  axios.post('/api/auth/signup', data)
    .then((response) => {
      if (response.data.status === 200) {
        localStorage.setItem('token', response.data.token);
      } else {
        console.log('inside here');
        return { type: 'REGISTRATION_FAIL', payload: false };
      }
    })
}

export function searchCompany(data) {
  console.log('this is data', data)
  axios.get(`/api/companies?search=${data}`)
    .then((response) => {
      if (response.data.status === 200) {
        localStorage.setItem('token', response.data.token);
      } else {
        console.log('inside here');
        return { type: 'REGISTRATION_FAIL', payload: false };
      }
    })
}


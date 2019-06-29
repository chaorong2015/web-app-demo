import api from 'akita';
api.setOptions({
  // @ts-ignore
  apiRoot: `${window.apiUrl ? window.apiUrl : '/'}`,
  init: {
    credentials: 'include',
    headers: {
      platform: 'app',
      'client-token': window.localStorage.getItem('login_token') || ''
    }
  }
});

export default api;

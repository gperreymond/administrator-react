import 'whatwg-fetch';

export default {
  login() {
    fetch('http://api.pprod.abibao.com/v1/auth/login', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'gperreymond@gmail.com',
        login: 'wse45fgc',
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }
};

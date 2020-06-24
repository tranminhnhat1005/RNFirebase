import global from '../global';

const checkLogin = (token) =>
  fetch('http://' + global.ip + '/app/check_login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token}),
  }).then((res) => res.text());

export default checkLogin;

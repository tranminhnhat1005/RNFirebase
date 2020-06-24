import global from '../global';

const signin = (username, password) =>
  fetch('http://' + global.ip + '/app/login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({username, password}),
  }).then((res) => res.json());
export default signin;

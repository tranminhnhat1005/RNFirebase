import global from '../global';

const signup = (username, name, password) =>
  fetch('http://' + global.ip + '/app/register.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({username, name, password}),
  }).then((res) => res.text());

export default signup;

const signup = (username, name, password) =>
  fetch('http://172.16.3.42/app/register.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({username, name, password}),
  }).then((res) => res.text());

export default signup;

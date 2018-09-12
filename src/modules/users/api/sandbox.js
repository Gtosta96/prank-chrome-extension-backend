const fetch = require('node-fetch');

(async () => {
  const getUser = await fetch('http://localhost:3000/users');
  await getUser.json();

  /* -- */

  const getUserById = await fetch('http://localhost:3000/user/:id');
  await getUserById.json();

  /* -- */

  const postUser = await fetch('http://localhost:3000/user', {
    method: 'POST',
    body: JSON.stringify({ email: 'gabrieltosta3@gmail.com', first_name: 'Gabriel', last_name: 'Tosta' }),
    headers: { 'Content-Type': 'application/json' },
  });
  await postUser.json();

  /* -- */

  const putUser = await fetch('http://localhost:3000/user/:id', {
    method: 'put',
    body: JSON.stringify({ email: 'gabrieltosta3@gmail.com', first_name: 'Gabriel', last_name: 'Tosta' }),
    headers: { 'Content-Type': 'application/json' },
  });
  await putUser.json();

  /* -- */

  const deleteUser = await fetch('http://localhost:3000/user/:id', {
    method: 'delete',
  });
  await deleteUser.json();
});

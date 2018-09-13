const fetch = require('node-fetch');

(async () => {
  let getUser = await fetch('http://localhost:3000/users');
  await getUser.json();

  /* -- */

  let getUserById = await fetch('http://localhost:3000/users/:id');
  await getUserById.json();

  /* -- */

  let postUser = await fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify({ email: 'gabrieltosta3@gmail.com', first_name: 'Gabriel', last_name: 'Tosta' }),
    headers: { 'Content-Type': 'application/json' },
  });
  await postUser.json();

  /* -- */

  let putUser = await fetch('http://localhost:3000/users/:id', {
    method: 'put',
    body: JSON.stringify({ email: 'gabrieltosta3@gmail.com', first_name: 'Gabriel', last_name: 'Tosta' }),
    headers: { 'Content-Type': 'application/json' },
  });
  await putUser.json();

  /* -- */

  let deleteUser = await fetch('http://localhost:3000/users/:id', {
    method: 'delete',
  });
  await deleteUser.json();
});

const fetch = require('node-fetch');

(async () => {
  const getUser = await fetch('http://localhost:3000/users');
  await getUser.json();

  /* -- */

  const getUserById = await fetch('http://localhost:3000/user/1');
  await getUserById.json();

  /* -- */

  const postUser = await fetch('http://localhost:3000/user', {
    method: 'POST',
    body: JSON.stringify({ first_name: 'First', last_name: 'Last' }),
    headers: { 'Content-Type': 'application/json' },
  });
  await postUser.json();

  /* -- */

  const putUser = await fetch('http://localhost:3000/user/1', {
    method: 'put',
    body: JSON.stringify({ userData: true }),
    headers: { 'Content-Type': 'application/json' },
  });
  await putUser.json();

  /* -- */

  const deleteUser = await fetch('http://localhost:3000/user/1', {
    method: 'delete',
  });
  await deleteUser.json();
});

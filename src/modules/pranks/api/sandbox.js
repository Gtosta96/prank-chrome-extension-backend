const fetch = require('node-fetch');

(async () => {
  let getPrank = await fetch('http://localhost:3000/pranks');
  await getPrank.json();

  /* -- */

  let getPrankById = await fetch('http://localhost:3000/pranks/:id');
  await getPrankById.json();

  /* -- */

  let postPrank = await fetch('http://localhost:3000/pranks', {
    method: 'POST',
    body: null,
    headers: { 'Content-Type': 'application/json' },
  });
  await postPrank.json();

  /* -- */

  let putPrank = await fetch('http://localhost:3000/pranks/5b9873d52f0c163568f9b111', {
    method: 'put',
    body: JSON.stringify({ id: '5b9873d52f0c163568f9b111', html: 'TEST HTML', css: 'TEST CSS' }),
    headers: { 'Content-Type': 'application/json' },
  });
  await putPrank.json();

  /* -- */

  let deletePrank = await fetch('http://localhost:3000/pranks/:id', {
    method: 'delete',
  });
  await deletePrank.json();
});

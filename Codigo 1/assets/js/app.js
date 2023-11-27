const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');//#id name
const $b = document.querySelector('#blog');
const $l = document.querySelector('#location');//id location

async function displayUser(username) {
  $n.textContent = 'cargando...';

  try {//manejo tray catch para errores
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    $n.textContent = `${data.name}`;//error al interpolar
    $b.textContent = `${data.blog}`;//error al interpolar
    $l.textContent = `${data.location}`;//error al interpolar
    
  } catch (err) {
    handleError(err);
  }
}


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`//error de nombre en variable
}

displayUser('stolinski').catch(handleError);
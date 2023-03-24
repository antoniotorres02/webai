const bio = document.querySelector('.biography');
const saveBtn = document.querySelector('#saveButton');
let hasEditedBio = false;

bio.addEventListener('input', function() {
  hasEditedBio = true;
  saveBtn.style.display = 'block';
});

saveBtn.addEventListener('click', function() {
  if (hasEditedBio) {
    const newBio = bio.querySelector('p').textContent.trim();
    const userId = 1; 
    fetch(`http://localhost:3002/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        biography: newBio
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al guardar la biografía');
      }
      hasEditedBio = false;
      saveBtn.style.display = 'none';
      alert('Se ha guardado la biografía');
    })
    .catch(error => {
      console.error(error);
      alert('Error al guardar la biografía');
    });
  }
});


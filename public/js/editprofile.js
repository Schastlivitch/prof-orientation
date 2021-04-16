const form = document.querySelector('form');
const editButton = document.querySelector('button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  editButton.remove()
  const header = document.createElement('h2');
  header.className = 'mt-3';
  header.innerText = 'Редактирование'
  const litDiv = document.createElement('div');
  const litBox = document.createElement('input');
  litBox.type = 'checkbox'
  litBox.value = 'Литература'
  litBox.className = 'form-check-input mt-2'
  litBox.id = 'litCheck'
  litDiv.append(litBox)
  const litLabel = document.createElement('label');
  litLabel.className = 'form-check-label mt-1 ms-3'
  litLabel.for = 'litCheck'
  litLabel.innerText = 'Литература'
  litDiv.append(litLabel)

  const medDiv = document.createElement('div');
  const medBox = document.createElement('input');
  medBox.type = 'checkbox'
  medBox.value = 'Медицина'
  medBox.className = 'form-check-input mt-2'
  medBox.id = 'medCheck'
  medDiv.append(medBox)
  const medLabel = document.createElement('label');
  medLabel.className = 'form-check-label mt-1 ms-3'
  medLabel.for = 'medCheck'
  medLabel.innerText = 'Медицина'
  medDiv.append(medLabel)
  
  const itDiv = document.createElement('div');
  const itBox = document.createElement('input');
  itBox.type = 'checkbox'
  itBox.value = 'IT'
  itBox.className = 'form-check-input mt-2'
  itBox.id = 'itCheck'
  itDiv.append(itBox)
  const itLabel = document.createElement('label');
  itLabel.className = 'form-check-label mt-1 ms-3'
  itLabel.for = 'itCheck'
  itLabel.innerText = 'IT'
  itDiv.append(itLabel)

  const button = document.createElement('button');
  button.className = 'w-100 btn btn-lg btn-success mt-3'
  button.innerText = 'Внести изменения'
  form.append(header, litDiv, medDiv, itDiv, button)

  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const boxesNode = form.querySelectorAll('input');
    const boxes = [...boxesNode]
    const values = [];
    boxes.map((box) => {
      if (box.checked) {
        values.push(box.value);
      }
    })
    const response = await fetch('/lk', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        intrests: values
      })
    })
    if (response.status === 200) {
      location.reload()
    }
  })
})

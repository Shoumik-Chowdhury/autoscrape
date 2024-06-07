export const search = (formData, setVehicleData, setOpen) => {
  fetch(`/getResults`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      data.output.forEach(row => {
        row.price = row.price.replace(/[$ ,]/g, ""),
        row.mileage = row.mileage.replace(/[,km]/g, "")
      })
      setVehicleData(data.output);
    })
    .catch(error => {
      console.error('getResult fetch error [/search]:', error);
    })
    .finally(() => {
      setOpen(false);
    })
 
}
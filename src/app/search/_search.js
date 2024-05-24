export const search = (formData, setVehicleData) => {
    fetch('http://localhost:3000/getResults', {
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
        // Exporting data?
        
      })
      .catch(error => {
        console.error('getResult fetch error [/search]:', error);
      });
  }
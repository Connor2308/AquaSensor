const apiurl = "";
fetch(apiurl)
    .then(response => response.json())
    .then(data => {
        filtersensor(data, targetcords);
    })
    .catch(error => console.error('error fetching data', error));

    const targetcords = {lat:  lng};

    function filtersensor(sensors, targetcords){
        const filtersensor = sensor.filter(sensors => {
            const sensorLat = sensor.latitude;
            const sensorLng = sensor.longitude;
            
            const distance = Math.sqrt(
                Math.pow(sensorLat - targetcords.lat, 2) +
                Math.pow(sensorlng - targetcords.lng, 2)
            );
            return distance < 0.1;
         });
         console.log('filtered sensors', filtersensor);
         return filtersensor;
    }

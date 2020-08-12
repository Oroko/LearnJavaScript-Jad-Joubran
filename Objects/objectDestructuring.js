/**
 * @param {object} userLocation
 */

 const getLatLng = userLocation => {
  //destructure into 2 variables: lat & lng
  const{lat,lng} = userLocation
  return `The Latitude is ${lat} and the Longitude is ${lng}`
 }

 const userLocation = {
   lat: 22.442323,
   lng: 2.5886,
 };

 console.log(getLatLng(userLocation))
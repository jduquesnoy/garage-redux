// TODO: add and export your own actions
export default function fetchCars(garage) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json());
  return {
    type: 'FETCH_CARS',
    payload: promise
  };
}

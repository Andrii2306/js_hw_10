import { emptyMarkup } from './markupFunctions';
import Notiflix from 'notiflix';

const URL = 'https://restcountries.com/v3.1/name';

function fetchCountries(name) {
  return fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      if (!response.ok || response.status === 404) {
        throw new Error();
      }
      return response.json();
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'Oops, there is no country with that name',
        emptyMarkup()
      );
      console.log(error);
    });
}

export { fetchCountries };

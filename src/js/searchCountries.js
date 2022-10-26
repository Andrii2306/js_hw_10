import { emptyMarkup } from "./markupFunctions";  
import Notiflix from "notiflix";

const URL = 'https://restcountries.com/v3.1/name';

export function searchCountries(name){

    return fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok || response.status === 404) {
                throw new Error();
            }
            return response.json();
        })
        .catch(error => {
            
            Notiflix.Notify.failure('Oops, there is no country with that name', emptyMarkup());
            console.log(error);
        })
}

const searchFormInput = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export {searchFormInput, countryList, countryInfo}; 

<div class="country-card">
    {{#each this}}
    <ul class="list flag-and-name">
        <li>
            <img class="country-flag" src="{{flags.svg}}" alt="{{name.official}}" width="50"/>
            <h2 class="country-name">{{name.official}}</h2>
        </li>
    </ul>
    <ul class="list additional-info">
        <li class="info-item">Capital: {{capital}}</li>
        <li class="info-item">Population: {{population}}</li>
        <li class="info-item">Languages: {{#each languages}}{{this}}{{#unless @last}},{{/unless}}{{/each}}</li>
    </ul>
</div>
{{/each}}
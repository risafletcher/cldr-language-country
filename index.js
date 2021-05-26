import languages from './data/languages.json';
import countries from './data/countries.json';
import locales from './data/locales.json';

export function getLanguages() {
    return languages;
}

export function getCountries() {
    return countries;
}

export function getLocales() {
    return locales.modern;
}

export function generateData() {
    return locales.modern.reduce((acc, locale) => {
        const [lc, cc] = locale.split('-');
        const language = languages.find((language) => language.code === lc);
        const country = countries.find((country) => country.code === cc);
        if (language && country) {
            acc.push({
                language,
                country,
                locale,
            });
        }
        return acc;
    }, []);
}


export function keyByCC() {
    return generateData().reduce((result, datum) => {
        const cc = datum.country.code;
        if (result[cc]) {
            result[cc].push(datum);
        } else {
            result[cc] = [datum];
        }
        return result;
    }, {});
}

export function keyByLC() {
    return generateData().reduce((result, datum) => {
        const lc = datum.language.code;
        if (result[lc]) {
            result[lc].push(datum);
        } else {
            result[lc] = [datum];
        }
        return result;
    }, {}); 
}

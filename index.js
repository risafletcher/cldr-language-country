const languages = require('./data/languages.json');
const countries = require('./data/countries.json');
const locales = require('./data/locales.json');

exports.getLanguages = function() {
    return languages;
}

exports.getCountries = function() {
    return countries;
}

exports.getLocales = function() {
    return locales;
}

exports.generateData = function() {
    return locales.reduce((acc, locale) => {
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

exports.keyByCC = function() {
    return exports.generateData().reduce((result, datum) => {
        const cc = datum.country.code;
        if (result[cc]) {
            result[cc].push(datum);
        } else {
            result[cc] = [datum];
        }
        return result;
    }, {});
}

exports.keyByLC = function() {
    return exports.generateData().reduce((result, datum) => {
        const lc = datum.language.code;
        if (result[lc]) {
            result[lc].push(datum);
        } else {
            result[lc] = [datum];
        }
        return result;
    }, {}); 
}

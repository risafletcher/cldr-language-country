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

exports.getByCC = function(cc) {
    if (!cc) {
        return new Error('A country code is required.');
    }
    return exports.generateData().filter(({ country }) => country.code === cc.toUpperCase());
}

exports.getByLC = function(lc) {
    if (!lc) {
        return new Error('A language code is required.');
    }
    return exports.generateData().filter(({ language }) => language.code === lc.toLowerCase());
}

exports.getByCountryName = function(name) {
    if (!name) {
        return new Error('A country name is required.');
    }
    return exports.generateData().filter(({ country }) => country.name.toUpperCase() === name.toUpperCase());
}

exports.getByLanguageName = function(name) {
    if (!name) {
        return new Error('A language name is required');
    }
    return exports.generateData().filter(({ language }) => {
        const uppercaseLanguageName = language.name.toUpperCase();
        return uppercaseLanguageName === name.toUpperCase() ||
            uppercaseLanguageName.includes(name.toUpperCase());
    });
}

exports.getByLocale = function(locale) {
    if (!locale || typeof locale !== 'string') {
        return new Error('A locale code (String) is required.');
    }
    return exports.generateData().filter((datum) => datum.locale.toUpperCase() === locale.toUpperCase());
}

exports.getByNativeName = function(name) {
    if (!name) {
        return new Error('A name is required.');
    }
    return exports.generateData().filter(({ language: { native } }) =>
        native === name || native.toUpperCase() === name.toUpperCase());
}


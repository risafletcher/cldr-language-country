# cldr-language-country
Tiny util that maps 2-character language codes (lc) and country codes (cc) to CLDR locale data. Especially useful for generating search queries.

## Install
```
npm i cldr-language-country
```

## Usage

| **function**     | **parameters** | **returns**                                                    |
|------------------|----------------|----------------------------------------------------------------|
| [generateData](#generateData)     | _none_         | Data for all locales                                           |
| [getLocales](#getLocales)       | _none_         | Array of all locales (string)                                  |
| [getCountries](#getCountries)     | _none_         | Array of all country data, with `name` and `code`              |
| [getLanguages](#getLanguages)     | _none_         | Array of all language data, with `name`, `native`, and `code`  |
| [keyByCC](#keyByCC)          | _none_         | Object containing all data, keyed by country `code`            |
| [keyByLC](#keyByLC)          | _none_         | Object containing all data, keyed by language `code`           |
| [getByCC](#getbycccc)          | cc(String)     | Array of all data whose `country.code` matches `cc`.           |
| [getByLC](#getbylclc)          | lc(String)     | Array of all data whose `language.code` matches `lc`.          |
| [getByCountryName](#getbycountryname) | name(string)   | Array of all data whose `country.name` matches `name`.         |
| [getByLanguage](#getbylanguagename)    | name(String)   | Array of all data whose `language.name` matches `name`.        |
| [getByLocale](#getbylocalelocale)      | locale(String) | Array of all data whose `locale` matches the provided `locale` |
| [getByNativeName](#getbynativenamename)  | name(String)   | Array of all data whose `language.name` matches `name`.        |


### `generateData()`
```javascript
import { generateData } from 'cldr-language-country';

const locales = generateData();
```
Result:
```javascript
[
    {
        language: {
            code: 'en',
            name: 'English',
            native: 'English'
        },
        country: {
            code: 'us',
            name: 'United States'
        },
        locale: 'en-US'
    } 
]
```

### `getLocales()`
```javascript
import { getLocales } from 'cldr-language-country';

const locales = getLocales();
```

Result:
```javascript
[
  'ps-AF', 'fa-AF', 'uz-AF', 'sv-AX', 'sq-AL', 'en-AL', 'ar-DZ',
  'fr-DZ', 'en-AS', 'ca-AD', 'en-AD', 'ln-AO', 'pt-AO', 'en-AI',
  ...continued
]
```
### `getCountries()`
```javascript
import { getCountries } from 'cldr-language-country';

const countries = countries();
```
Result:
```javascript
[
  { code: 'AF', name: 'Afghanistan' },
  { code: 'AX', name: 'Åland Islands' },
  { code: 'AL', name: 'Albania' },
  { code: 'DZ', name: 'Algeria' },
  { code: 'AS', name: 'American Samoa' },
  ...continued
]
```

### `getLanguages()`
```javascript
import { getLanguages } from 'cldr-language-country';

const languages = getLanguages();
```

Result:
```javascript
[
  { code: 'aa', name: 'Afar', native: 'Afar' },
  { code: 'ab', name: 'Abkhazian', native: 'Аҧсуа' },
  { code: 'af', name: 'Afrikaans', native: 'Afrikaans' },
  { code: 'ak', name: 'Akan', native: 'Akana' },
  { code: 'am', name: 'Amharic', native: 'አማርኛ' },
  ...continued
]
```

### `keyByCC()`
```javascript
import { keyByCC } from 'cldr-language-country';

const locales = keyByCC();
```
Result:
```javascript
{
    'CA': [
        {
            language: {
                code: 'en',
                name: 'English',
                native: 'English'
            },
            country: {
                code: 'CA',
                name: 'Canada'
            },
            locale: 'en-CA'
        },
        {
            language: {
                code: 'fr',
                name: 'French',
                native: 'Français'
            },
            country: {
                code: 'CA',
                name: 'Canada'
            },
            locale: 'fr-CA' 
        }
    ]
}
```


### `keyByLC()`
```javascript
import { keyByLC } from 'cldr-language-country';

const locales = keyByLC();
```
Result:
```javascript
{
    'en': [
        {
            language: {
                code: 'en',
                name: 'English',
                native: 'English'
            },
            country: {
                code: 'AE',
                name: 'United Arab Emirates'
            },
            locale: 'en-AE'
        },
        {
            language: {
                code: 'en',
                name: 'English',
                native: 'English'
            },
            country: {
                code: 'AG',
                name: 'Antigua and Barbuda'
            },
            locale: 'en-AG'
        },
        ...continued
    ]
}
```

### `getByCC(cc)`
```javascript
import { getByCC } from 'cldr-language-country';

const locales = getByCC('US');
```

Result:
```javascript
[
  {
    language: { code: 'en', name: 'English', native: 'English' },
    country: { code: 'US', name: 'United States' },
    locale: 'en-US'
  },
  {
    language: { code: 'es', name: 'Spanish', native: 'Español' },
    country: { code: 'US', name: 'United States' },
    locale: 'es-US'
  }
]
```

### `getByLC(lc)`
```javascript
import { getByLC } from 'cldr-language-country';

const locales = getByLC('zh');
```

Result:
```javascript
[
  {
    language: { code: 'zh', name: 'Chinese', native: '中文' },
    country: { code: 'CN', name: 'China' },
    locale: 'zh-CN'
  },
  {
    language: { code: 'zh', name: 'Chinese', native: '中文' },
    country: { code: 'CN', name: 'China' },
    locale: 'zh-CN'
  },
  ...continued
]
```

### `getByCountryName(name)`
```javascript
import { getByCountryName } from 'cldr-language-country';

const locales = getByCountryName('Japan');
```

Result:
```javascript
[
  {
    language: { code: 'en', name: 'English', native: 'English' },
    country: { code: 'JP', name: 'Japan' },
    locale: 'en-JP'
  },
  {
    language: { code: 'ja', name: 'Japanese', native: '日本語' },
    country: { code: 'JP', name: 'Japan' },
    locale: 'ja-JP'
  }
]
```

### `getByLanguageName(name)`
```javascript
import { getByLanguageName } from 'cldr-language-country';

const locales = getByLanguageName('Tagalog');
```
Result:
```javascript
[
  {
    language: { code: 'tl', name: 'Tagalog / Filipino', native: 'Tagalog' },
    country: { code: 'PH', name: 'Philippines' },
    locale: 'tl-PH'
  }
]
```

### `getByLocale(locale)`
```javascript
import { getByLocale } from 'cldr-language-country';

const locales = getByLocale('km-KH');
```

Result:
```javascript
[
  {
    language: { code: 'km', name: 'Khmer', native: 'ភាសាខ្មែរ' },
    country: { code: 'KH', name: 'Cambodia' },
    locale: 'km-KH'
  }
]
```

### `getByNativeName(name)`
```javascript
import { getByNativeName } from 'cldr-language-country';

const locales = getByNativeName('فارسی');
```

Result:
```javascript
[
  {
    language: { code: 'fa', name: 'Persian', native: 'فارسی', rtl: 1 },
    country: { code: 'AF', name: 'Afghanistan' },
    locale: 'fa-AF'
  },
  {
    language: { code: 'fa', name: 'Persian', native: 'فارسی', rtl: 1 },
    country: { code: 'IR', name: 'Iran, Islamic Republic of' },
    locale: 'fa-IR'
  }
]
```

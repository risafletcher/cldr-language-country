# cldr-language-country
Tiny util that maps 2-character language codes (lc) and country codes (cc) to CLDR locale data. Especially useful for generating search queries.

### Install
```
npm i cldr-language-country --save-dev
```

### Usage
The API provides three main functions: `generateData()` (default), `keyByCC()`, and `keyByLC()`.

#### `generateData()` (default)
```
import generateData from 'cldr-language-country';

const locales = generateData();
```
Result:
```
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

#### `keyByCC()`
```
import { keyByCC } from 'cldr-language-country';

const locales = keyByCC();
```
Result:
```
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


#### `keyByLC()`
```
import { keyByLC } from 'cldr-language-country';

const locales = keyByLC();
```
Result:
```
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
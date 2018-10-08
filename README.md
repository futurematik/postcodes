# Postcodes

Information about UK postcode areas and districts. Based on data prepared by [Chris Bell](https://www.doogal.co.uk/), Originally from the [Office For National Statistics Open Geography Portal](https://ons.maps.arcgis.com/home/search.html?t=content&q=tags%3AONS%20Postcode%20Directory&start=1&sortOrder=desc&sortField=modified).

## API

```typescript
export interface PostcodeArea {
  code: string;
  name: string;
}

export interface PostcodeDistrict {
  code: string;
  name: string;
  area: PostcodeArea;
}

export function getPostcodeDistrict(code: string): PostcodeDistrict;
export function getPostcodeArea(code: string): PostcodeDistrict;
```

## Examples

```javascript
const district = getPostcodeDistrict('E2');
```

```js
district = {
  code: 'E3',
  name:
    'Bow, Bromley-by-Bow, Old Ford, Mile End, Three Mills, London Gas Museum',
  area: {
    code: 'E',
    name: 'East London',
  },
};
```

## CLI

```bash
$ node cli.js E3
Looking up district E3
{ code: 'E3',
  name: 'Bow, Bromley-by-Bow, Old Ford, Mile End, Three Mills, London Gas Museum',
  area: { name: 'East London' } }
```

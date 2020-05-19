// by Ender Smith, Editor-in-Chief, AurekFonts

const routeByQueryString = () => {

  switch(queryStringParts[0]) {
    case '?script':
      document.getElementById('main').innerHTML = generateScriptScreen(scripts.find(script => script.query === queryStringParts[1]));
      break;
    case '?sort':
      document.getElementById('main').innerHTML = queryStringParts[1] === 'script' ? scriptSortScreen 
        : queryStringParts[1] === 'license' ? generateLicenseSortScreen()
        : queryStringParts[1] === 'foundry' ? generateFoundrySortScreen()
        : homeScreen;
      break;
    case '?font':
      document.getElementById('main').innerHTML = generateFontScreen(fonts.find(font => font.query === queryStringParts[1]));
      break;
    case '?foundry':
      document.getElementById('main').innerHTML = generateFoundryScreen(foundries.find(foundry => foundry.query === queryStringParts[1]));
      break;
    default:
      document.getElementById('main').innerHTML = homeScreen;
      break;
  };
};

window.onload = () => routeByQueryString();

const generateScriptScreen = (script) => {
  if (!script) return homeScreen;

  const fontsByScript = fonts.filter(font => font.scriptQuery === script.query || font.script === script.name || font.script === script.query);
  const freeFontsByScript = fontsByScript.filter(font => font.licenseTag === 'Free');
  const freeNCFontsByScript = fontsByScript.filter(font => font.licenseTag === 'Free NC');
  const licReqFontsByScript = fontsByScript.filter(font => font.licenseTag === 'Lic Req');

  const banner = script.bannerImage 
    ? `<p>
      <img src=${script.bannerImage} alt="${script.name}" title="${script.name}, font: ${script.bannerFont}"/>
    </p>`
    : ``;
  const title = `<h1>${script.name} Fonts</h1>`
  const description = `<p>${script.description}</p>`
  const freeFontHeader = freeFontsByScript.length 
    ? `<h2>Free for All Personal and Commercial Uses</h2>` 
    : ``;
  const freeFontListItems = freeFontsByScript.length 
    ? helpers.createFontListItems(freeFontsByScript) 
    : ``;
  const freeFontList =  freeFontsByScript.length 
    ? `<ul>${freeFontListItems}</ul>` 
    : ``;
  const freeNCFontHeader = freeNCFontsByScript.length 
    ? `<h2>Free for Personal Non-Commercial Use</h2>` 
    : ``;
  const freeNCFontListItems = freeNCFontsByScript.length 
    ? helpers.createFontListItems(freeNCFontsByScript) 
    : ``;
  const freeNCFontList = freeNCFontsByScript.length 
    ? `<ul>${freeNCFontListItems}</ul>`
    : ``;
  const licReqFontHeader = licReqFontsByScript.length 
    ? `<h2>License Required</h2>` 
    : ``;
  const licReqFontListItems = licReqFontsByScript.length 
    ? helpers.createFontListItems(licReqFontsByScript) 
    : ``;
  const licReqFontList = licReqFontsByScript.length 
    ? `<ul>${licReqFontListItems}</ul>`
    : ``;

  return linkHeader + 
    banner +
    title + 
    description +
    freeFontHeader +
    freeFontList +
    freeNCFontHeader +
    freeNCFontList +
    licReqFontHeader +
    licReqFontList
}

const generateFontScreen = (font) => {
  if (!font) return homeScreen;
  
  const year = font.year ? ` in ${font.year}` : ``;

  const exampleImage = font.exampleImage
    ? `<p>
      <img src=${font.exampleImage} alt="${font.name}" title="${font.name} Example"/>
    </p>` 
    : ``;
  const name = `<h1>${font.name} (${font.licenseTag})</h1>`;
  const credit = 
    `<p>
      <a href="${pathname}?script=${font.scriptQuery ? font.scriptQuery : font.script}">
        ${font.script}
      </a> font created by 
      <a href=${pathname}?foundry=${font.foundryQuery
        ? font.foundryQuery
        : font.foundry}
        >
        ${font.foundry}
      </a>${year}.
    </p>`;
  const artistNote = font.artistNote 
    ? `<p>${font.artistNote}</p>` 
    : ``;
  const description = `<p>${font.description}</p>`;
  const seeAlso = font.seeAlso
    ? `<p>See also:
      <a href="${pathname}?font=${font.seeAlsoQuery}">
        ${font.seeAlso ? font.seeAlso : font.seeAlsoQuery}
      </a>
    </p>`
    : ``;
  const license = `<p>${font.license}</p>`;
  const download = font.downloadUrl 
    ? `<p><a href="${font.downloadUrl}">Download (${font.downloadType})</a></p>` 
    : ``;
  const externalDownload = font.externalDownloadUrl 
    ? `<p>Download from <a href="${font.externalDownloadUrl}">${font.externalDownloadName}</a></p>` 
    : ``;
  const forLicensing = font.forLicensingUrl
    ?  `<p>For licensing, visit <a href="${font.forLicensingUrl}">${font.forLicensingName}</a></p>`
    : ``;
  const demo = font.class 
    ? `<h2>Demo</h2>
    <div class="${font.class}" style="font-size: ${font.textSize}" id="editText" contenteditable spellcheck="false">
      ${font.pangram}
    </div>`
    : '';
  const characters = font.charactersImages && font.charactersImages.length 
    ? `<h2>Characters</h2>`
    + createImagesFromList(font.charactersImages)
    : ``;
  const moreExamples = font.additionalImages && font.additionalImages.length 
    ? `<h2> Addtional Examples</h2>`
    + createImagesFromList(font.additionalImages)
    : ``;

  return linkHeader + 
    exampleImage + 
    name +  
    credit + 
    artistNote +
    description + 
    seeAlso +
    license + 
    download + 
    externalDownload + 
    forLicensing +
    demo + 
    characters +
    moreExamples;
};

const generateFoundryScreen = (foundry) => {
  if (!foundry) return homeScreen;
  
  const fontsByFoundry = fonts.filter(font => font.foundry === foundry.name);
  const freeFontsByFoundry = fontsByFoundry.filter(font => font.licenseTag === 'Free');
  const freeNCFontsByFoundry = fontsByFoundry.filter(font => font.licenseTag === 'Free NC');
  const licReqFontsByFoundry = fontsByFoundry.filter(font => font.licenseTag === 'Lic Req');

  const banner = foundry.bannerImage 
    ? `<p>
      <img src=${foundry.bannerImage} alt="${foundry.name}" title="${foundry.name}, font: ${foundry.bannerFont}"/>
    </p>`
    : ``;
  const name = `<h1>Fonts by ${foundry.name}</h1>`;
  const bio = foundry.bio 
    ? `<p>${foundry.bio}</p>` 
    : ``;
  const supportLink = foundry.supportLink 
    ? `<p>Support ${foundry.name} via 
      <a href="${foundry.supportLink}">
        ${foundry.supportText 
        ? foundry.supportText 
        : foundry.supportLink}
      </a>
    </p>` 
    : ``;
  const freeFonts = freeFontsByFoundry.length 
    ? `<h2>Free Fonts by ${foundry.name}</h2>` 
    + `<ul>${helpers.createFontListItems(freeFontsByFoundry)}</ul>` 
    : ``;
  const freeNCFonts = freeNCFontsByFoundry.length 
    ? `<h2>Free, Non-Commercial Fonts by ${foundry.name}</h2>` 
    + `<ul>${helpers.createFontListItems(freeNCFontsByFoundry)}</ul>` 
    : ``;
  const licReqFonts = licReqFontsByFoundry.length 
    ? `<h2>License-Required Fonts by ${foundry.name}</h2>` 
    + `<ul>${helpers.createFontListItems(licReqFontsByFoundry)}</ul>` 
    : ``;

  return linkHeader +
    banner +
    name +
    bio +
    supportLink +
    freeFonts +
    freeNCFonts +
    licReqFonts;
};

const generateLicenseSortScreen = () => {
  const title = `<h1>Fonts Sorted by License</h1>`

  const freeFonts = fonts.filter(font => font.licenseTag === 'Free');
  const freeFontsHeader = freeFonts.length 
    ? `<h2>Free for All Personal and Commercial Uses</h2>` 
    : ``;
  const freeFontsList = freeFonts.length 
    ? `<ul>${helpers.createFontListItems(freeFonts)}</ul>` 
    : ``;

  const freeNCFonts = fonts.filter(font => font.licenseTag === 'Free NC');
  const freeNCFontsHeader = freeNCFonts.length 
    ? `<h2>Free for Personal, Non-Commercial Use</h2>` 
    : ``;
  const freeNCFontsList = freeNCFonts.length 
    ? `<ul>${helpers.createFontListItems(freeNCFonts)}</ul>` 
    : ``;

  const licReqFonts = fonts.filter(font => font.licenseTag === 'Lic Req');
  const licReqFontsHeader = licReqFonts.length 
    ? `<h2>License Required</h2>` 
    : ``;
  const licReqFontsList = licReqFonts.length 
    ? `<ul>${helpers.createFontListItems(licReqFonts)}</ul>` 
    : ``;

  return linkHeader +
  homeBanner +
  title +
  freeFontsHeader +
  freeFontsList +
  freeNCFontsHeader +
  freeNCFontsList +
  licReqFontsHeader +
  licReqFontsList;
}

const generateFoundrySortScreen = () => {
  const title = `<h1>Fonts Sorted by Foundry / Artist</h1>`
  const foundryListItems = foundries.reduce((list, foundry) => list + 
    `<li>
      <a href="${pathname}?foundry=${foundry.query}">
        ${foundry.name}
      </a>
    </li>`, ``);
  const foundryList = `<ul>${foundryListItems}</ul>`;

  return linkHeader +
  homeBanner +
  title +
  foundryList
}



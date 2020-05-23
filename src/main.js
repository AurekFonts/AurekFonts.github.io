// by Ender Smith, Editor-in-Chief, AurekFonts

const routeByQueryString = () => {
  const totals = `${fonts.length} fonts, representing over ${scripts.length} writing systems and ${foundries.length} foundries & artists`
  console.log(totals);

  switch(queryStringParts[0]) {
    case '?script':
      document.getElementById('main').innerHTML = generateScriptScreen(scripts.find(script => script.query === queryStringParts[1]));
      break;
    case '?sort':
      document.getElementById('main').innerHTML = queryStringParts[1] === 'script' ? scriptSortScreen(totals) 
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
      document.getElementById('main').innerHTML = homeScreen(totals);
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

  const totalByScript = `Total ${script.name} fonts with entries: ${fontsByScript.length} (${freeFontsByScript.length} free + ${freeNCFontsByScript.length} non-commercial + ${licReqFontsByScript.length} license-required)`

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
    totalByScript +
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
    <p>Try out the font with custom text below! (If the demo does not seem to have loaded correctly, try refreshing.)</p>
    <div class="${font.class}" style="font-size: ${font.textSize}" >
      <span id="preText">
      </span>
      <div id="editText" contenteditable spellcheck="false">
        ${font.pangram}
      </div>
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
  
  const totalByFoundry = `Total ${foundry.name} fonts with entries: ${fontsByFoundry.length} (${freeFontsByFoundry.length} free + ${freeNCFontsByFoundry.length} non-commercial + ${licReqFontsByFoundry.length} license-required)`;

  const banner = foundry.bannerImage 
    ? `<p>
      <img src=${foundry.bannerImage} alt="${foundry.name}" title="${foundry.name}, font: ${foundry.bannerFont}"/>
    </p>`
    : ``;
  const name = `<h1>${foundry.name}</h1>`;
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
    totalByFoundry +
    supportLink +
    freeFonts +
    freeNCFonts +
    licReqFonts;
};

const generateLicenseSortScreen = () => {
  const title = `<h1>All Fonts</h1>`

  const freeFonts = fonts.filter(font => font.licenseTag === 'Free');
  const freeFontsHeader = freeFonts.length 
    ? `<h2>Free for All Personal and Commercial Uses</h2>` 
    : ``;
  const freeFontsList = freeFonts.length 
    ? `<ul class='card-list'>${helpers.createFontListItems(freeFonts)}</ul>` 
    : ``;

  const freeNCFonts = fonts.filter(font => font.licenseTag === 'Free NC');
  const freeNCFontsHeader = freeNCFonts.length 
    ? `<h2>Free for Personal, Non-Commercial Use</h2>` 
    : ``;
  const freeNCFontsList = freeNCFonts.length 
    ? `<ul class='card-list'>${helpers.createFontListItems(freeNCFonts)}</ul>` 
    : ``;

  const licReqFonts = fonts.filter(font => font.licenseTag === 'Lic Req');
  const licReqFontsHeader = licReqFonts.length 
    ? `<h2>License Required</h2>` 
    : ``;
  const licReqFontsList = licReqFonts.length 
    ? `<ul class='card-list'>${helpers.createFontListItems(licReqFonts)}</ul>` 
    : ``;

  const totalByLicense = `Total fonts catalogued: ${fonts.length} (${freeFonts.length} free + ${freeNCFonts.length} non-commercial + ${licReqFonts.length} license-required)`;

  return linkHeader +
  homeBanner +
  title +
  totalByLicense +
  freeFontsHeader +
  freeFontsList +
  freeNCFontsHeader +
  freeNCFontsList +
  licReqFontsHeader +
  licReqFontsList;
}

const generateFoundrySortScreen = () => {
  const title = `<h1>Foundries / Artists</h1>`
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



const createScaledImages = (font) => {
  const imageStyle=`max-height:5rem; height:auto; max-width: 7rem; vertical-align:top;`
  const example = font.exampleImage ? `<a href="${pathname}?font=${font.query}"><img src="${font.exampleImage}" style="${imageStyle}" /></a>` : '';
  const characters = font.charactersImages.length ? `<a href="${pathname}?font=${font.query}"><img src="${font.charactersImages[0]}" style="${imageStyle}" /></a>` : '';
  return `<div style="margin: 1rem;"><span>${example}\t\t${characters}</span></div>`;
};

const createFontListItems = (filteredFontList) => {
  return filteredFontList.reduce((list, font) => list + `<li><h3><a href="${pathname}?font=${font.query}">${font.name}</a></h3> (${font.description})<br />${createScaledImages(font)}</li>`, '');
};

const createImagesFromList = (imageList) => {
  return imageList.reduce((imageList, imagePath) => imageList + `<p><img src="${imagePath}" /></p>`, '');
};

const helpers = {
  createScaledImages: createScaledImages,
  createFontListItems: createFontListItems,
  createImagesFromList: createImagesFromList,
}
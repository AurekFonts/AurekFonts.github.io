// by Ender Smith, Editor-in-Chief, AurekFonts

const queryStringParts = window.location.search.split('=');
const pathname = window.location.pathname;

const linkHeader = 
  `<p id="link-header">
    <a href="${pathname}">[Home]</a>&nbsp;&nbsp;&nbsp;
    <a href="${pathname}?sort=license">[Fonts]</a>&nbsp;&nbsp;&nbsp;
    <a href="${pathname}?sort=script">[Alphabets]</a>&nbsp;&nbsp;&nbsp;
    <a href="${pathname}?sort=foundry">[Foundries&nbsp;/&nbsp;Artists]</a>&nbsp;&nbsp;&nbsp;
    <a href="${pathname}#contact-us">[Contact&nbsp;Us]</a>
  </p>`;
const homeBanner = `<p><a href="${pathname}"><img src="./AurekFontsBanner.png" alt="AurekFonts Home" title="AurekFonts Home"/></a></p>`;
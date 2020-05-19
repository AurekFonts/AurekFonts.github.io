// by Ender Smith, Editor-in-Chief, AurekFonts

const queryStringParts = window.location.search.split('=');
const pathname = window.location.pathname;

const linkHeader = 
  `<p>
    <a href="${pathname}">[AurekFonts Home]</a>&nbsp;&nbsp;&nbsp;
    <a href="${pathname}?sort=script">[Fonts by Script]</a>&nbsp;&nbsp;&nbsp;
    <a href="${pathname}?sort=license">[Fonts by License]</a>&nbsp;&nbsp;&nbsp;
    <a href="${pathname}?sort=foundry">[Fonts by Foundry / Artist]</a>&nbsp;&nbsp;&nbsp;
    <a href="${pathname}#contact-us">[Contact Us]</a>
  </p>`;
const homeBanner = `<p><a href="${pathname}"><img src="./AurekFontsBanner.png" alt="AurekFonts Home" title="AurekFonts Home"/></a></p>`;
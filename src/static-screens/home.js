// by Ender Smith, Editor-in-Chief, AurekFonts

const homeScreen = (totalsParam) => linkHeader +
`<div>
  <h1 id="aurekfonts-archive-for-aurebesh-fonts--more">
    AurekFonts
  </h1>` +
  homeBanner + 
  `<h3>
    The Aurebesh Font Archive
  </h3>
  <p>
    Welcome to AurekFonts, an archive of fonts from across the galaxy.
    We are in the never-ending process of expanding our library of in-universe fonts for the languages of the <em>Star Wars</em> universe.
  </p>
  <p>
    To date, we have catalogued ${totalsParam}!
  </p>
  <h1 id="fonts">Fonts</h1>
  <ul>
    <li>
      <ul>
        <li>
          <a href="${pathname}?sort=license">
            Fonts (Sorted by License)
          </a>
        </li>
        <li id="-fonts-sorted-by-scriptalphabet">
          <a href="${pathname}?sort=script">
            Alphabets & Writing Systems
          </a>
        </li>
        <li id="-fonts-sorted-by-license-free-personal-commercial-etc">
          <a href="${pathname}?sort=foundry">
            Foundries / Artists
          </a>
        </li>
      </ul>
    </li>
  </ul>
  <h4>
    Blog Tags
  </h4>
  <ul>
    <li>
      <a href="https://aurekfonts.tumblr.com/tagged/sacred-jedi-texts">
        Translating the Sacred Jedi Texts
      </a>
    </li>
  </ul>
  <h4 id="contact-us">
    Contact Us
  </h4>
  <p>If you have a font you would like to archive with us, you can message us at 
    <a href="https://twitter.com/AurekFonts">
      @AurekFonts
    </a>
    on twitter, or email us at
    <a href="mailto:AurekFonts@gmail.com">
      AurekFonts@gmail.com
    </a>
  </p>

  <p>
    <em>Note: We do our best to host any font that has a free license. 
      If a font is not free, we cannot host it here, but we can link to it, 
      (and we will do our best to archive it separately). 
      If you want us to host your original fonts here, you will need to give anyone who downloads it from here a free personal + commercial license. 
      If you like, we can add a donation link of your choosing on each of your fonts’ pages.
    </em>
  </p>

  <h4 id="contact-us">
    Support AurekFonts
  </h4>
  <p>
    You can support this project by donating at <a href="https://ko-fi.com/aurekfonts">ko-fi.com/aurekfonts</a>.
  </p>
</div>`
// by Ender Smith, Editor-in-Chief, AurekFonts

const foundries = [
  {
    name: 'AurekFonts',
    bannerImage: './banners/aurekfonts-page-banner.png',
    bannerFont: 'Aurebesh Rodian',
    query: 'AurekFonts',
    bio: undefined,
    supportLink: 'https://ko-fi.com/aurekfonts',
    supportText: 'ko-fi donation'
  },
  {
    name: 'Boba Fonts',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'BobaFonts',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined
  },
  {
    name: 'Cake',
    bannerImage: undefined,
    bannerFont: '',
    query: 'Cake',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined
  },
  {
    name: 'Camucia',
    bannerImage: undefined,
    bannerFont: '',
    query: 'Camucia',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined
  },
  {
    name: 'Convallarias Art',
    bannerImage: './banners/convallarias-art-page-banner.png',
    bannerFont: 'Aurebesh Calligraphy',
    query: 'ConvallariasArt',
    bio: undefined,
    supportLink: 'https://society6.com/convallarias',
    supportText: 'society6 (NSFW)'
  },
  {
    name: 'Crown',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'Crown',
    bio: `The Crown Type Company from Louie Mantia, Jr.`,
    supportLink: `https://crowntype.com`,
    supportText: `crowntype.com`
  },
  {
    name: 'David Occhino Design',
    bannerImage: './banners/david-occhino-design-banner.png',
    bannerFont: 'Aurebesh New Roman',
    query: 'DavidOcchino',
    bio: undefined,
    supportLink: 'http://davidocchino.com/portfolio/typography/index.html',
    supportText: 'his website'
  },
  {
    name: 'erikstormtrooper',
    bannerImage: './banners/erikstormtrooper-page-banner.png',
    bannerFont: 'Mandalorian',
    query: 'erikstormtrooper',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined
  },
  {
    name: 'Fonthead Design',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'FontheadDesign',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined
  },
  {
    name: 'Fragger MT',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'FraggerMT',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined
  },
  {
    name: 'Galactic Surplus Co.',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'GalacticSurplus',
    bio: `Galactic Surplus is a team of humans and droids who scavenge the galaxy to find unique items we thing you'll like. 
      We specialize in hand crafted goods that capture the love for a galaxy far far away while sometimes crossing over into 
      worlds you may be familiar with on this planet.`,
    supportLink: 'https://galacticsurplus.co/',
    supportText: 'galacticsurplus.co'
  },
  {
    name: 'Greg Kegel',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'DragonDesign',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined
  },
  {
    name: 'Iconian Fonts',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'IconianFonts',
    bio: undefined,
    supportLink: 'http://www.iconian.com/',
    supportText: 'Iconian.com'
  },
  {
    name: 'Jose Gonzalez Pareja',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'JoseGonzalezPareja',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined
  },
  {
    name: 'Kopanitsak',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'Kopanitsak',
    bio: undefined,
    supportLink: 'https://www.paypal.me/DKopanitsak',
    supportText: 'paypal donation'
  },
  {
    name: 'Legendsist',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'Legendsist',
    bio: `専門<br>
    レジェンズ&正史<br>
    ＝スピンオフが好きな学生です！<br>
    特に書籍マニア<br>
    英語力乏しいけど未邦訳にも手出してます<br>
    誰かの心にスター・ウォーズの種をまきたい！<br>
    <br>
    <a href="https://twitter.com/legendsist">@Legendsist</a> on Twitter`,
    supportLink: undefined,
    supportText: undefined
  },
  {
    name: 'Lucy Universe',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'LucyUniverse',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined
  },
  {
    name: 'Luke Daley',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'LukeDaley',
    bio: `Luke Daley is a UK-based prop/costume artist`,
    supportLink: `http://store.jjindustries.co.uk/`,
    supportText: `his web store`
  },
  {
    name: 'Meagan Bethel',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'MeaganBethel',
    bio: undefined,
    supportLink: `https://linktr.ee/doodlebethel`,
    supportText: `linktree`
  },
  {
    name: 'Michael Moss',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'MicahelMoss',
    bio: `<a href="http://whitespirals.com">website</a>, <a href="mailto:mechanismatic@gmail.com">email</a>`,
    supportLink: undefined,
    supportText: undefined
  },
  {
    name: 'Mike E. Web',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'MikeEWeb',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined
  },
  {
    name: 'Nick Tierce',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'NickTierce',
    bio: undefined,
    supportLink: 'https://NickTierce.com',
    supportText: 'NickTierce.com'
  },
  {
    name: 'Omega Design',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'OmegaDesign',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined
  },
  {
    name: 'Peter Schuster',
    bannerImage: './NewAurabesh/NewAurabesh-example.png',
    bannerFont: 'NewAurabesh',
    query: 'PeterSchuster',
    bio: '<a href="https://www.ko-fi.com/post/New-Aurabesh-A-Casual-Interview-with-Peter-Schu-Q5Q41QAX6">Aurabesh New: A Casual Interview with Peter Schuster</a>',
    supportLink: undefined,
    supportText: undefined,
  },
  {
    name: 'Pixel Sagas',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'PixelSagas',
    bio: undefined,
    supportLink: 'https://paypal.me/ShaynaDavidson',
    supportText: 'paypal donation',
  },
  {
    name: 'Sharkshock',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'Sharkshock',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined,
  },
  {
    name: 'ShyFoundry',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'ShyFoundry',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined,
  },
  {
    name: 'Star Wars Fonts',
    bannerImage: './SGAurebesh/SGAurebesh-example.png',
    bannerFont: 'SG Aurebesh',
    query: 'StarWarsFonts',
    bio: 'your guide to the fonts of star wars, both on screen and off',
    supportLink: 'https://twitter.com/starwarsfonts',
    supportText: '@starwarsfonts',
  },
  {
    name: 'Stormtrooper On Weekends',
    bannerImage: './banners/stormtrooper-on-weekends-page-banner.png',
    bannerFont: 'Aurebesh Droid',
    query: 'StormtrooperOnWeekends',
    bio: 'Stormtrooper On Weekends is a 501st Trooper.',
    supportLink: 'https://www.paypal.me/kitgutierrez',
    supportText: 'paypal donation',
  },
  {
    name: 'Sasha Tomych',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'SashaTomych',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined,
  },
  {
    name: 'Tycho Ordo',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'TychoOrdo',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined,
  },
  {
    name: 'Typodermic',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'Typodermic',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined,
  },
  {
    name: '\"Tommy\" of Escondido',
    bannerImage: undefined,
    bannerFont: undefined,
    query: 'TommyofEscondido',
    bio: undefined,
    supportLink: undefined,
    supportText: undefined,
  },
  {
    name: 'Vamplify',
    bannerImage: './banners/vamplify-page-banner.png',
    bannerFont: 'Nirvanabesh',
    query: 'Vamplify',
    bio: 'Vamplify is a graphic designer.',
    supportLink: 'https://www.teepublic.com/user/vamplify?utm_source=designer',
    supportText: 'teepublic',
  },
];
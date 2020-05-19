// by Ender Smith, Editor-in-Chief, AurekFonts

const scripts = [
  {
    name: 'Aurebesh',
    query: 'Aurebesh',
    bannerImage: './banners/aurebesh-banner.png',
    bannerFont: 'Sacul',
    description: `Aurebesh is by far the most common script used in the Star Wars galaxy. 
      Aurebesh has at least three variants, including those presently known as Droidobesh, Domabesh, and Dishabesh. 
      In fiction, Aurebesh is probably descended from the Old Tongue, an ancestor shared with the High Galactic Alphabet.`
  },
  {
    name: 'Clynese / Corellian',
    query: 'Clynese',
    bannerImage: './banners/clynese-banner.png',
    bannerFont: 'Clynese Hand',
    description: `Clynese is a Corellian calligraphic script created for The Last Jedi by James Clyne.`
  },
  {
    name: 'Domabesh',
    query: 'Domabesh',
    bannerImage: './banners/domabesh-banner.png',
    bannerFont: 'Domabesh Console',
    description: `Domabesh is a variation of Aurebesh that can be seen prominently on the walls of Jedha, and in use by the Rebel Alliance in Rogue One.`
  },
  {
    name: 'Droidobesh',
    query: 'Droidobesh',
    bannerImage: undefined,
    bannerFont: 'Aurebesh_droid',
    description: `Droidobesh is a variation of Aurebesh seen around the Droid Depot at Galaxy's Edge.`
  },
  {
    name: 'High Galactic [Latin] Alphabet',
    query: 'HighGalactic',
    bannerImage: './banners/high-galactic-page-banner.png',
    bannerFont: 'Sacul High Alphabet',
    description: `The High Galactic Alphabet is the in-universe equivalent of the real-world Latin Alphabet.
      Rather than hosting every Latin-Alphabet font in existence, we will instead only host or link to those that
      a) Appear on screen in a Star Wars film (including opening crawls),
      b) Are used in Star Wars promotional materials,
      c) Were intentionally designed to accompany another in-universe font.`
  },
  {
    name: 'Geonosian',
    query: 'Geonosian',
    bannerImage: './banners/geonosian-banner.png',
    bannerFont: 'Geonosian PM',
    description: `Geonosian is visible on banners in the Geonosian war-room.`
  },
  {
    name: '"Kitisakkullian" [unknown canon Jedi Text script]',
    query: 'Kitisakkullian',
    bannerImage: './banners/kitisakkullian-banner.png',
    bannerFont: 'Kitisakkullian',
    description: `"Kitisakkullian" is a fan name for a script created by Chris Kitsakkul for the Jedi Texts in The Last Jedi.`
  },
  {
    name: '\"The Old Tongue\" / Ur-Kittât',
    query: 'OldTongue',
    bannerImage: './banners/old-tongue-banner.png',
    bannerFont: 'Old Tongue Yavin',
    description: `"The Old Tongue" can be found on ancient Sith and Jedi temples and artifacts.`
  },
  {
    name: 'Mandalorian',
    query: 'Mandalorian',
    bannerImage: './banners/mandalorian-banner.png',
    bannerFont: 'Mandalorian',
    description: `Mandalorian can be seen in the cockpit for the Slave I in Attack of the Clones. Designed by Phil Metschan.`
  },
  {
    name: 'Naboo Futhark',
    query: 'NabooFuthark',
    bannerImage: undefined,
    bannerFont: undefined,
    description: `Naboo Futhark can be seen on the exteriors of Naboo Starfighters in The Phantom Menace.`
  },
  {
    name: 'Naboo Futhork',
    query: 'NabooFuthork',
    bannerImage: undefined,
    bannerFont: undefined,
    description: `Naboo Futhork can be seen on costumes and consoles of the Naboo in The Phantom Menace.`
  },
  {
    name: 'Outer Rim Basic',
    query: 'OuterRim',
    bannerImage: './banners/outerrimbasic-banner.png',
    bannerFont: 'Outer Rim Display',
    description: `Outer Rim Basic was first seen in The Phantom Menace. Previously identified as Huttese.`
  },
  {
    name: 'Protobesh / Coremaic',
    query: 'Protobesh',
    bannerImage: './banners/protobesh-banner.png',
    bannerFont: 'Protobesh Coremaic and Protobesh Square',
    description: `Protobesh is used extensively throughout the Jedi Texts seen in The Rise of Skywalker.`
  },
  {
    name: "'Ubese' [unknown canon script from Boushh's costume]",
    query: 'Ubese',
    bannerImage: './banners/ubese-banner.png',
    bannerFont: 'Ubese Boushh',
    description: `This unidentified script can be seen on Boushh's helmet and equipment.`
  },
  {
    name: "Unknown canon scripts",
    query: 'UnknownCanon',
    bannerImage: './banners/unknown-scripts.png',
    bannerFont: 'Boonta',
    description: `These are unknown canon scripts without any good guess as to what language it might represent.`
  },
  {
    name: "Atrisian",
    query: 'Atrisian',
    bannerImage: undefined,
    bannerFont: undefined,
    description: `A <em>Legends</em> script used in Lucas Arts games prior to the creation of Aurebesh.`
  },
  {
    name: "Ewokese",
    query: `Ewokese`,
    bannerImage: undefined,
    bannerFont: undefined,
    description: `<em>Legends</em> script seen in the Ewok cartoon series.`
  },
  {
    name: "'Jabba's Alphabet' [unknown <em>Legends</em> script from 1997 Pizza Hut boxes]",
    query: `JabbasAlphabet`,
    bannerImage: undefined,
    bannerFont: undefined,
    description: ` <em>Legends</em> script designed by Eric Larson for promotional Pizza Hut boxes in 1997, subsequently used in Racer Revenge.`
  },
  {
    name: "Unknown <em>Ledgends</em> scripts",
    query: 'UnknownLegends',
    bannerImage: undefined,
    bannerFont: undefined,
    description: `These are unknown <em>Legends</em> scripts without any good guess as to what language it might represent.`
  },
]
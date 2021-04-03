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
    bannerImage: './banners/DroidobeshNeueBETA-banner.png',
    bannerFont: '[redacted]',
    description: `Droidobesh is a variation of Aurebesh seen around the Droid Depot at Galaxy's Edge.`
  },
  {
    name: '"Naboo Aurebesh"',
    query: 'NabooAurebesh',
    bannerImage: undefined,
    bannerFont: undefined,
    description: `"Naboo Aurebesh" is the unofficial name for a variant of Aurebesh seen only in the cockpit of the Naboo Starfigher in The Phantom Menace.`
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
    name: '"Pseudobesh" [High Galactic Alphabet styled to look like Aurebesh]',
    query: 'Pseudobesh',
    bannerImage: './banners/pseudobesh-page-banner.png',
    bannerFont: '',
    description: `"Pseudobesh" refers to a style of type that seeks to imitate the shapes of Aurebesh in order to write another alphabet, usually High Galactic.`
  },
  {
    name: '"Coruscanti Aurebesh"',
    query: 'CoruscantiAurebesh',
    bannerImage: undefined,
    bannerFont: '',
    description: `"Coruscanti Aurebesh" is an unidentified variation of Aurebesh seen extensively on Coruscant and on Republic/Imperial spaceship consoles.`
  },
  {
    name: 'Geonosian',
    query: 'Geonosian',
    bannerImage: './banners/geonosian-banner.png',
    bannerFont: 'Geonosian PM',
    description: `Geonosian is visible on banners in the Geonosian war-room.`
  },
  {
    name: '"Ithorian"',
    query: 'Ithorian',
    bannerImage: undefined,
    bannerFont: undefined,
    description: `"Ithorian" is a fan name for a script seen on advertisements on Coruscant and Takobo.`
  },
  {
    name: '"Kitisakkullian"',
    query: 'Kitisakkullian',
    bannerImage: './banners/kitisakkullian-banner.png',
    bannerFont: 'Kitisakkullian',
    description: `"Kitisakkullian" is a fan name for a script created by Chris Kitsakkul for the Jedi Texts in The Last Jedi.`
  },
  {
    name: '\"The Old Tongue\" / Ur-Kittât',
    query: 'UrKittat',
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
    name: 'Numeric',
    query: 'Numeric',
    bannerImage: undefined,
    bannerFont: undefined,
    description: `Numeric fonts are fonts specifically representing or based upon systems of numerals seen onscreen.`
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
    name: 'Symbolic',
    query: 'Symbolic',
    bannerImage: './AttackPosition/AttackPosition-charset.png',
    bannerFont: 'Attack Position',
    description: `Symbolic fonts are fonts specifically representing or based upon non-lingual symbols seen onscreen.`
  },
  {
    name: 'Trade Federation Basic',
    query: 'TradeFederation',
    bannerImage: undefined,
    bannerFont: undefined,
    description: `Trade Federation was created for the Phantom Menace and can be seen most prominently on the numbered Battle Droids in the Phantom Menace.`
  },
  {
    name: `"Ubese"`,
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
    name: "Kittât",
    query: 'Kittat',
    bannerImage: undefined,
    bannerFont: undefined,
    description: `Sith Kittât was the ancient language of the Sith in <em>Legends</em>. It is not a mere replacement cipher, but a complete constructed language with its own grammar and vocabulary.`
  },
  {
    name: "Unknown <em>Legends</em> scripts",
    query: 'UnknownLegends',
    bannerImage: undefined,
    bannerFont: undefined,
    description: `These are unknown <em>Legends</em> scripts without any good guess as to what language it might represent.`
  },
]
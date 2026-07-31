export type Lang = 'it' | 'en';

// All user-facing copy for the translated pages. `it` and `en` share the same
// shape; components read translations[lang].<section>.<key>. Arrays (product
// items, gallery captions) are index-aligned with the image arrays in the
// components, so keep their order in sync.
export const translations = {
  it: {
    home: {
      heroTitle: 'Terra di Pietre',
      heroSubtitle: 'Dalla nostra terra, un olio autentico.',
      storyTitle: 'La Nostra Storia',
      features: [
        {
          title: 'Le origini',
          text: 'Terra di Pietre nasce dal profondo legame con la terra pugliese e dalla volontà di custodire una tradizione familiare fatta di passione, autenticità e rispetto per gli ulivi. Ogni raccolto rappresenta la continuità di una storia che si tramanda di generazione in generazione.',
        },
        {
          title: 'La lavorazione',
          text: 'La molitura avviene entro poche ore dalla raccolta mediante estrazione a freddo, un processo che consente di mantenere intatti aromi, profumi e proprietà nutrizionali dell’olio extravergine di oliva.',
        },
        {
          title: 'La raccolta',
          text: 'Le olive vengono raccolte nel periodo di maturazione ottimale, con cura e attenzione, per preservarne la freschezza e le caratteristiche organolettiche. La qualità nasce innanzitutto dalla selezione del frutto.',
        },
        {
          title: 'La nostra filosofia',
          text: 'Crediamo in un’agricoltura sostenibile, nel rispetto del territorio e nella valorizzazione delle eccellenze locali. Ogni bottiglia di Terra di Pietre racchiude autenticità, tradizione e la ricerca costante della qualità.',
        },
      ],
      featuredTitle: 'Prodotti in evidenza',
      products: [
        {
          name: 'Monocultivar Taggiasca 1L',
          subtitle: 'Olio Extravergine di oliva 100% Italiano',
          desc: 'E’ un olio franto da olive scelte di Cultivar 100% Taggiasca. Caratteristico è il gusto delicato, tipico della cultivar Taggiasca.',
        },
        {
          name: 'Mosto 5L',
          subtitle: 'Olio extravergine di oliva 100% Italiano',
          desc: 'E’ un olio ottenuto dalla prima spremitura a freddo. Quest’olio ha un colore giallo dorato dai riflessi verdi e al naso ha note più pronunciate di carciofo e oliva fresca.',
        },
      ],
      storeBtn: 'VAI ALLO STORE',
      ctaTitleLine1: 'Dalla nostra terra',
      ctaTitleLine2: 'alla tua tavola',
      ctaText:
        'Tradizione, qualità e passione si incontrano per dare vita a un olio extravergine che racconta il territorio e le persone che lo coltivano ogni giorno.',
      ctaStoreBtn: 'VAI ALLO STORE ONLINE',
      ctaContactBtn: 'CONTATTACI',
      whyTitle: 'Perché scegliere Terra di Pietre',
      cards: [
        {
          title: 'Olive selezionate',
          text: 'Solo olive raccolte con cura nel periodo ideale di maturazione.',
        },
        {
          title: 'Estrazione a freddo',
          text: 'Per preservare aromi, profumi e proprietà nutrizionali.',
        },
        {
          title: '100% Made in Italy',
          text: 'Un olio che nasce nel cuore della Puglia.',
        },
        {
          title: 'Qualità garantita',
          text: 'Tradizione, passione e attenzione in ogni fase della produzione.',
        },
      ],
    },
    nav: {
      prodotti: 'PRODOTTI',
      galleria: 'GALLERIA',
      contatti: 'CONTATTI',
      allProducts: 'Tutti i Prodotti',
      oil500: 'Olio 500ML',
      oil1l: 'Olio 1L',
      menu: 'Menu',
      openMenu: 'Apri il menu',
      closeMenu: 'Chiudi il menu',
    },
    footer: {
      followUs: 'Seguici su',
    },
    products: {
      heroTitle: 'Bottega',
      heroText:
        'Scopri la selezione di oli extravergine d’oliva Terra di Pietre. Ogni bottiglia racchiude la qualità delle migliori olive pugliesi, lavorate con cura per offrirti un prodotto autentico, ricco di profumi e sapori. Ordina comodamente online e ricevilo direttamente a casa.',
      orderTitle: 'Come ordinare',
      orderTextBefore: 'Per effettuare un ordine, scrivici un messaggio su WhatsApp al numero',
      orderTextAfter:
        '. Indicaci i prodotti e le quantità che desideri: ti risponderemo il prima possibile per confermare disponibilità, prezzo e spedizione.',
      orderBtn: 'SCRIVICI SU WHATSAPP',
      categoryTitle: 'OLIO',
      categoryItems: ['Olio di Oliva 500ML', 'Olio di Oliva 1L'],
      results: 'Visualizzazione di 1-21 di 133 risultati',
      sortDefault: 'ORDINAMENTO PREDEFINITO',
      sortPopularity: 'Popolarità',
      sortPriceAsc: 'Prezzo crescente',
      sortPriceDesc: 'Prezzo decrescente',
      items: [
        {
          name: 'Cultivar Ogliarola-Taggiasca 500ml',
          desc: 'Olio extravergine di oliva 100% Italiano "Cultivar Ogliarola-Taggiasca" 500ml',
        },
        {
          name: 'Cultivar Ogliarola-Taggiasca 1L',
          desc: 'Olio extravergine di oliva 100% Italiano "Cultivar Ogliarola-Taggiasca" 1L',
        },
        {
          name: 'Cultivar Ogliarola-Taggiasca 3L',
          desc: 'Olio extravergine di oliva 100% Italiano "Cultivar Ogliarola-Taggiasca" 3L',
        },
        {
          name: 'Monocultivar Taggiasca 500ml',
          desc: 'Olio extravergine di oliva 100% Italiano "Monocultivar Taggiasca" 500ml',
        },
        {
          name: 'Monocultivar Taggiasca 1L',
          desc: 'Olio extravergine di oliva 100% Italiano "Monocultivar Taggiasca" 1L',
        },
        {
          name: 'Mosto 5L',
          desc: 'Olio extravergine di oliva 100% Italiano "Mosto" latta da 5L',
        },
        {
          name: 'Oli DOP Riviera Ligure 500ml',
          desc: 'Olio extravergine di oliva DOP Riviera Ligure 100% Italiano 500ml',
        },
        {
          name: 'Olio Aromatizzato al Limone',
          desc: 'Olio extravergine di oliva aromatizzato al limone 100% Italiano 250ml',
        },
        {
          name: 'Olive Taggiasche in Salamoia',
          desc: 'Olive Taggiasche IGP in salamoia 100% Italiane vasetto 180g',
        },
      ],
    },
    gallery: {
      title: 'Galleria',
      subtitle:
        'Queste sono le nostre immagini: dai paesaggi della Valle Argentina ai frutti dei nostri ulivi, fino ai prodotti che nascono dalla nostra passione. Sfoglia la galleria e lasciati raccontare la storia di Roi.',
      showPrefix: 'Mostra',
      captions: [
        'La Valle Argentina',
        'Il frutto dell’olivo',
        'La nostra linea di prodotti',
        'Monocultivar Taggiasca',
        'Mosto 5L',
      ],
    },
    contact: {
      title: 'Contatti',
      subtitle:
        'Vieni a trovarci o scrivici: saremo felici di accoglierti e raccontarti la nostra storia.',
      addressTitle: 'Indirizzo',
      addressLines: ['Via Argentina Sud 1', '18010 Badalucco (IM)', 'Italia'],
      contactsTitle: 'Contatti',
      telLabel: 'Tel.',
      whatsappLabel: 'WhatsApp.',
      emailLabel: 'Email',
      mapTitle: 'Mappa - Via Argentina Sud 1, Badalucco (IM)',
      mapLink: 'Visualizza mappa più grande',
    },
  },

  en: {
    home: {
      heroTitle: 'Terra di Pietre',
      heroSubtitle: 'From our land, an authentic oil.',
      storyTitle: 'Our Story',
      features: [
        {
          title: 'Our origins',
          text: 'Terra di Pietre is born from a deep bond with the Apulian land and the wish to preserve a family tradition built on passion, authenticity and respect for the olive trees. Every harvest continues a story handed down from generation to generation.',
        },
        {
          title: 'The processing',
          text: 'Milling takes place within a few hours of harvesting through cold extraction, a process that keeps the aromas, scents and nutritional properties of the extra virgin olive oil fully intact.',
        },
        {
          title: 'The harvest',
          text: 'The olives are harvested at their optimal ripening period, with care and attention, to preserve their freshness and organoleptic qualities. Quality begins first and foremost with the selection of the fruit.',
        },
        {
          title: 'Our philosophy',
          text: 'We believe in sustainable agriculture, in respect for the land and in celebrating local excellence. Every bottle of Terra di Pietre embodies authenticity, tradition and a constant pursuit of quality.',
        },
      ],
      featuredTitle: 'Featured Products',
      products: [
        {
          name: 'Monocultivar Taggiasca 1L',
          subtitle: '100% Italian Extra Virgin Olive Oil',
          desc: 'An oil pressed from selected 100% Taggiasca cultivar olives. Its hallmark is the delicate taste typical of the Taggiasca cultivar.',
        },
        {
          name: 'Mosto 5L',
          subtitle: '100% Italian Extra Virgin Olive Oil',
          desc: 'An oil obtained from the first cold pressing. It has a golden yellow colour with green highlights and, on the nose, more pronounced notes of artichoke and fresh olive.',
        },
      ],
      storeBtn: 'GO TO STORE',
      ctaTitleLine1: 'From our land',
      ctaTitleLine2: 'to your table',
      ctaText:
        'Tradition, quality and passion come together to create an extra virgin oil that tells the story of the land and the people who cultivate it every day.',
      ctaStoreBtn: 'GO TO ONLINE STORE',
      ctaContactBtn: 'CONTACT US',
      whyTitle: 'Why choose Terra di Pietre',
      cards: [
        {
          title: 'Selected olives',
          text: 'Only olives carefully harvested at the ideal ripening period.',
        },
        {
          title: 'Cold extraction',
          text: 'To preserve aromas, scents and nutritional properties.',
        },
        {
          title: '100% Made in Italy',
          text: 'An oil born in the heart of Puglia.',
        },
        {
          title: 'Guaranteed quality',
          text: 'Tradition, passion and care at every stage of production.',
        },
      ],
    },
    nav: {
      prodotti: 'PRODUCTS',
      galleria: 'GALLERY',
      contatti: 'CONTACTS',
      allProducts: 'All Products',
      oil500: 'Oil 500ML',
      oil1l: 'Oil 1L',
      menu: 'Menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    footer: {
      followUs: 'Follow us',
    },
    products: {
      heroTitle: 'Shop',
      heroText:
        'Discover the Terra di Pietre selection of extra virgin olive oils. Every bottle captures the quality of the finest Apulian olives, carefully processed to bring you an authentic product, rich in aromas and flavours. Order conveniently online and have it delivered straight to your door.',
      orderTitle: 'How to order',
      orderTextBefore: 'To place an order, send us a message on WhatsApp at',
      orderTextAfter:
        '. Let us know the products and quantities you would like: we will reply as soon as possible to confirm availability, price and shipping.',
      orderBtn: 'MESSAGE US ON WHATSAPP',
      categoryTitle: 'OIL',
      categoryItems: ['Olive Oil 500ML', 'Olive Oil 1L'],
      results: 'Showing 1-21 of 133 results',
      sortDefault: 'DEFAULT SORTING',
      sortPopularity: 'Popularity',
      sortPriceAsc: 'Price: low to high',
      sortPriceDesc: 'Price: high to low',
      items: [
        {
          name: 'Cultivar Ogliarola-Taggiasca 500ml',
          desc: '100% Italian extra virgin olive oil "Cultivar Ogliarola-Taggiasca" 500ml',
        },
        {
          name: 'Cultivar Ogliarola-Taggiasca 1L',
          desc: '100% Italian extra virgin olive oil "Cultivar Ogliarola-Taggiasca" 1L',
        },
        {
          name: 'Cultivar Ogliarola-Taggiasca 3L',
          desc: '100% Italian extra virgin olive oil "Cultivar Ogliarola-Taggiasca" 3L',
        },
        {
          name: 'Monocultivar Taggiasca 500ml',
          desc: '100% Italian extra virgin olive oil "Monocultivar Taggiasca" 500ml',
        },
        {
          name: 'Monocultivar Taggiasca 1L',
          desc: '100% Italian extra virgin olive oil "Monocultivar Taggiasca" 1L',
        },
        {
          name: 'Mosto 5L',
          desc: '100% Italian extra virgin olive oil "Mosto", 5L tin',
        },
        {
          name: 'PDO Riviera Ligure Oil 500ml',
          desc: 'PDO Riviera Ligure extra virgin olive oil, 100% Italian, 500ml',
        },
        {
          name: 'Lemon-Flavoured Oil',
          desc: 'Lemon-flavoured extra virgin olive oil, 100% Italian, 250ml',
        },
        {
          name: 'Taggiasca Olives in Brine',
          desc: 'PGI Taggiasca olives in brine, 100% Italian, 180g jar',
        },
      ],
    },
    gallery: {
      title: 'Gallery',
      subtitle:
        'These are our images: from the landscapes of the Argentina Valley to the fruit of our olive trees, all the way to the products born of our passion. Browse the gallery and let it tell you the story of Roi.',
      showPrefix: 'Show',
      captions: [
        'The Argentina Valley',
        'The fruit of the olive tree',
        'Our product line',
        'Monocultivar Taggiasca',
        'Mosto 5L',
      ],
    },
    contact: {
      title: 'Contacts',
      subtitle:
        'Come visit us or drop us a line: we will be glad to welcome you and share our story.',
      addressTitle: 'Address',
      addressLines: ['Via Argentina Sud 1', '18010 Badalucco (IM)', 'Italy'],
      contactsTitle: 'Contacts',
      telLabel: 'Tel.',
      whatsappLabel: 'WhatsApp.',
      emailLabel: 'Email',
      mapTitle: 'Map - Via Argentina Sud 1, Badalucco (IM)',
      mapLink: 'View larger map',
    },
  },
} satisfies Record<Lang, unknown>;

export type Translation = (typeof translations)['it'];

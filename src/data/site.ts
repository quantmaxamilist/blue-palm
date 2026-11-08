// Blue Palm — all site copy.
// [V]  = verbatim from bluepalmproperty.co.uk (Nov 2026). Only obvious typos fixed (listed in README).
// [G]  = Google Business Profile "Blue Palm Apartments"
// [QW] = Quantweb UI / connective wording (no claims)
import imagesJson from './images.json';

export const SITE = 'https://www.bluepalmproperty.co.uk';

export const brand = {
  name: 'Blue Palm',
  long: 'Blue Palm Corporate Housing Cardiff', // [V] title suffix
  legal: 'Blue Palm Apartments Ltd', // [V] footer
  reg: 'Registered in England & Wales, Company No. 11749269, VAT No. GB351209527', // [V]
  since: 2019, // [V] "Since 2019"
};

export const contact = {
  email: 'info@bluepalmproperty.co.uk', // [V]
  reply: 'Usually replies within one working day', // [V]
  // No public phone number on the old site or the Google profile — add here when supplied.
  phone: '' as string,
  phoneHref: '' as string,
  // WhatsApp number (digits only, e.g. '447xxxxxxxxx') — shown as a "Message us on WhatsApp" link next to forms. Number is never printed on the page.
  whatsapp: '' as string,
};
export const tracking = { gtm: 'GTM-56BPQJ4L' }; // [client brief] keep the GTM container on every page

export const social = {
  facebook: 'https://www.facebook.com/BluePalmCorporateHousing', // [V]
  linkedin: 'https://www.linkedin.com/company/blue-palm-property', // [V]
};

// [G] Blue Palm Apartments — Schooner Wharf, Cardiff CF10 4EY — 5.0 ★ from 17 reviews (Nov 2026)
export const google = {
  name: 'Blue Palm Apartments',
  rating: 5.0,
  count: 17,
  address: 'Schooner Wharf, Cardiff CF10 4EY',
  geo: { lat: 51.4710645, lng: -3.1641291 },
  url: 'https://maps.google.com/?cid=17599792970164245306',
  reviewsUrl: 'https://www.google.com/maps/place/Blue+Palm+Apartments/@51.4710645,-3.1641291,17z/data=!4m8!3m7!1s0x486e1d4ff9f5ae63:0xf43f06756b0e933a!8m2!3d51.4710645!4d-3.1641291!9m1!1b1',
  writeUrl: 'https://www.google.com/search?q=Blue+Palm+Apartments+Cardiff#lrd=0x486e1d4ff9f5ae63:0xf43f06756b0e933a,3,,,',
  reviews: [
    { name: 'James Addams Williams', text: 'Great corporate apartments. Have stayed at two of their properties. Both were perfectly located, clean and superbly equipped. Will certainly use them again.' },
    { name: 'Bethan Lewis', text: 'Fantastic apartment, beautifully furnished and finished and so clean. Had everything we needed and more. Would definitely recommend!' },
    { name: 'Marc Owen', text: 'Great customer service. Comfortable, clean and relaxing apartment in a great location. Highly recommended.' },
    { name: 'Ben A', text: 'Great location, decor and general service. Alex was really helpful and responsive.' },
    { name: 'Teg Roberts', text: "Amazing property, couldn't ask for more" },
  ],
};

// Pontcanna base point (for distance on area pages)
export const bases = [
  { name: 'Pontcanna', lat: 51.4880, lng: -3.1990 },
  { name: 'Cardiff Bay', lat: 51.4633, lng: -3.1685 },
];

export type Img = { w: number; h: number; sizes: number[] };
export const images = imagesJson as Record<string, Img>;
export const img = (k: string, w = 1600) => {
  const i = images[k]; if (!i) return '';
  const s = i.sizes.filter((x) => x <= w).pop() ?? i.sizes[0];
  return `/img/p/${k}-${s}.webp`;
};
export const srcset = (k: string) => images[k]?.sizes.map((s) => `/img/p/${k}-${s}.webp ${s}w`).join(', ') ?? '';

export const clients = ['Netflix', 'Sky One', 'Bad Wolf', 'Disney', 'HBO', 'Pinewood', 'ITV', 'Paramount', 'BBC', 'S4C']; // [V] landlord page strip
export const clientLogo = (c: string) => `/img/logos/${c.toLowerCase().replace(/\s+/g, '-')}.png`;

// ───────────────── HOME ─────────────────
export const home = {
  title: 'Serviced Apartments Cardiff | Corporate Housing – Blue Palm', // [V]
  desc: 'Fully serviced corporate apartments in Pontcanna & Cardiff Bay. Flexible long-term stays for professionals, relocations and production teams. Book today.', // [V]
  h1a: 'Corporate Housing in Cardiff', // [V]
  h1b: 'Considered Homes for Professionals on Assignment', // [V]
  lede: 'Fully serviced corporate apartments in Pontcanna, Cardiff. Flexible long-term stays for professionals, relocations and production teams.', // [V]
  designedH: 'Designed for living, built for professionals.', // [V]
  designed: "Pontcanna is Cardiff's most walkable, well-connected neighbourhood — and the reason so many production teams and relocating professionals choose to base themselves here. You're five minutes from Bute Park and the River Taff, ten minutes' walk from Cardiff city Centre, and close to Wales' major studio complexes, making it ideal for anyone working on production, project or relocation assignments. Pontcanna Street itself is lined with independent cafés, restaurants and delis, so guests have everything they need on their doorstep without needing a car. Each Blue Palm apartment sits on a quiet residential street just off this hub, giving guests a genuine \"home\" base rather than a hotel room, with none of the compromises of short-term serviced accommodation.", // [V]
  ideal: 'Ideal for professionals, relocations, and project teams. Perfect for long term stays. Easy, reliable booking.', // [V]
  featured: [
    { slug: 'penhill-rd', name: 'Penhill Rd, Pontcanna', spec: '2 Bed | 1 Bathroom', d: "A bright, tastefully renovated two-bedroom apartment on a quiet residential street just off Pontcanna's main strip. Full kitchen, dedicated workspace, high-speed WiFi and off-street parking, with Bute Park and the city centre both within easy walking distance — ideal for a single guest or small team on an extended stay." },
    { slug: 'hamilton-top-floor', name: 'Hamilton Street, Pontcanna', spec: '2 Bed | 1 Bathroom', d: "A well-appointed two-bedroom apartment finished to a high standard, close to Pontcanna Street's cafés and restaurants. Comfortable living space, full kitchen and fast WiFi make it a genuine home away from home for professionals working on long-term placements or productions in Cardiff." },
    { slug: 'wyndham-crescent', name: 'Wyndham Crescent, Pontcanna', spec: '2 Bed | 1 Bathroom', d: 'Set on a leafy residential crescent, this two-bedroom apartment combines privacy with easy access to central Cardiff and major studio locations. Thoughtfully furnished throughout, with everything guests need for a comfortable, self-sufficient stay of any length.' },
  ], // [V]
  whyH: 'Why choose Blue Palm for serviced apartments?', // [V]
  why: 'Blue Palm offers a simple solution for companies looking to house their personnel in Cardiff whilst on work placements. Each of our fully serviced apartments has been designed to inspire a fresh sense of wellbeing and creativity in our guests, leading to higher levels of satisfaction amongst your team. The way we see it, running a successful company comes with enough challenges - booking high quality corporate housing shouldn’t be one of them.', // [V]
  stepsH: 'How Booking Works', // [V] ("How Booking Works?")
  steps: [
    { t: 'Enquire', d: 'Contact us on our online form, provide us with your check-in and check-out dates, number of guests, and any requirements (parking, pet-friendly, etc.)' },
    { t: 'Confirm', d: "We'll match you to the right apartment and send over terms, including corporate invoicing and VAT documentation if required." },
    { t: 'Move in', d: 'Keys, welcome guide and full support from day one, with maintenance issues resolved quickly for the length of your stay.' },
  ], // [V]
  trusted: 'Trusted by production teams from', // [V]
  saying: 'What People Are Saying', // [V]
  testimonials: [
    { q: 'I thoroughly enjoyed my stay. It really was a home from home for nearly a year! When working the hours we do I always felt safe there no matter what time I got home, I will miss Pontcanna. Any needs were always met and when things needed fixing it was sorted straight away. Thank you for making it a perfect place to stay.', n: 'Sarah Dibsdall', c: 'Netflix' },
    { q: 'We loved our time at Fairleigh Road and already miss it! It was the perfect home while working on a production in Cardiff for multiple months. Tastefully renovated with all amenities, great Pontcanna location on a quiet street but central to all the cafes, restaurants, shops of Pontcanna Street and adjacent to Bute Park. It is well-serviced and maintained. We would love to return here again.', n: 'Jessica Levin', c: 'Bad Wolf' },
    { q: 'Our stay here was amazing. The house was very cosy, quiet and warm and the location, close to the park and city centre was great. Any maintenance issues were responded to quickly. We loved staying there and would definitely recommend it to family and friends.', n: 'Amir Willson', c: 'Bad Wolf' },
    { q: "I couldn't have found a better place to live for my extended stay in Wales. Not only was the apartment beautiful and spacious, but I was very well tended to, management was responsive and thoughtful. I couldn't have been more grateful to have an apartment that felt like my home away from home.", n: 'Max Taylor', c: 'Disney' },
  ], // [V]
  faq: [
    { q: 'What is the minimum length of stay?', a: "Our apartments are designed for extended stays, typically from one month upwards, though we're happy to discuss shorter placements for production and project teams." },
    { q: 'Can you invoice companies directly, with VAT receipts?', a: 'Yes. We regularly bill production companies and corporate clients directly and can provide full VAT invoices for your accounts team.' },
    { q: 'Is parking included?', a: "Some of our Pontcanna apartments include parking — let us know when you enquire and we'll confirm availability for your chosen property." },
    { q: 'Are the apartments pet-friendly?', a: "Some of our properties are pet-friendly. Mention this in your enquiry and we'll match you to a suitable apartment. Please note Extra deposits are taken to accommodate pets stays." },
    { q: 'How quickly are maintenance issues resolved?', a: "Any maintenance requests during your stay are responded to promptly, so your team's stay is never disrupted." },
  ], // [V]
  contactNote: 'For booking enquiries, please include desired check-in & check-out dates, number of guests, whether parking is needed, whether you’re looking for a pet-friendly property, as well as any other requirements.', // [V]
};

// ───────────────── PROPERTIES ─────────────────
export type Property = {
  slug: string; name: string; area: 'Pontcanna' | 'Cardiff Bay'; street: string;
  title: string; desc: string; spec: string; beds: number; baths: number; sqft: number; sleeps: number;
  card: string; details: string[]; review?: { q: string; n: string }; imgs: string[]; parking?: boolean;
};
const P = (slug: string, n: number) => Array.from({ length: n }, (_, i) => `${slug}-${i + 1}`);
export const properties: Property[] = [
  {
    slug: 'hamilton-top-floor', name: 'Hamilton Street, Pontcanna', area: 'Pontcanna', street: 'Hamilton Street',
    title: 'Property - Hamilton St | Cardiff — Book Your Stay Now — Blue Palm Corporate Housing Cardiff',
    desc: 'Stay at a stylish, spacious Cardiff apartment near key attractions with modern amenities, perfect for business stays. Book your stay today.',
    spec: '2 Bed | 1 Office | 1 Bathroom | 1163 sqft', beds: 2, baths: 1, sqft: 1163, sleeps: 4, parking: true,
    card: 'This Large 2 Bed Property, Is perfect for long stays guests, with private parking Plus Located in one of the best areas of Pontcanna, Cardiff,',
    details: [
      'This modern, comfortable 2 bedroom serviced apartment is a tastefully designed home-away-from-home located in one of the best areas of Pontcanna, Cardiff, a stone’s throw from amazing parks, restaurants, gastro pubs, bakeries and cafes, whilst also being conveniently located less than 10 minutes walk from the city centre.',
      'The apartment sleeps up to 4 people. All beds are kitted out with hypoallergenic bedding, whilst the kitchen is kitted out with everything you need to cook a healthy home-cooked meal, perfect for a longer stay.',
    ],
    imgs: P('hamilton-top-floor', 8),
  },
  {
    slug: 'hamilton-ground-floor', name: 'Hamilton Street, Pontcanna', area: 'Pontcanna', street: 'Hamilton Street',
    title: 'Property - Hamilton St | Book Your Cardiff Stay Today — Blue Palm Corporate Housing Cardiff',
    desc: 'Discover a modern, fully furnished 2-bedroom apartment on Hamilton St in Pontcanna, Cardiff, equipped with amenities and off-street parking for comfortable stays.',
    spec: '2 Bed | 1 Bathroom | 786 sqft', beds: 2, baths: 1, sqft: 786, sleeps: 4, parking: true,
    card: 'Newly refurbished throughout, the apartment comes with a sizeable back garden and a spacious interior. Located in one of the best areas of Pontcanna, Cardiff,',
    details: [
      'This modern, comfortable 2 bedroom serviced apartment is a tastefully designed home-away-from-home located in one of the best areas of Pontcanna, Cardiff, a stone’s throw from amazing parks, restaurants, gastro pubs, bakeries and cafes, whilst also being conveniently located less than 10 minutes walk from the city centre.',
      'Newly refurbished throughout, the apartment comes with a sizeable back garden and a spacious interior. At the front of the property is a bright and airy double bedroom complete with king-sized bed and plenty of storage space. Next door is another super spacious double bedroom, also with a king-sized bed, which leads out onto the garden area, whilst further down the hallway is a modern bathroom equipped with a modern walk-in shower cubicle. Leading on from the bathroom is the living room and dining area, designed to be both stylish and welcoming, and attached to that is the modern kitchen area, complete with washer / dryer, dishwasher, fridge freezer, microwave and coffee machine.',
      'The apartment sleeps up to 4 people. All beds are kitted out with hypoallergenic bedding, whilst the kitchen is kitted out with everything you need to cook a healthy home-cooked meal, perfect for a longer stay.',
    ],
    review: { q: 'This was the perfect spot to stay to explore Cardiff for a weekend: it is in a lovely road in Pontcanna, with lots of nice restaurants and cafes within a short walk! The added bonus was the off street parking! The rooms were spacious and the beds were comfortable! It was clean and very nicely decorated!', n: 'Nina' },
    imgs: P('hamilton-ground-floor', 9),
  },
  {
    slug: 'farleighroad', name: 'Fairleigh Road, Pontcanna', area: 'Pontcanna', street: 'Fairleigh Road',
    title: 'Property - Fairleigh Road | Book Your Cardiff Stay Now — Blue Palm Corporate Housing Cardiff',
    desc: 'Discover well-equipped, comfortable apartments at Property, Fairleigh Road, Cardiff, with great amenities and prime location near parks and city center. Book your stay today.',
    spec: '2 Bed | 2 Bathroom | 883 sqft', beds: 2, baths: 2, sqft: 883, sleeps: 4,
    card: 'Spacious 2-bedroom serviced apartment in Pontcanna, Cardiff. Close to parks, restaurants, pubs, bakeries and cafes, and within walking distance of Cardiff city centre. Quiet and secluded — ideal for relaxing after work.',
    details: [
      'This spacious 2 bedroom serviced apartment is an airy home-away-from-home located in the heart of Pontcanna, Cardiff, a stone’s throw from amazing parks, restaurants, gastro pubs, bakeries and cafes. Yet despite its proximity to all of Pontcanna’s favourite attractions, and the fact that it’s within walking distance of Cardiff City Centre, the apartment itself is wonderfully secluded and peaceful, making it a good place to relax after a busy day’s work.',
      'On the ground floor is a double bedroom with en suite shower and toilet, as well a light and spacious open-plan kitchen, dining and living room, with double doors that lead out onto a private patio to the rear. Upstairs is another double bedroom with en-suite shower and toilet. Newly refurbished throughout, you will find all the amenities you need including a dishwasher, washing machine, Amazon Alexa, smart TV with Netflix, colour printer and ultra-fast wifi throughout.',
      'The apartment sleeps up to 4 people, with a sofa bed in the living room that provides sleeping space for an additional 2 people should you have visitors to stay. All beds are kitted out with hypoallergenic bedding, whilst the kitchen is kitted out with everything you need to cook a healthy home-cooked meal, perfect for a longer stay.',
    ],
    review: { q: 'Really nice accommodation, comfortable and well equipped. Brilliant location and very helpful hosts. Would definitely recommend.', n: 'Rob' },
    imgs: P('farleighroad', 7),
  },
  {
    slug: 'fairleigh-road-2', name: 'Fairleigh Road, Pontcanna', area: 'Pontcanna', street: 'Fairleigh Road',
    title: 'Property no.4 - Fairleigh Road | Book Your Cardiff Stay Today — Blue Palm Corporate Housing Cardiff',
    desc: "Discover comfortable, fully-equipped serviced apartments in Cardiff's Pontcanna area, perfect for short or long stays close to attractions and city center.",
    spec: '3 Bed | 1 Bathroom | 904 sqft', beds: 3, baths: 1, sqft: 904, sleeps: 6,
    card: 'This lovely 3 bedroom serviced apartment is a carefully crafted home-away-from-home located in the heart of Pontcanna, Cardiff, a stone’s throw from amazing parks, restaurants, gastro pubs, bakeries and cafes.',
    details: [
      'This lovely 3 bedroom serviced apartment is a carefully crafted home-away-from-home located in the heart of Pontcanna, Cardiff, a stone’s throw from amazing parks, restaurants, gastro pubs, bakeries and cafes. Despite its proximity to all of Pontcanna’s favourite attractions, and the fact that it’s within walking distance of Cardiff City Centre, the apartment itself is wonderfully secluded and peaceful, making it a good place to relax after a busy day’s work.',
      'On the ground floor is an open plan kitchen, dining and living area, with a super comfortable sofa positioned opposite a smart TV, surrounded by stylish mid-century modern furnishings. There is also a toilet room leading off the kitchen for the sake of convenience.',
      'Taking the carpeted stairs to the 1st floor you will find two double bedrooms as well as a modern bathroom comprising of bath, shower and toilet. Take the stairs leading off the 1st floor and you will find a spacious and tastefully furnished attic room, with views over Pontcanna.',
      'Newly refurbished throughout, amenities include a dishwasher, washer dryer, Amazon Alexa, smart TV with Netflix, colour printer and ultra-fast wifi. The apartment sleeps up to 6 people, meaning there’s always room for visiting guests if necessary. All beds are kitted out with hypoallergenic bedding, whilst the kitchen is kitted out with everything you need to cook a healthy home-cooked meal, perfect for a longer stay.',
    ],
    review: { q: 'The host was very friendly and welcoming. The place was clean, comfortable, and exactly as described. Great location with plenty of amenities nearby, which made the stay really convenient. Would definitely recommend!', n: 'Ganga' },
    imgs: P('fairleigh-road-2', 6),
  },
  {
    slug: 'wyndham-crescent', name: 'Wyndham Crescent, Pontcanna', area: 'Pontcanna', street: 'Wyndham Crescent',
    title: 'Property - Wyndham Crescent | Book Your Cardiff Stay Today — Blue Palm Corporate Housing Cardiff',
    desc: 'Discover premium corporate housing at Wyndham Crescent, Cardiff. Enjoy modern amenities, great location, and comfortable stays for long or short-term visits.',
    spec: '2 Bed | 1 Bathroom | 656 sqft', beds: 2, baths: 1, sqft: 656, sleeps: 4,
    card: "A bright two-bed apartment on Wyndham Crescent, close to Pontcanna's amenities and a 10-minute walk to Cardiff city centre.",
    details: [
      'This 2 bedroom serviced property is a tastefully designed home-away-from-home located in the heart of Pontcanna, Cardiff, a stone’s throw from amazing parks, restaurants, gastro pubs, bakeries and cafes. One of Cardiff’s favourite parks, Llandaff Fields, is less than five minutes away on foot, with plenty of good running and walking options.',
      'On the ground floor is a bright and airy living room area, leading on to a fully equipped open-plan kitchen with all brand new appliances. Leading off from the kitchen is a garden to the rear, where you can enjoy a glass of wine on a summer’s evening.',
      'Taking the carpeted stairs to the first floor you will find two well-appointed double bedrooms, along with a modern bathroom with a walk-in shower. Newly refurbished throughout, you will find all amenities you might need including a washing machine, smart TV with Netflix, and ultra-fast wifi throughout. All our linen and towels are of the highest quality and we also provide bathrobes and slippers for your comfort.',
      'The apartment sleeps up to 4 people. All beds are kitted out with hypoallergenic bedding, whilst the kitchen is kitted out with everything you need to cook a healthy home-cooked meal, perfect for a longer stay.',
    ],
    review: { q: 'Great place in a great location in a great City! Thanks to Alex and his team, will definitely be back. Diolch, O', n: 'Owain' },
    imgs: P('wyndham-crescent', 11),
  },
  {
    slug: 'wyndham-crescent-1', name: 'Wyndham Crescent, Pontcanna', area: 'Pontcanna', street: 'Wyndham Crescent',
    title: 'Property - Wyndham Crescent | Book Your Cardiff Stay Today — Blue Palm Corporate Housing Cardiff',
    desc: 'Discover premium corporate housing at Wyndham Crescent, Cardiff. Enjoy modern amenities, great location, and comfortable stays for long or short-term visits.',
    spec: '2 Bed | 1 Bathroom | 744 sqft', beds: 2, baths: 1, sqft: 744, sleeps: 4,
    card: 'This 2 bedroom serviced property is a tastefully designed home-away-from-home located in the heart of Pontcanna, Cardiff, a stone’s throw from amazing parks, restaurants, gastro pubs, bakeries and cafes.',
    details: [
      'This 2 bedroom serviced property is a tastefully designed home-away-from-home located in the heart of Pontcanna, Cardiff, a stone’s throw from amazing parks, restaurants, gastro pubs, bakeries and cafes. One of Cardiff’s favourite parks, Llandaff Fields, is less than five minutes away on foot, with plenty of good running and walking options.',
      'A bright and airy living room area, leading on to a fully equipped open-plan kitchen with all brand new appliances.',
      'Newly refurbished throughout, you will find all amenities you might need including a washing/dryer machine, smart TV with Netflix, and fast wifi throughout. All our linen and towels are of the highest quality.',
      'The apartment sleeps up to 4 people. All beds are kitted out with hypoallergenic bedding, whilst the kitchen is kitted out with everything you need to cook a healthy home-cooked meal, perfect for a longer stay.',
    ],
    imgs: P('wyndham-crescent-1', 8),
  },
  {
    slug: 'penhill-rd', name: 'Penhill Road, Pontcanna', area: 'Pontcanna', street: 'Penhill Road',
    title: 'Property - Penhill Rd | Book Your Comfortable Cardiff Stay Today — Blue Palm Corporate Housing Cardiff',
    desc: 'Explore Blue Palm Corporate Housing offers at Property, Penhill Rd, Cardiff. Spacious 2-bedroom apartment near Llandaff Fields, ideal for stays and long-term rentals.',
    spec: '2 Bed | 1 Bathroom | 840 sqft', beds: 2, baths: 1, sqft: 840, sleeps: 4,
    card: 'This spacious 2 bedroom serviced apartment located in the heart of Pontcanna, Cardiff, a stone’s throw from amazing restaurants, gastro pubs, bakeries and cafes. One of Cardiff’s best parks, Llandaff Fields, is situated directly opposite the apartment.',
    details: [
      'This spacious 2 bedroom serviced apartment is an airy home-away-from-home located in the heart of Pontcanna, Cardiff, a stone’s throw from amazing restaurants, gastro pubs, bakeries and cafes. One of Cardiff’s best parks, Llandaff Fields, is situated directly opposite the apartment.',
      'The apartment consists of two double bedrooms, as well as a light and spacious open plan kitchen & dining area. From the kitchen there is a back door that leads out onto a private patio area to the side of the property.',
      'The apartment sleeps up to 4 people, with a sofa bed in the living room that provides sleeping space for an additional 2 people should you ever have visitors to stay. All beds are kitted out with hypoallergenic bedding, whilst the kitchen is kitted out with everything you need to cook a healthy home-cooked meal, perfect for a longer stay.',
    ],
    review: { q: 'Clean, comfortable flat which is well furnished and equipped. Very good location.', n: 'Geoffrey' },
    imgs: P('penhill-rd', 9),
  },
  {
    slug: 'cathedral-rd', name: 'Cathedral Road, Pontcanna', area: 'Pontcanna', street: 'Cathedral Road',
    title: 'Property - Cathedral Rd | Book Your Cardiff Stay Today — Blue Palm Corporate Housing Cardiff',
    desc: "Discover comfortable, fully furnished corporate apartments on Cathedral Rd in Cardiff's Pontcanna area, perfect for extended stays near parks, eateries, and city attractions.",
    spec: '1 Bed | 1 Bathroom | 1098 sqft', beds: 1, baths: 1, sqft: 1098, sleeps: 2,
    card: 'This tastefully, designed one bedroom spacious serviced apartment is a home-away-from-home located in the heart of Pontcanna, Cardiff, a stone’s throw from amazing parks, restaurants, gastro pubs, bakeries and cafes.',
    details: [
      'This tastefully designed one bedroom serviced apartment is a home-away-from-home located in the heart of Pontcanna, Cardiff, a stone’s throw from amazing parks, restaurants, gastro pubs, bakeries and cafes.',
      'The house is located on Cathedral Rd and is newly refurbished throughout. Walking into the apartment you will find a light and airy open-plan kitchen/diner, with a living room section to the right. There is a double bed, a bathroom, and a desk area for those that wish to work.',
      'The house sleeps up to 2 people. The bed is kitted out with hypoallergenic bedding, whilst the kitchen is kitted out with everything you need to cook a healthy home-cooked meal, perfect for a longer stay.',
    ],
    imgs: P('cathedral-rd', 7),
  },
  {
    slug: 'mount-square', name: 'Mount Stuart Square, Cardiff Bay', area: 'Cardiff Bay', street: 'Mount Stuart Square',
    title: 'Property - Mount Square — Blue Palm Corporate Housing Cardiff',
    desc: 'Stylish 2-bedroom serviced apartment in Mount Stuart Square, Cardiff Bay. Walking distance to Mermaid Quay, restaurants, bars and transport links — ideal for business stays.',
    spec: '2 Bed | 2 Bathroom | 1339 sqft', beds: 2, baths: 2, sqft: 1339, sleeps: 4,
    card: 'Stylish 2-bedroom apartment in the heart of Cardiff Bay, ideal for business stays working near the waterfront.',
    details: [
      'Stylish 2-bedroom apartment in the heart of Cardiff Bay, ideal for business stays or short-term city breaks.',
      'Walking distance to Mermaid Quay, restaurants, bars, transport links, and waterfront walks. Clean, comfortable, and conveniently located — a perfect base for exploring Cardiff.',
      'The apartment is located on the first floor and is newly refurbished throughout. Walking into the apartment you will find a light and airy open-plan kitchen/diner, with a living room section to the right, complete with a small desk. There are two double bedrooms, both with en-suite bathrooms, The Contemporary bathrooms come with walk-in showers. The apartment has Fast Wi-Fi, Smart TV, and in-unit washer/dryer. Secure building access and street-level parking nearby.',
      'The apartment sleeps up to 4 people. All beds are kitted out with hypoallergenic bedding, whilst the kitchen is kitted out with everything you need to cook a healthy home-cooked meal, perfect for a longer stay.',
    ],
    imgs: P('mount-square', 9),
  },
];
export const corporateRates = 'Corporate stays typically range from 4–12 weeks with discounted rates for extended bookings.'; // [V]
export const yourStay = 'Our homes come fully furnished and move-in ready, with a fully equipped kitchen, fast and reliable Wi-Fi, and all utilities set up. Our homes are professionally cleaned prior to move-in, and fresh linens. Plus we provide weekly clean & linen changes alongside ongoing support for your needs, ensuring you can settle in and live effortlessly.'; // [V]

export const propertiesPage = {
  title: 'Serviced Apartments in Cardiff — Blue Palm Corporate Housing Cardiff', // [V]
  desc: "Browse Blue Palm's serviced apartments across Pontcanna, Cardiff — furnished, bills-included homes for corporate stays and long-term rentals.", // [V]
  h1: 'Serviced Apartments & Corporate Housing Available in Cardiff', // [V]
  intro: [
    'All of our furnished corporate housing is also designed for comfort, complete with fully equipped kitchens, smart TVs, and prime locations, so that your team can relax.',
    'Blue Palm prices include all utility bills, fast and reliable Wi-Fi. Our homes are professionally cleaned regularly during your stay, making it ideal for business travelers staying for a month, a year, or longer.',
  ], // [V]
  faq: [
    { q: 'How do I Book?', a: 'Contact us on our online form, provide us with your check-in and check-out dates, number of guests, and any requirements (parking, pet-friendly, etc.) Our team will be in touch, to help match your needs to the right apartment.' },
    { q: 'How long can I book for?', a: 'Our apartments are designed for extended stays, typically from one month upwards. Shorter placements can be discussed for production and contractor teams — get in touch to check availability' },
    { q: 'Are the apartments pet friendly?', a: "Some of our properties are pet-friendly. Mention this in your enquiry and we'll match you to a suitable apartment. Please note Extra deposits are taken to accommodate pets stays." },
    { q: 'Do you require a Deposit?', a: 'A deposit is typically required to secure your booking alongside a signed contract, confirmed at the time of enquiry based on the length and terms of your stay.' },
  ], // [V]
  specificH: 'Need something specific?', // [V]
  specific: "If you're placing a large team or have specific requirements, get in touch. We often have off-market properties available for corporate clients.", // [V]
};

// ───────────────── CORPORATE ─────────────────
export const corporate = {
  title: 'Serviced Apartments & Corporate Accommodation Cardiff — Blue Palm Corporate Housing Cardiff', // [V]
  desc: 'Fully furnished, professionally managed serviced apartments and corporate accommodation across Cardiff. Ideal for business travel and long-term stays.', // [V]
  h1: 'Serviced Accommodation & Corporate Apartments in Cardiff', // [V]
  h1sub: 'More Privacy, More Space, Zero Hassle', // [V]
  intro: [
    'Blue Palm offers flexible, fully furnished corporate apartments across Pontcanna and central Cardiff, ideal for business travelers staying for a month, a year, or longer. Our current portfolio includes two-bedroom apartments on Penhill Road, Hamilton Street and Wyndham Crescent — each finished to a high standard with full kitchens, dedicated workspaces and high-speed WiFi.',
    'Whether you need corporate accommodation in Cardiff, contractor accommodation, long-stay apartments, or discreet accommodation for film and TV production teams, our apartments are in prime locations across the city, offering a comfortable and practical alternative to hotels.',
  ], // [V]
  whyH: 'Why Guests Choose Blue Palm', // [V]
  why: [
    { t: 'Multi units', d: 'Several apartments available to house entire teams in close proximity or under one roof — useful for productions, relocating teams, or contractor crews who want to stay near each other.' },
    { t: 'Bills included', d: 'No hidden fees. Electricity, water, high-speed WiFi and Netflix are included in every booking, along with parking at most properties — so your monthly cost is predictable from day one.' },
    { t: 'Cleaning & Linen', d: 'Regular cleaning and fresh linen changes so your team can focus on work and relaxing, not household admin. Cleaning frequency is confirmed at the time of booking to suit shorter or longer stays.' },
    { t: 'Dedicated Contact', d: "Our dedicated contact acts as your single point of contact for bookings, maintenance requests, and local guidance — so there's no call centre and no guesswork about who to speak to." },
  ], // [V]
  whoH: 'Who Do We House?', // [V]
  who: [
    { t: 'Film & TV Production Teams', d: "Cast and crew working on productions in and around Cardiff's studios, who need private, well-located apartments with the flexibility to book multiple units for a team." },
    { t: 'Contractors', d: 'Trades and project teams working on-site in Cardiff who need reliable, no-fuss accommodation for the duration of a contract, with flexibility if the job overruns.' },
    { t: 'Relocating Professionals & Families', d: 'Anyone moving to Cardiff for a new role who needs a comfortable place to live while they house-hunt or wait for a permanent move, without signing a long lease.' },
  ], // [V]
  bizH: 'Blue Palm For Business', // [V]
  biz: 'We offer a range of flexible and discrete services designed to help manage your team’s needs so that you can move forward with confidence.', // [V]
  bizItems: [
    { t: 'Cost savings', d: 'We understand the importance of keeping accommodation costs under control, especially for longer projects, relocations and production schedules. Blue Palm offers long-stay discounts across our properties, making our apartments a cost-effective option for corporate accommodation, contractor accommodation, relocation stays and long-stay apartments in Cardiff.' },
    { t: 'Privacy & Discretion', d: 'For corporate guests, production teams and relocation clients, privacy matters. We treat every booking with discretion and never discuss guest details outside the company. Our Pontcanna serviced apartments are located away from large city centre crowds, giving guests a quieter and more private base during their stay.' },
    { t: 'Flexible Booking Terms', d: 'Business and production schedules can change quickly. Projects overrun, travel dates move and accommodation requirements often shift at short notice. We are used to working with changing plans and will always do our best to support booking extensions, adjusted check-out dates and alternative accommodation where availability allows.' },
    { t: 'Fair Cancellation Policy', d: 'We know that business travel and production schedules are not always predictable. Our cancellation policy is designed to give clients a reasonable level of flexibility while keeping the booking process clear and manageable.' },
    { t: 'Simple Booking Process', d: 'Once you have selected the right apartment, you can secure your booking with a signed contract. If needed, you can also pay a deposit to hold the property while paperwork is completed. This gives travel managers, production coordinators, business owners and contractors confidence that accommodation is secured before the stay begins.' },
    { t: 'Christmas Check-Outs', d: 'For long-stay guests, contractors or production teams who pause work over Christmas and return in the new year, Blue Palm offers a flexible check-out option during the festive period. Qualifying guests can check out for up to two weeks and return after the break without automatically losing their long-stay discount.' },
  ], // [V]
  includedH: "What's Included?", // [V]
  included: 'Every Blue Palm apartment comes fully furnished and ready to move into from day one — no setup time, no separate supplier accounts to manage.', // [V]
  includedList: [
    'Fully serviced corporate apartments in Pontcanna & Cardiff Bay.',
    'Flexible long-term stays for professionals, relocations, and production teams.',
    'Comfortable, fully furnished apartments with weekly housekeeping.',
    'High-speed Wi-Fi and dedicated workspaces in every apartment.',
    'In-unit laundry and on-site amenities for convenience during extended stays.',
    'Central locations with easy access to transport links and local services.',
    'Secure buildings with dedicated local support and contactable property managers.',
    'Corporate-friendly billing, tailored invoicing, and streamlined booking processes.',
    'Personalized support for relocation packages and group bookings.',
    'Book today for flexible availability and competitive long-stay rates.',
  ], // [V]
  faq: [
    { q: 'What is the minimum length of stay?', a: 'Our apartments are designed for extended stays, typically from one month upwards. Shorter placements can be discussed for production and contractor teams — get in touch to check availability.' },
    { q: 'Can you invoice companies directly, with VAT receipts?', a: 'Yes. We regularly bill corporate clients, production companies and contractors directly, and can provide full VAT invoices for your accounts team.' },
    { q: 'Is a deposit required?', a: 'A deposit is typically required to secure your booking alongside a signed contract, confirmed at the time of enquiry based on the length and terms of your stay.' },
    { q: 'What is the notice period to extend or end a booking early?', a: "We understand that project timelines shift. Let your dedicated contact know as early as possible and we'll do our best to accommodate an extension or an adjusted check-out date, in line with our Flexible Booking Terms above." },
    { q: 'Is parking included?', a: 'Some of our Cardiff apartments include off-street parking — confirm this when you enquire so we can match you to the right property.' },
  ], // [V]
  ctaKicker: 'Need accommodation in Cardiff for your team or project?', // [V]
  ctaH: 'Book Corporate Accommodation in Cardiff', // [V]
  cta: [
    'Need flexible serviced accommodation for work, relocation, contractors or a production team in Cardiff?',
    'Get in touch with Blue Palm to discuss availability, long-stay rates and flexible booking options.',
  ], // [V]
};

// ───────────────── LANDLORDS (guaranteed rent) ─────────────────
export const landlords = {
  title: 'Guaranteed Rent & Corporate Lets Cardiff — Blue Palm Corporate Housing Cardiff', // [V]
  desc: 'Guaranteed rent and corporate accommodation for Cardiff landlords. Long-term agreements, professional management and stress-free property solutions.', // [V]
  kicker: 'Partner with Blue Palm to secure 20–35% More than standard AST rentals', // [V]
  h1: 'Guaranteed Rent for Landlords in Cardiff', // [V]
  sub: 'Whether your property is occupied or not. No voids, no chasing tenants, no management headaches. Just reliable income.', // [V]
  note: 'Our property partners typically earn 20-35% more than standard AST rentals, with no void periods.', // [V]
  intro: 'Blue Palm leases quality homes across Cardiff and professionally manages them as accommodation for working professionals and corporate guests. You receive reliable rental income without void periods, tenant enquiries or day-to-day management.', // [V]
  small: 'Free assessment • No obligation • Response within one working day', // [V]
  calcH: 'Landlord Rental Income Calculator', // [V]
  calcSub: 'Discover exactly how much more you could earn with a Blue Palm guaranteed-rent partnership', // [V]
  trad: ['Management fee applied every month', 'Income lost during void periods', 'Renewal & admin fees each changeover', 'Full maintenance exposure', 'Tenant turnover costs every cycle', 'Income dependent on occupancy'], // [V]
  bp: ['100% guaranteed monthly income', 'Zero void periods — ever', 'No tenant sourcing or admin fees', 'Professionally managed — less wear', 'Zero letting agent fees', 'Light maintenance contribution only'], // [V]
  forget: ['Lost income during re-advertising and referencing (often 3–6 weeks)', 'Emergency call-out fees at evenings and weekends', 'Redecoration and deep clean costs between tenancies', 'Mortgage or insurance shortfalls during void periods', 'Time cost of maintenance, disputes, and admin', 'Section 21 reforms and growing legal compliance costs'], // [V]
  reliableH: 'A More Reliable Way to Let Your Property', // [V]
  reliable: [
    'Traditional letting can mean void periods, management fees, repeated tenant changeovers and unpredictable maintenance calls.',
    'With a Blue Palm guaranteed-rent partnership, Blue Palm becomes your professional long-term occupier. We agree the monthly rent and contract terms upfront, then manage the property throughout the agreement.',
  ], // [V]
  reliableList: [
    { t: 'Agreed rent paid every month', d: 'Your agreed rent is paid on the same date each month, regardless of short-term occupancy.' },
    { t: 'No loss of rent during void periods', d: 'The silent killer of traditional lets are void periods. But with the guarantee rental agreement, we take on the property costs during these periods whilst you still receive your rent each month.' },
    { t: 'No tenant-finding or management fees', d: 'Landlords lose large amounts of their profits each year, for additional services on top of high management fees. With Blue Palm Guarantee agreements these costs disappear.' },
    { t: 'One professional point of contact', d: 'Dedicated local property guest experience manager to support any queries you may have. No call centers, a personal one on one point of contact.' },
    { t: 'Regular cleaning and property oversight', d: 'Properties are cleaned regularly and inspected throughout the agreement. Our business depends on homes remaining in excellent condition.' },
    { t: 'Agreements typically lasting three to five years', d: 'We typically seek agreements lasting between three and five years, reducing the uncertainty and repeated costs associated with tenant turnover.' },
    { t: 'Clear responsibilities and break clauses', d: 'Every agreement defines the rent, term, responsibilities, permitted use and break provisions before you commit.' },
  ], // [V]
  trustedH: 'Trusted Corporate Accommodation Specialists', // [V]
  trusted: [
    'Blue Palm has more than seven years’ experience working with landlords and managing professional accommodation in Cardiff and South Wales.',
    'Our accommodation supports professionals working across the media, production, construction, insurance and corporate sectors.',
    'Managing landlord properties since 2019.',
  ], // [V]
  stats: [
    { n: '100%', d: 'Landlords surveyed said they were happier working with us rather than short term tenants.' },
    { n: '£0 voids', d: 'No landlords that we have worked with has received any void periods' },
    { n: '7+ years', d: 'Blue palm has been working with landlords in Cardiff since 2019' },
    { n: '1,850+', d: 'Guest nights booked in 2026' },
  ], // [V]
  advKicker: 'Why Landlords Choose Blue Palm', // [V]
  advH: 'Every advantage, none of the stress.', // [V]
  adv: [
    { t: 'Low/No maintenance costs', d: 'We maintain all our properties to a very high standard, covering any day-to-day maintenance costs so that you don’t have to deal with the hassle. No more annoying phone calls out of the blue.' },
    { t: 'No rental voids', d: 'Because we lease properties from landlords for an average of 3 to 5 years, this takes away your risk of void periods. Even if the property is empty, you still get paid in full every month.' },
    { t: 'Professional cleaning', d: 'All our apartments are cleaned professionally at least once a week, meaning you can rest easy in the knowledge that your property is being extremely well looked after whilst under our care.' },
    { t: 'One reliable tenant', d: 'Rather than have to deal with multiple tenants over a period of time, Blue Palm becomes your long-term, reliable Partnership, freeing you up to focus on other things.' },
    { t: 'Free property refresh', d: 'If a property needs cosmetic work to meet our clients’ standards, we’ll pay up to an agreed amount—adding value to your property.' },
    { t: 'Passive income', d: 'Being a landlord can be stressful at times. Blue Palm takes away most of the hard work, stress and risk of being a landlord, giving you the freedom of a truly passive income.' },
  ], // [V]
  badges: [
    { t: 'Fully insured', d: 'All properties covered under our commercial polices.' },
    { t: 'Legally Compliant', d: 'Contracts reviewed by specialist property solicitors' },
    { t: 'Industry Experience', d: 'Over 7 years of managing R2R portfolios across the South West Wales.' },
    { t: 'Real value', d: 'We only take on properties where we can add real value.' },
  ], // [V]
  stepsKicker: 'How does it work?', // [V]
  stepsH: 'From enquiry to income in four steps', // [V]
  steps: [
    { t: 'Free Property Assessment', d: 'We visit your property, assess its potential, and provide a guaranteed rent offer — completely free and with no obligation' },
    { t: 'Sign the Agreement', d: "We agree on the monthly guaranteed rent, the contract term, and any property improvements we'll make. Clear, simple, transparent." },
    { t: 'We set up', d: 'Blue Palm assumes full management responsibility. We handle tenants, maintenance, compliance, and day-to-day operations.' },
    { t: 'You Receive Regular Income', d: 'Your guaranteed rent arrives on the agreed date, every month, for the duration of the contract — regardless of occupancy.' },
  ], // [V]
  quotesH: 'Trusted by Cardiff landlords to remove stress and build guaranteed passive income', // [V]
  quotes: [
    "I was sceptical at first — the idea of handing my property over to someone else felt risky. But Blue Palm explained everything clearly, the contract was fair, and I've received my guaranteed rent without fail for over two years. I genuinely wish I'd done this sooner.",
    'We had two properties sitting empty for months before Blue Palm stepped in. Within three weeks we had guaranteed contracts on both. The management has been completely hands-off for us — exactly what we wanted at this stage of life.',
    "The transparency is what sets Blue Palm apart. Every agreement is clearly written, they're honest about what they're doing with the property, and my income has been absolutely consistent. No surprises — which is all I ask.",
  ], // [V] (unnamed on the old site)
  faq: [
    { q: 'Is rent to rent legal?', a: 'Yes — rent-to-rent is entirely legal when done correctly. Blue Palm operates with proper landlord consent, appropriate tenancy agreements, and full compliance with UK housing regulations. We ensure all agreements are reviewed by specialist solicitors' },
    { q: 'What types of properties are you looking for?', a: 'We work with residential properties across South west Wales — houses, flats, and larger residential units. The most suitable properties are typically 2+ bedroom houses or properties in high-demand rental areas. Contact us for a free assessment of your specific property.' },
    { q: 'What if something goes wrong with the property?', a: "We handle all maintenance and minor repairs ourselves, and our commercial insurance covers the property throughout. If any larger maintenance work is ever required (e.g. fixing a broken boiler) we will provide you with estimates, take care of the management of the job, obtain your permission before any work is carried out, and keep you informed of the progress throughout the duration of the repairs and of any payments you may need to make. You will receive full invoices for your tax records. If you'd prefer to use your own tradesmen, that's not a problem." },
    { q: 'Can I still get my property back, when I need it?', a: 'Yes. Our agreements are fixed-term, typically 3–5 years, with clear break clauses. You always know exactly when your property returns to you, and we give you advance notice well before the end of the agreement. Also, if want your property back earlier, we have shorter notice periods than your standard tenant agreements.' },
    { q: 'Will my property be maintained?', a: 'Absolutely. Our business depends on well-maintained properties. We conduct regular inspections, respond quickly to maintenance issues, and return the property in excellent condition at the end of the agreement.' },
    { q: 'What is your guarantee?', a: 'You get paid every month, no matter if the property is empty. Payments land in your bank on the same day each month. No fees. No commission. Ever. No hidden or surprise charges. We’ll care for your property like it’s our own. No calls, no safety certificates to arrange, no repair management, no day-to-day tenant hassles. We screen every guest to meet our strict standards.' },
  ], // [V]
  ctaKicker: 'Start your Journey with us.', // [V]
  ctaH: 'Let’s talk about your property.', // [V]
  cta: 'We’ll visit your property assess its potential, and give you a guaranteed rent offer — completely free, with no obligation to proceed.', // [V]
  serving: 'Serving landlords across South Wales', // [V]
};

// ───────────────── MANAGEMENT ─────────────────
export const management = {
  title: 'Management | Optimize Rental Income — Get Started Now — Blue Palm Corporate Housing Cardiff', // [V]
  desc: 'Blue Palm offers professional property management services in Cardiff, enhancing rental income and providing stress-free landlord solutions. Contact us today.', // [V]
  kicker: 'Tired of Voids, Tenant Issues, and Underperforming Rents?', // [V]
  kickerSub: 'We partner with landlords to deliver hands-off, professionally managed accommodation with stronger income potential.', // [V]
  h1: 'Serviced Accommodation Management in Cardiff', // [V]
  intro: [
    'Professional management for property owners who want to access Cardiff’s serviced accommodation and corporate-stay market—without running the operation themselves.',
    'Blue Palm manages your property for a 15% management fee, covering pricing, listings, bookings, guests, cleaning coordination, maintenance support and performance reporting.',
    'Unlike standard Airbnb-management services, we also leverage our established corporate-booking relationships to pursue longer stays and create more consistent property performance.',
  ], // [V]
  small: '15% management fee • No long-term lease • Owner retains the income', // [V]
  moreK: 'More than Airbnb management', // [V]
  moreH: 'A better balance between occupancy and profit.', // [V]
  more: [
    'Many short-term rental managers depend almost entirely on booking platforms, nightly pricing and a constant flow of short stays. Blue Palm takes a broader approach.',
    'Alongside major booking channels, we position suitable accommodation for corporate clients, contractors, relocation guests and professional teams staying in Cardiff for weeks or months.',
  ], // [V]
  moreList: [
    { t: 'Fewer cleaning & linen changeovers', d: 'Running service accommodation is tough on tight margins, reducing outgoings is key to increasing your income.' },
    { t: 'Less reliant on platform commissions', d: 'No longer be at the mercy of platform costs, changes and rules.' },
    { t: 'Reduce those gaps between bookings', d: 'Those tricky mid week bookings can cost service accommodation operators £’s yearly.' },
    { t: 'Build more predictable income', d: 'Long term bookings, produce predictable income taking the guesswork, no longer needing to wait to the end of the month to see if you made a profit.' },
    { t: 'Reduce communication load', d: 'Blue Palm take all the communication on with the guests, yet with our long term guests, we don’t need to inform of the basics each week.' },
  ], // [V] (spelling tidied)
  commK: 'The commercial difference', // [V]
  commH: 'A fully booked calendar is not automatically a profitable property.', // [V]
  comm: 'A longer corporate booking may achieve a lower nightly rate than a peak short stay, but still produce a stronger net result through fewer changeovers, less volatility and better visibility.', // [V]
  longH: 'Benefits of long term stays', // [V]
  longStat: '35%', // [V]
  longStatD: 'Long term Stays can reduce Operational costs by 35%. Improving profitability for the property owners, whilst improving guest satisfaction with less distractions', // [V]
  longList: ['Reduce your Cleaning Costs to weekly or even fortnightly vs each turn over.', 'Remove the expense platform fees for Direct bookings', 'Reduce stress over void periods and seasonality demand'], // [V]
  inclH: 'What’s included in our 15% management service?', // [V]
  incl: [
    { t: 'Commercial and corporate enquiries', d: 'We position suitable properties for businesses, production companies, contractors, relocation clients and professional guests.' },
    { t: 'Listing creation and optimisation', d: 'We create and manage listings, descriptions, amenities, photography and booking information across the right channels.' },
    { t: 'Pricing and availability', d: 'Rates and availability are reviewed around demand, seasonality, booking length and your operating objectives.' },
    { t: 'Enquiry and booking management', d: 'We manage enquiries, booking administration, guest screening, payments, extensions and arrival information.' },
    { t: 'Guest communication', d: 'Guests receive professional support before, during and after their stay, including check-in information.' },
    { t: 'Cleaning and maintenance coordination', d: 'We schedule cleaning and linen services, respond to issues and coordinate approved contractors.' },
    { t: 'Performance reporting', d: 'You receive reporting on revenue, occupancy, achieved rates, booking sources and agreed operating costs.' },
  ], // [V]
  processH: 'Our process is simple', // [V]
  process: 'We handle everything, guest communication, cleaning, pricing, and maintenance so you earn more every month, stress-free.', // [V]
  processSteps: ['Property assessment and Income Review', 'Management set up', 'Live and earning potential'], // [V]
  processNote: 'We provide realistic forecasts and transparent reporting so you can understand actual net performance—not just headline revenue. Costs and responsibilities are set out clearly in the management agreement.', // [V]
  quotes: [
    { q: 'BP who tastefully furnished them in keeping with their high-end clients’ expectations. The apartments are professionally cleaned weekly and are handed back in that same condition at the end of the Contract', n: 'Hazel' },
    { q: 'I made 50% more income within the first 7 days, Plus Blue palm paid for improvements to the apartment.', n: 'Micheal' },
    { q: 'Blue Palm Property have fully managed my property for over a year now and they’ve been superb. Payment has been made punctually and in full, they have taken care of all minor maintenance issues while keeping me posted- as a courtesy', n: 'Anna' },
  ], // [V]
  faq: [
    { q: 'Is this a standard AST management service?', a: 'No. Blue Palm specialises in managing furnished serviced accommodation for short, medium and long-term guests. We do not manage standard residential tenancies through this service.' },
    { q: 'Do you Lease the property?', a: 'No. Under the management service, you retain the property income and Blue Palm manages the serviced accommodation operation for a 15% fee. If you would like to discuss this option Blue Palm can offer Guarantee rent solution.' },
    { q: 'Do you guarantee income?', a: 'No. Income varies according to demand, occupancy, achieved rates and operating costs. You retain the potential upside yet will require to ensure all operating costs are covered.' },
    { q: 'Can you Guarantee Corporate bookings?', a: 'No. Whilst we are currently operating at 90% corporate booking across our portfolio. We cannot guarantee that an individual property will secure a corporate booking. We can position suitable properties for existing demand and actively pursue longer-stay opportunities.' },
    { q: 'Will you still use AirBNB and Booking.com?', a: 'Where commercially appropriate, yes. Booking platforms can remain useful sources of demand. Our objective is to maximise your revenue and create a balanced booking mix and reduce overdependence on any one channel.' },
  ], // [V]
  assessK: 'Start with a clear view', // [V]
  assessH: 'Discover whether your property is suitable.', // [V]
  assess: [
    'We do not accept every property. Before onboarding, we assess location, property type, condition, furnishing, transport links, local competition, corporate demand, restrictions, setup costs and realistic net-income potential.',
    'Particularly interested in well-presented apartments, houses and multi-unit properties in Pontcanna, Cardiff Bay and selected central areas.',
    'Request a free property assessment and we’ll review your location, likely demand, setup requirements, operating costs, revenue range and likely net owner income.',
    'The assessment is free and there is no obligation to proceed.',
  ], // [V]
};

// ───────────────── ABOUT / AREAS / CONTACT ─────────────────
export const about = {
  title: 'About | Experience Comfortable Stays Today — Blue Palm Corporate Housing Cardiff', // [V]
  desc: 'Discover Blue Palm Corporate Housing in Cardiff, offering stylish, comfortable, and well-located apartments for corporate guests — alongside strong landlord partnerships and guaranteed rentals in Pontcanna, Cardiff.', // [V] (grammar tidied)
  h1: 'About Blue Palm', // [V]
  p: [
    'At Blue Palm, we believe tasteful living spaces can enhance wellbeing and productivity. Since 2019 we’ve been on a mission to create corporate apartments that blend style, comfort and privacy, drawing on our deep roots in Pontcanna and Cardiff’s leafy neighbourhoods.',
    'As a local, independent company we hand‑select properties and host guests with the same care we’d expect for our own homes.',
    'If you’re a landlord or investor, Blue Palm can help you do more with your property. Our guaranteed‑rent partnership pays your monthly rent whether the property is occupied or not, so you avoid void periods, tenant hassles and management fees. On average our partners earn 20–35 % more than standard AST rentals.',
    'Ready to see what your property could earn? Use our free property income calculator to compare traditional letting with a Blue Palm partnership. In under two minutes you’ll get a personalised income assessment benchmarked against your current rent.',
  ], // [V]
};

export const pontcanna = {
  title: 'Pontcanna | Explore Pontcanna today – Book your stay now — Blue Palm Corporate Housing Cardiff', // [V]
  desc: 'Discover premium corporate housing and rental properties in Pontcanna, Cardiff. Enjoy local amenities, parks, restaurants, and cafes with Blue Palm Corporate Housing.', // [V]
  h1: 'Your Home Away From Home.', // [V]
  lede: 'This prime location gives guests the comfort of a well-laid-out home with the convenience of walking distance to restaurants, bars and attractions', // [V]
  items: [
    { t: 'Restaurants', d: 'Pontcanna houses some of the best restaurants in the city, all within walking distance of our properties. We recommend Thomas or Heaney’s for upmarket options, Nook for more casual sharing plates, or Dough Thrower for tasty pizzas.' },
    { t: 'Bakeries', d: 'We are fortunate to have one of the city’s best bakeries, Alex Gooch, in King’s Yard Pontcanna. Other great local bakeries for bread and pastries include the Danish bakery Brod and Pettigrew Bakery.' },
    { t: 'Cafes', d: 'Pontcanna’s cafes are one of this area’s biggest selling points, with many of them roasting their own coffee beans and offering ideal spots for settling down to do some work or grab a takeaway coffee whilst strolling around the area.' },
    { t: 'Markets', d: 'King’s Yard Pontcanna holds a farmers market every Saturday, whilst Riverside Market, which is within walking distance, hosts one every Sunday. Both offer amazing artisan goods as well as organic fruit and veg.' },
    { t: 'Bars & Pubs', d: 'Whether you’re in the mood for an upmarket gastro pub or something more alternative, Pontcanna is home to craft brewery Pipes, gastro pub The Conway and many more.' },
    { t: 'Parks', d: 'Aside from the leafy Victorian streets of Pontcanna, you’ll also find charm and serenity in some of its nearby parks including Pontcanna Fields, Thompsons Park, Llandaff Fields, Bute Park and Sophia Gardens.' },
  ], // [V]
};

export const cardiffBay = {
  title: 'Cardiff Bay Service Accommodation — Blue Palm Corporate Housing Cardiff', // [V]
  desc: 'Discover premium corporate housing and rental properties in Cardiff Bay, Cardiff. Enjoy local amenities, parks, restaurants, and cafes with Blue Palm Corporate Housing.', // [V]
  h1: 'Serviced apartment · Cardiff Bay', // [V]
  lede: 'Fully equipped homes beside the water — for work assignments, new beginnings and stays that need a little more space.', // [V]
  diffK: 'The Blue Palm difference', // [V]
  diffH: 'Not a room. Your place in the city.', // [V]
  diff: 'Arrive to a home that has been thought through. Cook breakfast before the first meeting, close the door on a busy day, and settle into your own rhythm — with a local team a message away.', // [V]
  facts: [
    { n: 'On foot', d: 'to the waterfront promenade, where you find restaurants, bars, cafes and entertainment.' },
    { n: '5 Minutes', d: 'To the city center by taxi, bus or train.' },
  ], // [V]
  calm: 'A calm base to relax after a busy day. All of our furnished corporate housing is also designed for comfort, complete with fully equipped kitchens, smart TVs, and prime locations, so that you can relax.', // [V]
  arriveK: 'The everyday made easier', // [V]
  arriveH: 'Arrive', // [V]
  arrive: 'We take care of the practicals so you can get on with Cardiff. Expect a home that is clean, prepared and quietly looked after throughout your stay.', // [V]
  arriveList: ['Fresh Linen and Towels', 'Simple self check-in', 'Weekly Cleaning', 'Fully furnished'], // [V]
  wayK: 'Connected', // [V]
  wayH: 'Cardiff Bay your Way', // [V]
  way: 'Start with a coffee at the water. Finish with a show at the Wales Millennium Centre. In between, everything important is surprisingly close', // [V]
  times: [
    { n: '5 min', d: 'Cardiff Centre train Station' },
    { n: '12 min', d: 'City Centre' },
    { n: '30 Min', d: 'Cardiff university' },
    { n: '', d: 'Bristol By Train' },
  ], // [V] (old page pairs these loosely; Bristol has no figure on the old site)
  bookH: 'Book Your Stay', // [V]
  book: 'Tell us a little about your dates and what brings you to Cardiff. We’ll come back with availability, a clear price and the right answers.', // [V]
};

export const contactPage = {
  title: 'Contact | Book Your Stay Today — Blue Palm Corporate Housing Cardiff', // [V]
  desc: 'Contact Blue Palm Corporate Housing in Cardiff for bookings and inquiries. We offer comfortable, flexible accommodation for corporate and construction needs.', // [V]
  h: 'BOOK YOUR STAY', // [V]
  p: 'Fill out the details below and our team will prepare a tailored proposal for your stay.', // [V]
  landlordH: "Let's evaluate your property together.", // [V] /contact-1
  landlord: 'We’ll visit your property assess its potential, and give you a guaranteed rent offer — completely free, with no obligation to proceed.', // [V]
};

export const blogPage = {
  title: 'Cardiff Corporate Accommodation & Landlord Guides | Blue Palm — Blue Palm Corporate Housing Cardiff', // [V]
  desc: 'Blue Palm shares insights for landlords, investors and business travelers across Cardiff and South Wales, covering guaranteed rent, corporate accommodation, serviced apartments, and long term stay strategies.', // [V]
};

// ───────────────── LOCAL SEO AREAS ─────────────────
// Guests: Cardiff neighbourhoods near our apartments. Landlords: South Wales towns (old site: "Serving landlords across South Wales").
export type Area = { slug: string; name: string; lat: number; lng: number; note?: string };
export const guestAreas: Area[] = [
  { slug: 'cardiff-city-centre', name: 'Cardiff City Centre', lat: 51.4816, lng: -3.1791 },
  { slug: 'canton', name: 'Canton', lat: 51.4810, lng: -3.2050 },
  { slug: 'llandaff', name: 'Llandaff', lat: 51.4961, lng: -3.2180 },
  { slug: 'riverside', name: 'Riverside', lat: 51.4795, lng: -3.1920 },
  { slug: 'cathays', name: 'Cathays', lat: 51.4930, lng: -3.1810 },
  { slug: 'roath', name: 'Roath', lat: 51.4950, lng: -3.1610 },
  { slug: 'butetown', name: 'Butetown', lat: 51.4640, lng: -3.1700 },
  { slug: 'grangetown', name: 'Grangetown', lat: 51.4660, lng: -3.1880 },
  { slug: 'penarth', name: 'Penarth', lat: 51.4380, lng: -3.1740 },
  { slug: 'llandaff-north', name: 'Llandaff North', lat: 51.5040, lng: -3.2130 },
  { slug: 'whitchurch', name: 'Whitchurch', lat: 51.5180, lng: -3.2190 },
  { slug: 'llanishen', name: 'Llanishen', lat: 51.5300, lng: -3.1850 },
  { slug: 'ely', name: 'Ely', lat: 51.4800, lng: -3.2420 },
  { slug: 'leckwith', name: 'Leckwith', lat: 51.4720, lng: -3.2040 },
];
export const landlordAreas: Area[] = [
  { slug: 'cardiff', name: 'Cardiff', lat: 51.4816, lng: -3.1791 },
  { slug: 'penarth', name: 'Penarth', lat: 51.4380, lng: -3.1740 },
  { slug: 'barry', name: 'Barry', lat: 51.3990, lng: -3.2830 },
  { slug: 'vale-of-glamorgan', name: 'the Vale of Glamorgan', lat: 51.4300, lng: -3.4000 },
  { slug: 'newport', name: 'Newport', lat: 51.5842, lng: -2.9977 },
  { slug: 'caerphilly', name: 'Caerphilly', lat: 51.5740, lng: -3.2180 },
  { slug: 'pontypridd', name: 'Pontypridd', lat: 51.6020, lng: -3.3420 },
  { slug: 'bridgend', name: 'Bridgend', lat: 51.5040, lng: -3.5770 },
  { slug: 'cowbridge', name: 'Cowbridge', lat: 51.4610, lng: -3.4480 },
  { slug: 'swansea', name: 'Swansea', lat: 51.6214, lng: -3.9436 },
];
const R = 3958.8;
export const miles = (a: { lat: number; lng: number }, b: { lat: number; lng: number }) => {
  const r = Math.PI / 180, dLa = (b.lat - a.lat) * r, dLo = (b.lng - a.lng) * r;
  return 2 * R * Math.asin(Math.sqrt(Math.sin(dLa / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLo / 2) ** 2));
};
export const nearestBase = (p: { lat: number; lng: number }) => bases.map((b) => ({ ...b, d: miles(b, p) })).sort((x, y) => x.d - y.d)[0];
export const fmtMiles = (d: number) => (d < 0.6 ? 'under a mile' : d < 1.2 ? 'about a mile' : `about ${Math.round(d)} miles`);

export const nav = [
  { label: 'Properties', href: '/properties' },
  { label: 'Corporate', href: '/serviced-accommodation-cardiff' },
  { label: 'Landlords', href: '/agents-landlords' },
  { label: 'Management', href: '/management' },
  { label: 'Pontcanna', href: '/pontcanna' },
  { label: 'About', href: '/aboutus' },
  { label: 'Blog', href: '/blog' },
]; // [V] labels ("Blogs" → "Blog")

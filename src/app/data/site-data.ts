export const SITE = {
  brand: 'Ronyadvance',
  copyright: 'Copyright © 2020 Company Name. All rights reserved.',
};

export const NAV_LINKS = [
  { label: 'Home', target: 'topheader' },
  { label: 'Service', target: 'servicediv' },
  { label: 'Price', target: 'pricign-div' },
  { label: 'About', target: 'about-div' },
  { label: 'Contact', target: 'contactusid' },
];

export const HERO = {
  title: 'We are The Web Developers',
  subtitle: 'We create the world best websites.',
  buttons: [
    { label: 'AboutUs', target: 'about-div' },
    { label: 'Contact', target: 'contactusid' },
  ],
};

export const FEATURES = [
  { icon: 'fa-desktop', title: 'EASY TO USE', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  { icon: 'fa-trophy', title: 'AWESOME DESIGN', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,' },
  { icon: 'fa-shopping-basket', title: 'EASY TO COSTOMIZE', text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,' },
];

export const SERVICES_HEADING = {
  title: 'WHAT DO WE OFFER',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const SKILLS = [
  { name: 'html', value: 90 },
  { name: 'css', value: 80 },
  { name: 'react js', value: 75 },
  { name: 'javascript', value: 65 },
  { name: 'Php', value: 75 },
];

const LOREM_SHORT = 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.';
export const SERVICES = [
  { icon: 'fa-desktop', title: 'Website Development', text: LOREM_SHORT },
  { icon: 'fa-wifi', title: 'Degital Marketing', text: LOREM_SHORT },
  { icon: 'fa-volume-control-phone', title: 'Support 24/7', text: LOREM_SHORT },
];

export const STATS_HEADING = 'More than 2000 websites created';
export const STATS = [
  { value: 1500, label: 'CMS Installation' },
  { value: 2500, label: 'Awards Won' },
  { value: 1500, label: 'Happy clients' },
  { value: 1500, label: 'Working On' },
];

const PLAN_FEATURES = ['Responsive Website', 'Domain name free', 'Mobile Friendly', 'Customer Support'];
export const PRICING_TITLE = 'OUR BEST PRICING';
export const PLANS = [
  { name: 'BASIC', price: 20, features: PLAN_FEATURES, highlighted: false },
  { name: 'STABDARD', price: 40, features: PLAN_FEATURES, highlighted: true },
  { name: 'UNLIMITED', price: 60, features: PLAN_FEATURES, highlighted: false },
];

export const TESTIMONIALS_HEADING = { title: 'OUR HAPPY cLINETS', text: 'Our Satisfied Says' };
const TESTIMONIAL = {
  image: 'assets/images/header2.jpg',
  quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  name: 'Rony advance',
  role: 'Web-Developer',
};
// 3 slides, 3 testimonials each
export const TESTIMONIAL_SLIDES = [
  [TESTIMONIAL, TESTIMONIAL, TESTIMONIAL],
  [TESTIMONIAL, TESTIMONIAL, TESTIMONIAL],
  [TESTIMONIAL, TESTIMONIAL, TESTIMONIAL],
];

export const CONTACT = {
  title: 'Countact Us',
  text: 'We are here to help and answer any question you might have. we look forward to hearing from you 😄',
};

export const NEWSLETTER_TITLE = 'Subscribe Our News Letter';

export const FOOTER = {
  aboutTitle: 'About Ronyaadvance css',
  aboutText: 'A text can inform, explain, prompt, entertain or attempt to manipulate. Common to all texts is that everyone has the goal to communicate at least one statement.',
  navTitle: 'Navigation link',
  links: [
    { label: 'Home', target: 'topheader' },
    { label: 'Services', target: 'servicediv' },
    { label: 'Price', target: 'pricign-div' },
    { label: 'About', target: 'about-div' },
  ],
  newsletterTitle: 'Newsletter',
  newsletterText: "The problem is, writing an effective newsletter call to action (CTA) on your site is a surprisingly difficult task. Oftentimes you'll start by following the best practices .",
};

export const ABOUT_ANGULAR = {
  title: 'ABOUT ANGULAR 9',
  intro: 'Angular 9 was released by Google in February 2020. It is a TypeScript-based framework for building fast, scalable single-page web applications, and this site is built with it.',
  items: [
    { icon: 'fa-bolt', title: 'Ivy by default', text: 'Ivy is the new compiler and rendering engine, now enabled for every app. It produces smaller bundles, faster builds and better runtime performance.' },
    { icon: 'fa-compress', title: 'Smaller bundles', text: 'Ivy removes unused code more effectively (tree-shaking), so the JavaScript sent to users is noticeably smaller, especially for large apps.' },
    { icon: 'fa-check-circle', title: 'AOT everywhere', text: 'Ahead-of-Time compilation is on by default for both development and production, catching template errors early and making startup faster.' },
    { icon: 'fa-bug', title: 'Better debugging', text: 'Stricter type checking in templates (fullTemplateTypeCheck / strictTemplates) and clearer error messages make bugs easier to find.' },
    { icon: 'fa-wrench', title: 'Improved testing', text: 'TestBed is faster with Ivy, and the new component harnesses in Angular Material give more stable, readable tests.' },
    { icon: 'fa-globe', title: 'Modern tooling', text: 'Supports TypeScript 3.6/3.7, new Angular Material components (YouTube, Google Maps), and improved i18n with build-time localization.' },
  ],
};

/// <reference types ="Cypress" />
const sizes = [
  ['iphone-6', 'landscape'],
  'iphone-6',
  'ipad-2',
  ['ipad-2', 'landscape'],
  [1920, 1080],
];
const pages = [
  'mac',
  'ipad',
  'iphone'
];

const scrubbedElements = [
  '.lead',
  '.list-inline',
  '.img-fluid',
];


describe('Visual regression tests', () => {
  sizes.forEach((size) => {
    pages.forEach((page) => {
      it(`Should match previous screenshot '${page} Page' When '${size}' resolution`, () => {
        const now = new Date(Date.UTC(2019, 1, 1)).getTime();
        cy.clock(now);
        cy.setResolution(size);
        cy.visit(`/${page}/`);
        cy.wait(5000)
        cy.matchImageSnapshot({ blackout: scrubbedElements });
      });
    });
  });
});

  
  

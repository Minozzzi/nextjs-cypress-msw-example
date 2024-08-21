// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import { setupWorker, type SetupWorker } from "msw/browser";
import { type MockRequest, createMock } from "../../util";

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
  namespace Cypress {
    interface Chainable {
      mockMSW(mockRequest: MockRequest): void;
    }
  }
}

let worker: SetupWorker;

before(() => {
  worker = setupWorker();
  cy.wrap(worker.start({ onUnhandledRequest: "bypass" }), { log: false });
});

beforeEach(() => {
  worker.resetHandlers();
  worker.restoreHandlers();
  cy.task("clearMSW");
});

Cypress.Commands.add("mockMSW", (mockRequest) => {
  worker.use(createMock(mockRequest));
  cy.task("mockMSW", mockRequest);
});

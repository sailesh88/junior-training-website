// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
require('@reportportal/agent-js-cypress/lib/commands/reportPortalCommands');

Cypress.Commands.add('rp_screenshot',(data)=>{const rp_screenshot={
    name: "filename",
    type: "image/png",
    content: data}})


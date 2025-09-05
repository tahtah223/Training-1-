import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("je visite la page de Connexion", () => {
  cy.visit("https://qatraining.fr/pages/features/login.html");
});

When("je saisis {string} comme nom d'utilisateur", (username) => {
  cy.get("#username").type(username);
});

When("je saisis {string} comme mot de passe", (password) => {
  cy.get("#password").type(password);
});


When("je clique sur le bouton login", () => {
//  cy.get("button[type='submit']").click();
  cy.get('#login-form > button').click();
});

Then("je devrai avoir le pop avec {string} affiché", (message) => {
cy.on("window:alert", (alertText) => {
    expect(alertText).to.equal(message);
  });});

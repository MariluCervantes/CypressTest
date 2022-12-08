import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit joyeriarte.com", () => {
  cy.visit("https://www.joyeriarte.com");
});

Then("I should see a search bar", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
});
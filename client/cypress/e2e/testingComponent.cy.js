/// <reference types="cypress" />

const result_el = "input[name='result']";
const first_operand_el = "#firstOperand";
const second_operand_el = "#secondOperand";
const show_res_btn = "#show_res_btn";
const reset_btn = "#reset_btn";

describe("Testing main module", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("should show empty string in all fields by default", () => {
    cy.get(result_el).should("have.value", "");
    cy.get(first_operand_el).should("have.value", "");
    cy.get(first_operand_el).should("have.value", "");
  });

  it("should show the correct sum ", () => {
    cy.get(first_operand_el).type("2");
    cy.get(second_operand_el).type("3");
    cy.get(show_res_btn).click();
    cy.get(result_el).should("have.value", "5");
  });

  it("should show alert on putting wrong value in input field", () => {
    cy.get(first_operand_el).type("qw");
    cy.get(second_operand_el).type("3et");
    cy.get(show_res_btn).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Enter valid input");
    });
  });

  it("Every input field should be empty after clicking on reset button ", () => {
    cy.get(first_operand_el).type("2");
    cy.get(second_operand_el).type("3");
    cy.get(show_res_btn).click();
    cy.get(result_el).should("have.value", "5");
    cy.get(reset_btn).click();
    cy.get(result_el).should("have.value", "");
    cy.get(first_operand_el).should("have.value", "");
    cy.get(first_operand_el).should("have.value", "");
  });
});

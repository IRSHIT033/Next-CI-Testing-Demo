/// <reference types="cypress" />
import Main from "@/Components/Main";

const result_el = "input[name='result']";
const first_operand_el = "#firstOperand";
const second_operand_el = "#secondOperand";
const show_res_btn = "#show_res_btn";

describe("<Main>", () => {
  beforeEach(() => {
    cy.mount(<Main />);
  });

  it("should show empty string in sum result by default", () => {
    cy.get(result_el).should("have.value", "");
  });

  it("should show the correct sum ", () => {
    cy.get(first_operand_el).type("12");
    cy.get(second_operand_el).type("1");
    cy.get(show_res_btn).click();
    cy.get(result_el).should("have.value", "13");
  });
});

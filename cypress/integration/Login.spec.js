/* eslint-disable no-undef */
/// <reference types="cypress"/>
describe("<Login />", () => {
  it("<Login /> - Validacion y alertas y Autenticar Usuario", () => {
    cy.visit("/");
    cy.get("[data-cy=submit-login").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "Todos los campos son obligatorios");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    //Probar usuario que no existe
    cy.get("[data-cy=email-input]").type("mechas@gmail.com");
    cy.get("[data-cy=password-input").type("123");

    cy.get("[data-cy=submit-login]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "El usuario no existe");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    cy.get("[data-cy=email-input]").clear().type("diego@gmai.com");
    cy.get("[data-cy=password-input").clear().type("1234");
    cy.get("[data-cy=submit-login]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "Datos Incorrectos");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    cy.get("[data-cy=email-input]").clear().type("diego@gmai.com");
    cy.get("[data-cy=password-input").clear().type("123456");
    cy.get("[data-cy=submit-login]").click();

    cy.get("[data-cy=seleccionar-projecto]").should("exist");
  });
});

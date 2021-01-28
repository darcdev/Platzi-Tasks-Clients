/* eslint-disable no-undef */
/// <reference types="cypress"/>
describe("<Formulario />", () => {
  it("<NuevaCuenta /> - Validacion y alertas", () => {
    cy.visit("/nueva-cuenta");
    cy.get('[ data-cy="submit-nueva-cuenta"]').click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "Todos los campos son obligatorios");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    cy.get("[data-cy=nombre-input]").type("Juan");
    cy.get("[data-cy=email-input]").type("mimus@gmail.com");
    cy.get("[data-cy=password-input]").type("123");
    cy.get("[data-cy=repeat-password-input]").type("123");

    cy.get('[ data-cy="submit-nueva-cuenta"]').click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "El password debe ser de al menos 6 caracteres");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    cy.get("[data-cy=password-input]").clear().type("123456");
    cy.get("[data-cy=repeat-password-input]").clear().type("123455");

    cy.get("[ data-cy=submit-nueva-cuenta]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "Los passwords no son iguales");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    cy.get("[data-cy=repeat-password-input]").clear().type("123456");

    cy.get("[data-cy=submit-nueva-cuenta]").click();

    cy.get("[data-cy=seleccionar-projecto]").should("exist");

    cy.get("[data-cy=cerrar-sesion").click();
  });

  it("<NuevaCuenta/> - Revisar usuarios Duplicados", () => {
    cy.visit("/nueva-cuenta");

    cy.get("[data-cy=nombre-input]").type("Juan");
    cy.get("[data-cy=email-input]").type("usuario@gmail.com");
    cy.get("[data-cy=password-input]").type("123");
    cy.get("[data-cy=repeat-password-input]").type("123");

    cy.get("[data-cy=submit-nueva-cuenta]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "El usuario ya existe");
  });
});

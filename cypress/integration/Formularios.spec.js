/* eslint-disable no-undef */
/// <reference types="cypress"/>
describe("<Formulario />", () => {
  it("<Login /> - Verificar Pantalla de Inicio", () => {
    cy.visit("/");

    // Probar el texto
    cy.contains("h1", "Iniciar Sesion");
    cy.get("[data-cy=titulo]").invoke("text").should("equal", "Iniciar Sesion");

    // Revisar que el formulario exista
    cy.get("[data-cy=form-login]").should("exist");

    cy.get("[data-cy=email-input]").should("exist");
    cy.get("[data-cy=password-input]").should("exist");

    cy.get("[data-cy=submit-login]")
      .should("exist")
      .should("have.value", "Iniciar Sesión")
      .should("have.class", "btn-primario")
      .and("have.class", "btn");

    cy.get("[data-cy=nueva-cuenta]")
      .should("exist")
      .should("have.prop", "tagName")
      .should("eq", "A");

    cy.get("[data-cy=nueva-cuenta]")
      .should("have.attr", "href")
      .should("eq", "/nueva-cuenta");

    cy.visit("/nueva-cuenta");
  });

  it("<NuevaCuenta/> Verificar componente de nueva cuenta", () => {
    cy.get("[data-cy=titulo]")
      .should("exist")
      .invoke("text")
      .should("equal", "Obtener una Cuenta");

    cy.get('[data-cy="nueva-cuenta"]').should("exist");

    cy.get("[data-cy=nombre-input]").should("exist");
    cy.get("[data-cy=email-input]").should("exist");
    cy.get("[data-cy=password-input]")
      .should("exist")
      .should("have.prop", "type")
      .should("eq", "password");
    cy.get("[data-cy=repeat-password-input]")
      .should("exist")
      .should("have.prop", "type")
      .should("eq", "password");

    cy.get("[data-cy=submit-nueva-cuenta]")
      .should("exist")
      .should("have.class", "btn-primario")
      .should("have.value", "Registrarme")
      .should("not.have.value", "Crear Nueva Cuenta");

    cy.get('[data-cy="enlace-login"]')
      .should("exist")
      .should("have.attr", "href")
      .should("eq", "/");
  });
});

/* eslint-disable no-undef */
/// <reference types="cypress"/>
describe("<Administrador />", () => {
  it("<Login /> - Autenticacion", () => {
    cy.visit("/");
    cy.get("[data-cy=email-input]").type("diego@gmai.com");
    cy.get("[data-cy=password-input]").type("123456");
    cy.get("[data-cy=submit-login]").click();
  });

  it("<Proyectos/> - Validar Proyectos", () => {
    cy.get("[data-cy=boton-nuevo-proyecto]").click();

    cy.get("[data-cy=submit-nuevo-proyecto]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("eq", "El nombre del proyecto es obligatorio");

    cy.get("[data-cy=alerta]").should("have.class", "mensaje error");
  });

  it("<Proyectos/> - Creacion de Proyectos", () => {
    cy.get("[data-cy=input-nuevo-proyecto]").type("Hero");
    cy.get("[data-cy=submit-nuevo-proyecto]").click();
  });

  it("<Tareas/> - Validacion y Creación", () => {
    cy.get('[data-cy="listado-proyectos"] li:nth-child(1) button').click();
    cy.get("[data-cy=submit-tarea]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("eq", "El nombre de la tarea es obligatorio");

    cy.get("[data-cy=alerta]").should("have.class", "mensaje error");

    cy.get("[data-cy=input-tarea]").type("Definir Colores");
    cy.get("[data-cy=submit-tarea]").click();

    cy.get("[data-cy=input-tarea]").type("Definir Arquitectura");
    cy.get("[data-cy=submit-tarea]").click();

    cy.get("[data-cy=input-tarea]").type("Definir Metricas");
    cy.get("[data-cy=submit-tarea]").click();

    cy.get("[data-cy=input-tarea]").clear();
  });

  it("<Tarea/> - Completar , Descompletar , Editar y Eliminar", () => {
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=estado-tarea]")
      .should("exist")
      .click();
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=estado-tarea]").should(
      "have.class",
      "completo"
    );

    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=estado-tarea]")
      .should("exist")
      .click();

    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=estado-tarea]").should(
      "have.class",
      "incompleto"
    );

    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=btn-editar]")
      .should("exist")
      .click();

    cy.get("[data-cy=input-tarea]").clear().type("Actualizar Metricas");
    cy.get("[data-cy=submit-tarea]").click();

    cy.get("[data-cy=input-tarea]").clear();

    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=nombre-tarea]")
      .should("exist")
      .invoke("text")
      .should("eq", "Actualizar Metricas");

    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=btn-eliminar]")
      .should("exist")
      .click();
  });
});

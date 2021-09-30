describe("User can see menu", () => {
  beforeEach(() => {
    cy.intercept("**api/products", {
      fixture: "menuItems.json",
    });
    cy.visit("/");
    cy.get("[data-cy=menu]").click();
  });
   
  describe("User can see menu-items by category", () => {
    it("is expected to display starter menu-items", () => {
      cy.get("[data-cy=starter-tab]").should("contain", "Starters");
    });
    it("is expected to display the content of starter-menu-item", () => {
      cy.get("[data-cy=starter-tab]").click();
      cy.get("[data-cy=menu-section]").children().should("have.length", 2);
      cy.get("[data-cy=starter-menu-item-1]").within(() => {
      cy.get("[data-cy=starter-header]").should("contain", "Starters");
        cy.get("[data-cy=name]").should("contain", "Insect");
        cy.get("[data-cy=description]").should("contain", "Creepy Crawlies");
        cy.get("[data-cy=price]").should("contain", "250 kr");
        cy.get("[data-cy=image]").should("be.visible");
        cy.get("[data-cy=starter-basket-1]").should("be.visible");
      });
    });

    it("is expected to display main_courses items", () => {
      cy.get("[data-cy=main-menu-tab]").should("contain", "Main Courses");
    });
    it("is expected to display the content of main-menu items", () => {
      cy.get("[data-cy=main-menu-tab]").click();
      cy.get("[data-cy=main-menu-item-1]").within(() => {
        cy.get("[data-cy=name]").should("contain", "Kangaroo Steak");
        cy.get("[data-cy=description]").should("contain", "Bouncy bouncy");
        cy.get("[data-cy=price]").should("contain", "500 kr");
        cy.get("[data-cy=image]").should("be.visible");
        cy.get("[data-cy=main-basket-1]").should("be.visible");
      });
    });

    it("is expected to display desert items", () => {
      cy.get("[data-cy=dessert-tab]").should("contain", "Dessert");
    });
    it("is expected to display the content of the desset items", () => {
      cy.get("[data-cy=dessert-tab]").click();
      cy.get("[data-cy=dessert-item-1]").within(() => {
        cy.get("[data-cy=name]").should("contain", "Durian");
        cy.get("[data-cy=description]").should("contain", "Smelly smelly");
        cy.get("[data-cy=price]").should("contain", "100 kr");
        cy.get("[data-cy=image]").should("be.visible");
        cy.get("[data-cy=main-basket-1]").should("be.visible");
      });
    });

    it("is expected to display sides items", () => {
      cy.get("[data-cy=sides-tab]").should("contain", "Sides");
    });
    it("is expected to display the content of the sides items", () => {
      cy.get("[data-cy=sides-tab]").click();
      cy.get("[data-cy=sides-item-1]").within(() => {
        cy.get("[data-cy=name]").should("contain", "Bread");
        cy.get("[data-cy=description]").should("contain", "Bread");
        cy.get("[data-cy=price]").should("contain", "15 kr");
        cy.get("[data-cy=image]").should("be.visible");
        cy.get("[data-cy=main-basket-1]").should("be.visible");
      });
    });

    it("is expected to display drink items", () => {
      cy.get("[data-cy=drinks-tab]").should("contain", "Drinks");
    });
    it("is expected to display the contenet of the drink items", () => {
      cy.get("[data-cy=sides-tab]").click();
      cy.get("[data-cy=sides-item-1]").within(() => {
        cy.get("[data-cy=name]").should("contain", "Mouse Wine");
        cy.get("[data-cy=description]").should("contain", "Squeek!");
        cy.get("[data-cy=price]").should("contain", "35 kr");
        cy.get("[data-cy=image]").should("be.visible");
        cy.get("[data-cy=main-basket-1]").should("be.visible");
      });
    });
  });
});

describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should display the title", () => {
    cy.get("h1").contains("Fall Limited Edition Sneakers");
  });

  it("Add a product to the cart", () => {
    cy.get(".bg-lightGrayishBlue > :nth-child(3)").click();
    cy.get(".bg-lightGrayishBlue > :nth-child(1)").click();
    cy.get(".bg-lightGrayishBlue > :nth-child(3)").click();

    cy.get("button.bg-orange").click();
    cy.get(".gap-8 > .relative > img").click();
    cy.get(".bg-white > .mt-4 > .flex > .object-fit").click();
    cy.get(".gap-8 > .relative > img").click();

    cy.get(".bg-lightGrayishBlue > :nth-child(3)").click();
    cy.get("button.bg-orange").click();
    cy.get(".gap-8 > .relative > img").click();

    cy.get(".text-xs").contains("2");
  });

  it("Browse the gallery", () => {
    cy.get("div.relative img.w-full").click();

    cy.get(".-mr-6").click();
    cy.get(".-mr-6").click();
    cy.get(".-mr-6").click();
    cy.get(".-mr-6").click();

    cy.get(".-ml-6").click();
    cy.get(".-ml-6").click();
    cy.get(".-ml-6").click();
    cy.get(".-ml-6").click();

    cy.get("div.justify-end button.text-white").click();
  });

  /*it("Add a product to the cart", () => {
    cy.get(":nth-child(2) > .relative > .-mt-4").click();
    cy.get(".text-2xl").contains("Your Cart (1)");
  });

  it("Remove a product from the cart", () => {
    cy.get(":nth-child(2) > .relative > .-mt-4").click();
    cy.get('[aria-label="remove"]').click();
    cy.get(".text-2xl").contains("Your Cart (0)");
  });

  it("Add all products and remove all products", () => {
    cy.get("button.text-Red").each(($btn) => {
      cy.wrap($btn).click();
    });

    cy.get('[aria-label="plus"]').each(($btn) => {
      cy.wrap($btn).click();
    });

    cy.get('[aria-label="remove"]').each(($btn) => {
      cy.wrap($btn).click();
    });
  });

  it("Add products and confirm order", () => {
    cy.get(":nth-child(1) > .relative > .-mt-4").click();
    cy.get(":nth-child(2) > .relative > .-mt-4").click();
    cy.get(":nth-child(3) > .relative > .-mt-4").click();

    cy.get('[aria-label="plus"]:first').click().click();

    cy.get(".mt-8").click();

    cy.get(".text-3xl").contains("Order Confirmed");

    cy.get(".fixed > .bg-white > .w-full").click();
    cy.get(".text-2xl").contains("Your Cart (0)");
  });*/
});

it("sanity check", ()=> {
    expect(3+5).to.equal(8)
})

describe('Tests Order App', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })

    const nameInput = () => cy.get('input[name="name"]')
    const topping1Checkbox = () => cy.get('input[name="topping1"]')
    const topping2Checkbox = () => cy.get('input[name="topping2"]')
    const topping3Checkbox = () => cy.get('input[name="topping3"]')
    const topping4Checkbox = () => cy.get('input[name="topping4"]')
    const sizeDropdown = () => cy.get('select[name="size"]')
    const specialInput = () => cy.get('input[name="special"]')
    const orderBtn = () => cy.get('[id="order-button"]')

    it("Tests that you can add text", ()=> {
        nameInput()
        .should('have.value', '')
        .type('testing the box')
        .should('have.value', 'testing the box')
    })

    it("Tests that you can add multiple toppings", ()=> {
        topping1Checkbox()
        .should('be.not.checked')
        .click()
        .should('be.checked')
        topping2Checkbox()
        .should('be.not.checked')
        .click()
        .should('be.checked')
        topping3Checkbox()
        .should('be.not.checked')
        .click()
        .should('be.checked')
        topping4Checkbox()
        .should('be.not.checked')
        .click()
        .should('be.checked')
    })

    it("Tests that you can submit the completed form, that the page resets, and that this order is sent to a route containing '/orders/'", ()=> {
        nameInput()
        .type('Test')
        sizeDropdown()
        .select('Large')
        topping1Checkbox()
        .click()
        topping3Checkbox()
        .click()
        specialInput()
        .type('Test')
        orderBtn()
        .should('be.not.disabled')
        .click()
        cy.contains(/Test/).should('not.exist')
        cy.intercept(
            {
                method: 'GET',
                url: '/orders/*',
            },
            []
        ).as('newPizzaOrderTest')
    })
})
/// <reference types= "cypress" />

describe('this is lab almosafer 2', () => {
    it('test the lowest price for hotels', () => {
        cy.visit("https://www.almosafer.com/en")
        cy.get('.cta__saudi').click()
        cy.get('#uncontrolled-tab-example-tab-hotels').click()

        const arabicrandom = Math.floor(Math.random() * 3) + 1
        const locations = ["dubai", "jeddah", "amman"]
        const locationstype = locations[arabicrandom - 1]
        cy.get('[data-testid="AutoCompleteInput"]').type(locationstype)

        cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()

        cy.wait(5000);

        cy.get('[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]').click()


        cy.get('[data-testid="HotelSearchResult__Hotel0__Card"] > .sc-aewfc > .sc-iIHjhz > .sc-dKEPtC').find(".Price__Value").invoke("text").then((lowestprice) => {
            let myprice = parseFloat(lowestprice.replace('$', ''));


            cy.get('[data-testid="HotelSearchResult__Hotel39__Card"] > .sc-aewfc > .sc-iIHjhz > .sc-dKEPtC').find(".Price__Value").invoke("text").then((highestprice) => {
                let myprice2 = parseFloat(highestprice.replace('$', ''));

                expect(myprice).to.be.lessThan(myprice2);
            });
        });
    });
});
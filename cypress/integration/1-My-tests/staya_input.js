describe('Тестирование входа staya', function () {
    
    it('Вход', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('krasovskajaanna16@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Testvxod123');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
        cy.end();
         })


})


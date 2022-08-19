describe('Тестирование входа staya с неправильным паролем', function () {
    
    it('Вход', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('krasovskajaanna16@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('nepravelnparol');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        cy.end();
         })


})
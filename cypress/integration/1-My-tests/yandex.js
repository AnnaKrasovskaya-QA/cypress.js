describe('Тестирование yandex', function () {
    
    it('Вход', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').type('котята');
        cy.get('.search2__button > .button').click();
        cy.contains('Картинки по запросу «котята»');
        cy.end();
         })


})
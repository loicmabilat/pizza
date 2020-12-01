describe('My First Test', () => {
    it('charger le site', ()=>{
        cy.visit('http://127.0.0.1:5500/pizza/index.html');
        cy.contains('type').click()

        cy.url()sould('include','/commands/actions')
        // get une entre, ecrit a l'interieur et verifie que la valeur a ete mise a jour
        cy.get('action-email')
        .type('fake@email.com')
        .should('have.value','fake@email.com')

    })
    })

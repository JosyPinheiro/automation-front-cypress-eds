// Classe responsavel por mapear os objetos da pagina de login

class login {
    element = {
        useremail: () => cy.get("#=email"),
    }

    imputCampEmail()
        {
            this.element.useremail().type()

        }

}
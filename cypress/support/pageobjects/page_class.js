//Locators for the apply form is added here

class ApplyForm {
    getUserName(){
        return cy.get('#Name');
    }
    getEmail(){
        return cy.get('#Email');
    }
    clickeducationButton(){
        return cy.get('.is-closed');
    }
    getCollegeName(){
        return cy.get('#education_college');
    }
    getCourse(){
        return cy.get('#education_course');
    }
    getBranch(){
        return cy.get('#education_branch');
    }
    getYear(){
        return cy.get('#education_year');
    }
    getpersonalInfo(){
        return cy.get('#personalInfo');
    }
    checkradioButton(){
        return cy.get('[type="radio"]');
    }
    getLinkedIn(){
        return cy.get('#linkedIn');
    }
    getTesting(){
        return cy.get('#testing-knowledge');
    }
    careerInterset(){
        return cy.get('#software-testing');
    }
    getlevelProgramming(){
        return cy.get('select').select('beginner');
    }
    languagesCode(){
        return cy.get('#languages');
    }
    findUs(){
        return cy.get('#find-us');
    }
    lookingProgram(){
        return cy.get('#looking-for');
    }
    technicalInterest(){
        return cy.get('#technical-interest');
    }
    checkfullyRemote(){
        return cy.get('.checkmark');
    }
    clickSubmit(){
        return cy.get('form').contains('submit');
    }
    selectModal(){
        return cy.get('.ant-modal-content');
    }
    ClickokModal(){
        return cy.get('.ant-btn-primary');
    }

}
export default ApplyForm
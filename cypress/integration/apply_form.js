// This file we are writing test to fill the apply form and verify the email is in the inbox


import ApplyForm from "../support/pageobjects/page_class"

//Creating object for pageclass

describe('Apply Form for internship', function () {
    const pageclassObject = new ApplyForm();
    this.beforeEach(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })


    it('Fill up Name and Email',function () {
        let url = Cypress.env("details").url
        cy.visit(url);
        pageclassObject.getUserName().type(this.data.name);
        pageclassObject.getEmail().type(this.data.email);
        cy.log("Added the username and email")
        cy.screenshot('Fillupnames')
        cy.rp_screenshot('Fillupnames.png')

    })
    it('Fill up the education details', function () {
        pageclassObject.clickeducationButton().click();
        pageclassObject.getCollegeName().type(this.data.college);
        pageclassObject.getCourse().type(this.data.course);
        pageclassObject.getBranch().type(this.data.branch);
        pageclassObject.getYear().type(this.data.year).type('{enter}');
        cy.log("Added the education details")
        cy.screenshot('Fillupeducation')
        cy.rp_screenshot('Fillupeducation.png')


    })

    it('Fill up the Personal details',function(){
        cy.log("Get personal information")
        pageclassObject.getpersonalInfo().type(this.data.personalinfo);
        pageclassObject.checkradioButton().check(this.data.projectcheck);
        pageclassObject.getLinkedIn().type(this.data.linkedin);
        pageclassObject.getTesting().type(this.data.testing);
        pageclassObject.careerInterset().type(this.data.careerinterset);
        pageclassObject.getlevelProgramming();
        pageclassObject.languagesCode().type(this.data.knownlanguages);
        cy.log("Filled up the personal details")
        cy.screenshot('Filluppersonal')
        cy.rp_screenshot('Filluppersonal.png')

    })

    it("About company and technical interset",function(){
        pageclassObject.findUs().type(this.data.findus);
        pageclassObject.lookingProgram().type(this.data.lookingfor);
        pageclassObject.technicalInterest().type(this.data.technicalinterest);
        pageclassObject.checkfullyRemote().click({multiple:true});
        pageclassObject.clickSubmit().click();
        cy.log("Logged about the company and technical interest")
        cy.screenshot('Aboutcompany')
        cy.rp_screenshot('Aboutcompany.png')
        pageclassObject.selectModal();
        pageclassObject.ClickokModal().click();

    })
    it("Look for an email with specific subject ", function () {
        cy.task("gmail:check", {
          options: {
            from: "no-reply@qxf2.com",
            to:"annapoorani@qxf2.com",
            subject: "A candidate showed interest in the junior QA training program",
            include_body:true

          }
        }).then(emails => {
          assert.isAtLeast(
            emails.length,
            1,
            "Expected to find at least one email, but none were found!"
          );
          const emailBodyHtml = emails[0].body.html; //get body
          assert.isTrue(
            emailBodyHtml.indexOf(
              "What do you know about testing?"
            ) >= 0,
            "Found the email body"
          );
        });
      });

})

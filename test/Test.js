const homePage = browser.page.W3school.Homepage();
 


describe('Filling Pratice Form of DemoQA Website for checking mandatory input fields: ', function(){
    before(function (browser){
        homePage.navigate();
        browser.windowMaximize();
    });

    after(function(browser){
        browser.end();
    });

    it('1.) User entering valid input in First Name  : ', function(){
      homePage.expect.element('@firstNameInput').visible      
      homePage.enterFirstName('Demo') })
      homePage.pause(1000)
     
    it('2.) User entering valid input in Last Name : ', function(){
        homePage.expect.element('@lastName').visible
        homePage.enterLastName('Testing')
        homePage.pause(1000)
      
    })

    it('3.) User entering valid input in Email : ', function(){
      homePage.expect.element('@email').visible
      homePage.enterEmail('Demo@gmail.com')
      homePage.pause(1000)
      
    })

    it('4.) User entering valid input in Email : ', function(){
      homePage.selectGender()
      homePage.pause(3000)
      homePage.assert.elementPresent('#gender-radio-2:checked')
      
    })

    it('5.) User entering valid input in Email : ', function(){
      homePage.expect.element('@Mobile').visible
      homePage.enterMobile('9988998877')
      homePage.pause(1000)
    })

    it('6.) User is able to select date of current year : ', function(){
      homePage.expect.element('#dateOfBirthInput').visible
      homePage.enterDateOfBirth()
      homePage.pause(1000)
    })

      it('7.) User is able to enter atleast one subject : ', function(){
     
      homePage.inputSubject(['Maths', browser.Keys.TAB])  
      homePage.pause(2000)
    })

      it('8.) User is able to select atleast one of the hobbies: ', function(){
      homePage.expect.element('@Hobbies').visible
      homePage.selectHobbies()
      homePage.pause(2000)
      homePage.assert.elementPresent('#hobbies-checkbox-1:checked');
      homePage.pause(2000)
    
    })

      it('9.) User is able to enter address using alphabets and numbers : ', function(){
      homePage.enterCurrentAddress('Demo Testing Website, 101')
      homePage.pause(2000)
      })

     // .clickDropDownState()
      //homePage.pause(1000)
  
    //  .clickDropDownCity()
    //  homePage.pause(1000)
    // //  .browser.Keys.ARROW_DOWN, browser.Keys.TAB  
    // // //  homePage.pause(1000)

    it('10.) User should be able to click on submit button with entering required fields : ', function(){
      homePage.waitForElementVisible('@submitButton')
      homePage.pause(2000)
      homePage.submitButton() 
    })

    it('11.) User should be able to see Submission Message : ', function(){
      homePage.submissionMessage()
      homePage.pause(2000)
      homePage.expect.element('@SubmitMessage').text.to.contain('Thanks for submitting the form')

    })
    it('12.) User is able to see all added enteries : ', function(){

      homePage.expect.element('tbody tr:nth-child(1) td:nth-child(2)').text.to.contain('Demo Testing')
      homePage.pause(1000)
      homePage.expect.element('tbody tr:nth-child(3) td:nth-child(2)').text.to.contain('Female')
      homePage.pause(1000)
      homePage.expect.element('tbody tr:nth-child(4) td:nth-child(2)').text.to.contain('9988998877')
      homePage.pause(1000)
      homePage.expect.element('tbody tr:nth-child(5) td:nth-child(2)').text.to.contain('22 March,2024')
      homePage.pause(1000)
      homePage.expect.element('tbody tr:nth-child(7) td:nth-child(2)').text.to.contain('Sports')
      homePage.pause(1000)
      homePage.expect.element('tbody tr:nth-child(9) td:nth-child(2)').text.to.contain('Demo Testing Website, 101')
      homePage.pause(1000)

    })

    it('13.) user is able to close the filled form display: ', function(){
      homePage.closeForm;
      homePage.expect.element('@praticeFormTitle').text.to.contain('Practice Form')
    })

    it('14.) Entering Inavlid Email Should show error: ', function(){
      homePage.expect.element('@firstNameInput').visible      
      homePage.enterFirstName('Demo') 
      homePage.expect.element('@lastName').visible
      homePage.enterLastName('Testing')
      homePage.expect.element('@email').visible
      homePage.enterEmail('Demo@gmail')
      homePage.pause(1000)
      homePage.selectGender()
      homePage.pause(3000)
      homePage.expect.element('@Mobile').visible
      homePage.enterMobile('9988998877')
      homePage.expect.element('#dateOfBirthInput').visible
      homePage.enterDateOfBirth()
      homePage.expect.element('@Hobbies').visible
      homePage.selectHobbies()
      homePage.pause(2000)
      homePage.enterCurrentAddress('Demo Testing Website, 101')
      homePage.waitForElementVisible('@submitButton')
      homePage.submitButton() 
      homePage.assert.visible('@practiceFormTitle');


    })
});
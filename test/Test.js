const homePage = browser.page.W3school.Homepage();
 


describe('Filling Pratice Form of DemoQA Website ', function(){
    before(function (browser){
        homePage.navigate();
        browser.windowMaximize();
    });

    after(function(browser){
        browser.end();
    });

    it('User should be able to submit form successfully: ', function(browser){
      
      homePage
      .enterFirstName('Demo')
      homePage.pause(1000)
      

      .enterLastName('Testing')
      homePage.pause(1000)

      .enterEmail('Demo@gmail.com')
      homePage.pause(1000)

      .selectGender()
      homePage.pause(1000)

      .enterMobile('9988998877')
      homePage.pause(1000)

      .enterDateOfBirth()
      homePage.pause(1000)

      .inputSubject(['Maths', browser.Keys.TAB])  
      
     
      homePage.pause(2000)


      .selectHobbies()
      homePage.pause(1000)

      .enterCurrentAddress('Demo Testing Website')
      homePage.pause(2000)

    //   .clickDropDownState()
    //   homePage.pause(1000)
    // //    .browser.Keys.ARROW_DOWN, browser.Keys.TAB
    // // //    homePage.pause(1000)

    //  .clickDropDownCity()
    //  homePage.pause(1000)
    // //  .browser.Keys.ARROW_DOWN, browser.Keys.TAB  
    // // //  homePage.pause(1000)


      .submitButton()

       

      .submissionMessage()
      homePage.pause(1000)

    });
});
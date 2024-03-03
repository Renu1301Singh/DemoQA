
module.exports = {
    url:'https://demoqa.com/automation-practice-form',
    

    elements: {

        firstNameInput: {
            selector: '#firstName' 
        } ,  
        lastName:'#lastName',
        email:'#userEmail',
        Gender:'label[for="gender-radio-2"]',
        Mobile:'#userNumber',

        dateOfBirth:'#dateOfBirthInput',
        selectMonth: '.react-datepicker__month-select>[value="2"]',
        selectdate: ".react-datepicker__day.react-datepicker__day--022",
        selectYear:'.react-datepicker__year-select>[value="2024"]',
        
        subjects:'#subjectsInput',
        selectSubject: '.subjects-auto-complete__menu.css-2613qy-menu ',
        Hobbies:`label[for='hobbies-checkbox-1']`,
        currentAddress: '#currentAddress',
        selectStateDropDown: 'div:nth-child(2)>div>div>div>.css-tlfecz-indicatorContainer', 
        SelectCityDropDown:'div:nth-child(3)>div>div>div>.css-tlfecz-indicatorContainer',       
        submitButton:'.btn.btn-primary',
        SubmitMessage: '#example-modal-sizes-title-lg',
        closeButton:'#closeLargeModal',
        praticeFormTitle:'.text-center',

    },
    commands: [ {
        enterFirstName: function(value){
            return this
            .setValue('@firstNameInput', value);        
        },
        enterLastName: function(value){
            return this
            .setValue('@lastName',value);
          
        },
        enterEmail: function(value){
            return this
            .setValue('@email',value)
        },
        selectGender: function(){
            return this
            .assert.visible('@Gender')
            .click('@Gender')
        },
        enterMobile: function(value){
            return this
            .setValue('@Mobile',value)
        },

        enterDateOfBirth: function(){
            return this
            .click('@dateOfBirth')
            .click('@selectMonth')
            .click('@selectYear')
            .click('@selectdate')   
        },

        inputSubject: function(value){
            return this
            .assert.visible('@subjects')
            .setValue('@subjects',value)

        },
    

        selectHobbies: function(){
            return this
            .assert.visible('@Hobbies') 
            .click('@Hobbies');
          
        },
        enterCurrentAddress: function(value){
            return this
            .setValue('@currentAddress',value);
          
        },
        
        clickDropDownState: function() {
            return this
              .assert.visible('@selectStateDropDown') 
              .click(['@selectStateDropDown',browser.Keys.ARROW_DOWN, browser.Keys.TAB]) 
            
          },
    
        clickDropDownCity: function(){
            return this
            .assert.visible('@SelectCityDropDown')
            .click('@SelectCityDropDown')
                     
         
      },
    submitButton(){
        return this.click('@submitButton')
    },

      submissionMessage(){
        return this
        .assert.textContains('@SubmitMessage',"Thanks for submitting the form")
      },

      closeForm(){
        return this
        .click('@closeButton')
      },
    }],

};
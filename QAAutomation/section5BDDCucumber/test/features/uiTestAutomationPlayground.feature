# Feature
# a line naming the feature, 
# followed by three lines that describe the benefit, 
# the role and the feature itself. 

Feature: Testing basic functionalities
    In order to complete basic functionalities
    As a user, I can click on several links
    And then can access to any particular web page

    Background:
        Given The user is on UI Home page
        Then UI Home page should be opened

    Scenario: Web Dynamic ID page should be displayed
        When The user clicks on 'Dynamic ID'
        Then Dynamic ID web page should be opened
        And A button dynamic id should be displayed
        Then Button's id should be a string type

    Scenario: Alert should be displayed
        When The user clicks on 'Class Attribute'
        Then Class Attribute page should be opened
        When The user clicks on blue button
        Then An Alert should be displayed
        When The user accepts the alert
        Then The Alert should be dissapear
        And The locator should contain 'btn-primary'
    
    @hidden
    Scenario: Check if element it is hidden only one time
        When The user clicks on 'Hidden Layers'
        Then Hidden Layers web page should be opened
        And The z-index attribute value is 'z-index: 1;'
        When The user clicks on z-index green button
        Then The z-index attribute value change to 'z-index: 2;'
        When The user clicks on z-index blue button
        Then There are only 2 div children


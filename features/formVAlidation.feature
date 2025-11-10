

Feature: Form validation


    Scenario: Submit the form with "condition"
        Given I am on the form page 
        When I fill in the fields with "<firstName>", "<lastName>", "<phoneNumber>", "<country>", "<emailAddress>", "<password>", "<agreeToTerms>" 
        Then I should see a success message on the page "<firstName>", "<lastName>", "<phoneNumber>", "<country>", "<emailAddress>", "<password>", "<condition>"
        Examples:
            | firstName  | lastName | phoneNumber | country        | emailAddress   | password     | agreeToTerms | condition |
            | John Doe   | Smith    | 1234567890  | Brazil | abc@gmail.com | Password123 | true          | positive |
            |    | Smith    | 1234567890  | | abc@gmail.com | 12345678 | false          | positive |
            |    | Smith    | 123-456-7890  |  | abc@gmail.com | 1234567 | false          | positive |
            |    | Smith    | 1234567890  |  | abc@gmail.com | &'&/b6k@1~1T0mTJolp | false          | positive |
           
            
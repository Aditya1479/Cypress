Feature: End to End Ecommerce validation


    Application Description

    Scenario: Ecommerce Product Delivery
    Given I Open Ecommerce Page   
    When I Add item to cart
    And Validate total prices
    Then Select the country submit and verfiy Thank you
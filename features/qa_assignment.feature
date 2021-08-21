Feature: QA Assessment

Scenario: Verify different pricing options available
  Given I open visp.net in Chrome browser
  When I go to pricing page
  Then I should see three pricing options i.e. ' 0 to 1000 Subscribers', '1000+ Subscribers', '5000+ Subscribers'


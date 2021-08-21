Set Up New Cucumber using NodeJS

1. Install nodeJS
2. Create “QA”Folder
3. npm install -g cucumber 
4. npm install  @cucumber/cucumber
5. npm install selenium-webdriver
6. npm install chromedriver
7. Npm install geckodriver
8. Npm install chai assert
9. npm init
10. npm test to execute automation
11. Edit package.json 
	"test": "./node_modules/.bin/cucumber-js" and make sure it work when running npm test on bash/cmd
12. Create cucumber.js under QA folder
	module.exports = { default: '--publish-quiet' }

Folder/File Tree

QA 
- features
	- qa_assignment.feature
	- step_definitions
		- check_pricing_options

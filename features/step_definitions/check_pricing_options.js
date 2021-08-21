const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');

require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I open {word} in Chrome browser',{timeout: 20000}, async function (url) {
    await driver.get(`https://${url}`);
});

When("I go to {word} page", async function(pricing){
	const element = driver.findElement(By.id(`${pricing}`));
	await driver.executeScript("arguments[0].scrollIntoView()", element);
});

Then("I should see three {word} options i.e. {string}, {string}, {string}", async function(pricing, less_1000, more_1000, more_5000){
	const element = driver.findElement(By.id(`${pricing}`));
	const text = await element.getText();
	const array = text.split("\n");
	expect(array).to.contain(less_1000, more_1000, more_5000);
});

After('end', async function(){
    await driver.quit();
});
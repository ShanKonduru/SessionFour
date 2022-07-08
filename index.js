const assert = require("assert");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { By } = require("selenium-webdriver");

const chromeOptions = new chrome.Options();
chromeOptions.addArguments("start-maximized");

async function sessionFour() {
  let driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  await driver.get("http://www.google.com/");

  userName = await driver.findElement(By.name("q"));
  userName.sendKeys("shan konduru", webdriver.Key.RETURN);
  let inputData = userName.getText();
  console.log(inputData);  

  actualuserName = await driver.findElement(By.name("q")).getText();
  console.log(actualuserName);  

  assert.equal(actualuserName, inputData);
}

sessionFour();

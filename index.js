const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { By, Key } = require("selenium-webdriver");

const chromeOptions = new chrome.Options();
chromeOptions.addArguments("start-maximized");

async function sessionFour() {
  let driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  driver.get("https://www.facebook.com/");

  userName = await driver.findElement(By.name("email"));
  userName.sendKeys("shankonduru@gmail.com");

  password = driver.findElement(By.name("pass"));
  password.sendKeys("shankonduru@");

  loginButton = driver.findElement(By.name("login"));
  loginButton.click();
}

sessionFour();

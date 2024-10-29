import { Builder, By, until } from "selenium-webdriver";
import { expect } from "chai";

describe('Melakukan testing halaman login page', function () {
    this.timeout(10000);
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // ANCHOR TUGAS PERCOBAAN
    it('should log in with valid credentials', async function () {

        // Buka halaman login lokal
        await driver.get('http://localhost:8181/login.html');

        // Isi username dan password yang benar
        const usernameField = await driver.findElement(By.id('username'));
        const passwordField = await driver.findElement(By.id('password'));
        const loginButton = await driver.findElement(By.id('login-btn'));

        await usernameField.sendKeys('testuser');
        await delay(1000);

        await passwordField.sendKeys('testpassword');
        await delay(1000);
        await loginButton.click();

        // Ganti pengecekan URL dengan memverifikasi elemen tertentu di halaman setelah login
        // Misalnya, memeriksa apakah pesan berhasil muncul
        const successMessage = await driver.wait(until.elementLocated(By.id('message')), 10000);
        const messageTextt = await successMessage.getText();
        expect(messageTextt).to.include('Login successful');
        await delay(1000);

    });

    // ANCHOR TUGAS 1
    it('should login with invalid username or password', async function () {
        // Buka halaman login lokal
        await driver.get('http://localhost:8181/login.html');

        // Isi username dan password yang benar
        const usernameField = await driver.findElement(By.id('username'));
        const passwordField = await driver.findElement(By.id('password'));
        const loginButton = await driver.findElement(By.id('login-btn'));

        await usernameField.sendKeys('wrongusername');
        await delay(1000);

        await passwordField.sendKeys('wrongpassword');
        await delay(1000);

        await loginButton.click();

        // Ganti pengecekan URL dengan memverifikasi elemen tertentu di halaman setelah login
        // Misalnya, memeriksa apakah pesan berhasil muncul
        const errorMessage = await driver.wait(until.elementLocated(By.id('error-message')), 10000);
        const messageText = await errorMessage.getText();
        expect(messageText).to.include('login failed!');
        await delay(1000)
    });

    // ANCHOR TUGAS 2
    it('should log in with valid credentials using CSS selector', async function () {
        await driver.get('http://localhost:8181/login.html');

        // Temukan elemen dengan CSS selector dan isi username
        const usernameField = await driver.findElement(By.css('#username'));
        await usernameField.sendKeys('testuser');
        await delay(1000); // Menunggu 1 detik

        // Temukan elemen dengan CSS selector dan isi password
        const passwordField = await driver.findElement(By.css('#password'));
        await passwordField.sendKeys('testpassword');
        await delay(1000); // Menunggu 1 detik

        // Klik tombol login dengan CSS selector
        const loginButton = await driver.findElement(By.css('#login-btn'));
        await loginButton.click();

        // Verifikasi pesan sukses
        const successMessage = await driver.wait(until.elementLocated(By.css('#message')), 10000);
        const messageText = await successMessage.getText();
        expect(messageText).to.include('Login successful');
    });
    it('should log in with valid credentials using XPath', async function () {
        await driver.get('http://localhost:8181/login.html');

        // Temukan elemen dengan XPath dan isi username
        const usernameField = await driver.findElement(By.xpath('//*[@class="username"]'));
        await usernameField.sendKeys('testuser');
        await delay(1000); // Menunggu 1 detik

        // Temukan elemen dengan XPath dan isi password
        const passwordField = await driver.findElement(By.xpath('//*[@id="password"]'));
        await passwordField.sendKeys('testpassword');
        await delay(1000); // Menunggu 1 detik

        // Klik tombol login dengan XPath
        const loginButton = await driver.findElement(By.xpath('//*[@id="login-btn"]'));
        await loginButton.click();

        // Verifikasi pesan sukses
        const successMessage = await driver.wait(until.elementLocated(By.xpath('//*[@id="message"]')), 10000);
        const messageText = await successMessage.getText();
        expect(messageText).to.include('Login successful');
    });

    // ANCHOR TUGAS 3
    it('should check if login elements are visible', async function () {
        await driver.get('http://localhost:8181/login.html');

        // Temukan elemen input username
        const usernameField = await driver.findElement(By.css('#username'));
        const passwordField = await driver.findElement(By.css('#password'));
        const loginButton = await driver.findElement(By.css('#login-btn'));

        // Periksa apakah elemen terlihat
        const isUsernameVisible = await usernameField.isDisplayed();
        const isPasswordVisible = await passwordField.isDisplayed();
        const isLoginButtonVisible = await loginButton.isDisplayed();

        // Validasi hasil
        expect(isUsernameVisible).to.be.true; // Memastikan field username terlihat
        expect(isPasswordVisible).to.be.true; // Memastikan field password terlihat
        expect(isLoginButtonVisible).to.be.true; // Memastikan tombol login terlihat
    });

})
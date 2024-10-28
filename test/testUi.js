import { Builder, By, until } from "selenium-webdriver";
import chrome from 'selenium-webdriver';
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

    it('should log in with valid credentials', async function () {

        // Buka halaman login lokal
        await driver.get('http://localhost:8080/login.html');

        // Isi username dan password yang benar
        const usernameField = await driver.findElement(By.id('username'));
        const passwordField = await driver.findElement(By.id('password'));
        const loginButton = await driver.findElement(By.id('login-btn'));

        await usernameField.sendKeys('testuser');
        await passwordField.sendKeys('testpassword');
        await loginButton.click();

        // Ganti pengecekan URL dengan memverifikasi elemen tertentu di halaman setelah login
        // Misalnya, memeriksa apakah pesan berhasil muncul
        const successMessage = await driver.wait(until.elementLocated(By.id('message')), 5000);
        const messageText = await successMessage.getText();
        expect(messageText).to.include('Login successful');
    });

    it('should login with invalid username or password', async function () {
        // Buka halaman login lokal
        await driver.get('http://localhost:8080/login.html');

        // Isi username dan password yang benar
        const usernameField = await driver.findElement(By.id('username'));
        const passwordField = await driver.findElement(By.id('password'));
        const loginButton = await driver.findElement(By.id('login-btn'));

        await usernameField.sendKeys('');
        await passwordField.sendKeys('');
        await loginButton.click();

        // Ganti pengecekan URL dengan memverifikasi elemen tertentu di halaman setelah login
        // Misalnya, memeriksa apakah pesan berhasil muncul
        const errorMessage = await driver.wait(until.elementLocated(By.id('error-message')), 5000);
        const messageText = await errorMessage.getText();
        expect(messageText).to.include('login failed!');


    });


})

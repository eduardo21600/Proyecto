describe('Bienvenido a webdriverIO', () => {
    it('Primer Prueba Hola Mundo', async () => {
        await browser.url('/')
        browser.maximizeWindow()
        
        await expect(browser).toHaveTitle('DEMOQA')
    });

    it('Segundo Ejercicio', async() => {
        await browser.url("https://demoqa.com/elements")
        browser.maximizeWindow()
        browser.pause(5000)

        //Assert
        await expect(browser).toHaveUrl("https://demoqa.com/elements")
        
    });

    it('Segundo Ejercicio toHaveURLContaining', async() => {
        await browser.url("https://demoqa.com/elements")
        browser.maximizeWindow()
        browser.pause(5000)

        //Assert
        await expect(browser).toHaveUrlContaining("https://demoqa.com")
        
    });

    it('Tercero Ejercicio toHaveTitleContaining', async () => {
        await browser.url('/')
        browser.maximizeWindow()
        
        await expect(browser).toHaveTitleContaining('DemoQA')
    });
});   
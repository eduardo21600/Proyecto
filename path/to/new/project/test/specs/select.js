describe('Ejemplo de Combox', () => {
    var t=2500

    it('Select for index', async () => {
        await browser.url('https://testpages.herokuapp.com/styled/basic-html-form-test.html')
        await browser.maximizeWindow()
        await browser.pause(2000)
        await expect(browser).toHaveTitle('HTML Form Elements')
    });

    it.only('Reto Selectores', async () => {
        await browser.url('https://demoqa.com/automation-practice-form')
        await browser.maximizeWindow()
        await browser.pause(2000)

        await expect(browser).toHaveTitle('DEMOQA')

        (await $("#currentAddress")).scrollIntoView()

         var combo1=await $('.css-1pahdxg-control > .css-1hwfws3')
         combo1.scrollIntoView()
         combo1.click()
         await browser.pause(t)
         combo1.click({x:0,y:50})
         await browser.pause(t)
    });

});   
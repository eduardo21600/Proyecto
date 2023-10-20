describe('Ejercicio de texto ', () => {
    var t=250;
    it('Demo addvalue', async () => {
        await browser.url('https://demoqa.com/text-box')
        await browser.maximizeWindow()
        await browser.pause(2000)
        await expect(browser).toHaveTitle('DEMOQA')

        var banner= await $(".main-header").getText()
        console.log("El banner dice" + banner)

        if(banner=='Text BoxT'){
            await $("#userName").setValue("Un nombre")
            await browser.pause(t)
            await $("#userEmail").setValue("qa@gmail.com")
            await browser.pause(t)
            await $("#currentAddress").setValue("Direccion Pacifico #34")
            await $("#permanentAddress").setValue("Valor")
            await browser.pause(t)

            var buttom = await $("#submit")
            await buttom.scrollIntoView();
            await buttom.click()
            await browser.pause(t)
        }
        else{
            console.log("No es la pagina")
        }
        
        
        
        

    });

}); 
describe('Elemento tipo click', () => {
    it('Demo uno click', async () => {
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        await browser.pause(1000)
        await expect(browser).toHaveTitle('DEMOQA')

        let buttom= await $(".category-cards > div:nth-of-type(1) .avatar")
        await buttom.scrollIntoView()
        await browser.pause(6000)
        await buttom.click()
        await browser.pause(6000)

    });

    it('Demo uno click', async () => {
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        await browser.pause(1000)
        await expect(browser).toHaveTitle('DEMOQA')

        let buttom= await $(".category-cards > div:nth-of-type(1) .avatar")
        let buttoms= await $(".show li:nth-of-type(5) > .text")
        await buttom.scrollIntoView()
        await buttom.click()
        await browser.pause(2000)
        

        await buttoms.scrollIntoView()
        await buttoms.click()
        await browser.pause(6000)

        $("#doubleClickBtn").doubleClick()
        await browser.pause(3000)

    });

    it('Demo se puede hacer click', async () => {
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        await browser.pause(1000)
        await expect(browser).toHaveTitle('DEMOQA')

        let buttom= await $(".category-cards > div:nth-of-type(1) .avatar")
        let buttoms= await $(".show li:nth-of-type(2) > .text")
        await buttom.scrollIntoView()
        await buttom.click()
        await browser.pause(2000)
        
        let mb= await buttoms.isClickable()
        console.log('El boton es clickable'+mb)

        if(mb==true){
            await buttoms.scrollIntoView()
            await buttoms.click()
            await browser.pause(6000)
        } else{
            console.log("No se puede hacer click ")
        }
        

        $("#doubleClickBtn").doubleClick()
        await browser.pause(3000)

    });

    it.only('Demo waitFor', async () => {
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        await browser.pause(1000)
        await expect(browser).toHaveTitle('DEMOQA')

        let buttom= await $(".category-cards > div:nth-of-type(1) .avatar")
        let buttoms= await $(".show li:nth-of-type(2) > .text")
        await buttom.scrollIntoView()
        await buttom.click()
        await browser.pause(2000)
        
        let mb= await buttoms.waitForClickable({timeout:5000, timeoutMsg:"No se encontro el elemento"})

    });

}); 


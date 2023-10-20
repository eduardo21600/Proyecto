describe('', () => {
    //Variable
    var t=2000

    it('Demo Uno', async () => {
        await browser.url('https://demoqa.com/automation-practice-form')
        await browser.maximizeWindow()
        await browser.pause(2000)

        await expect(browser).toHaveTitle('DemoQA')
        
        $("[for='gender-radio-1']").click();
        await browser.pause(t);
        $("[for='gender-radio-2']").click();
        await browser.pause(t);
        $("[for='gender-radio-3']").click();
        await browser.pause(t);
        $("[for='hobbies-checkbox-1']").click();
        await browser.pause(t);
        $("[for='hobbies-checkbox-3']").click();
        await browser.pause(t);
        
    });

});   
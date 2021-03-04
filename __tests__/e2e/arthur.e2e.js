describe('arthur', () => {
    beforeEach(async () => {
        await page.goto('http://localhost:8080/')
    })

    test('should show the page with buttons and initial state', async () => {
        await expect(page).toHaveText("#dog-message", "I'm waiting...");
        await expect(page).toHaveText("#bone-count", "Current bone count: 0");
    });

    test('should count up and woof when a bone is given', async () => {
        await page.click("#give-bone");
        await expect(page).toHaveText("#dog-message", "Woof!");
        await expect(page).toHaveText("#bone-count", "Current bone count: 1");
        
    });

    test('should count down and whine when a bone is taken', async () => {
        await page.click("#give-bone");
        await page.click("#give-bone");
        // first give 2 bones so we have bones to take!
        await expect(page).toHaveText("#dog-message", "Woof!");
        await expect(page).toHaveText("#bone-count", "Current bone count: 2");


        await page.click("#take-bone");
        
        await expect(page).toHaveText("#dog-message", "Whine!");
        await expect(page).toHaveText("#bone-count", "Current bone count: 1");

    });

    test('should be confused when a bone is taken and the count is zero', async () => {
        // check it's 0 first
        await expect(page).toHaveText("#dog-message", "I'm waiting...");
        await expect(page).toHaveText("#bone-count", "Current bone count: 0");
        
        await page.click("#take-bone");
        
        await expect(page).toHaveText("#dog-message", "I'm confused!");
        await expect(page).toHaveText("#bone-count", "Current bone count: 0");
    });
})
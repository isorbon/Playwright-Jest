class BasePage{
    constructor(page){
        this.page = page;
    }

    async navigate(path){
        await this.page.goto("https://www.accenture.com/ch-en" + path);
    }
}

module.exports = BasePage;
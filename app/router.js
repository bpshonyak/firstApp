module.exports = {
    init: function() {
        const that = this;
        $$(document).on('pageBeforeInit', function (e) {
            let page = e.detail.page;
            that.pageBeforeInit(page);
        });

        $$(document).on('pageAfterAnimation', function (e) {
            let page = e.detail.page;
            that.pageAfterAnimation(page);
        });
    },
    pageAfterAnimation: function(page) {
        let name = page.name;
        let from = page.from;

        if (name === 'homeView' || name === 'contactView' || name === 'setting' ) {
            if(from === 'left') {
                // appFunc.showToolbar();
            }
        }
    },
    pageBeforeInit: function(page) {
        let name = page.name;
        let query = page.query;

        switch (name) {
            case 'about':
                // aboutModule.init();
                break;
            case 'feedback':
                // feedbackModule.init();
                break;
            case 'item':
                // tweetModule.init(query);
                break;
            case 'message':
                // messageModule.init(query);
                break;
            case 'language':
                // languageModule.init();
                break;
        }
    }
};

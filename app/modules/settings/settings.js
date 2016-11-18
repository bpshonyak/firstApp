require('./settings.scss');

let appFunc = require('../utils/appFunc'),
    template = require('./settings.tpl.html'),
    feedbackTemplate = require('../feedback/feedback.html');

let settingView = {
    init: function(){
        settingView.bindEvents();
    },
    renderSetting: function(){
        if($$('#settingView .page-content')[0]) return;

        hiApp.showIndicator();

        var renderData = {
            avatarUrl: 'http://lorempixel.com/68/68/people/7/',
            nickName: 'HiApp',
            points: '100'
        };

        var output = appFunc.renderTpl(template, renderData);
        $$('#settingView .page[data-page="setting"]').html(output);

        hiApp.hideIndicator();
    },
    logOut: function(){
        hiApp.confirm("Logout?", function(){
            //mainView.router.loadPage('page/login.html');
            //hiApp.showTab('#ourView');
        });
    },
    gotoFeedback: function () {
        settingsF7View.router.loadContent(feedbackTemplate);
    },
    bindEvents: function(){
        var bindings = [{
            element: '#settingView',
            event: 'show',
            handler: settingView.renderSetting
        },{
            element: '#settingView',
            selector: '.logout-button',
            event: 'click',
            handler: settingView.logOut
        },{
            element: '#settingView',
            selector: '.update-button',
            event: 'click',
            //handler: settingView.checkVersion
        },{
            element: '#settingView',
            selector: '#feedbackLink',
            event: 'click',
            handler: settingView.gotoFeedback
        }];
        appFunc.bindEvents(bindings);
    }
};

module.exports = settingView;

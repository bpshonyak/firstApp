require('./app.scss');

let homeView = require('../home/home'),
    contactsView = require('../contacts/contacts'),
    settingsView = require('../settings/settings');

module.exports = {
    init: function() {
        homeView.init();
        contactsView.init();
        settingsView.init();
    }
};

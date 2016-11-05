"use strict";

const https = require('https');

const constants = require('./constants.json').downloads;

module.exports = function(npmAPIurl) {

    function getDownloads(packageName, period, callback) {

        console.log(`getting downloads of '${packageName}' for the period '${period}'`);

        let uri = `${npmAPIurl}/downloads/point/${period}/${packageName}`;

        https.get(uri, (response) => {
            let body = '';
            response.on('data', function(chunk) {
                body += chunk;
            });
            response.on('end', function() {
                let parsed = JSON.parse(body);
                callback(null, parsed.downloads);
            });
        }).on('error', (err) => {
            return callback(err);
        });
    }

    return {

        getDownloadsLastMonth: function(packageName, callback) {
            getDownloads(packageName, constants.periods.LAST_MONTH, callback);
        },

        getDownloadsLastWeek: function(packageName, callback) {
            getDownloads(packageName, constants.periods.LAST_WEEK, callback);
        },

        getDownloadsLastDay: function(packageName, callback) {
            getDownloads(packageName, constants.periods.LAST_DAY, callback);
        },

        getDownloads: getDownloads

    };

};

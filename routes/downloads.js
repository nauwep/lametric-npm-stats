"use strict";

const lametric = require('../lametric');

module.exports = function(routes, npmAPI) {

    routes.get('/downloads', (req, res) => {
        const packageName = req.query.package;
        const period = req.query.downloadPeriod || 'last-month';
        if (!packageName) {
            let formatedError = lametric.formatDownloadsError();
            return res.status(200).json(formatedError);
        }

        npmAPI.getDownloads(packageName, period, (err, downloads) => {
            let formatedResponse = lametric.formatDownloads(packageName,
                period, downloads);
            return res.status(200).json(formatedResponse);
        });
    });

};

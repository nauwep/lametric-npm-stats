"use strict";

const npmConstants = require('../npmAPI/constants.json');
const npmLaMetricIcon = 'i3543';

const createFrame = function(icon = '', text = '') {
    return {
        text,
        icon
    };
};

const createPackageNameFrame = function(packageName) {
    return createFrame(npmLaMetricIcon, packageName);
};

const createDownloadsFrame = function(downloads, period) {
    const periods = npmConstants.downloads.periods;

    let text = downloads;

    if (period === periods.LAST_MONTH) {
        text += ' /m';
    } else if (period === periods.LAST_WEEK) {
        text += ' /w';
    } else if (period === periods.LAST_DAY) {
        text += ' /d';
    }

    return createFrame(npmLaMetricIcon, text);
};

module.exports = {

    formatDownloadsError: function() {

        let frames = [];

        frames.push(createPackageNameFrame('package undefined'));

        return {
            frames
        };

    },

    formatDownloads: function(packageName, period, downloads) {

        let frames = [];

        frames.push(createPackageNameFrame(packageName));
        frames.push(createDownloadsFrame(downloads, period));

        return {
            frames
        };
    }

};

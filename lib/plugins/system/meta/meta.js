var HTMLMetaHandler = require('./HTMLMetaHandler');

module.exports = {

    provides: 'self',

    getData: function(url, htmlparser, cb) {

        var metaHandler = new HTMLMetaHandler(
            url,
            htmlparser.request.response.headers["content-type"],
            function(error, meta) {
                //console.log('meta', error, meta);
                if (error) {
                    return cb(error);
                }
                cb(null, {
                    meta: meta
                });
            });

        htmlparser.addHandler(metaHandler);
    }

};
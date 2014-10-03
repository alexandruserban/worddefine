var request = require('request')
    , cheerio = require('cheerio')
    ;

module.exports.define = function (word, callback) {
    request({uri: "http://www.merriam-webster.com/dictionary/" + encodeURIComponent(word)}, function (err, res, body) {
        if (res.statusCode == 200) {
            var $ = cheerio.load(body)
                , item = {}
                , $firstDef = $('#headword')
                ;
            item.audio = 'http://www.merriam-webster.com/audio.php?file=' + $firstDef.find('input').first().attr('onclick')[1];
            item.definition = $firstDef.html();
        } else {
            err = 'No definition found';
        }

        callback.call(res, err, item);
    });
}
n
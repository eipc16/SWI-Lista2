var natural = require('natural');
var fs = require('fs');

var TfIdf = natural.TfIdf;
var tf_idf = new TfIdf();

let DATA_DIR_NAME = './documents/';

function readFiles(dirname, onError, onFinish) {
    files = []
    fs.readdir(dirname, function (err, filenames) {
        if (err) {
            onError(err);
            return;
        }

        let fileCount = filenames.length;
        let currentCount = 0;

        filenames.forEach(function (filename) {
            fs.readFile(dirname + filename, 'utf-8', function (err, content) {
                if (err) {
                    onError(err);
                    return;
                }
                files = [...files, {filename: filename, content: content}]
                currentCount = currentCount + 1;
                if(currentCount === fileCount) {
                    onFinish(files)
                }
            });
        });
    });
}

documents = []

function load_files(files) {
    document_data = {}

    for(var i = 0; i < files.length; i++) {
        const content = files[i].content;
        tf_idf.addDocument(content);
    }

    for(var i = 0; i < files.length; i++) {
        const content = files[i].content;

        const words = content.trim().split(/\s+/);
        const distinct_words = new Set();
        words.forEach(word => distinct_words.add(word));

        terms = tf_idf.listTerms(i);

        document_data = {
            ...document_data,
            [files[i].filename]: {
                // content: files[i].content,
                terms: terms,
                count: words.length,
                distinct_count: distinct_words.size,
                terms_count: terms.length
            }
        }
    }

    return document_data;
}



readFiles('./results/',
    error => {
        throw Error(error)
    },
    (files) => {
        loaded_files = load_files(files);
        let data = JSON.stringify(loaded_files);
        fs.writeFileSync(DATA_DIR_NAME + 'calculated.json', data);
    }
);

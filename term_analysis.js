var fs = require('fs');

const DATA_PATH = './results/';

let raw_data = fs.readFileSync(DATA_PATH + 'calculated.json');
let parsed_data = JSON.parse(raw_data);

let stop_words = []

fs.readFileSync(DATA_PATH + 'stop_words.txt', 'utf-8')
    .split(/\r?\n/)
    .map(text => text.trim())
    .forEach(function(line) {
        stop_words.push(line);
    }
);

/*
'term': {
    'tfidf': {
        'doc': number
    },
    'counts': {
        'doc': number
    }
}
*/

let result = {}

removed_words_count = 0;

for (const filename in parsed_data) {
    file_data = parsed_data[filename]
    file_terms = file_data.terms;

    file_terms.forEach(term => {
        if(stop_words.includes(term.term) || !isNaN(term.term)) {
            removed_words_count = removed_words_count + 1;
        } else {
            result = {
                ...result,
                [term.term]: {
                    ...(result[term.term] ? result[term.term] : {}),
                    total_count: (result[term.term] && result[term.term].total_count ? result[term.term].total_count + term.tf : term.tf ),
                    tfidf: {
                        ...(result[term.term] ? result[term.term].tfidf : {}),
                        [filename]: term.tfidf
                    },
                    count: {
                        ...(result[term.term] ? result[term.term].count : {}),
                        [filename]: term.tf
                    },
                }
            }
        }
    });
}

console.log(`Removed ${removed_words_count} common words.`);

fs.writeFileSync(DATA_PATH + 'terms_data.json', JSON.stringify(result))


filtered_terms = result;


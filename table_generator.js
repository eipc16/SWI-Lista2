var fs = require('fs');
var table = require('markdown-table');

const DATA_PATH = './results/';

let raw_data = fs.readFileSync(DATA_PATH + 'calculated.json');
let parsed_data = JSON.parse(raw_data);

let all_filenames = Object.keys(parsed_data);

function generate_file_term_data(file_data) {
    let terms_data = []

    for (const i in file_data.terms) {
        let term = file_data.terms[i]
        terms_data = [
            ...terms_data,
            [term.term, term.tf]
        ]
    }

    return table([
        ["Term", "Liczba wystąpień w dokumencie"],
        ...terms_data
    ])
}

function generate_files_data_table(parsed_data) {
    let files_data = []
    for (const filename in parsed_data) {
        file_data = parsed_data[filename];
        files_data = [
            ...files_data,
            [filename, file_data.count, file_data.distinct_count, file_data.terms_count]
        ]
    }
    return table([
        ["Nazwa dokumentu", "Liczba słów", "Liczba różnych słów", "Liczba termów"],
        ...files_data
    ])
}

fs.writeFileSync(DATA_PATH + 'file_data.md', generate_files_data_table(parsed_data))


for (const filename in parsed_data) {
    const out_file = (DATA_PATH + filename).replace('.txt', '.md');
    fs.writeFileSync(out_file, generate_file_term_data(parsed_data[filename]))
}

function generate_total_term_table(term_data) {
    let data = []

    for (const term in term_data) {
        data = [
            ...data,
            [term, term_data[term].total_count]
        ]
    }

    data.sort((left, right) => {
        if(left[1] > right[1]) return -1;
        if(left[1] < right[1]) return 1;
        return 0;
    })

    return table([
        ["Term", "Liczba wystąpień we wszystkich dokumentach"],
        ...data
    ])
}

const raw_terms_data = fs.readFileSync(DATA_PATH + 'terms_data.json');
terms_data = JSON.parse(raw_terms_data)

fs.writeFileSync(DATA_PATH + 'final_terms.md', generate_total_term_table(terms_data))


function generate_value_by_file_by_term(filenames, terms, valueMapper) {
    let columns = ["", ...filenames]
    let rows = []

    for (const term in terms) {
        let row_column = [`**${term}**`]
        let term_data = terms[term]
        values = valueMapper(term_data)
        filenames.forEach(filename => {
            const row_column_entry = values[filename] ? values[filename] : "0";

            row_column = [
                ...row_column,
                row_column_entry
            ]
        })

        rows = [...rows, row_column]
    }

    return table([columns, ...rows])
}

fs.writeFileSync(DATA_PATH + 'count_map.md', generate_value_by_file_by_term(all_filenames, terms_data, term => term.count))
fs.writeFileSync(DATA_PATH + 'tfidf_map.md', generate_value_by_file_by_term(all_filenames, terms_data, term => term.tfidf))
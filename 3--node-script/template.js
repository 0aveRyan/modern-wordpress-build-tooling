const Mustache = require('mustache');
const fs = require('fs');
const path = require('path');
const json2php = require('json2php');
const kebabCase = require('lodash/kebabCase');

const data = {
    name: "Meetup Plugin",
    version: "5.5.5",
    author: "Dave Ryan",
    items: [
        { title: "one", desc: "uno" },
        { title: "two", desc: "dos" },
        { title: "three", desc: "tres" },
        { title: "four", desc: "quattro" },
        { title: "five", desc: "cinco" },
    ],
};

console.log('Writing JSON...');
fs.writeFileSync(kebabCase(data.name) + '.json', JSON.stringify(data, null, 2));

data.phpArray = json2php(data);

console.log('Building Mustache Template...');

const template = fs.readFileSync(path.resolve(__dirname, './template.mustache'), 'utf8');

const builtFileContents = Mustache.render(template, data);

fs.writeFileSync(kebabCase(data.name) + '.php', builtFileContents);
console.log('.... complete!');

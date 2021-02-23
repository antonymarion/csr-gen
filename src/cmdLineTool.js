const yargs = require("yargs");
var csrgen = require('./csr-gen');

const options = yargs
    .usage("Usage: -o <outputDir> -c <company> -e <email> -d <number_of_days>")
    .option("o", {alias: "outputDir", describe: "Your outputDir (relative path)", type: "string", demandOption: true})
    .option("c", {alias: "company", describe: "Your company", type: "string", demandOption: true})
    .option("e", {alias: "email", describe: "Your email", type: "string", demandOption: true})
    .option("d", {alias: "days", describe: "Your validity in days", type: "string", demandOption: true})
    .argv;

const greeting = `Hello, ${options.email}! we are generation your CRL...`;
console.log(greeting);


var domain = 'dummyDomain.com';

csrgen(domain, {
    outputDir: path.join(__dirname, options.outputDir),
    read: true,
    company: options.company,
    email: options.email,
    days: options.days
}, function (err, keys) {
    console.log('CLR created!')
    console.log('key: ' + keys.private);
    console.log('csr: ' + keys.csr);
});

const greeting_goodbye = `Goodbye, ${options.email}! the CRL generation process is finished`;
console.log(greeting_goodbye);

var csrgen = require('./csr-gen');
var fs = require('fs');

var domain = 'exampledomain.com';

csrgen(domain, {
    outputDir: __dirname,
    read: true,
    company: 'Example, Inc.',
    email: 'joe@foobar.com'
}, function (err, keys) {
    console.log('CLR created!')
    console.log('key: ' + keys.private);
    console.log('csr: ' + keys.csr);
});

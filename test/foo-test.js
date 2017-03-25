var tape = require('tape'),
    foo = require('../').foo;

tape('foo() is working', function(test) {
    var expected = ['bar', 'bar', 'bar'];
    test.deepEqual(foo(3), expected);
    test.end();
});

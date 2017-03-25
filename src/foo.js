import * as d3 from 'd3';

function foo(n) {
    return d3.range(n)
        .map(function() { return 'bar'; });
}

export { foo }

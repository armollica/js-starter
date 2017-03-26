import { range } from 'd3-array';

function foo(n) {
    return range(n)
        .map(function() { return 'bar'; });
}

export { foo }

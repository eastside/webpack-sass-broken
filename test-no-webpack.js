import sass from 'sass';

function main() {
    let out = sass.compileString(`
h1 {
font-weight: pow(10, 3);
}`, {
    functions: {
        // Note: in real code, you should use `math.pow()` from the built-in
        // `sass:math` module.
        'pow($base, $exponent)': function(args) {
            console.log(args);
            const base = args[0].assertNumber('base').assertNoUnits('base');
            const exponent = args[1].assertNumber('exponent').assertNoUnits('exponent');
            return new sass.SassNumber(Math.pow(base.value, exponent.value));
        }
    }
    });
    console.log(out);
}

main();
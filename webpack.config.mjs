import path from 'path';

const __dirname = path.resolve();

const config = {
   mode: "development",
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                "functions": {
                  'pow($base, $exponent)': function(args) {
                    console.log("args were: ", args);
                    const base = args[0].assertNumber('base').assertNoUnits('base');
                    const exponent = args[1].assertNumber('exponent').assertNoUnits('exponent');
                    return new sass.SassNumber(Math.pow(base.value, exponent.value));
                  }
                }
              }
            }
          }
        ]
      },
    ],
  },
 };

 export default config;
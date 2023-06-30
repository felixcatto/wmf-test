import path from 'path';
import { fileURLToPath } from 'url';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import crypto from 'crypto';

const dirname = url => fileURLToPath(path.dirname(url));
const __dirname = dirname(import.meta.url);

let config = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
};

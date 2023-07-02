import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const dirname = url => fileURLToPath(path.dirname(url));
const __dirname = dirname(import.meta.url);

const mode = process.env.NODE_ENV || 'development';
const isDev = mode === 'development';
const isProd = mode === 'production';
const isAnalyze = process.env.ANALYZE;

let config = {
  mode,

  devtool: isDev && 'eval-cheap-module-source-map',

  entry: path.resolve(__dirname, './client/main/index.tsx'),

  output: {
    filename: isProd ? 'js/index.[contenthash:6].js' : 'js/index.js',
    path: path.resolve(__dirname, 'dist/public'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    extensionAlias: { '.js': ['.ts', '.js'], '.jsx': ['.tsx'] },
  },

  stats: { warnings: false, children: false, modules: false },

  module: {
    rules: [
      {
        test: /(\.js$|\.ts$|\.tsx)/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              transform: {
                react: {
                  runtime: 'automatic',
                  importSource: '@emotion/react',
                  refresh: isDev,
                },
              },
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { url: false } },
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    isAnalyze && new BundleAnalyzerPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
    isProd && new MiniCssExtractPlugin({ filename: 'css/index.[contenthash:6].css' }),
    isProd &&
      new CopyPlugin({
        patterns: [
          { from: 'public', to: '.', filter: filePath => !filePath.endsWith('index.html') },
        ],
      }),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') }),
  ].filter(Boolean),

  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    hot: true,
    compress: true,
    historyApiFallback: true,
    client: { logging: 'warn' },
  },
};

export default config;

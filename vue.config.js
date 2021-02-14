const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/design/index.scss'),
      ],
    });
}

module.exports = {
  css: {
    sourceMap: true,
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [],
    },
  },

  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleResource(config.module.rule('scss')
      .oneOf(type)));
  },

  configureWebpack: {
    resolve: {
      alias: {
        svg: path.resolve(__dirname, 'src/assets/svg/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg|ico|md)$/i,
          loader: 'file-loader?name=app/images/[name].[ext]',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: [
            path.resolve(__dirname, 'src/presets/'),
          ],
        },
      ],
    },
  },
};

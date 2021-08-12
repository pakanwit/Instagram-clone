const path = require('path')

const {
  removeModuleScopePlugin,
  addWebpackModuleRule,
  override,
  babelInclude
} = require('customize-cra')

module.exports = override(
  removeModuleScopePlugin(),
  babelInclude([
    path.resolve('src'),
  ]),
  addWebpackModuleRule({
    test: /\.ttf$/,
    loader: require.resolve('url-loader')
  })
)

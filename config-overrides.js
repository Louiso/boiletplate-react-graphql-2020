const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const { _moduleAliases } = require('./package.json')

const aliases = {}

Object.keys(_moduleAliases).forEach(key => {
  aliases[key] = _moduleAliases[key].replace('.', __dirname)
})

module.exports = override(
  addWebpackAlias({
    ...aliases,
    'react-dom': '@hot-loader/react-dom'
  }),
  fixBabelImports('import', {
    libraryDirectory: 'es',
    libraryName: 'antd',
    style: 'css',
  })
)
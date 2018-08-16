/*Created by SmallFour on 2018/8/16*/
const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    }], config); return config
};
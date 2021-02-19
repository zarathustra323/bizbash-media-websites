const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://bizbash.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'load-more', id: '5d4af41d2ab3e700014e2dd6' },
  ]);

module.exports = config;

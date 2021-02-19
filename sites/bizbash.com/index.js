const startServer = require('@bizbash-media/package-global/start-server');
const document = require('@bizbash-media/package-global/components/document');
const components = require('@bizbash-media/package-global/components');
const fragments = require('@bizbash-media/package-global/fragments');

const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  document,
  components,
  fragments,
  routes,
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));

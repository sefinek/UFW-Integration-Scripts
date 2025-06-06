const { version, authorMeta, repoUrl, license } = require('../repo.js');
const { color, reset, support } = require('./utils/helper.js');
const logger = require('../logger.js');

module.exports = () => {
	console.log(`
  ${color('255;0;130')} _____   ____       _       
  ${color('235;0;120')}|_   _| |  _ \\ ___ | |_     ${color('235;0;120')}T${color('235;0;120')}-${color('235;0;120')}Pot To AbuseIPDB (v${version}) [${license} License]
  ${color('215;0;110')}  | |   | |_) / _ \\| __|    ${color('235;0;120')}${authorMeta}
  ${color('195;0;95')}  | |   |  __/ (_) | |_     ${repoUrl} ${color('235;0;120')}
  ${color('175;0;85')}  |_|   |_|   \\___/ \\__|${reset}
`);

	logger.log(support);
};

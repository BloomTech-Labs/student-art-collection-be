const cors = require('cors');
const helmet = require('helmet');

module.exports = middleware => {
  middleware.use(cors());
  middleware.use(helmet());
};

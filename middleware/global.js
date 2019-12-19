const cors = require('cors');
const helmet = require('helmet');

// function useMiddleware(middleware) {
//   console.log('this is middleware', middleware)
//   middleware.use(cors());
//   middleware.use(helmet());
// }


// module.exports = async middleware => {
//   const application = useMiddleware(middleware)
//   return application
// };

module.exports = middleware => {
  middleware.use(cors())
  middleware.use(helmet())
}
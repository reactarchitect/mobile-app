import { init } from '@rematch/core';
import logger from 'redux-logger';
import * as models from '../Models';
import { loadingPlugin } from '../Plugins';
import { persistPlugin } from '../Persist';

// if (process.env.NODE_ENV === `development`) {
//   middlewares.push(logger);
// }

export default init({
  key: 'root',
  models: models,
  plugins: [loadingPlugin, persistPlugin],
  redux: {
    middlewares: [logger],
  },
});

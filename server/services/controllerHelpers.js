import { each, every } from 'lodash';
import * as models from '../models';

/**
 *
 *  getColumns: Array
 *
 *  @param {str} modelName
 *
 *  Gets column names for a model and returns them in an array
 */
export const getColumns = async (modelName, omitThese) => {
  const result = await models[modelName].describe();
  const filtered = [];
  each(result, (_, name) => {
    if (!(/.*Id|createdAt|updatedAt|id/).test(name)) {
      if (!omitThese[name]) {
        filtered.push(name);
      }
    }
  });
  return filtered;
};

/**
 *
 *  validateBody: Boolean
 *
 *  @param {object} req
 *  @param {array} params
 *
 *  Tests if all param names exist inside of req.body
 */
export const validateBody = (req, requiredParams) => (
  every(requiredParams, name => req.body[name])
);

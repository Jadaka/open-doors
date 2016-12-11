import User from './user.model';
import Company from './company.model';
import Review from './review.model';

/**
 *
 *  These Associations add specific methods on the model instances for easy joins.
 *
 *  @url http://docs.sequelizejs.com/en/latest/docs/associations/
 *  @url http://docs.sequelizejs.com/en/latest/docs/associations/#one-to-many-associations
 */
Company.hasMany(Review);
Review.belongsTo(Company);

User.hasMany(Review);
Review.belongsTo(User);

export {
  User,
  Company,
  Review,
};

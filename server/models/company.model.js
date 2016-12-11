import Sequelize from 'sequelize';
import { each, omit } from 'lodash';
import sequelize from '../db/db';

const Company = sequelize.define('companies', {
  name: {
    type     : Sequelize.STRING,
    allowNull: false,
    unique   : true,
  },
  address: {
    type     : Sequelize.TEXT,
    allowNull: false,
  },
  overallRating: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  reviewCount: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  salaryCount: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  // average rating between 000~500, to be converted to decimal later
  interactions: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  harassment: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  advancement: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  familySupport: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  workLifeBalance: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  equalPay: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
}, {
  getterMethods: {
    // get ratings
    ratings: function() {
      return omit(this.dataValues, ['id', 'name', 'address', 'createdAt', 'updatedAt']);
    },
    // get ratings without overallRating & reviewCount
    ratingsWithoutOverall: function() {
      return omit(this.ratings, ['overallRating', 'reviewCount']); // CONTINUE HERE
    },
  },
  setterMethods: {
    ratings: function(ratings) {
      // find the new mean average for each rating
      each(ratings, (rating, ratingName) => {
        const mean = (
          ((this[ratingName] * this.reviewCount) + (rating * 100))
          / (this.reviewCount + 1)
        );
        this.setDataValue(ratingName, mean);
      });

      // update reviewCount & salaryCount
      this.setDataValue('reviewCount', this.reviewCount + 1);

      // update overallRating
      let total = 0;
      let count = 0;
      each(this.ratingsWithoutOverall, (rating) => {
        total += rating;
        count += 1;
      });
      this.setDataValue('overallRating', total / count);

      this.save();
    },
  },
});

export default Company;

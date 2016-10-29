import Sequelize from 'sequelize';
import { promisify } from 'bluebird';
import { hash, compare } from 'bcrypt';
import sequelize from '../db/db';

const hashPassword = promisify(hash);
const comparePassword = promisify(compare);

const User = sequelize.define('users', {
  username: {
    type     : Sequelize.STRING,
    allowNull: false,
    unique   : true,
  },
  email: {
    type     : Sequelize.STRING,
    allowNull: false,
    validate : {
      isEmail: true,
    },
  },
  password: {
    type     : Sequelize.STRING,
    allowNull: false,
  },
}, {
  /**
   *  We use hooks for injecting required tasks to model events to conceal necessary
   *  tasks for database related calls, such as hashing a password before creating
   *  a user entry.
   * 
   *  Each hook behaves synchronously unless we define a second 'cb' parameter or return a promise.
   *  
   *  If asynchronous, the next lifecycle event will wait until the 'cb' is called,
   *  or the returned promise is resolved/rejected.
   */
  hooks: {
    beforeCreate: async (user) => {
      try {
        user.password = await hashPassword(user.password, 2);
        return sequelize.Promise.resolve(user);
      } catch (err) {
        return sequelize.Promise.reject(err);
      }
    },
  },
  // instanceMethods are convenient for giving our model instances common tasks
  instanceMethods: {
    /**
     *  checkPassword: Promise<boolean>
     *  
     *  comparePassword is a promisifed version of the bcrypt.compare function
     *  it resolves to a boolean value.
     *  https://www.npmjs.com/package/bcrypt#to-check-a-password
     */
    checkPassword: (inputPass, hashedPass) => comparePassword(inputPass, hashedPass),
  },
},

);


export default User;

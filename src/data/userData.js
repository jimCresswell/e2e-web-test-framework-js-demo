/* To do: extract this pattern into a general Data class. */

const DATA_CLASS = 'user';

/**
 * User data singleton.
 */
class UserData {
  /**
   * Define the user data at instantiation.
   */
  constructor() {
    this.types = {
      typical: {
        existingCustomer: false,
        changingLender: true,
        porpertyValue: 300000,
        mortgageAmount: 150000,
        currentTermLengthYears: 30,
      },
    };
  }

  /**
   * Access the user data.
   * @param  {String} type A key identifying the user type.
   * @return {Object}          The user data.
   */
  getByType(type) {
    if (Object.prototype.hasOwnProperty.call(this.types, type)) {
      return this[type];
    }
    throw new TypeError(
      `Unsupported ${DATA_CLASS} type ${type}.
      Available types are ${Object.keys(this.types)}`
    );
  }
}

const userData = new UserData();
export default userData;

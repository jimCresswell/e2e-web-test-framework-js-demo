import Example from '../../helpers/data/example';

/**
 * User class to wrap the simple user examples.
 * @extends Example
 */
class User extends Example {
  /*
    Static constants.
   */

  /**
   * CHANGING_LENDER label.
   * @constant {string}
   * @static
   */
  static get CHANGING_LENDER() { return 'changing lender'; }

  /**
   * FIRST_HOME label.
   * @constant {string}
   * @static
   */
  static get FIRST_HOME() { return 'buying my first home'; }


  /*
    Instance getters.
   */

  /**
   * Does the user have a Nationwide mortgage?
   * @type {boolean}
   */
  get hasNationwideMortgage() {
    return this.data.hasNationwideMortgage;
  }

  /**
   * The user's application type.
   * @type {string}
   */
  get applicationType() {
    return this.data.applicationType;
  }

  /**
   * Is the user changing lender?
   * @type {boolean}
   */
  get isChangingLender() {
    return this.data.applicationType === User.CHANGING_LENDER;
  }

  /**
   * The value of the target property in GBP.
   * @type {int}
   */
  get propertyValue() {
    return this.data.propertyValue;
  }

  /**
   * The requested value of mortgage in GBP.
   * @type {int}
   */
  get mortgageAmount() {
    return this.data.mortgageAmount;
  }

  /**
   * The requested term length in years.
   * @type {int}
   */
  get termLengthYears() {
    return this.data.termLengthYears;
  }
}

export default User;

/**
 * User data singleton.
 */
class UserData {

  constructor() {
    this.typicalUser = {
      email: "wgabrieldapaixao@gmx.com",
      password: "12345678"
    };
  }

  getUser(userType) {
    switch (userType) {
      case 'typical':
        return this.typicalUser;
        break;
      default:
        throw new TypeError("Unsupported user type " + userType);
    }
  }
}

const userData = new UserData();
export default userData;

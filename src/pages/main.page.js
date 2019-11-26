import PageObject from '../helpers/browser/pageObject';
import navigationSection from './navigation.section';

const URL = '/';

/**
 * Singleton page object for the default URL page.
 */
class MainPage extends PageObject {
  /**
   * Mix in the navigation section.
   */
  constructor() {
    super(URL);
    this.navigation = navigationSection;
  }
}

const mainPage = new MainPage();
export default mainPage;

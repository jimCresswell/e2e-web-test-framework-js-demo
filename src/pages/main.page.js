import PageObject from '../helpers/browser/pageObject';
import navigationSection from './sections/navigation.section';

const URL = '/';

/**
 * Singleton page object for the default URL page.
 */
class MainPage extends PageObject {
  /**
   * Mix in the URL and navigation section.
   */
  constructor() {
    super(URL, [navigationSection]);
  }
}

const mainPage = new MainPage();
export default mainPage;

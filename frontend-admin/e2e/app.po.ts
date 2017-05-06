import {browser, by, element} from 'protractor';

export class FrontendAdminPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('frontend-admin-root h1')).getText();
  }
}

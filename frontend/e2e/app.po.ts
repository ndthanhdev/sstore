import {browser, by, element} from "protractor";

export class FrontEndPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sstore-root h1')).getText();
  }
}

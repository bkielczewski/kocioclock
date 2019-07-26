import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {

  it('should display main page', () => {
    AppPage.navigateTo();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE
    } as logging.Entry));
  });
});

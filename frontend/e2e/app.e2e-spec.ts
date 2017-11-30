import { WorkloggerPage } from './app.po';

describe('worklogger App', () => {
  let page: WorkloggerPage;

  beforeEach(() => {
    page = new WorkloggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

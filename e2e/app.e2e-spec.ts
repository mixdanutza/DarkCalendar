import { SmallCalendarPage } from './app.po';

describe('small-calendar App', () => {
  let page: SmallCalendarPage;

  beforeEach(() => {
    page = new SmallCalendarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

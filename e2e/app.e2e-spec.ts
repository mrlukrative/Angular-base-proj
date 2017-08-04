import { NgBaseProjPage } from './app.po';

describe('ng-base-proj App', () => {
  let page: NgBaseProjPage;

  beforeEach(() => {
    page = new NgBaseProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

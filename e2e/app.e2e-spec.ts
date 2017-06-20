import { NgCliWebpackSample111Page } from './app.po';

describe('ng-cli-webpack-sample111 App', () => {
  let page: NgCliWebpackSample111Page;

  beforeEach(() => {
    page = new NgCliWebpackSample111Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

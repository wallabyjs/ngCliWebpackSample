import { NgCliWebpackSample126Page } from './app.po';

describe('ng-cli-webpack-sample126 App', () => {
  let page: NgCliWebpackSample126Page;

  beforeEach(() => {
    page = new NgCliWebpackSample126Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

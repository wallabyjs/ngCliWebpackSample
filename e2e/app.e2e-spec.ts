import { NgCliWebpackSample120Page } from './app.po';

describe('ng-cli-webpack-sample120 App', () => {
  let page: NgCliWebpackSample120Page;

  beforeEach(() => {
    page = new NgCliWebpackSample120Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

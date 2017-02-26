import { NgCliWebpackSampleRc0Page } from './app.po';

describe('ng-cli-webpack-sample-rc0 App', () => {
  let page: NgCliWebpackSampleRc0Page;

  beforeEach(() => {
    page = new NgCliWebpackSampleRc0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

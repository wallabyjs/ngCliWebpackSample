import { NgCliWebpackSampleRc3Page } from './app.po';

describe('ng-cli-webpack-sample-rc3 App', () => {
  let page: NgCliWebpackSampleRc3Page;

  beforeEach(() => {
    page = new NgCliWebpackSampleRc3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

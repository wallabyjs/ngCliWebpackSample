import { NgCliWebpackSample110Page } from './app.po';

describe('ng-cli-webpack-sample110 App', () => {
  let page: NgCliWebpackSample110Page;

  beforeEach(() => {
    page = new NgCliWebpackSample110Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

/* tslint:disable:ordered-imports file-name-casing */
import './polyfills';

// if you are using Angular < 8, then use `import 'core-js/es7/reflect'` instead;
import '@angular-devkit/build-angular/src/angular-cli-files/models/jit-polyfills';

import 'zone.js/dist/zone-testing';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import * as providers from './environment.prod.json';

export interface AuthProviders {
  google: string;
}
export const environment = {
  production: false,
  authProviders: {
    google:
      '344512967346-kq3pl5vrvc7b3fc3tgmgg3g3bu8sgumr.apps.googleusercontent.com',
  },
  apiBaseUrl: 'https://3000-luckyvictor-serverlessn-0dciue0w2iv.ws-eu77.gitpod.io/api',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

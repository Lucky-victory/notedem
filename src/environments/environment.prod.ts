// import * as providers from './environment.prod.json';
export interface AuthProviders {
  google: string;
}
export const environment = {
  production: true,
  authProviders: {
    google:
      '344512967346-kq3pl5vrvc7b3fc3tgmgg3g3bu8sgumr.apps.googleusercontent.com',
  },
apiBaseUrl:'http://localhost:3000/api'
};

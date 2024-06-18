import { Firebase } from '@bsmp/api';
import { signal, computed, effect } from '@preact/signals-react';
import { createContext, useContext } from 'react';

import packageJson from '../../../package.json';

import configJson from './app-config.json';

// global app signals
const signals = {
  loading: signal(true),
  theme: signal(configJson.theme),
  colorMode: signal(configJson.colorMode),
  language: signal(configJson.language),
  count: signal(1),
  data: signal({}),
  // double: computed(() => count.value * 2);
};
const firebaseConfig: string = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_CONFIG_JSON as string
);
const firebaseCredentials = {
  email: process.env.NEXT_PUBLIC_FIREBASE_EMAIL,
  password: process.env.NEXT_PUBLIC_FIREBASE_PASSWORD,
};
const production: boolean = process.env.NODE_ENV === 'production';

export class App {
  public name: string = configJson.appName;
  public version: string = packageJson.version;
  public production: boolean = production;
  public config: any = configJson;
  public firebase: Firebase;
  public signals = signals;

  constructor() {
    this.init();
  }

  async init() {
    if (process.env.NEXT_PUBLIC_NODE_ENV === 'production')
      this.production = true;
    this.firebase = new Firebase();
    await this.initFirebase();
    this.signals.loading.value = false;
    if (!this.production) await this.runTests();
    console.log('app init');
    console.log(this);
  }

  async initFirebase() {
    await this.firebase.init(firebaseConfig);
    if (this.config.autoLogin) {
      await this.firebase.login(
        firebaseCredentials.email,
        firebaseCredentials.password
      );
    }
  }

  async runTests() {
    // const wp = new Wordpress();
    // await wp.init(this.config.wordpress);
    // const posts = await wp.getPosts();
    // posts.map(async (post) => {
    //   await wp.getPost(post.id, post.type);
    //   console.log(post);
    // });
    // console.log(wp);
    // console.log(posts);
  }

  log(value: any = undefined): void {
    console.log('app log');
    if (this.production) return;
    if (value) {
      console.log(value);
      return;
    }
    console.log(this);
  }
}

export const appInstance: App = new App();

export const AppContext = createContext(appInstance);

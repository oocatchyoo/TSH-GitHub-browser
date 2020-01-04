import { App } from './app';
import { GithubService } from './http/index';

const app = new App(new GithubService());

app.initializeApp();

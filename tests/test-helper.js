import Application from 'sample-repo-robin/app';
import config from 'sample-repo-robin/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();

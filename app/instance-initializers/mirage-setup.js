import setupMirage from '../mirage/config';

export function initialize(appInstance) {
  console.log('Setting up Mirage to intercept Ember Data requests...');

  // Only run mirage in development
  if (
    appInstance.resolveRegistration('config:environment').environment ===
    'development'
  ) {
    setupMirage();
    console.log('Mirage server started and ready to intercept requests');
  }
}

export default {
  name: 'mirage-setup',
  initialize,
};

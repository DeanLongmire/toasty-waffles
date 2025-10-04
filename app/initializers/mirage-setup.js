import setupMirage from '../mirage/config';

export function initialize(application) {
  // Only run in development
  const config = application.resolveRegistration('config:environment');
  if (config.environment === 'development') {
    console.log('Starting Mirage server...');
    setupMirage();
  }
}

export default {
  name: 'mirage-setup',
  initialize,
};

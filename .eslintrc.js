module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-aithor-ai`
  extends: ['aithor-ai'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};

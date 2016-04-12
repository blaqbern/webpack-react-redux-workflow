module.exports = {
  'rules': {
    'no-undef': 1,
    'react/jsx-no-bind': [2, { 'ignoreRefs': true }],
  },
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
  },
  globals: {
    '__DEV__': true,
    '__NO_DEV_TOOLS__': true,
  },
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'plugins': ['react'],
};

module.exports = {
  displayName: 'documents',
  preset: '../../jest.preset.js',
  transform: {
    '^.+.vue$': 'vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/documents',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'apps/documents/tsconfig.spec.json',
      babelConfig: 'apps/documents/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'apps/documents/tsconfig.spec.json',
      babelConfig: 'apps/documents/babel.config.js',
    },
  },
};

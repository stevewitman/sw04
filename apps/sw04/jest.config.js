module.exports = {
  name: 'sw04',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw04',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

module.exports = {
  verbose: true,
  testRegex: 'test/.*[\\.js|\\.jsx]$',
  transform: {
    '.js': 'babel-jest'
  },
  moduleDirectories: ['./src', 'node_modules']
};

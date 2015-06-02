
module.exports = function() {
  return {
    // paths
    allts: '.src/**/*.ts',
    less: 'src/styles/**/*.less',
    dist: './dist/',
    vendorscripts: [
      './bower_components/jquery/dist/jquery.js',
      './bower_components/lodash/lodash.js',
      './bower_components/angular/./angular.js',
      './bower_components/bootstrap/dist/js/bootstrap.js'
    ]  
  };
};
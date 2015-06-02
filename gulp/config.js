
module.exports = function() {
  return {
    // paths
    allts: '.src/**/*.ts',
    allhtml: '.src/**/*.html',
    less: 'src/styles/**/*.less',
    dist: './dist/',
    
    // vendor bundle
    vendorscripts: [
      './bower_components/jquery/dist/jquery.js',
      './bower_components/lodash/lodash.js',
      './bower_components/angular/./angular.js',
      './bower_components/bootstrap/dist/js/bootstrap.js'
    ],
    
    // vendor css bundle
    vendorstyles: [
      './bower_components/bootstrap/dist/css/bootstrap.css'
    ]  
  };
};

module.exports = function() {
  return {
    // paths
    allts: '.src/client/**/*.ts',
    allhtml: '.src/client/**/*.html',
    less: 'src/client/styles/**/*.less',
    client: './src/client/',
    dist: './dist/',
    
    // node settings
    server: './src/server/',
    nodeapp: './src/server/app.js',
    defaultport: 7203,
    
    // vendor js bundle
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
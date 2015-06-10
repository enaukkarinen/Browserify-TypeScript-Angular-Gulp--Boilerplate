
module.exports = function() {
  return {
    // paths
    allts: './src/client/**/*.ts',
    allhtml: './src/client/**/*.html',
    less: './src/client/assets/styles/**/*.*',
    allimages: './src/client/assets/images/**/*.*',
    fonts: './src/client/assets/fonts/',
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
      './bower_components/bootstrap/dist/css/bootstrap.css',
      './bower_components/font-awesome/css/font-awesome.css'
    ],
    
    'fonts': {
      'src': [
        './bower_components/font-awesome/fonts/FontAwesome.otf',
        './bower_components/font-awesome/fonts/fontawesome-webfont.eot',
        './bower_components/font-awesome/fonts/fontawesome-webfont.svg',
        './bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
        './bower_components/font-awesome/fonts/fontawesome-webfont.woff'
      ],
      'dest': './dist/fonts/'     
    }
    
  };
};

module.exports = function() {
  
  var client = './src/client/',
  dist = './dist/';
  
  return {
    
    // paths
    client: client,
    dist: dist,
    
    // node settings
    server: './src/server/',
    nodeapp: './src/server/app.js',
    defaultport: 7203,
    
    // scripts
    scripts: {   
      // app js bundle
      src: client + 'main.ts',
      
      // vendor js bundle
      vendor: [
      './bower_components/jquery/dist/jquery.js',
      './bower_components/lodash/lodash.js',
      './bower_components/angular/angular.js',
      './bower_components/angular-ui-router/release/angular-ui-router.js',
      './bower_components/angular-modal-service/dst/angular-modal-service.js',
      './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      './bower_components/bootstrap/dist/js/bootstrap.js'
      ]
    },
    
    //styles
    styles: {
      less: './src/client/styles/**/*.*',
      vendor: [
        './bower_components/bootstrap/dist/css/bootstrap.css',
        './bower_components/font-awesome/css/font-awesome.css'
      ],
    },
    
    // images
    images: {
      src: client + 'assets/images/**/*.*',
      dest: dist + 'images/'
    },
    
    //fonts
    fonts: {
      src: client + 'assets/fonts/**/*.*',
      vendor: [
        './bower_components/font-awesome/fonts/FontAwesome.otf',
        './bower_components/font-awesome/fonts/fontawesome-webfont.eot',
        './bower_components/font-awesome/fonts/fontawesome-webfont.svg',
        './bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
        './bower_components/font-awesome/fonts/fontawesome-webfont.woff'
      ],
      dest: dist + 'fonts/'     
    }
    
  };
};
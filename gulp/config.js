
module.exports = function() {

  var build = './build/';
  
  return {
    
    // paths

    build: build,
    
    // node settings
    nodeapp: './server.js',
    defaultport: 7203,
    
    // scripts
    scripts: {   
      // app js bundle
      src: './src/main.ts',
      
      watch: ["./src/**/*.ts"],
      
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
    
    templateCache: {
      html: './src/features/**/*.html',
      file: 'templates.*',
      dest: './src/',
      options: {
        module: 'app.templates',
        standalone: true,
        root: './features/'
      }
    },
       
    
    //styles
    styles: {
      less: './src/styles/**/*.*',
      vendor: [
        './bower_components/bootstrap/dist/css/bootstrap.css',
        './bower_components/font-awesome/css/font-awesome.css'
      ],
    },
    
    // images
    images: {
      src: './src/assets/images/**/*.*',
      dest: build + 'images/'
    },
    
    //fonts
    fonts: {
      src: './src/assets/fonts/**/*.*',
      vendor: [
        './bower_components/font-awesome/fonts/FontAwesome.otf',
        './bower_components/font-awesome/fonts/fontawesome-webfont.eot',
        './bower_components/font-awesome/fonts/fontawesome-webfont.svg',
        './bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
        './bower_components/font-awesome/fonts/fontawesome-webfont.woff',
        './bower_components/font-awesome/fonts/fontawesome-webfont.woff2'
      ],
      dest: build + 'fonts/'     
    }
    
  };
};
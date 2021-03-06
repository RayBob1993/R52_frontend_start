const gulpConfig = {
  path: {
    scss: {
      dev: 'src/assets/scss/*.scss',
      watch: 'src/assets/scss/**/*.scss',
      lint: 'src/assets/scss/**/*.scss',
      build: 'dist/css/'
    },
    js: {
      dev: 'src/assets/js/**/*.js',
      watch: 'src/assets/js/**/*.js',
      build: 'dist/js/'
    },
    fonts: {
      dev: 'src/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}',
      watch: 'src/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}',
      build: 'dist/fonts/'
    },
    images: {
      dev: 'src/assets/images/**/*',
      watch: 'src/assets/images/**/*',
      build: 'dist/images/'
    },
    html: {
      dev: 'src/*.html',
      watch: 'dist/**/*.html',
      build: 'dist/'
    },
    dist: 'dist/*'
  },
  fileNames: {
    css: {
      build: 'styles.css',
      buildMin: 'styles.min.css',
    },
    js: {
      build: 'app.js',
      buildMin: 'app.min.js'
    }
  },
  server: {
    open: true,
    watch: true,
    server: {
      baseDir: 'dist/'
    },
    notify: false
  },
  partials: {
    variablePrefix: '$',
    basePath: 'src/assets/partials/'
  },
  htmlbeautify: {
    indent_size: 2
  },
  autoprefixer: {
    overrideBrowserslist: ['last 10 versions'],
    grid: true
  }
};

module.exports = gulpConfig;

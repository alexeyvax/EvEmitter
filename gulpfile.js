const gulp = require( 'gulp' ),
    sourcemaps = require( 'gulp-sourcemaps' ),
    rollup = require( 'gulp-rollup' ),
    babel = require( 'rollup-plugin-babel' ),
    uglify = require( 'rollup-plugin-uglify' ),
    rename = require( 'gulp-rename' );

gulp.task( 'rollup', () =>
{
  gulp.src([
    './scripts/EvEmitter.js',
  ])
  .pipe( sourcemaps.init() )
  .pipe( rollup({
    allowRealFiles: true,
    entry: './scripts/EvEmitter.js',
    plugins: [
      babel({
        presets: ['es2015-rollup'],
        babelrc: false
			}),
			uglify()
    ],
    format: 'iife'
  }))
  .pipe( rename( 'EvEmitter.min.js' ) )
  .pipe( sourcemaps.write('.') )
  .pipe( gulp.dest( 'public/' ) );
});

gulp.task( 'watch', () =>
	{
		gulp.watch( 'scripts/**/*.js', ['rollup'] )
	}
);

gulp.task( 'default', ['watch', 'rollup'] );

const gulp = require( 'gulp' ),
    sourcemaps = require( 'gulp-sourcemaps' ),
    babel = require( 'gulp-babel' ),
    rename = require( 'gulp-rename' ),
    uglify = require( 'gulp-uglify' );

gulp.task( 'transpiler', () =>
{
  gulp.src([
    './scripts/EvEmitter.js',
  ])
  .pipe(
    babel({
      presets: ['es2015']
  }))
  .pipe( sourcemaps.init() )
  .pipe( rename( 'EvEmitter.min.js' ) )
  .pipe( uglify().on( 'error', ( e ) =>
  {
      console.log( e );
  }))
  .pipe( sourcemaps.write('.') )
  .pipe( gulp.dest( 'public/' ) );
});

gulp.task( 'watch', () =>
	{
		gulp.watch( 'scripts/**/*.js', ['transpiler'] )
	}
);

gulp.task( 'default', ['transpiler'] );

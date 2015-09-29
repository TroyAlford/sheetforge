/* jshint node: true */

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js', '!**/vendor/*']
        },
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                separator: ';\n',
                stripBanners: true
            },
            vendor_js: {
                files: {
                    'bin/js/vendors.min.js': [
                        'src/js/vendor/*.js'
                    ]
                }
            },
            vendor_css: {
                files: {
                    'bin/css/vendors.min.css': ['src/css/vendor/**/*.{css,css}']
                }
            }
        },
        uglify: {
            options: {
                sourceMap: true
            },
            app: {
                files: {
                    'js/sheetforge.min.js': [
                        'src/js/**/*.js'
                    ]
                }
            }
        },
        less: {
            options: {
                //plugins : [ new (require('less-plugin-autoprefix'))({browsers : [ "last 2 versions" ]}) ]
            },
            systems: {
                files: [{ expand: true, cwd: 'src/less', src: ['sys.*.less'], dest: 'bin/css/', extDot: 'last', ext: '.css'}]
            }
        },
        copy: {
            content: {
                files: [{ expand: true, cwd: 'src/', src: ['**/*.{html,gif,jpg,png,ico,woff2}'], dest: 'bin/' }]
            },
            modernizr: {
                files: [{ expand: true, cwd: 'src/js/vendor', src: ['**/*modernizr*.js'], dest: 'bin/js/' }]
            }
        },
        watch: {
            options: {
                spawn: false
            },
            vendor_js: {
                files: ['src/js/vendor/**/*.js'],
                tasks: ['concat:vendor_js', 'copy:modernizr']
            },
            vendor_css: {
                files: ['src/js/vendor/**/*.css'],
                tasks: ['concat:vendor_css']
            },
            js: {
                files: ['src/**/*.js', '!**/vendor/*'],
                tasks: ['jshint', 'uglify:app']
            },
            less: {
                files: ['src/less/**/*.less', '!**/vendor/*'],
                tasks: ['less:systems']
            },
            html: {
                files: ['src/**/*.{html,gif,jpg,png,ico,woff2}'],
                tasks: ['copy:content']
            }
        }
    });

    grunt.registerTask('default', ['concat', 'uglify', 'less', 'copy']);

    return grunt;
};
module.exports = function (grunt) {

    var files = [
        'src/js/Nittro/Storage/Storage.js',
        'src/js/Nittro/Storage/Bridges/StorageDI.js'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                mangle: false,
                sourceMap: false
            },
            nittro: {
                files: {
                    'dist/js/nittro-storage.min.js': files
                }
            }
        },

        concat: {
            options: {
                separator: ";\n"
            },
            nittro: {
                files: {
                    'dist/js/nittro-storage.js': files
                }
            }
        },

        jasmine: {
            src: files,
            options: {
                vendor: [
                    'bower_components/promiz/promiz.min.js',
                    'bower_components/nittro-core/dist/js/nittro-core.js',
                    'bower_components/nittro-di/dist/js/nittro-di.js'
                ],
                specs: 'tests/specs/**.spec.js',
                display: 'short',
                summary: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('default', ['uglify', 'concat']);
    grunt.registerTask('test', ['jasmine']);

};

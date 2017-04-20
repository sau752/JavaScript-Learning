module.exports = function (grunt) {

    grunt.registerTask("speak", function () {
        console.log("Speaking");
    })

    grunt.registerTask("yell", function () {
        console.log("Yelling");
    })

    grunt.registerTask("default", ["speak", "yell"]);

    //fetch plugins

    grunt.initConfig({
        concat: {
            dist: {
                src: 'js/*.js',
                dest: 'build/js/script.js'
            }
        },
        watch: {
            js: {
                files: ['js/*.js'],
                tasks: ['concat']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

}





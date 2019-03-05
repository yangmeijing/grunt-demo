module.exports = function(grunt){
  grunt.initConfig({
    less: {
      development: {
        files: {
                'css/layout.css': 'less/layout.less'            
        }

    }

  }
  });
  grunt.loadNpmTasks('grunt-contrib-less');//加载的插件
  grunt.registerTask('default',['less:development']);//执行的任务清单
}

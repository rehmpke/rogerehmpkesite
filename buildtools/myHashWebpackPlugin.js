const fs = require('fs');
const path = require('path');

class myHashWebpackPlugin{
  constructor (options){
    this.options= Object.assign({}, {
      fileName: 'hash.yml',
      path: '../_data'
  }, options)
}

  apply(compiler) {
    const options = this.options;
    compiler.hooks.done.tap("myHashWebpackPlugin", stats => {
      const content = stats.hash;
      const outputPath = options.path;
      const fileName = options.fileName;
      const output = path.resolve(__dirname, outputPath, fileName);
      // Finish writing before Webpack exits so Jekyll reads the current hash.
      fs.writeFileSync(output, content);
   });
  }
};
module.exports = myHashWebpackPlugin;

var fs = require('fs');
// console.log(Object.keys(fs))
var pathNode = require('path')



const pathDir = __dirname + '/src';


function recursive(path) {
  var files = fs.readdirSync(path)
  for (var file of files) {
    try {
      let stat = fs.lstatSync(`${path}/${file}`);
      if (stat.isDirectory()) {
        recursive(`${path}/${file}`)
      } else if (pathNode.extname(`${path}/${file}`) === '.scss') {
        var pathDest = `${path}/${file}`.replace('src', 'styled').replace('.scss', '.js');
        var content = "";
        content = fs.readFileSync(`${path}/${file}`);

        if (file === 'spectre.scss') {
        content = `
${content.toString().split('\n').map((st) => (`  ${st}`)).join('\n').replace(/@import "([a-z]*)"/g, 'import $1 from \'./$1\'')}
`
//           content = `
// var theme = {
// ${content.toString()
//     .replace(/\$/g, '')
//     .replace(/\-[0-9]/g, (t) => {
//       return t.replace('-', '');
//     })
    // .replace(/\-[a-z]/g, (t) => {
    //   return t.replace('-', '').toUpperCase();
    // })
//     .replace(/: /g, ": '")
//     .replace(/;/g, "',").split('\n').map((st) => (`  ${st}`)).join('\n')}
//   };`
        } else {
        content = `
import styled from 'styled-components';
import theme from './_variables'

export default styled.div\`
${content.toString()
  .split('\n')
  .map((st) => (`  ${st}`))
  .join('\n')
  .replace(/@import "([a-z]*)"/g, 'import $1 from \'./_$1\'')
  .replace(/: [a-z]*(\-[a-z]*)*/g, (t) => {
    return t.replace(/\-[a-z]/g, () => (t.replace('-', '').toUpperCase()))
  }).replace(/\$[a-zA-Z]*/g, (t) => {
    return '${theme.' + t + '}';
  })}
\`;
`
}
      if (file !== '_variables.scss') {
        fs.writeFileSync(`${pathDest}`, content)
        console.log(`${pathDest}`)
      }
    }
    } catch (e) {
      console.error(e)
    }
  }
}


recursive(pathDir)

var titi = {
  toto: 'i',
  ro: this.toto
}
console.log(titi)
// console.log(files)

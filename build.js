const path = require('path')
const unicons = require('@iconscout/unicons/json/line.json')
const {
  pascalCase
} = require('pascal-case')
const fs = require('fs-extra')
const cheerio = require('cheerio')

const handleComponentName = name => name.replace(/\-(\d+)/, '$1')

const icons = unicons.map(item => ({
  name: item.name,
  pascalCasedComponentName: 'Uil' + pascalCase(`${handleComponentName(item.name)}`),
  kebabCasedComponentName: `Uil-${handleComponentName(item.name)}`,
  iconSvg: item.svg
}))

Promise.all(icons.map(icon => {
  const svgFile = fs.readFileSync(path.resolve(`node_modules/@iconscout/unicons/${icon.iconSvg}`), 'utf-8')
  let data = svgFile.replace(/<svg[^>]+>/gi, '').replace(/<\/svg>/gi, '')
  const $ = cheerio.load(data, {
    xmlMode: true
  })
  const svgPath = $('path').attr('d')

  let component = `
    <script>
      export let size = "24";
      let customClass = "";
      export { customClass as class };
    </script>

    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" class="unicons ${icon.name} {customClass}">
      <path
      d="${svgPath}"
      />
    </svg>
  `

  const filepath = `./src/icons/${icon.pascalCasedComponentName}.svelte`
  return fs.ensureDir(path.dirname(filepath))
    .then(() => fs.writeFile(filepath, component, 'utf8'))
})).then(async () => {
  const main = icons
    .map(icon => `export { default as ${icon.pascalCasedComponentName} } from './icons/${icon.pascalCasedComponentName}.svelte'`)
    .join('\n\n')
  const types = '/// <reference types="svelte" />\nimport {SvelteComponentTyped} from "svelte/internal"\n' +
    icons.map(icon => `export class ${icon.pascalCasedComponentName} extends SvelteComponentTyped<{size?: string, strokeWidth?: number, class?: string}> {}`).join("\n")
  await fs.outputFile("index.d.ts", types, 'utf8');
  return await fs.outputFile('./src/index.js', main, 'utf8')
})
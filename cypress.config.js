const { defineConfig } = require("cypress")

const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills = require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin

module.exports = defineConfig({
    e2e: {
        specPattern: ["cypress/e2e/*.feature"],
        async setupNodeEvents(on, config) {

            await addCucumberPreprocessorPlugin(on, config)

            on('file:preprocessor', createBundler({plugins: [nodePolyfills(), createEsbuildPlugin(config)]}))

            on('before:spec', spec => console.log('BEFORE:SPEC')),

            on('after:spec', (spec, results) => console.log('AFTER:SPEC'))

            return config
        },
    },
})

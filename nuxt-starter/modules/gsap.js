import path from 'path'

export default function gsapModule(moduleOptions) {

    const { nuxt, addPlugin } = this

    const options = {
        extraPlugins: {},
        extraEases: {},
        clubPlugins: {},
        registerEffect: [],
        registerEase: [],

        ...nuxt.options.gsap,
        ...moduleOptions
    }

    addPlugin({
        src: path.resolve(__dirname, '../plugins/gsap.js'),
        fileName: 'gsapModule.js',
        options
    })

}
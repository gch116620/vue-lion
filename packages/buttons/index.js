import buttons from './buttons.vue'

signature.install = function (Vue) {
    Vue.component(buttons.name, buttons)
}

export default buttons
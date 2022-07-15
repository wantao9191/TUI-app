import { createApp,h } from "vue"
import { Dialog } from "./dialog.tsx";
export const dialog = ({ title, content, instance }: { title: string, content: string }) => {
    const dom = document.createElement('div')
    const remove = () => {
        dom.remove()
        instance.unmount()
        instance = null
    }
    const conformApp = () => createApp({
        render() {
            return h(Dialog, { title, content })
        }
    })
    const confirm = () => {
        instance = conformApp()
        instance.mount(dom)
        document.body.append(dom)
    }
    const cancel = () => {
    }
    const alert = () => {

    }
    return { confirm, alert }
}
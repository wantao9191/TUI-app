import { createApp, h } from "vue"
import { Dialog } from "./dialog.tsx";
type props = {
    title: string
    content: string
    instance: any
    beforeClose?: any
    type?: string
}
export const dialog = {
    confirm({ title, content, instance, beforeClose }: props) {
        return this.createDialog({ title, content, instance, beforeClose })
    },
    alert({ title, content, instance, beforeClose }: props) {
        return this.createDialog({ title, content, instance, type: 'alert', beforeClose })
    },
    createDialog({ title, content, instance, type, beforeClose }: props) {
        const dom = document.createElement('div')
        const remove = () => {
            dom.remove()
            instance.unmount()
            instance = null
        }
        const close = (callback: any) => {
            callback && callback()
            remove()
        }
        const confirmApp = ({ ...arg }) => createApp({
            render() {
                return h(Dialog, {
                    title, content, type,
                    onConfirm: () => { beforeClose ? beforeClose('confirm', close) : close(arg.resolve) },
                    onCancel: () => { beforeClose ? beforeClose('cancel', close) : close(arg.reject) }
                })
            }
        })
        return new Promise((resolve, reject) => {
            instance = confirmApp({ resolve, reject })
            instance.mount(dom)
            document.body.append(dom)
        })
    }
}


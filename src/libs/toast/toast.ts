import { createApp, h } from "vue";
import { Toast } from "./toast.tsx";
export const toast = function ({ text, duration, mask, instance }: { text: string, duration: number, mask: boolean }) {
    const dom = document.createElement('div')
    const remove = () => {
        dom.remove()
        instance.unmount()
        instance = null
    }
    const app = () => createApp({
        render() {
            if (duration) {
                setTimeout(remove, duration);
            }
            return h(Toast, { text })
        }
    })
    return {
        show: () => {
            if (instance) return
            instance = app()
            instance.mount(dom)
            document.body.append(dom)
        },
        remove
    }
}
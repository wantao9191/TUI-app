import { defineComponent } from 'vue'
import d from './dialog.module.scss'
export const Dialog = defineComponent({
    props: { title: { type: String, default: '' }, content: { type: String, default: '' } },
    setup(props, context) {
        return () => (<div class={d.dialogWrap}>
            <div class={d.content}>
                <header>{props.title}</header>
                <main>{props.content}</main>
                <footer>
                    <span>取消</span>
                    <span>确定</span>
                </footer>
            </div>
        </div>)
    }
})
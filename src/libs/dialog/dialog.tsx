import { defineComponent } from 'vue'
import d from './dialog.module.scss'
export const Dialog = defineComponent({
    props: { title: { type: String, default: '' }, content: { type: String, default: '' } },
    setup(props, context) {
        const onCancel = () => {

        }
        const onConfirm = () => {

        }
        return () => (<div class={d.dialogWrap}>
            <div class={d.content}>
                <header>{props.title}</header>
                <main>{props.content}</main>
                <footer>
                    <span onClick={onCancel}>取消</span>
                    <span onClick={onConfirm}>确定</span>
                </footer>
            </div>
        </div>)
    }
})
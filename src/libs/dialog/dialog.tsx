import { defineComponent } from 'vue'
import d from './dialog.module.scss'
export const Dialog = defineComponent({
    props: { title: { type: String, default: '' }, content: { type: String, default: '' },type:{type:String,default:'confirm'} },
    setup(props, context) {
        const onCancel = () => {
            context.emit('cancel')
        }
        const onConfirm = () => {
            context.emit('confirm')
        }
        return () => (<div class={d.dialogWrap}>
            <div class={d.content}>
                <header>{props.title}</header>
                <main>{props.content}</main>
                <footer>
                    <span onClick={onCancel} v-show={props.type === 'confirm'}>取消</span>
                    <span onClick={onConfirm} class={d.confirm}>确定</span>
                </footer>
            </div>
        </div>)
    }
})
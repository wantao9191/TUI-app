import { defineComponent } from 'vue'
import s from './index.module.scss'
import { toast } from '../../libs/toast/toast.ts'
import { dialog } from '../../libs/dialog/dialog.ts'
export const login = defineComponent({
    setup(props, context) {
        // const action = toast({ text: '还在加载中还在加载中还在加载中还在加载中还在加载中', duration: 0, mask: true })
        const action = dialog({ title: '提示', content:'是否确认提交' })
        const onClick = () => {
            action.confirm()
        }
        return () => (<div class={s.login} onClick={onClick}>login</div>)
    }
})
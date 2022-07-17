import { defineComponent } from 'vue'
import s from './index.module.scss'
import { toast } from '../../libs/toast/toast.ts'
import { dialog } from '../../libs/dialog/dialog.ts'
export const login = defineComponent({
    setup(props, context) {
        // const action = dialog({ title: '提示', content:'是否确认提交' })
        const onClick = () => {
            dialog.confirm({
                title: '提示', content: '是否确认提交', beforeClose: (action: string, done: any) => {
                    console.log(action,'----', done)
                    if(action === 'confirm'){
                        
                        done()
                    }
                    toast({text:'beforeClose实现：'+action,duration:2000}).show()
                }
            })
        }
        return () => (<div class={s.login} onClick={onClick}>login</div>)
    }
})
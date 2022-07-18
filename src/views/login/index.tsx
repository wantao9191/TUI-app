import { defineComponent, reactive, ref } from 'vue'
import s from './index.module.scss'
import { toast } from '../../libs/toast/toast.ts'
import { dialog } from '../../libs/dialog/dialog.ts'
import { SheetAction } from '../../libs/sheetAction/sheetAction.tsx'
import { sheetAction } from '../../libs/sheetAction/sheetAction.ts'
export const login = defineComponent({
    setup(props, context) {
        const value = ref('')
        const visible = ref(false)
        const actions = reactive([{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }, { name: '选项四' },])
        // const action = dialog({ title: '提示', content:'是否确认提交' })
        const onClick = () => {
            // visible.value = true
            // dialog.confirm({
            //     title: '提示', content: '是否确认提交', beforeClose: (action: string, done: any) => {
            //         console.log(action, '----', done)
            //         if (action === 'confirm') {


            //         } else {
            //             done()
            //         }

            //         toast({ text: 'beforeClose实现：' + action, duration: 2000 }).show()
            //     }
            // })
            sheetAction({ title: 'sheetAction', actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }, { name: '选项四' }], value }).show()
        }
        return () => (<div class={s.login} onClick={onClick}>login{value.value}
            {/* <SheetAction v-model:value={value.value} v-model:visible={visible.value} title='sheetAction' actions={actions}></SheetAction> */}
        </div>)
    }
})

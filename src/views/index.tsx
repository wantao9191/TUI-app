import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export const index =  defineComponent({
    setup(props,context){
        const router = useRouter()
        const jump = ()=>{
            router.replace('/login')
        }
        return ()=>(<div onClick={jump}>首页</div>)
    }
})
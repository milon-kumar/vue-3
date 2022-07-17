export default {
    template:`
        <div class="mb-3">
            <button 
                @click="$emit('update:currentTag',tag)"
                v-for="tag in tags" 
                class="btn btn-primary btn-sm mx-2"
                :class="
                {
                    ' btn-warning':tag === this.currentTag
                }
                "
            >{{ tag }}</button>
        </div>
    `,
    props:{
        initialTag:Array,
        currentTag:String,
    },
    computed:{
        tags(){
            return ['all', ...new Set(this.initialTag)]
        }
    }
}
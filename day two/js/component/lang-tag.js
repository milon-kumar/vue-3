export default {
    template:`
           <div class="mb-2">
                <button 
                @click="currentTag === tag "
                v-for="tag in tags" 
                class="btn btn-primary btn-sm mx-2"
                :class="{
                    'btn-success':tag === currentTag,
                }"
                > {{tag}} </button>
           </div>
    `,
    props:{
        intitalTags:Array,
    },

    data(){
        return{
            currentTag:'all'
        }
    } ,

    computed:{
        tags(){
            return  ['all', ...new Set(this.intitalTags)];
        }
    }
}
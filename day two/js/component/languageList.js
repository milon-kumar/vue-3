import language from "./language.js";
import languageTag from "./languageTag.js";
export default {
    components: {language,languageTag},
    template:`
    <div class="container">
        <div class="row">
            <div class="col-6 offset-3">
                <section v-if="learnLang.length">
                    <h2 class="mb-4 d-inline-block">{{title}}  </h2> <span class="badge bg-primary">{{learnLang.length}}</span>
                    
                    <language-tag 
                        v-model:currentTag="currentTag"
                        :initialTag="learnLang.map(a => a.tag)"
                        :currentTag="currentTag"
                        ></language-tag>
                    
                    <ul class="list-group">
                       <language 
                           class="list-group-item" 
                           v-for="program in getLanguageByTag" 
                           :key="program.id" 
                           :program="program"
                       ></language>   
                    </ul>
                </section>
            </div>
        </div>
    </div>
        
    `,

    props: {
        learnLang:Array,
        title:String,
    },

    data(){
        return{
            currentTag:'all'
        }
    },

    computed:{

getLanguageByTag(){
    if ((this.currentTag === "all")){
    return this.learnLang;
}
return this.learnLang.filter(a => a.tag === this.currentTag)
},



    // tags(){
    //     return ['all', ...new Set(this.learnLang.map( a => a.tag))]
    // }
}
}
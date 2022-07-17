import languageList from "./languageList.js";
import addlan from "./addlan.js";
export default {
    components: {languageList,addlan},

    template: `
            <div class="container mx-auto mt-5">
                <languageList :learnLang="filter.inprogress" title="Learning Programming"></languageList>
                <languageList :learnLang="filter.completed" title="Learning Complete Programming"></languageList>
                <div class="mt-4">
                     <addlan @add="add"></addlan>
                </div>
               
            </div>
    `,
    data() {
        return {

            programs: [ ],

            newLanguage:"",
        }
    },
    methods:{
        add(name) {
            this.programs.push({
                lang: name,
                learn: false,
                id: this.programs.length + 1,
                tag:"mercating"
            });
        }
    },
    created(){
        fetch("http://localhost:3000/programs")
            .then(response => response.json())
            .then(programs=>{
                this.programs = programs;
            })
    },
    computed: {
        filter(){
            return{
                inprogress:this.programs.filter( a => ! a.learn),
                completed:this.programs.filter(a => a.learn),
            }
        }
    },

}
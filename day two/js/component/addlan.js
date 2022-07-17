export default {
    template: `

       <div class="container">
            <div class="row">
                <div class="col-6 offset-3">
                    <form action="" @submit.prevent="add">
                        <div class="input-group mb-3">
                              <input v-model="newLanguage" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                              <div class="input-group-append">
                                  <button type="submit" class="btn btn-primary">Add New</button>
                              </div>
                        </div>  
                    </form>
                </div>
            </div>
       </div>
       
    `,
    data(){
        return{
            newLanguage: "",
        }
    },
    props:{
        programs:Array,
    },
    methods: {
        add(){
            this.$emit('add', this.newLanguage);
            this.newLanguage = "";
        }
    }
}
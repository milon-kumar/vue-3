let button = {
    template: ` <button 
            :class="{
            
                ' border  px-5 py-2 mx-3 rounded text-black disabled:cursor-not-allowed': true,
                'border-blue-400 hover:bg-blue-400': type === 'primary',
                'border-sky-400 hover:bg-sky-400': type === 'secondery',
                'border-red-400 hover:bg-red-400': type === 'danger',
                'border-yellow-400 hover:bg-yellow-400': type === 'warning',
                'is-loading': processing,
            
            }"  
            :disabled="processing"> 
                <slot/> 
            </button> `,

    props: {
        type: {
            type: String,
            default: "primary",
        },
        processing:{
            type:Boolean,
            default:false,
        }
    }
}

export default button;
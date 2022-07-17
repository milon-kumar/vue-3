export default {
    template: `
        <li>
            <label class="d-flex justify-content-between align-items-center">
                {{program.lang}}
                <input type="checkbox" v-model="program.learn">
            </label>
        </li>
    `,
    props:{
        program:Object,
    }

}
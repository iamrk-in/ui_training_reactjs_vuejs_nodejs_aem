<template>
    <div id="app">
        
        <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
            <h3>Form Validation</h3>
            
            <div class="form-group" :class="{'has-error': errors.has('name')}">
                <label class="control-label" for="name"> Name </label>
                <input type="text" placeholder="ex., john" class="form-control" v-model="name" v-validate.initial="name" data-rules="required|alpha|min:5" />
                <p class="text-danger" v-if="errors.has('name')">{{errors.first('name')}}</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('email')}">
                <label class="control-label" for="email"> Email </label>
                <input type="text" placeholder="ex., john@gmail.com" class="form-control" v-model="email" v-validate.initial="email" data-rules="required|email" />
                <p class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('url')}">
                <label class="control-label" for="url"> Url </label>
                <input type="text" placeholder="ex., http://www.google.com" class="form-control" v-model="url" v-validate.initial="url" data-rules="required|url" />
                <p class="text-danger" v-if="errors.has('url')">{{errors.first('url')}}</p>
            </div>

            <button class="btn btn-primary" type="submit"> submit </button>
        </form>

        <div v-else>
            <h3>Form Submitted Successfully!</h3>
        </div>
    </div>
</template>

<script>
import Vue from "vue"
import VeeValidate from "vee-validate"

Vue.use(VeeValidate);

export default {
    data() {
        return{
            name: "", 
            email: "", 
            url: "", 
            formSubmitted: ""
        }
    }, 
    methods: {
        validateBeforeSubmit(event) {
            this.$validator.validateAll();

            if(!this.errors.any()) {
                this.submitForm()
            }
        }, 

        submitForm() {
            this.formSubmitted = true
        }
    }
}
</script>
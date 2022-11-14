<template>
    <div class="container">
        <h3>Users Data</h3>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" v-bind:key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.address.city}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "UsersData", 
    data() {
        return {
            users: null
        };
    }, 
    created: function() {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                this.users = res.data
            })
    }
}
</script>

<style scoped>
    h3 {
        color: #4da3ef;
    }
</style>
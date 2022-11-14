<template>
  <div id="app">
    <h3>Get Language</h3>
    <div>
      Data: 
      {{getlanguage}}
    </div>
    <button @click="getLanguage"> Get Language </button>

    <hr />

    <h3>Get Champions</h3>
    <div>
      Data: 
      <!-- <div v-for="champion in champions">
        {{champion}}
      </div> -->
    </div>
    <button @click="getChampions"> Get Champions </button>

    <hr />

    <h3>Get Champion By Name</h3>
    Name: <input v-model="name"  />
    <div>
      Data: 
      {{champion}}
    </div>
    <button @click="getChampionByName"> Get Champion By Name </button>

    <hr />

    <h3>Update Champion</h3>
    Name: <input v-model="name" />
    Attach Damage: <input v-model.number = "attack" />
    <div>
      Data: 
      {{updateChampion}}
    </div>
    <button @click="updateAttackDamage"> Update Champion </button>

    <hr />

  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  name: 'app',
  data() {
    return{
      getlanguage: "", 
      champions: [], 
      name: "asha", 
      champion: {}, 
      updateChampion: {}, 
      attack: 5.5
    }
  }, 
  methods: {
    async updateAttackDamage() {
      const res = await axios.post("http://localhost:4000/graphql", {
        query: `
          mutation UpdateAttackDamage($championName: String!, $attackDamage: Float) {
            updateAttackDamage(name: $championName, attackDamage: $attackDamage) {
              name
              attackDamage
            }
          }
        `, 
        variables: {
          championName: this.name, 
          attackDamage: this.attack, 
        }
      })
      this.updateChampion = res.data.data.updateAttackDamage
    }, 

    async getChampionByName() {
      const res = await axios.post("http://localhost:4000/graphql", {
        query: `
          query GetChampionByName($championName: String!) {
            getChampionByName(name: $championName) {
              name 
              attackDamage
            }
          } 
        `, 
        variables: {
          championName: "asha"
        }
      })
      this.champion = res.data.data.getChampionByName
    }, 

    async getChampions() {
      const res = await axios.post("http://localhost:4000/graphql", {
        query: `{
            getChampions {
              name
            }
          }`
      })
      this.champions = res.data.data;
    }, 

    async getLanguage() {
      try {
        const res = await axios.post("http://localhost:4000/graphql", {
          query: `
            {language}
          `
        })
        this.getlanguage = res.data.data.language
      } catch(e) {
        console.log('err', e)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

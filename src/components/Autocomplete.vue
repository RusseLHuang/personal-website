<template>
  <div class="autocomplete-container">
    <input type="text" v-on:input="toggleChange()">
    <div v-for="word in words" v-bind:key="word">
      <p>{{ word }}</p>
    </div>
    <div v-for="h in helper" v-bind:key="h">
      <h3>{{ h }}</h3>
    </div>
  </div>  
</template>
<script lang="ts">
import Vue from 'vue';
import Trie from '../helper/Trie';
import Component from 'vue-class-component';

@Component({})
export default class Autocomplete extends Vue {
  private data() {
    return {
      trie: null,
      words: [
        'Abaddon',
        'Ant',
        'Bussiness',
        'Chronology',
        'Grit',
        'Rough',
        'Time',
        'Zombie',
      ],
      helper: [],
    };
  }
  // methods: {
  //   toggleChange() {
  //     this.trie.add("retarded");
  //     console.log(this.trie);
  //   }
  // },
  // async mounted() {
  //   this.trie = new Trie(this.words);
  // },
}
</script>
<style>

</style>

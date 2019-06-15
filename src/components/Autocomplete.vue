<template>
  <div class="autocomplete-container">
    <input type="text" v-model="searchWord" v-on:input="get()">
    <div v-for="word in words" v-bind:key="word">
      <p>{{ word }}</p>
    </div>
    <div v-for="w in completedWords" v-bind:key="w">
      <h3>{{ w }}</h3>
    </div>
  </div>  
</template>
<script lang="ts">
import Vue from 'vue';
import Trie from '../helper/Trie';
import Component from 'vue-class-component';

@Component({})
export default class Autocomplete extends Vue {
  private words = [
    'Abaddon',
    'Ant',
    'Bussiness',
    'Chronology',
    'Grit',
    'Rough',
    'Time',
    'Zombie',
  ];
  private searchWord: string = '';
  private completedWords: string[] = [];
  private trie: Trie = new Trie(this.words);
  private get() {
    this.completedWords = [...this.trie.get(this.searchWord)];
  }
}
</script>
<style>

</style>

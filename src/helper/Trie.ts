// class Node {
//   constructor() {
//     this.char = new Array(26);
//     this.exist = false;
//   }
// }

// class Trie {
//   constructor(words) {
//     this.words = words;
//     this.root = new Node();
//   }

//   add(word) {
//     let node = this.root;
//     word = word.toLowerCase();

//     for (let i=0; i<word.length; i++) {
//       const charCode = word.charCodeAt(i);
//       if (97 <= charCode || 122 >= charCode) {
//         let index = charCode - 97;
//         if (node.char[index] == null) node.char[index] = new Node();
//         node = node.char[index];
//       } else throw new Error("");
//     }

//     node.exist = true;
//   }

//   // get(word) {

//   // }

//   clear() {
//     this.words = [];
//   }

// }

// export default Trie;
export default {};

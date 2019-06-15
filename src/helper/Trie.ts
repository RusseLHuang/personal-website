import Node from './Node';

class Trie {
  private words: string[];
  private root: Node;

  constructor(words: string[]) {
    this.words = words;
    this.root = new Node();

    for (const word of words) {
      this.add(word);
    }
  }

  public add(word: string) {
    let node = this.root;
    word = word.toLowerCase();

    for (let i = 0; i < word.length; i++) {
      const charCode = word.charCodeAt(i);
      if (97 <= charCode || 122 >= charCode) {
        const index = charCode - 97;

        if (node.char[index] == null) {
          node.char[index] = new Node();
        }
        node = node.char[index];
      } else {
        throw new Error('');
      }
    }

    node.exist = true;
  }

  public get(word: string): string[] {
    word = word.toLowerCase();

    const startingNode = this.searchPoint(word);
    if (startingNode == null) {
      return [];
    }

    const stack: Node[] = [startingNode];
    const res: string[] = [];
    const concatWords: string[] = [word];
    let level = 1;

    /**
     * Breadth-First-Search
     * Concat string level by level until it reach the leaf node
     * Then push it to final array
     */
    while (stack.length > 0) {
      const node = stack.shift();
      const str = concatWords.shift();
      let isLeafNode = true;

      for (let j = 0; j < node.char.length; j++) {
        if (node.char[j] != null) {
          isLeafNode = false;
          const ch = String.fromCharCode(j + 97);
          stack.push(node.char[j]);
          concatWords.push(`${str}${ch}`);
        }
      }

      if (--level === 0) {
        level = stack.length;
      }

      if (isLeafNode) {
        res.push(str);
      }
    }

    return res;
  }

  public clear() {
    this.words = [];
    this.root = new Node();
  }

  private searchPoint(word: string): Node {
    let node = this.root;
    word = word.toLowerCase();

    for (let i = 0; i < word.length; i++) {
      const charCode = word.charCodeAt(i);
      if (97 <= charCode || 122 >= charCode) {
        const index = charCode - 97;

        if (node.char[index] == null) {
          return null;
        }
        node = node.char[index];
      } else {
        throw new Error('');
      }
    }

    return node;
  }
}

export default Trie;

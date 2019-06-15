class Node {
  public char: any[];
  public exist: boolean;

  constructor() {
    this.char = new Array(26);
    this.exist = false;
  }
}

export default Node;

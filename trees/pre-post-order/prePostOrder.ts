import { BNodeNum } from "../common/binary-search-tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {
  let result : number[] = [];

  if (node === null) return [];

  result.push(node.val)

  for (const child of node.children){
    result.push(...preOrder(child));
  }

  return result;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  let result : number[] = [];

  if (node === null) return [];

  for (const child of node.children){
    result.push(...postOrder(child));
  }

  result.push(node.val)

  return result;
}

export { preOrder, postOrder };
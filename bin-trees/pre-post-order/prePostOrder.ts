import { BNodeNum } from "../common/bintree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {

  if(node === null) return [];

  const visitedNodes: number[] = [];
  visitedNodes.push(node.val);

  if(node.lnode) visitedNodes.push(...preOrder(node.lnode));

  if(node.rnode) visitedNodes.push(...preOrder(node.rnode));

  return visitedNodes;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {

  if(node === null) return [];

  const visitedNodes: number[] = [];

  if(node.lnode) visitedNodes.push(...postOrder(node.lnode));

  if(node.rnode) visitedNodes.push(...postOrder(node.rnode));

  visitedNodes.push(node.val);

  return visitedNodes;

}

export { preOrder, postOrder };
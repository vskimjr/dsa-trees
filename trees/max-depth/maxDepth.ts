import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  if (node === null) return 0;

  let maxDepthLength = 0;

  for(let child of node.children){
    let currDepth = maxDepth(child);
    maxDepthLength = Math.max(currDepth, maxDepthLength);
  }

  return maxDepthLength + 1;
}

export { maxDepth };

import { maxDepth } from "../../trees/max-depth/maxDepth";
import { BNodeNum } from "../common/bintree";

/** Get minimum depth from node.
 *
 * Minimum depth: length of shortest path from node to a leaf.
 **/

function minDepth(node: BNodeNum): number {

  let minDepthLength = 0;

  if (!node.lnode || !node.rnode) return 0;

  if (node.lnode) {
    let currDepth = minDepth(node.lnode)
    minDepthLength = Math.min(currDepth, minDepthLength)
  }

  return minDepthLength + 1;


}

export { minDepth };
import { maxDepth } from "../../trees/max-depth/maxDepth";
import { BNodeNum } from "../common/bintree";

/** Get minimum depth from node.
 *
 * Minimum depth: length of shortest path from node to a leaf.
 **/

function minDepth(node: BNodeNum): number {

  if (!node.lnode && !node.rnode) return 1;

  if (node!.lnode) minDepth(node.lnode!)
  if (node.rnode) minDepth(node.rnode!)

  let minDepthLengthRight = minDepth(node.rnode!); //1
  let minDepthLengthLeft = minDepth(node.lnode!); //1

  // console.log("mindepthLeft, mindepthRight", minDepthLengthLeft +1, minDepthLengthRight + 1)

  //+1 accounts for node
  return Math.min(minDepthLengthLeft, minDepthLengthRight) + 1;

}

export { minDepth };
import { BNodeNum } from "../common/bintree";

/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

function minDepthToIncomplete(node: BNodeNum): number {
  //account for the incomplete node
  if (!node.lnode || !node.rnode) return 1;

  let minDepthLengthRight = minDepthToIncomplete(node.rnode); //1
  let minDepthLengthLeft = minDepthToIncomplete(node.lnode); //1

  console.log("mindepthLeft, mindepthRight", minDepthLengthLeft +1, minDepthLengthRight + 1)

  //+1 accounts for node
  return Math.min(minDepthLengthLeft, minDepthLengthRight) + 1;

}

export { minDepthToIncomplete };


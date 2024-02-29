import { BNodeNum } from "../common/bintree";

/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

function minDepthToIncomplete(node: BNodeNum): number {
  //account for the incomplete node
  if (!node.lnode || !node.rnode) return 1;
  //6 //5 //3 //1
  //6 //5 //0

  let minDepthLengthRight = minDepthToIncomplete(node.rnode); //1
  let minDepthLengthLeft = minDepthToIncomplete(node.lnode); //1

  console.log("mindepthLeft, mindepthRight", minDepthLengthLeft +1, minDepthLengthRight + 1)
  //+1 accounts for the root node
  return Math.min(minDepthLengthLeft, minDepthLengthRight) + 1;


  // if (node.lnode) {
  //   let currDepth = minDepthToIncomplete(node.lnode)
  //   minDepthLength = Math.min(currDepth, minDepthLength)
  // }

  // if (node.rnode) {
  //   let currDepth = minDepthToIncomplete(node.rnode)
  //   minDepthLength = Math.min(currDepth, minDepthLength)
  // }

  // return minDepthLength + 1;
}

export { minDepthToIncomplete };

//                   6
//                /     \
//               5       5
//              / \     /  \
//             4   4   1     3
//            /             /  \
//           3             2    1
//         /   \          /
//        2     1        1
//
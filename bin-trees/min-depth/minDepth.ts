import { maxDepth } from "../../trees/max-depth/maxDepth";
import { BNodeNum } from "../common/bintree";

/** Get minimum depth from node.
 *
 * Minimum depth: length of shortest path from node to a leaf.
 **/

function minDepth(node: BNodeNum): number {

  if (!node.lnode && !node.rnode) return 1;

 let minDepthLengthRight= 0;
 let minDepthLengthLeft= 0;

  if (node!.lnode){
    minDepthLengthLeft = minDepth(node.lnode!) ;
  }else{
    minDepthLengthLeft = Infinity;
  }

  if (node.rnode){
    minDepthLengthRight = minDepth(node.rnode!);
  }else{
    minDepthLengthRight = Infinity;
  }

  //+1 accounts for node
  return Math.min(minDepthLengthLeft, minDepthLengthRight) + 1;  //2 //

}

export { minDepth };
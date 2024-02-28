import { TreeNodeNum } from "../common/tree";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {
  let evenCount = 0;

  if (node.val % 2 === 0) evenCount ++;

  for (let child of node.children){
    evenCount += countEvens(child);
  }

  return evenCount;
}

export { countEvens };

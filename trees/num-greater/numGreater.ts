import { TreeNodeNum } from "../common/tree";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum, lowerBound: number): number {
  let numGreaterCount = 0;

  if (node.val > lowerBound) numGreaterCount ++;

  for (const child of node.children){
    numGreaterCount += numGreater(child, lowerBound)
  }

  return numGreaterCount;
}

export { numGreater };
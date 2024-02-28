import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {

  // count starts at 1
  // we then look at root's children
  // see if they have children,
  // ... if so, see if the children have children ... et
  if(node === null) return 0;

  // somehow we are keeping count as we go "deep" into the stack
  // const childValues = [];
  // let count = 1

  for(let child of node!.children){
    count += maxDepth(child)
    // childValues.push(maxDepth(child)); //B //D || //B //E //F || //C
  }

  // return Math.max(childValues.length + 1);
  return Math.max(count + 1);


  // return 42;
}

export { maxDepth };

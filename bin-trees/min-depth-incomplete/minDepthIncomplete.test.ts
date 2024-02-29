import { expect, it } from "vitest";
import { largeTree, longTree, smallTree } from "../common/bintree.test";
import { minDepthToIncomplete } from "./minDepthIncomplete";
import { BNodeNum , BinTreeNum} from "../common/bintree";


it("handles simple trees", function () {
  expect(minDepthToIncomplete(smallTree.root!)).toBe(2);
});

it("handles more complex trees", function () {
  expect(minDepthToIncomplete(largeTree.root!)).toBe(2);
});

it("handles long tree", function () {
  expect(minDepthToIncomplete(longTree.root!)).toBe(2);
});

it("handles dense tree", function () {
  //                   6
  //                /     \
  //               5       5
  //              / \     /  \
  //             4   55  0    3
  //            / \          /  \
  //           3   44      2     1
  //         /   \        /
  //        2     1      1
  //
     const denseTree = new BinTreeNum(
        new BNodeNum(6,
            new BNodeNum(5,
                new BNodeNum(4,
                    new BNodeNum(3,
                        new BNodeNum(2),
                        new BNodeNum(1)),
                    new BNodeNum(44)
                ),
                new BNodeNum(55),
            ),
            new BNodeNum(5,
                new BNodeNum(0),
                new BNodeNum(3,
                    new BNodeNum(2,
                        new BNodeNum(1)),
                    new BNodeNum(1)))));

    expect(minDepthToIncomplete(denseTree.root!)).toBe(3);
  });
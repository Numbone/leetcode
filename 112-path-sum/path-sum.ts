/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
     if (!root) return false;

  // Subtract current node value from targetSum
  targetSum -= root.val;

  // If it's a leaf node and targetSum is zero, path is found
  if (!root.left && !root.right) {
    return targetSum === 0;
  }

  // Recursively check left and right subtree
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
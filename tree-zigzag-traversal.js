function zigzag(root) {
  let res = [];
  const lot = (node, level) => {
    if (!node) {
      return;
    }
    // create list for each level
    // for odd level add elements at front
    if (res[level]) {
      level % 2 ? res[level].unshift(node.val) : res[level].push(node.val);
    } else {
      res[level] = [node.val];
    }
    lot(node.left, level + 1);
    lot(node.right, level + 1);
  };
  lot(root, 0);
}

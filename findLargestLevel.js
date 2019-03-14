const findLargestLevel = function(node,tree,temp) {
  var tree = [node.value] ||[];
  var sum = 0;
  var temp =temp||[];
  if (node.left === null && node.right === null){
  	tree.push(temp.reduce(function(a, b) { return a + b; }, 0));
  	return;
  } else {
  	sum = sum + node.left.value + node.right.value ;
  	temp.push(sum);
    findLargestLevel(node.left,tree,temp)+ findLargestLevel(node.right,tree,temp);
  }

  return tree.indexOf(Math.max(...tree))+1;
};

function ArrayChallenge(strArr) {
  // code goes here

  const parents = {}
  const children = {}
  let binaryTree = null

  // here loop through strArr to get all string
  strArr.forEach((string) => {
    // here we delete the paranthesis and use desrtracturing
    // to get the parent node and child node
    const [parentNode, childNode] = string
      .replace('(', '')
      .replace(')', '')
      .split(',')

    // here we check if parent node exist in parents retrun binaryTree to false
    // else added to parents object
    if (parentNode in parents) {
      return (binaryTree = false)
    } else {
      parents[parentNode] = true
    }

    // here we check if childnode exist in children
    // then we increment his counter and check if > 2
    // if it is bigger no more a binary tree return false
    // else we added to the children object
    if (childNode in children) {
      children[childNode] += 1
      if (children[childNode] > 2) {
        return (binaryTree = false)
      }
    } else {
      children[childNode] = 1
    }
    return (binaryTree = true)
  })

  return binaryTree
}

// keep this

console.log(ArrayChallenge(['(2,3)', '(7,3)', '(8,4)', '(3,4)']))
console.log(ArrayChallenge(['(1,2)', '(2,4)', '(5,7)', '(7,2)', '(9,5)']))

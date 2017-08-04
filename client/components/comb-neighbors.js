export function findNeighbors(nodeCoords){
  return [
    [nodeCoords[0] - 1, nodeCoords[1]],
    [nodeCoords[0], nodeCoords[1] + 1],
    [nodeCoords[0] + 1, nodeCoords[1] - 1],
    [nodeCoords[0] - 1, nodeCoords[1] + 1],
    [nodeCoords[0], nodeCoords[1] - 1],
    [nodeCoords[0] + 1, nodeCoords[1]]
  ]
}
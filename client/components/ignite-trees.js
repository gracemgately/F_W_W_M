

export function ignite(node, nodeNeighbors, StateComb) {
    var shouldChange = 0;
    var nodesToChangeCoords = [];

    nodeNeighbors.forEach(neighbor => {
        StateComb.forEach(comb => {
            if (comb.coordinate[0] === neighbor[0] && comb.coordinate[1] === neighbor[1]) {
                if (comb.color === 'red') {
                    shouldChange++;
                }
                if (shouldChange >= 2) {
                    if (!nodesToChangeCoords.length || !nodesToChangeCoords.includes(node.coordinate)) {
                        nodesToChangeCoords.push(node.coordinate);
                    }
                }
            }
        })
    })
    return nodesToChangeCoords;
}
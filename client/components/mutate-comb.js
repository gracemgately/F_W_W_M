
export function combIndicesToMutate(nodesToChangeCoordsArr, stateComb) {

    var newCombArrayIndices = [];

    nodesToChangeCoordsArr.forEach(coordSet => {
        stateComb.forEach((node, index) => {
            if (node.coordinate[0] === coordSet[0] && node.coordinate[1] === coordSet[1]) {
                newCombArrayIndices.push(index)
            }
        })
    })
    return newCombArrayIndices
}
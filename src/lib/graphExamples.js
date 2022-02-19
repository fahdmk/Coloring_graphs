export default function getGraph(label) {
    let nodes, edges
    switch (label) {
        case 'Empty Graph':
            nodes = []
            edges = []
            break
        case 'Hexagon':
            nodes = [
                {id: 0},
                {id: 1, name: "1"},
                {id: 2, name: "2"},
                {id: 3},
                {id: 4},
                {id: 5},
            ]
            edges = [
                {source: 0, target: 4},
                {source: 4, target: 1},
                {source: 1, target: 3},
                {source: 3, target: 5},
                {source: 5, target: 2},
                {source: 2, target: 0},
            ]
            break
        case 'Pentagon':
            nodes = [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
            ]
            edges = [
                {source: 0, target: 2},
                {source: 2, target: 1},
                {source: 1, target: 3},
                {source: 3, target: 4},
                {source: 4, target: 0},
            ]
            break
        default:
            break
    }
    return [nodes, edges]
}
const tree = {
    value: 3,
    children: [
        {
            value: 1,
            children: []
        },
        {
            value: 4,
            children: []
        },
        {
            value: 3,
            children: [
                {
                    value: 8,
                    children: [
                        {
                            value: 2,
                            children: []
                        },
                        {
                            value: 5,
                            children: []
                        }
                    ]
                },
                {
                    value: 0,
                    children: []
                }
            ]
        }
    ]
};

const countTreeValues = (val) => {
    let accumulator = 0;
    let treeValue = val.value;

    if (treeValue % 2 === 0) {
        accumulator += treeValue;
    }
    if (val.children) {
        val.children.forEach(child => {
            accumulator += countTreeValues(child);
        })
    }

    return accumulator;
}

console.log(countTreeValues(tree))

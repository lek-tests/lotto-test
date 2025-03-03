function executeComplexOperation() {
    const randomDelay = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    return new Promise(resolve => setTimeout(resolve, randomDelay));
}

async function executeAndInform(id) {
    await executeComplexOperation();
    console.log(`Operation ${id} complete`);
}

async function executeAll(array) {
    for (const id of array) {
        await executeAndInform(id);
    }
    console.log('All operations completed!');
}

console.log(executeAll([1, 2, 3, 4, 5]))

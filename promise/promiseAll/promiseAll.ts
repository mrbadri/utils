async function promiseAll(...args: Promise<number>[]) {
    const values = []
    
    for(let i = 0 ; i < args.length; i++){
        values[i] = await args[i];
    }

    return values;
};

export default promiseAll;
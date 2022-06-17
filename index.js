function myEach(collection, callback){
    let newCollection = []
    if (Array.isArray(collection)){
        for (let item of collection){
            let newValue = callback(item);
            newCollection.push(newValue)
            //return newCollection

        }
    }else if(typeof collection==='object'){
        let collectionObjValues;
        collectionObjValues=(Object.values(collection))
        for (let item of collectionObjValues){
            let newValues= callback(item);
            newCollection.push(newValues)
            //return newCollection
        }
    }
    return collection
}

function myMap(collection, callback){
    let newCollection = []
    if (Array.isArray(collection)){
        for (let item of collection){
            let newValue = callback(item);
            newCollection.push(newValue)

        }
    }else if(typeof collection==='object'){
        let collectionObjValues;
        collectionObjValues=(Object.values(collection))
        for (let item of collectionObjValues){
            let newValues= callback(item);
            newCollection.push(newValues)
        }
    }
    return newCollection;
}

function myReduce(collection, callback, start=0){
    if (Array.isArray(collection)){
        for (let i=0; i<collection.length; i++){
            let curr = callback(collection[i])
            start+=curr; 
        }
    }else if(typeof collection==='object'){
        let collValues = Object.values(collection);
        for (let i=0; i<collValues.length; i++){
            let curr = callback(collValues[i])
            start+=curr
        }

    }
console.log(start)
return start
}
// function callback(item){
//     return item*3
// }

// const obj = {
//     one: 1,
//     two: 2,
//     three: 3
// }
//myReduce(obj, callback, 10)
function myFind(collection, predicate) {
    let newCollection;
    if (Array.isArray(collection)){
        for(let item of collection){
            if (item===predicate(item)){
                return item
            }else{
                return undefined
            }
            
        }
    }else if(typeof collection==='object'){
        let values = Object.values(collection);
        for (let item of values){
            if (item===predicate(item)){
                return item
            }else{
                return undefined
            }
        }
    }
    return false;
}

function myFilter(collection, predicate) {
    let newCollection=[]
    if (Array.isArray(collection)){
        for(let item of collection){
            if (item===predicate(item)){
                return newCollection.push(item)
            }else{
                return undefined
            }
            
        }
    }else if(typeof collection==='object'){
        let values = Object.values(collection);
        for (let item of values){
            if (item===predicate(item)){
                return newCollection.push(item)
            }else{
                return undefined
            }
        }
    }
    return false;
}


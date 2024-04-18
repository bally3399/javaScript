let obj1= {
    name: "Josep",
    population: 1000,
    temp: 6,
    currency : "naira"
}
let obj2 = {
    name: "bally",
    population: 100,
    temp: 5,
    currency : "naira"
}

let obj3 = {
    name: "name",
    population: 1000,
    temp: 3,
    currency : "naira"
}
let obj4 = {
    name: "joseph",
    population: 200,
    temp: 9,
    currency : "naira"
}

let obj5 = {
    name: "john",
    population: 100,
    temp: 8,
    currency : "naira"
}

let obj6 = {
    name: "Ayo",
    population: 300,
    temp: 9,
    currency : "naira"
}

let obj7 = {
    name: "Ola",
    population: 250,
    temp: 10,
    currency : "naira"
}

let obj8 = {
    name: "bim bim",
    population: 500,
    temp: 9,
    currency : "naira"
}

let obj9 = {
    name: "name",
    population: 1000,
    temp: 10,
    currency : "naira"
}

let raw_array = [[null, obj1, obj2, obj3], [obj4, obj5, obj6, null], [obj7, null, obj8, obj9]];
let add = 0;
for(const value of raw_array){
    for(const index in value){
        if (value[index] != null){
            add +=value[index].population;
        }
    }
}
console.log(add);
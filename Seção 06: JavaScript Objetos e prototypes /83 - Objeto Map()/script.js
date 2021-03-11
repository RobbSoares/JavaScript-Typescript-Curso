const persons = [
    {id: 3, name: 'Rob'},
    {id: 2, name: 'Luiz'},
    {id: 1, name: 'Maria'},
];

const newPersons = new Map();

for(const person of persons) {
    const {id} = person;
    newPersons.set(id, {...persons});
}

for(const persons of newPersons.keys()) {
    console.log(persons);
}


console.log(newPersons);





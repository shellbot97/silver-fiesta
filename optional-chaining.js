const people = [
    {
        name:"Bob",
        location:{
            city:"Kolkata",
            state:"WB" 
        },
        timezone: {offset: "UST"}
    },
    {
        name: "Peter",
        location: {
            city:"Mumbai",
            state:"MH" 
        }
    },
    {
        name: "Sally",
        location: {
            city:"Ahmedabad",
            state:"GJ" 
        },
        timezone: {offset: "UST"}
    }
]

people.forEach((person) => {
    console.log(person.name);
    /**
     * traditional way to handle non-existing keys
     */
    console.log(person.timezone && person.timezone.offset && person.timezone.offset);
    /**
     * using chaining
     */
    console.log(person?.timezone?.offset || "Not applicable");
})

/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const backpack = {
    laptop: 'MacBook Pro 17',
    notebook: 'JavaScript Mastery',
    pencilBox: {
        coloredSharpie1: 'Black',
        coloredSharpie2: 'Yellow',
        coloredSharpie3: 'Green',
        coloredSharpie4: 'Red',
    }
}

console.log('Brens Laptop: ', backpack.laptop)
console.log("Bren's Pencilbox: ", backpack.pencilBox)
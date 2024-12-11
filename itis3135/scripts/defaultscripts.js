document.addEventListener('DOMContentLoaded', function() {
    var currentTimeElement = document.getElementById('current-time');
    var currentDate = new Date();
    currentTimeElement.textContent = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + 
                                    ' on ' + currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('user-info').addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var mood = document.getElementById('mood').value;
        document.getElementById('greeting').textContent = "Hello " + name + "!! Humble Kangaroo welcomes you!! We're glad you are doing " + mood + " today!";
    });
});

function showPolygonName() {
    const numberInput = document.getElementById('favorite-number').value;
    const absoluteNumber = Math.abs(parseInt(numberInput));
    const polygonNames = ['Henagon','Digon','Trigon','Tetragon','Pentagon','Hexagon','Heptagon','Octagon','Nonagon','Decagon'];
    const polygonName = (absoluteNumber < 11) ? polygonNames[absoluteNumber-1] : 'Invalid Input';
    alert('The name of the polygon with ' + absoluteNumber + ' sides is ' + polygonName);
}
function kangaroo(){  
    let kangaroo = document.getElementById("kangaroo").value;
    if(kangaroo === "yes"){
        let answerKangaroo = "They are real animals native to Australia and are well-known for their unique characteristics, such as hopping on their strong hind legs and carrying their young in pouches.";
        document.getElementById("answerKangaroo").innerHTML = answerKangaroo; 
    }
    else if (mermaid === "no") {
        let answerKangaroo= "You are mistaken. Kangaroos are real, existing animals that can be observed in the wild and in various wildlife reserves. They are an important part of Australia's ecosystem and are also featured in zoos and wildlife parks globally.";
        document.getElementById("answerMermaid").innerHTML = answerKangaroo; 
    } else {
        let answerKangaroo= "Please answer with 'yes' or 'no'.";
        document.getElementById("answerKangaroo").innerHTML = answerKangaroo;
    }
}

function generateCompliment() {
    const c = ["Like a kangaroo's boundless energy, your enthusiasm lifts everyone's spirits!!",
    "Your strength and determination remind me of a kangaroo leaping over any obstacle in its path!",
    "Your agility and grace are as impressive as a kangaroo hopping through the wild!",
    "With your warm heart and endless kindness, you're like a kangaroo protecting its joey!",
    "Your positive energy jumps higher than a kangaroo in full stride!"];
    const randomC = c[Math.floor(Math.random() * c.length)];
    alert("Compliment: " + randomC);
}

function randomFact() {
    document.getElementById("randomFact").innerText = "Did you know that octopuses have three hearts?";
}

function randomKangarooFact() {
    document.getElementById("randomMermaidFact").innerText = "Did you know that kangaroos can't walk backward? Their large, muscular tail and unique body structure make it impossible for them to move in reverse. This is why kangaroos are often seen as a symbol of progress and moving forward!";
}

function sayGoodbye() {
    document.getElementById("goodBye").innerText = "Alright, Thanks for visiting Humble Kangaroo.";
}
document.addEventListener('DOMContentLoaded', function() {
    var currentTimeElement = document.getElementById('current-time');
    var currentDate = new Date();
    currentTimeElement.textContent = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + 
                                    ' on ' + currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('user-info').addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var mood = document.getElementById('mood').value;
        document.getElementById('greeting').textContent = "Hello " + name + "!! Hawk Kangaroo welcomes you!! We're glad you are doing " + mood + " today!";
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
    if(mermaid === "yes"){
        let answerKangaroo = "A kangaroo is a marsupial native to Australia and known for its powerful legs, long tail, and distinctive method of movement: hopping.";
        document.getElementById("answerKangaroo").innerHTML = answerKangaroo; 
    }
    else if (kangaroo === "no") {
        let answerKangaroo = "If you can't travel to Australia, visiting a nearby zoo or park that houses kangaroos is the next best thing";
        document.getElementById("answerKangaroo").innerHTML = answerKangaroo; 
    } else {
        let answerKangaroo = "Please answer with 'yes' or 'no'.";
        document.getElementById("answerKangaroo").innerHTML = answerKangaroo; 
    }
}

function generateCompliment() {
    const c = ["Your energy is as boundless as a kangaroo's leap, always inspiring those around you!!",
        "Just like a kangaroo's resilience in the wild, your determination knows no bounds!!",
        "Your warmth and kindness create a sense of community, just like a kangaroo in its mob!!",
        "Your strength and grace mirror a kangaroo's powerful hop, always aiming high!!",
        "Like a kangaroo's balance, you bring harmony and steadiness wherever you go!!"];
    const randomC = c[Math.floor(Math.random() * c.length)];
    alert("Compliment: " + randomC);
}

function randomFact() {
    document.getElementById("randomFact").innerText = "A shrimp's heart is in its head.";
}

function randomKangarooFact() {
    document.getElementById("randomKangarooFact").innerText = "While they're famous for their hopping on land, kangaroos are surprisingly skilled swimmers. They use their powerful hind legs to propel themselves through the water and their tail to steer. Swimming helps them escape predators and cross rivers or lakes in their habitat. Pretty cool, right? 🦘";
}

function sayGoodbye() {
    document.getElementById("goodBye").innerText = "Adios! Thanks for visiting Hawk Kangaroo.";
}
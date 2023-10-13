// fetch("https://opentdb.com/api.php?amount=10&category=30&type=multiple")
// fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple")

// fetch("https://opentdb.com/api.php?amount=10&category=23&type=multiple")
// fetch("https://opentdb.com/api.php?amount=10&category=20&type=multiple")

// fetch("https://opentdb.com/api.php?amount=10&category=11&type=multiple")

// fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple")

// fetch("https://opentdb.com/api.php?amount=10&category=24&type=multiple")

// fetch("https://opentdb.com/api.php?amount=10&category=26&type=multiple")


// .then(data => data.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

let ScienceGadgets = () => {
    fetch("https://opentdb.com/api.php?amount=10&category=30&type=multiple")
        .then(data => data.json())
        .then(data => {
            console.log(data.results);

            let main = document.getElementById("main")
            main.innerHTML = "";

            console.log(data.results[0].correct_answer);
            main.innerHTML = ` 
         <div>
         <p>${data.results[0].question}</p>
            <label for="q1"><input type="radio" name="a" id="q1" value="${data.results[0].correct_answer}"> ${data.results[0].correct_answer}</label>
            <br>
            <br>
            <label for="q2"><input type="radio" name="a" id="q2" value="${data.results[0].incorrect_answers[0]}"> ${data.results[0].incorrect_answers[0]}</label>
            <br>
            <br>
            <label for="q3"><input type="radio" name="a" id="q3" value="${data.results[0].incorrect_answers[1]}"> ${data.results[0].incorrect_answers[1]}</label>
            <br>
            <br>
            <label for="q4"><input type="radio" name="a" id="q4" value="${data.results[0].incorrect_answers[2]}"> ${data.results[0].incorrect_answers[2]}</label>
            <br>
            <br>
            <button onclick="nextQ()">Next</button>
        </div>
        `;


            console.log(data.results);

        })
        .catch(err => console.log(err))
        
      

}


let nextQ = () =>{
    let inp = document.getElementsByName("a")
    inp.forEach(val =>{
        console.log(val.value);
    })
}

// const getCharakterButton = document.querySelector('#btn')
let input = document.querySelector('#filter')
let cardContainer = document.querySelector('.card-container')


let onChange = function () {

    if (input.value.length > 2) {
        fetch(`https://rickandmortyapi.com/api/character/?name=${input.value}`)
            .then(response => response.json())
            // .then(data => console.log(data.results))
            .then(data => makeCards(data.results))




        const makeCards = (charakterArray) => {
            charakterArray.forEach(charakter => {

                if (input.value.includes(charakter.name)) {
                    console.log('true')
                }

                let nameCharakter = charakter.name

                cardContainer.innerHTML +=
                    `<section class="wrapper">
                    <div class="inner_text">
                    <button id=item_btn${charakter.id} class="charakter_link"> ${nameCharakter} </button>
                    </div>
                    <div class="inner_img">
                    <img src=${charakter.image}></img>
                    </div>
                    </section>`

                const buttons = document.querySelectorAll('.charakter_link')
                // console.log(buttons)

                for (const button of buttons) {
                    button.addEventListener('click', (e) => {
                        let nameOfCharakter = e.currentTarget.innerText

                        console.log(nameOfCharakter)
                        Swal.fire({
                            title: nameOfCharakter,
                            text: 'Do you want to continue',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    })
                }
            })

        }

    } else {
        // console.log(cardContainer)
        cardContainer.innerHTML = ""
    }
}

filter.addEventListener('input', onChange, false)


// Display all charakters on click on button

// getCharakterButton.addEventListener('click', () => {
//     fetch("https://rickandmortyapi.com/api/character")
//         .then(response => response.json())
//         .then(data => makeCards(data.results))

//     function makeCards(charakterArray) {
//         const cardContainer = document.querySelector('#card-container')
//         charakterArray.forEach(charakter => {
//             cardContainer.innerHTML = cardContainer.innerHTML +
//                 `<h2>${charakter.name}</h2>
//             <img src=${charakter.image}></img>`
//         })
//     }
// })
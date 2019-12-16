// console.log('hello', $);

// NOTE AJAX


// invoke AJAX
// $.ajax()

// ajax configuration object
$.ajax({
    // method property allows us to set the type of request, GET POST PUT PATCH DELETE request?
    method: 'GET', 
    // URL property is the route that the request is being sent to
    url: 'https://boiling-fjord-73796.herokuapp.com/api/atkops',
    // success propert tells ajax what to do once it has received the **RESPONSE** from the server
    // this is always a function that will take a response as a parameter
    success: (response) => {
        console.log({response});
    }, 
    // error property tells ajax what to do in the case that we receive an error
    // this is always a function that reveives the error as a parameter
    error: (error) => {
        console.log({error});
    },
    // beforeSend property will tell ajax what to do BEFORE the request has been sent
    // This is always a function 
    beforeSend: () => {
        console.log('Before the request');
    },
    // complete property tells ajax what to do once the success has been triggered or the error has been triggered. Otherwise known as once ajax has received a response
    // This is always a function
    complete: () => {
        console.log('I have received a response');
    },
})

// Vanilla js Fetch

fetch(`https://totallyaccuratepokedex.herokuapp.com/api/pokemon`).then((response) => {
    console.log({fetch:response.json()});
}).then(json => {
    console.log({fetch:json});
});


// Example of working AJAX with the DOM

const onSuccess = (response) => {
    // console.log({response: response.data[0].name});
    response.data.forEach((pokemon) => {
        // console.log(pokemon.name);
        const template = `<h2>${pokemon.name}</h2><img src="${pokemon.image}"/>`;
        $('body').append(template);
    });
};

const onError = (error) => {
    console.log({error});
};

$.ajax({
    method: 'GET',
    url: `https://totallyaccuratepokedex.herokuapp.com/api/pokemon`,
    success: onSuccess,
    error: onError,
});










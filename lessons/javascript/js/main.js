

const jokeObject = {
    id: 'asdf',
    joke: 'WHy why why'
}

const postData = async () => {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://httpbin.org/post', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(jokeObject),
    });
    const responseData = await response.json()

    console.log(responseData);
}

console.log(postData());

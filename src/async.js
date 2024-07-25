function call1() {
  fetch("https://jsonplaceholder.typicode.com/users", { method: "GET"})
    .then((data) => data.json())
    .then((zavatraJSON) => {
      console.log('ito ilay zavatraJSON', zavatraJSON);
    })
    .catch(() => {
      console.log('an error has occured');

    })
}


async function asyncCall() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", { method: "GET"});
    const data = await response.json();
    console.log('data', data);
  } catch (e) {
  }
}

const asyncArrowCall = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", { method: "GET"});
    const data = await response.json();
    console.log('data', data);
  } catch (e) {
  }
}

call1();

// Vamos a suponer que tenemos una pagina web y que queremos hacer una lista con los titulos de los posts
// de un usuario en concreto para que el resto de ususarios puedan acceder de manera ordenada.
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const users = await response.json();
        const usersFiltered = await users
        .filter((user) => user.userId == 1) //Primero filtraremos los posts por la id del usuario que queremos mostrar
        .sort((a, b) => a.title > b.title ? 1 : -1) //Despues ordenaremos los posts por orden alfabetico
        .map((user)=>user.title); // Finalmente cogeremos solo los titulos para enseñarlos en la web
        console.log(usersFiltered)
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();




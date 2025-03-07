fetch('https://jsonplaceholder.typicode.com/posts')
.then((Response) => {
    return Response.json();
})
.then((data) => {
    console.log('Data 1:', data);
});

const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log('Data 2:', data.slice(0, 10));
        const tbody = document.querySelector('#fetchTable tbody');
        data.slice(0, 10).forEach(items => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = items.id
            row.appendChild(idCell);

            const titleCell = document.createElement('td');
            titleCell.textContent = items.title
            row.appendChild(titleCell);

            const bodyCell = document.createElement('td');
            bodyCell.textContent = items.body
            row.appendChild(bodyCell);

            tbody.appendChild(row);
        });
    } catch (error) {
        console.log(error.message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getData();
});

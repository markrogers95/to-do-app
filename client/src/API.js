const API_URL = 'http://localhost:8000';

export async function getList() {
    
    const response = await fetch(`${API_URL}/api/items`);
    return response.json();
};

export async function createItem(entry) {

    const response = await fetch(`${API_URL}/api/items`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(entry),
    });
    return response.json();
}

export async function deleteItem(entry) {
    
    const response = await fetch(`${API_URL}/api/items/${entry._id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        //body:JSON.stringify(entry),
    })
    return response.json();
}
const API_URL = 'http://localhost:8000';

export async function getList() {
    
    const respone = await fetch(`${API_URL}/api/items`);
    return respone.json();
};

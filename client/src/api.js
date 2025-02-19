const API_URL = 'http://localhost:5000/';

export async function getData() {
  try {
const response = await fetch(`${API_URL}`);

    if (!response.ok) {
      throw new Error(`Грешка: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Получени данни:', data);
    return data;
  } catch (error) {
    console.error('Грешка при извличането на данни:', error);
  }
}

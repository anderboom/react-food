import { API_URL } from './config';

const getMealById = async(mealId) => {
    const response = await fetch(`${API_URL}lookup.php?i=${mealId}`);
    return await response.json();
};

const getAllCAtegories = async() => {
    const response = await fetch(`${API_URL}categories.php`);
    return await response.json();
};

const getFilteredCAtegory = async(categoryName) => {
    const response = await fetch(`${API_URL}filter.php?c=${categoryName}`);
    return await response.json();
};

export { getAllCAtegories, getFilteredCAtegory, getMealById };
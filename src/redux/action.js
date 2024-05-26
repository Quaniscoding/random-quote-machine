export const FETCH_QUOTE = 'FETCH_QUOTE';
export const SET_QUOTE = 'SET_QUOTE';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const fetchQuote = () => async (dispatch) => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const color = getRandomColor();
    dispatch(setQuote(data.content, data.author, color));
};

export const setQuote = (text, author, color) => ({
    type: SET_QUOTE,
    payload: { text, author, color },
});

import axios from 'axios';

const url = 'https://type.fit/api/quotes';

export const fetchData = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  try {
    const res = await axios.get('https://icanhazdadjoke.com/search', config);
    // console.log(this.state.jokes);
    return res;
  } catch (error) {}
};

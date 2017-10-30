export const fetchData = async () => {
  try {
    const response = await fetch("http://coincap.io/page/ETH");
    const data = await response.json();
    console.log(`api data:`, data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

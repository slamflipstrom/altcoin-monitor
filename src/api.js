export const fetchData = async () => {
  try {
    const response = await fetch("http://coincap.io/page/ETH");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

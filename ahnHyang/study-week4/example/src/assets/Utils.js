export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export const currentDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);

  return year + '-' + month + '-' + day;
}
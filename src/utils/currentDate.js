const date = new Date();

const year = date.getFullYear();
const monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = monthsName[date.getMonth()];
const day = date.getDate();

const currentDate= `${month} ${day}, ${year}`

export default currentDate;
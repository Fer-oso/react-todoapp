export const dayFormater = () =>{

const date = new Date();

const dateFormated = date.toLocaleDateString() +" "+ date.toLocaleTimeString();

return dateFormated;

}
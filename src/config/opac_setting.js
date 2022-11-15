import axios from "axios";
export const TEMPLATE = axios.get('http:localhost:4444/template').then(res => res);
console.log(TEMPLATE)
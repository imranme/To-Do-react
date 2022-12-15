import React from 'react';
import ReactDOM from 'react-dom';

// javascript
const khan = "Hello khan how ar you";
const maruf = "Lorem Ipsum"
const mamun = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

// CSS3
const headingstyle = {
  backgroundColor : "red",
  color : "white",
  textAlign : "center",
  padding : "15px"
  
}
 

ReactDOM.render(
  <div>
    <h1 style={headingstyle}>{khan}</h1>
    <h1>{maruf}</h1>
    <h2>{mamun}</h2>
    <p>{dateName + " / " + monthName + " / " + currentYear}</p>
  </div>,
  document.getElementById('root')
);
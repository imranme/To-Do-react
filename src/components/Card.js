// javascript
const maruf = "Lorem Ipsum"
const mamun = "Lorem Ipsum is simply dummy text of the hey whats up.."
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

// // CSS3
// const headingstyle = {
//   backgroundColor : "red",
//   color : "white",
//   textAlign : "center",
//   padding : "15px"
  
// }

//functional component 
function Card(){
  return <div className='card'>
           <h1 className='cardheadr'>{maruf}</h1>
           <p className='cardDeatils'>{mamun}</p>
           <p className='cardFoter'>{dateName + " / " + monthName + " / " + currentYear}</p>
        </div>
}

export default Card;
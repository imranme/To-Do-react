// javascript
const maruf = "Lorem Ipsum"
const mamun = "Lorem Ipsum is simply dummy text of the hey whats up.."
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();


//functional component 
function Card(props){
  const {titleText, descText}= props;
  return <div className='card'>
           <h1 className='cardheadr'>{titleText}</h1>
           <p className='cardDeatils'>{descText}</p>
           <p className='cardFoter'>{dateName + " / " + monthName + " / " + currentYear}</p>
        </div>
}

export default Card;
import React from 'react';
import Card from './components/Card';
import Data from './data.json'

function App() {
  // let items = [];
  // for(let x=0; x<Data.length; x++){
  //   items.push(<Card titleText={Data[x].title} descText={Data[x].desc}/>)
  // }

  return <div>
            <h1 className='headingstyle'>Todo App</h1>
            {Data.map((item) => <Card titleText={item.title} descText={item.desc}/>)}
         </div>
}

export default App;

import React from "react";
import Card from "./Card";
import emojis from "../emoji";

// const descriptions = emojis.map(function (emoji) {
//   return emoji.description.substring(0,100);
// });
// console.log(descriptions);  
// function createCard(emoji) {
//   return (
//     <Card
//       key={emoji.id}
//       icon={emoji.icon}
//       title={emoji.title}
//       description={emoji.description.substring(0, 100)}
//     />
//   );
// }
function App() {
  return (
    <div>
      <h1 className="app-title">EmojiPedia</h1>
      {/* <div className="card-parent">{emojis.map(createCard)}</div> */}
      <div className="card-parent">{emojis.map(emoji => 
        <Card
        key={emoji.id}
        icon={emoji.icon}
        title={emoji.title}
        description={emoji.description.substring(0, 100)}
      />
      )}</div>
    </div>
  );
}
export default App;

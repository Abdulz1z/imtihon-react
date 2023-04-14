/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
   {
      id: 1,
      title: "javascript",
      body: "javascript base",
      id: 2,
      title: "javascript",
      body: "javascript base",
      id: 3,
      title: "javascript",
      body: "javascript base",
      id: 4,
      title: "javascript",
      body: "javascript base",
      id: 5,
      title: "javascript",
      body: "javascript base",
   },
];

function App() {
   return (
      <div className="App">
         <form className="form d-flex align-items-center justify-content-center mt-4 ">
            <input
               type="text"
               placeholder="title"
               className="w-25"
            />
            <input
               type="text"
               placeholder="body"
               className="w-25"
            />
            <button className="border-success border-2">Add</button>
         </form>
      </div>
   );
}

export default App;

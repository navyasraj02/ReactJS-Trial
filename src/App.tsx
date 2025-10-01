import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>Hello World</Alert>
    </div>
  );
}

export default App;

// function App() {
//   let items = ["New York", "California", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

import './App.css'

function Button(props) {
  // props: {
  //  rehefaClicked: () => {}
  // }
  return <button onClick={props.rehefaClicked}>{props.text}</button>
}

export default function App() {
  return (
    <div>
      <Button
        text="click1"
        rehefaClicked={() => {
          alert("alert!")
        }}
      />
      <Button
        text="click2"
        rehefaClicked={() => {
          console.log('console!');
        }}
      />
    </div>
  )
}

// const button = document.getElementById("btn")
// button.onclick = () => {
// }

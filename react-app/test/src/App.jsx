
import './App.css'
import Profile from './components/Profile/Profile'

// function Greetings(props) {

//   return (
//     <h3>Greetings for the day {props.name} </h3>
//   )
// }

function App() {
  // const [state, setState] = useState('state')

  // function Greetings() { never do this also
  //   const [state2, setState2] = useState('state2')
  //   console.log(state, state2)
  //   return (
  //     <h3>Greetings for the day</h3>

  //   )
  // }

  //before react 16.4

  //after 16.8 react introduced hooks

  return (
    <div>
      {/* <h1>Hello world</h1> */}
      <Profile />
      {/* <Greetings name='Ankit' />
      <Greetings name='Anmol' />
      <Greetings name='Agam' />
      <Greetings name='Kunal' /> */}
      {/* {Greetings()} never do this */}
    </div>
  )
}

export default App

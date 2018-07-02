import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      questions:[],
      answers:[]
    }

   

  }

  componentDidMount(){
    fetch('http://localhost:4000/api',
      { 
        headers: { 
          'Accept': 'application/json', 
        }, 
      }
    )
    .then(response => response.json()).catch(err => { console.log(`${err} happened!`); return {}; })
    .then(json => { 
      
      console.log('json', json.questions)
      const questions = json.questions
      this.setState({...this.state.questions, questions})

    }).catch((err) => {console.log('fetch request failed: ', err)} )

    console.log('state', this.state)


  }





  render() {

          return(<div>{
        this.state.questions.map( (q, i) => {
          console.log(q)
          return(<div key={`keyq-${i}`}>
            <h3>{q.q}</h3>
            <ul>
              {q.a.map( (ans, j) => {
                console.log('a', ans)
                return(<li key={`keya-${j}`}>{ans}</li>)
              })}
            </ul>
          </div>)
        })
      }</div>)


    // return (
    //   <div className="App">



    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }
}

export default App;

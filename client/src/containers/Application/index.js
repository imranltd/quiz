import React, { Component } from 'react';
import Header from '../../components/Header';
import Questions from '../../components/Questions';
import Results from '../../components/Results';
import Button from '../../components/Button'


class Application extends Component {
  constructor(props){
    super(props)

    this.state = {
      questions:[],
      answers:[],
      page: 0,
      score: {
        correct: 0,
        incorrect: 0,
        total: 0,
        percentage: 0
      },
      showModel: false

    }

    this.handleAnswer = this.handleAnswer.bind(this)
    this.checkScore = this.checkScore.bind(this)

  }

  componentDidMount() {
    const url = 'http://localhost:4000/api'
    
    fetch(url, {
        headers: { 
          'Accept': 'application/json', 
        }, 
      }
    )
    .then(response => response.json()).catch(err => { console.log(`${err} happened!`); return {}; })
    .then(json => { 
      
      const questions = json.questions
      const answers = []
      questions.map( (a) => {
        return answers.push('')
      })
      this.setState({...this.state.answers, answers})
      this.setState({...this.state.questions, questions})

    }).catch((err) => {console.log('fetch request failed: ', err)} )

  }



  showResults() {
    window.scrollTo(0, 0);
    window.onscroll = function () { window.scrollTo(0, 0); };
    const showModel = !this.state.showModel

    this.setState({showModel:showModel})
  }

  checkScore(){
    const score = {}
    let correct = 0
    
    this.state.answers.map((a,i) => {
      if(a === this.state.questions[i].c) {
        correct = correct+1
      }
      return correct
    })

    score.total = this.state.answers.length
    score.percentage = correct / score.total * 100
    score.correct = correct

    score.incorrect = score.total - score.correct


    this.setState({score})

    this.showResults()
  }


  handleAnswer = (e, index) => {

    const ques = e.target.dataset.refQuestionId
    const answ = e.target.dataset.refAnswerId

    const answers = this.state.answers

    answers.map( (ans, ind) => {
      console.log(ind, answ)
      if(ind === parseInt(answ, 10)){
        answers[ind] = parseInt(ques, 10)
      }
      return answers
    })
    this.setState({answers:answers})

  }

  render() {
    return(<div>
      <Header>General <br />Knowledge_</Header>
      {
        this.state.questions.map( (q, i) => 
          <Questions 
            data={q} 
            questionIndex={i}  
            key={`keyq-${i}`} 
            onClick={ (e) => this.handleAnswer(e,i) }
            selectedAnswer={this.state.answers[i]}
          />)
      }
      <Button onClick={(e)=>this.checkScore(e)} label='SUBMIT' />
      { (this.state.showModel) ? <Results data={this.state.score} /> : ''}
    </div>)
  }
}

export default Application;

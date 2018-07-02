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
    console.log('componentDidMount')
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
      const answers = []
      questions.map( (a) => {
        return answers.push('')
      })
      this.setState({...this.state.answers, answers})
      this.setState({...this.state.questions, questions})

    }).catch((err) => {console.log('fetch request failed: ', err)} )

    console.log('state', this.state)


  }

  componentsWillUpdate() {
    console.log('componentsWillUpdate')
  }

  showResults(){
    window.scrollTo(0, 0);
    window.onscroll = function () { window.scrollTo(0, 0); };
    const showModel = !this.state.showModel
    console.log('showModel', showModel)
    this.setState({showModel:showModel})

    console.log('state', this.state)
  }

  checkScore(){
    const score = {}
    let correct = 0
    


    score.total = this.state.answers.length
    this.state.answers.map((a,i) => {
      console.log('score', a)
      if(a === this.state.questions[i].c){
        correct = correct+1
      } else {
        console.log('incorrect', this.state.questions[i].q)
      }
      return correct

    })

    score.percentage = correct / score.total * 100
    score.correct = correct
    score.incorrect = score.total - score.correct
    console.log('score', score)

    this.setState({score})


    this.showResults()
  }


  handleAnswer = (e, index) => {

    const ques = e.target.dataset.refQuestionId
    const answ = e.target.dataset.refAnswerId
    
    console.log('question selected ', answ, this.state.questions[answ].q)
    console.log('question answered: ', ques)

    const answers = this.state.answers
    //selectedAnswer.insert(answ, ques)
    answers.map( (ans, ind) => {
      console.log(ind, answ)
      if(ind === parseInt(answ, 10)){
        //console.log()
        answers[ind] = parseInt(ques, 10)
      }
      return answers

    })

    console.log('answers', answers)

    this.setState({answers:answers})





    console.log('state', this.state)

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





      { (this.state.showModel)? <Results data={this.state.score}/> : ''}


    </div>)
  }
}

export default Application;

import React from 'react';
import '../styles/global.css';
import { Component } from 'react';


export default class QuestionFinished extends Component {
    state = {
        subject: null,
        question: null,
        alternativeA: null,
        alternativeB: null,
        alternativeC: null,
        alternativeD: null,
        alternativeE: null,
    }
   

    componentDidMount() {
        const subject = JSON.parse(localStorage.getItem('subject'));
        const question = JSON.parse(localStorage.getItem('question'));
        const alternativeA = JSON.parse(localStorage.getItem('alternativeA'));
        const alternativeB = JSON.parse(localStorage.getItem('alternativeB'));
        const alternativeC = JSON.parse(localStorage.getItem('alternativeC'));
        const alternativeD = JSON.parse(localStorage.getItem('alternativeD'));
        const alternativeE = JSON.parse(localStorage.getItem('alternativeE'));
       

        if (!subject 
            && !question 
            && !alternativeA
            && !alternativeB
            && !alternativeC
            && !alternativeD
            && !alternativeE
            
            ) return;

        this.setState({ subject, question, alternativeA, alternativeB, alternativeC, alternativeD, alternativeE });
        
    }

    render = () => {
        return (

            <div className="questionWindow">
                <h1>{this.state.subject}</h1>
                <p>{this.state.question}</p>
                <ul>
                    <li>a.{this.state.alternativeA}</li>
                    <li>b.{this.state.alternativeB}</li>
                    <li>c.{this.state.alternativeC}</li>
                    <li>d.{this.state.alternativeD}</li>
                    <li>e.{this.state.alternativeE}</li>
                </ul>
            </div>

        )
    }
}

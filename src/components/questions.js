import React from "react";
import '../styles/global.css';
import { Component } from 'react';

export default class Question extends Component {
    state = {
        subject: null,
        question: null,
        alternativeA: null,
        alternativeB: null,
        alternativeC: null,
        alternativeD: null,
        alternativeE: null
    }



    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidUpdate(prevPropos, prevState) {
        const { 
             subject, question, alternativeA,
             alternativeB, alternativeC, alternativeD, alternativeE} = this.state;

        if (
            subject === prevState.subject
            && question === prevState.question
            && alternativeA === prevState.alternativeA
            && alternativeB === prevState.alternativeB
            && alternativeC === prevState.alternativeC
            && alternativeD === prevState.alternativeD
            && alternativeE === prevState.alternativeE
            
            ) return;

        localStorage.setItem('subject', JSON.stringify(subject));
        localStorage.setItem('question', JSON.stringify(question));
        localStorage.setItem('alternativeA', JSON.stringify(alternativeA));
        localStorage.setItem('alternativeB', JSON.stringify(alternativeB));
        localStorage.setItem('alternativeC', JSON.stringify(alternativeC));
        localStorage.setItem('alternativeD', JSON.stringify(alternativeD));
        localStorage.setItem('alternativeE', JSON.stringify(alternativeE));
    }

    render = () => {
        const {
            subject,
            question,
            alternativeA,
            alternativeB,
            alternativeC,
            alternativeD,
            alternativeE
        } = this.state;

        return (

            <div className="quizWindow">

                <form action='#'
                    method='GET'
                    className="window-cretate-question"
                    onSubmit={(e) => { e.preventDefault() }}
                    href='/question'

                >

                    <label htmlFor="subject-matter">Qual o assunto do seu quiz?</label>

                    <input
                        type="text"
                        id="subject-matter"
                        name='subject'
                        className="subject validation_js"
                        onChange={this.handleChange}
                        value={subject}

                    />

                    <label htmlFor="question">Digite a questão</label>
                    <textarea
                        type="textarea"
                        id="question"
                        name='question'
                        className="txtarea-question"
                        onChange={this.handleChange}
                        value={question}
                    />

                    <ul>
                        <li>a)
                            <input
                                type="text"
                                name="alternativeA"
                                onChange={this.handleChange}
                                value={alternativeA}
                            />
                        </li>
                        <li>b)
                            <input
                                type="text"
                                name="alternativeB"
                                onChange={this.handleChange}
                                value={alternativeB}
                            />
                        </li>
                        <li>c)
                            <input
                                type="text"
                                name="alternativeC"
                                onChange={this.handleChange}
                                value={alternativeC}
                            />
                        </li>
                        <li>d)
                            <input
                                type="text"
                                name="alternativeD"
                                onChange={this.handleChange}
                                value={alternativeD}
                            />
                        </li>
                        <li>e)
                            <input
                                type="text"
                                name="alternativeE"
                                onChange={this.handleChange}
                                value={alternativeE}
                            />
                        </li>

                    </ul>

                    <span className="error-menssege"></span>

                    <button
                        type="submit"
                        className='btn-default-form'
                        onClick={() => { window.location = `/question` }}
                    >

                        Criar questão
                    </button>

                </form>
            </div>

        )
    }






}

import React from 'react';
require ('./HeadLine.css');

class HeadLine extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <p className='headLineP'>
            Od 1 stycznia 2019 r. w Warszawie wszedł w życie nowy system selektywnej zbiórki odpadów komunalnych.<br/>Zgodnie z Regulaminem utrzymania czystości i porządku na terenie m.st. Warszawy od 2019 r. segregujemy odpady do 5 pojemników.
        </p>
    }
}

export default HeadLine;

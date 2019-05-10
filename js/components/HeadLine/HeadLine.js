import React from 'react';
require ('./HeadLine.css');
import recykling from'./../../../images/recykling.png';


class HeadLine extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='headLineDiv'>
            <img className='headLineImg' src={recykling}/>
        <p className='headLineP'>
            Od 1 stycznia 2019 r. w Warszawie wszedł w życie nowy system selektywnej zbiórki odpadów komunalnych.<br/>Zgodnie z Regulaminem utrzymania czystości i porządku na terenie m.st. Warszawy od 2019 r. ODPADY KOMUNALNE segregujemy do 5 pojemników. Dodatkowe 2 pojemniki przeznaczone są na odpady zielone i wielkogabarytowe.
        </p>
        </div>
    }
}

export default HeadLine;

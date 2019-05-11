import React from 'react';

require('./ColorOFBaskets.css');
import papier from "../../../images/papier.png";
import bio from "../../../images/bio.png";
import metale_i_tworzywasztuczne from "../../../images/metale_i_tworzywasztuczne.png";
import odpady_wielkogabarytowe from "../../../images/odpady_wielkogabarytowe.png";
import szklo from "../../../images/szklo.png";
import zielone from "../../../images/zielone.png";
import zmieszane from "../../../images/zmieszane.png";

class ColorOfBaskets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            papier: '',
            bio: '',
            zmieszane: '',
            szklo: '',
            metale: '',
            zielone: '',
            wielkgabarytowe: ''
        }
    }

    handleChange = () => {
        this.setState({
            papier: <div className='basketDiv'>

                <h2 className='basketDivH1'>TAK</h2>
                <p>czyste opakowania z papieru i tektury<br/>
                    gazety, czaspopisma,ulotki<br/>
                    kartony, zeszyty, papier biurowy
                </p>
                <h2 className='basketDivH1'>NIE</h2>
                <p>zatłuszczone opakowania z papieru<br/>
                    zużyte ręczniki papierowe i chusteczki
                </p>
                <img src={papier}/>
            </div>
        })
    };
    handleChangeOn = () => {
        this.setState({
            papier: ''
        })
    };
    handleChange1 = () => {
        this.setState({
            bio: <div className='basketDiv'>
                Pamiętaj, że chdzi o odpady pochodzące z gospodarstw domowych
                <h2 className='basketDivH1'>TAK</h2>
                <p>odpadki warzywne i owocowe,resztki jedzenia<br/>
                    skorupki jaj, fusy po kawie i herbacie,<br/>
                    zwiędłe kwiaty i rośliny doniczkowe
                </p>
                <h2 className='basketDivH1'>NIE</h2>
                <p>resztki miesne, kości oraz tłuszcze zwierzęce<br/>
                    olej jadalny,ziemia, kamienia, odchody zwierząt
                </p>
                <img src={bio}/>
            </div>
        })
    };
    handleChangeOn1 = () => {
        this.setState({
            bio: ''
        })
    };
    handleChange2 = () => {
        this.setState({
            zmieszane: <div className='basketDiv'>
                Do tego pojemnika wrzucaj tylko to, czego nie udało się rozdzielić do pojemników na odpady segregowane lub czego nie można oddać do PSZOK-u lub MPSZOK-u'
                <h2 className='basketDivH1'>TAK</h2>
                <p>resztki mięsne oraz kości, mokry lub zabrudzony<br/>
                    papier,zużyte materiały higieniczne w tym pieluchy<br/>
                    jednorazowe, żwirek z kuwet dla zwierząt, fajans,<br/>
                    potłuczone szkło i lustra, tekstylia
                </p>
                <h2 className='basketDivH1'>NIE</h2>
                <p>sprzęt elektroniczny oraz elektryczny, AGD, baterie,<br/>
                    akumulatory, odpady budowalne i remontowe, odpady zielone<br/>
                    leki oraz chemiklia
                </p>
                <img src={zmieszane}/>
            </div>
        })
    };
    handleChangeOn2 = () => {
        this.setState({
            zmieszane: ''
        })
    };
    handleChange3 = () => {
        this.setState({
            szklo: <div className='basketDiv'>

                <h2 className='basketDivH1'>TAK</h2>
                <p>puste szklane butelki, słoiki<br/>
                    szklane opakowania po kosmetykach<br/>
                    puste szklane opakowani po lekach
                </p>
                <h2 className='basketDivH1'>NIE</h2>
                <p>szkło stołowe, ceramika, wyroby ze szkła <br/>
                   żaroodpornego, szkło okienne, lustra, szyby <br/>
                   świetlówki
                </p>
                <img src={szklo}/>
            </div>
        })
    };
    handleChangeOn3 = () => {
        this.setState({
            szklo: ''
        })
    };
    handleChange4 = () => {
        this.setState({
            metale: <div className='basketDiv'>

                <h2 className='basketDivH1'>TAK</h2>
                <p>puste zgniecione butelki plastikowe<br/>
                    zakrętki od butelek i słoików,<br/>
                    plastikowe opakowania, torebki, worki<br/>
                    foliowe, kartony po sokach i mleku<br/>
                    zgniecione puszki po napojach i żywności
                </p>
                <h2 className='basketDivH1'>NIE</h2>
                <p>zużyte baterie, sprzęt elektroniczny i elektryczny<br/>
                   puszki i pojemniki po farbach,butelki po olejach<br/>
                   samochodowych, opakowania po aerozolach,opakowania po olejach<br/>
                   silnikowych, zatłuszczony styropian po żywności
                </p>
                <img src={metale_i_tworzywasztuczne}/>
            </div>
        })
    };
    handleChangeOn4 = () => {
        this.setState({
            metale: ''
        })
    };
    handleChange5 = () => {
        this.setState({
            zielone: <div className='basketDiv'>

                <h2 className='basketDivH1'>TAK</h2>
                <p>liście,skoszona trawa,rozsrobnione<br/>
                   gałęzie
                </p>
                <h2 className='basketDivH1'>NIE</h2>
                <p> kamienie, popiół, ziemia
                </p>
                <img src={zielone}/>
            </div>
        })
    };
    handleChangeOn5 = () => {
        this.setState({
            zielone: ''
        })
    };
    handleChange6 = () => {
        this.setState({
            wielkgabarytowe: <div className='basketDiv'>
                Informacje o miejscu składowania tych odpadów uzyskasz od adminstratora
                <h2 className='basketDivH1'>TAK</h2>
                <p>stare meble(także rozłożone na części)<br/>
                   wyroby tapicerskie np.fotele,wersalki,pufy<br/>
                   materace, zabawki dużych rozmiarów
                </p>
                <h2 className='basketDivH1'>NIE</h2>
                <p>sprzęt elektryczny oraz elektroniczny<br/>
                   np. stare pralki, lodówki) materiały i odpady<br/>
                   budowalne, remontowe, wanny, umywalki, grzejniki<br/>
                   muszle toaletowe, ramy okienne, drzwi, opony samochodowe
                </p>
                <img src={odpady_wielkogabarytowe}/>
            </div>
        })
    };
    handleChangeOn6 = () => {
        this.setState({
            wielkgabarytowe: ''
        })

    };


    render() {
        return <div className='colorOfBaskets'>
            <div onClick={this.handleChange} onMouseLeave={this.handleChangeOn}
                 className='papier'>{this.state.papier}<p>Papier</p>
                <img src={papier}/></div>
            <div onClick={this.handleChange1} onMouseLeave={this.handleChangeOn1} className='bio'>{this.state.bio}
                <p>bio</p>
                <img src={bio}/>
            </div>
            <div onClick={this.handleChange2} onMouseLeave={this.handleChangeOn2}
                 className='zmieszane'>{this.state.zmieszane}<p>zmieszane</p>
                <img src={zmieszane}/></div>
            <div onClick={this.handleChange3} onMouseLeave={this.handleChangeOn3}
                 className='szklo'>{this.state.szklo}<p>szkło</p>
                <img src={szklo}/></div>
            <div onClick={this.handleChange4} onMouseLeave={this.handleChangeOn4}
                 className='metale'>{this.state.metale}<p>metale i tworzywa sztuczne</p>
                <img src={metale_i_tworzywasztuczne}/></div>
            <div onClick={this.handleChange6} onMouseLeave={this.handleChangeOn6}
                 className='wielkogabarytowe'>{this.state.wielkgabarytowe}<p>odpady wielkogabarytowe</p>
                <img src={odpady_wielkogabarytowe}/></div>
            <div onClick={this.handleChange5} onMouseLeave={this.handleChangeOn5}
                 className='zielone'>{this.state.zielone}<p>zielone</p>
                <img src={zielone}/></div>
        </div>
    }
}


export default ColorOfBaskets;
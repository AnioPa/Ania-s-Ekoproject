import React from 'react';
import './Trashlist.css';



class TrashList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const trash=this.props.trash.map((element,index)=>
        { return <div className='TrashListDiv'>
                <img className='TrashListImg' src={element.image} alt=''/>
                <li className='TrashListLi' key={element.name}>{element.name} (należy/ą do kategorii {element.category}) wyrzucamy do  {element.basket} <br/> {element.description}</li>
            </div>

        });
        if(this.props.trash.length>0){
            return(
                <ul className='TrashList' style={{listStyle:'none'}}>
                    {trash}
                </ul>
            )
        }
        return (
            <p>No results!</p>
        )


    }
}
/*
<li className='TrashListLi'key={element.name}>{element.name} (należy/ą do kategorii {element.category}) wyrzucamy do  {element.basket} <br/> {element.description} <div className='TarshListDiv'>{element.image}</div></li>
 */


export default TrashList;
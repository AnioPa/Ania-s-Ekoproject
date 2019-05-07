import React from 'react';
import './Trashlist.css';


class TrashList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const trash=this.props.trash.map((element,index)=>{ return <li className='TrashListLi'key={element.name}>{element.name} (należy/ą do kategorii {element.category}) wyrzucamy do  {element.basket} <br/> {element.description}</li>

        });
        if(this.props.trash.length>0){
            return(
                <ul style={{listStyle:'none'}}>
                    {trash}
                </ul>
            )
        }
        return (
            <p>No results!</p>
        )


    }
}


export default TrashList;
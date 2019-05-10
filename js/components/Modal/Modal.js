import React from 'react';
require ('.Modal.css');

class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='ModalDiv'>
            <h1>Hello World</h1>
        </div>
    }
}

export default Modal;
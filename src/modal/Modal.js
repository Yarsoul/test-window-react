import React from 'react';
import './modal.css';


class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button style={{marginBottom: "15px"}} onClick={() => this.setState({isOpen: true})}>Открыть модальное окно</button>
                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <h1>Модальное окно</h1>
                            <p>текст</p>
                            <button onClick={() => this.setState({isOpen: false})}>Закрыть окно</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}


export default Modal;
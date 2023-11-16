import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '350px',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',  
    },  
};

const buttonContainerStyle = {
    padding: '10px 20px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
};

const DateButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const saveDate = () => {
        // Aquí puedes manejar el guardado de la fecha
        closeModal();  // Cerrar el modal después de guardar
    };

    return (
        <>
            <button className='Boton' id="BFecha" onClick={openModal}>Fecha Audiencia</button>
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal}
                style={customStyles} 
            >
                <DatePicker selected={selectedDate} onChange={handleDateChange} />
                <div style={buttonContainerStyle}>
                    <button className='Boton' onClick={saveDate}>Aceptar</button>
                    <button className='Boton' onClick={closeModal}>Cerrar</button>
                </div>
            </Modal>
        </>
    );
};

export default DateButton;

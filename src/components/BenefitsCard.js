import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import './BenefitsCard.css'



function BenefitsCard({image, title, summary, text}) {
    const [modalOpen, setModalOpen] = useState(false)

    function toggleModal(){
        setModalOpen(!modalOpen)
    }

      
    return (
        <div className = "benefitscard-container" onClick={toggleModal}>
            <img src={image}/>
            <h3>{title}</h3>
            <p>{summary}</p>
            {/* <button onPress={openMod}>Close</button> */}

            <div onClick={toggleModal}>
            <Modal
            isOpen = {modalOpen}
            onRequestClose={toggleModal}
            // style={customStyles}
            contentLabel="Example Modal"
            onClick={toggleModal}
            >
                <div>I am a modal</div>
                {/* <button onPress={toggleModal}>Close</button> */}
            </Modal>
            </div>
        </div>
    );
}

export default BenefitsCard;
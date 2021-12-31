import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import './BenefitsCard.css'


const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',

        transform: 'translate(-50%, -50%)',
      },
}


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

            <div onClick={toggleModal} className = "benefits-modal">
            <Modal
                // isOpen = {modalOpen}
                isOpen = {false}
                onRequestClose={toggleModal}
                style={modalStyles}
                contentLabel="Example Modal"
                onClick={toggleModal}
                // 
            >
                <div dangerouslySetInnerHTML={{__html: text}} />
                {/* <button onPress={toggleModal}>Close</button> */}
            </Modal>
            </div>
        </div>
    );
}

export default BenefitsCard;
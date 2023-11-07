import "./modalAdicionar.css"
import { motion } from "framer-motion";

interface modal {
    isOpen: boolean;
    closeModal: () => void;
}

const ModalAdicionar: React.FC<modal> = ({ isOpen, closeModal }) => {
    const modalVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      };
    
    return (
        <motion.div
            className={`modal ${isOpen ? 'open' : ''}`}
            variants={modalVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
        >
            <div className="modal-content">
                <button className="close-button" onClick={closeModal}>
                    Fechar
                </button>
                <p>Conteúdo do modal aqui.</p>
            </div>
        </motion.div>
    )
}

export default ModalAdicionar
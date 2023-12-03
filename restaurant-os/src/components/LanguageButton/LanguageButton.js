import React, {useState} from 'react';
import './LanguageButton.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LanguageButton() {
    const [showLanguageModal, setShowLanguageModal] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const handleLanguageButtonClick = () => setShowLanguageModal(true);
    const handleCloseLanguageModal = () => setShowLanguageModal(false);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        // Add any logic or function to handle the selected language
        handleCloseLanguageModal();
    };

    const languageOptions = [
        { id: 1, name: 'English' },
        { id: 2, name: 'Spanish' },
        { id: 3, name: 'French' },
        { id: 4, name: 'Japanese' },
        { id: 5, name: 'Chinese' },
        { id: 6, name: 'Korean ' },
        // Add more languages as needed
      ];

    return (
        <div className='lang-button'>
        <Button variant="warning" className='language-button' onClick={handleLanguageButtonClick}> {selectedLanguage ? selectedLanguage.name : 'Language'} </Button>
        <Modal show={showLanguageModal} onHide={handleCloseLanguageModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Language</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add clickable language options using a grid */}
          <div className="d-grid gap-2">
            {languageOptions.map((language) => (
              <Button
                key={language.id}
                variant={selectedLanguage && selectedLanguage.id === language.id ? 'primary' : 'secondary'}
                onClick={() => handleLanguageSelect(language)}
                className='language-button'
              >
                {language.name}
              </Button>
            ))}
            <Button variant="primary" onClick={handleCloseLanguageModal}>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>

        </div>
    );
}

export default LanguageButton;

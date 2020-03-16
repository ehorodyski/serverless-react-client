import React, { useState, useEffect } from 'react';
import { PageHeader, ListGroup } from 'react-bootstrap';
import './Notes.css';

const NotesPage = (props) => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const renderNotesList = (notes) => { return null; };

  const renderLander = () => {
    return (
      <div className="lander">
        <h1>Notes</h1>
        <p>A simple note taking app built with Serverless.</p>
      </div>
    );
  };

  const renderNotes = () => {
    return (
      <div className="notes">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>
          {!isLoading && renderNotesList(notes)}
        </ListGroup>
      </div>
    );
  };

  return (
    <div className="Notes">
      {false ? renderNotes() : renderLander()}
    </div>
  );
};
export default NotesPage;
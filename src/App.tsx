import React from 'react';

import Container from 'react-bootstrap/Container';

//import ButtonsShowcase from './showcases/Buttons';
//import ToastsShowcase from './showcases/Toasts';
import Forms from './components/Forms';

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">
          Welcome To React-Bootstrap TypeScript Example
        </h1>
      </Container>
      <h2>Example</h2>
      <Forms />
    </Container>
  );
};

export default App;

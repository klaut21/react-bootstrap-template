import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';

function BasicExample() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setMessage(`Hello ${email}!`);
  };

  const resetForm = () => {
    setEmail('');
    setMessage('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event: any) => setEmail(event.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className="btn-group" role="group" aria-label="Basic example">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" type="reset" onClick={() => resetForm()}>
          Reset
        </Button>
      </div>
      <Container className="p-3">
        <h3>{message}</h3>
      </Container>
    </Form>
  );
}

export default BasicExample;

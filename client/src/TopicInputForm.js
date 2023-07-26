import React, { useState } from 'react';
import { Form, Input, Button } from './styles';

const TopicInputForm = ({ onGenerate }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onGenerate(topic);
    setTopic('');
  };

  const handleChange = (event) => {
    setTopic(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={topic}
        onChange={handleChange}
        placeholder="Enter a topic"
        required
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default TopicInputForm;

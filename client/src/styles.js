import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #1db954; // Spotify green
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1ed760; // Lighter Spotify green
  }
`;

export const SongListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Song = styled.li`
  margin-bottom: 0.5rem;
`;

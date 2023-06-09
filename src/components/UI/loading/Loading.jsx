import styled from 'styled-components';

export const Loading = () => {
  return (
    <Container>
      <Spinner></Spinner>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  
`;
const Spinner = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  border: 3px solid transparent;
  border-top-color: #a04668;
  top: 50%;
  left: 50%;
  margin: -30px;
  border-radius: 50%;
  animation: spin 2s linear infinite;

  &:before,
  &:after {
    content: '';
    position: absolute;
    border: 3px solid transparent;
    border-radius: 50%;
  }

  &:before {
    border-top-color: #254e70;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    animation: spin 3s linear infinite;
  }

  &:after {
    border-top-color: #fffbfe;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    animation: spin 4s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

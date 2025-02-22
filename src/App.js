import './App.css';
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
/* this is tempalte literals */
  font-size: 20px;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Section = styled.section`
  padding: 40px;
  background: papayawhip;
`;

const Button = styled.button `
  padding: 2px 12px;
  height: 40px;
  color: ${props => props.primary ? `white` : `blue`};
  border: 1px solid blue;
  background: ${props => props.primary ? `blue` : `white`};
  border-radius: 4px;
  margin-right: 10px;
`
const GreenButton = styled(Button)`
  background: green;
  borde-color: green;
`

function App() {
  return (
    <div className='container'>
    {/* <h1 className='heading-red'>This is my first react app</h1>
    <p>This is my first descpription</p> */}
    <Title>This is title H1</Title>
    <Section>This is section</Section>
    <div className='button-group'>
    <Button>Normal</Button>
    <Button primary>Primary Button</Button>
    <GreenButton primary>Green Button</GreenButton>
    </div>
    </div>
  );
}
export default App;

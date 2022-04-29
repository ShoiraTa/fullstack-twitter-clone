import Greet from './TypingProps/Greet';

function Parent() {
  const personName ={
    first: 'Shoira',
    last: 'Ta'
  }
  const names = [
    {
      first: 'Munira',
      last: 'Su'
    },
    {
      first: 'Malika',
      last: 'Mum'
    },
    {
      first: 'Kamol',
      last: 'Lar'
    },
    {
      first: 'Shoira',
      last: 'Ta'
    }
  ]
  return (
    <div className="App">
      <Greet name='Shoira' 
      messageCount={3}
      isLoggedIn={true}
      personName = {personName}
      names = {names}
      status = {"loading"}
        />
    </div>
  );
}

export default Parent;

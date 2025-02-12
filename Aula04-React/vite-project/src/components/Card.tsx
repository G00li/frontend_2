
type Props = {
  data: {
    title: string;
    description: string;
    buttonText: string;
  }
}

const Card = ({ data }: Props) => {

  const showAlert = () => {
    window.alert(`Voce clicou!`)
  }
  return (
    <div style={{ backgroundColor: 'white', display: "flex", flexDirection: "column", padding: '10px', border: '2px', borderColor: 'white', borderRadius: '10px' }}>
      <h1 style={{ color: 'black' }}>{data.title}</h1>
      <p style={{ color: 'blue' }}>{data.description}</p>

      <button
        onClick={showAlert}
        style={
          {
            backgroundColor: 'blue',
            fontFamily: "normal",
            fontSize: '20px',
            color: 'white',
            fontStyle: 'bold',
            borderRadius: '10px',
            marginTop: '20px',
            display: 'flex',
          }}>{
          data.buttonText}

      </button>
    </div>
  )
}

export default Card; 
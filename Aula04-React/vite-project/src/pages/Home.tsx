
const HomePage = () => {
  try {
    return <div>Home Page</div>;
  } catch (error) {
    console.error("Erro na HomePage:", error);
    return <div>Erro ao carregar a página</div>;
  }
};

export default HomePage;

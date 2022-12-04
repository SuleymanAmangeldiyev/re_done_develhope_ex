function Welcome({ name }) {
  return (
    <>
      <p className="welcome"> Welcome, {name}!</p>
    </>
  );
}

Welcome.defaultProps = {
  name: "Suleyman",
};

export default Welcome;

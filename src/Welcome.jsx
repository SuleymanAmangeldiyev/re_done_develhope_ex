function Welcome({ name }) {
  return (
    <>
      <p> Welcome, {name}!</p>
    </>
  );
}

Welcome.defaultProps = {
  name: "Suleyman",
};

export default Welcome;

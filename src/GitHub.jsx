import { useState, useEffect } from "react";

export default function GitHub({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((ceck) => {
        if (ceck.status !== 200) {
          setError(new Error("User not found"));
        }
        return ceck.json();
      })
      .then((json) => {
        setLoading(false);
        setData(json);
      })
      .catch((err) => {
        setError(err);
      });
  }, [username]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>The username is not found</h1>}
      {data && <h1>{data.name}</h1>}
      {data && <h2>{data.bio}</h2>}
      {data && <img src={data.avatar_url} alt="img" />}
    </div>
  );
}

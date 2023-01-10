import { useState, useEffect } from "react";

export default function useGitHub({ username = "SuleymanAmangeldiyev" }) {
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

  return { data, loading, error };
}

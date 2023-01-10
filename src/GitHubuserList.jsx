import React from "react";
import useGitHub from "./useGithubUser";

export default function GitHubuserList() {
  const { data, loading, error }  = useGitHub( "SuleymanAmangeldiyev")
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

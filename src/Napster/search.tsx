import * as client from "./client";
import NapsterAlbums from "./albums";
import { useState } from "react";

export default function NapsterSearch() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any>([]);
  const fullTextSearch = async (text: string) => {
    const results = await client.fullTextSearch(text);
    setResults(results);
  };

  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => fullTextSearch(search)}>Search</button>
      {results &&
        results.search &&
        results.search.data &&
        results.search.data.albums &&
        results.search.data.albums.length > 0 && (
          <>
            <h2>Albums</h2>
            <NapsterAlbums albums={results.search.data.albums} />
          </>
        )}
    </div>
  );
}

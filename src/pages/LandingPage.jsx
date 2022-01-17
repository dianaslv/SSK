import { useReadCypher } from "use-neo4j";

export default function LandingPage() {
  const { loading, error, records } = useReadCypher(
    "MATCH (n:Article) RETURN n LIMIT 25"
  );

  if (loading) return <div> Loading</div>;
  if (error) return <div> {error.message}</div>;

  console.log({ records });

  return <div className="App">{records}</div>;
}

import { useAsdQuery } from "@/graphql";

export default function Index() {
  const [{ data }] = useAsdQuery();
  return <div>{data?.asd ?? "Loading..."}</div>;
}

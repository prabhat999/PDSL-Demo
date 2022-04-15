import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1>This is landing page of my Blog App</h1>
      <button
        onClick={() => {
          typeof window !== "undefined" && router.push("/login");
        }}
      >
        Go to signIn Page
      </button>
    </>
  );
}

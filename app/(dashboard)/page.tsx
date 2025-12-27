import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <UserButton />
      <p>This is an authenticated route1</p>
    </>
  );
}

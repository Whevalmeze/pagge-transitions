import Inner from "@/component/Layout/Inner";
import Lorem from "@/component/Text/Lorem";

export default function Home() {
  return (
    <Inner
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Home</h1>
      <Lorem />
    </Inner>
  );
}

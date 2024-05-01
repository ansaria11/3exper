import Layout from "@/layout";
import Home from "./home/index"
import WhoWeAre from "@/components/WhoWeAre";

export default function app() {
  return (
    <>
      <Layout>
        <WhoWeAre/>
      </Layout>
    </>
  );
}

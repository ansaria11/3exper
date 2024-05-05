// JavaScript source code
import Layout from "@/layout";
import Home from "./home/index"
import blog from "@/components/Blog"
export default function app() {
  return (
    <>
      <Layout>
        <blog/>
      </Layout>
    </>
  );
}

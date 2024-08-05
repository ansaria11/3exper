import Layout from "@/layout";
import Blog from "@/components/Blog";
import AuditedBlog from "@/components/AuditedBlog";

export default function app() {
  return (
    <>
      <Layout>
        <AuditedBlog/>
      </Layout>
    </>
  );
}

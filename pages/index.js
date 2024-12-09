// pages/index.js
export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/links`);
  const data = await res.json();
  return {
    props: { links: data },
  };
}

export default function Home({ links }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Google Forms</h1>
      <div>
        <h3>Form 1</h3>
        {links.form1 ? (
          <a href={links.form1} target="_blank" rel="noopener noreferrer">
            {links.form1}
          </a>
        ) : (
          <p>No link available</p>
        )}
      </div>
      <div>
        <h3>Form 2</h3>
        {links.form2 ? (
          <a href={links.form2} target="_blank" rel="noopener noreferrer">
            {links.form2}
          </a>
        ) : (
          <p>No link available</p>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";

function AboutPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Us</h1>
      <p>
        This is the about page of our wonderful application. 
        We're here to showcase our skills and maybe sell some stuff.
      </p>
      <Link href="/">
            Back to Home
        </Link>

    </div>
  );
}

export default AboutPage;
import type { FC } from "react";
import { Link } from "@remix-run/react";

const Index: FC = () => {
  return (
    <main className="content">
      <h1>Welcome to Remix ! My Notes Page !</h1>
      <p className="cta">
        <Link to='/notes'>
          Try new Notes
        </Link>
      </p>
    </main>
  );
};

export default Index;

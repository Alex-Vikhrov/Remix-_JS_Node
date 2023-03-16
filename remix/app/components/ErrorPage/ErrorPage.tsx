import { Link } from "@remix-run/react";
import { FC } from "react";

const ErrorPage: FC<{ error: any }> = ({ error }) => {
    return (
        <main className="error">
            <h1>An error occurred !</h1>
            <p>{error.message}</p>
            <p>
                <Link to='/'>Back to Home</Link>
            </p>
        </main>
    );
};

export { ErrorPage };
import { Suspense } from "react";
import { Todo } from "./Todo.tsx";

export default function App() {
  console.log("Hello world!");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <main>
          <h1>
            <span></span>__<span></span>
          </h1>
          <p>
            Welcome to{" "}
            <strong>Ultra</strong>. This is a barebones starter for your web
            app.
          </p>
          <Suspense fallback={<div>loading...</div>}>
            <Todo todo={2}></Todo>
          </Suspense>
        </main>
      </body>
    </html>
  );
}

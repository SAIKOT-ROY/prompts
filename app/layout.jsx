import Nav from "@/components/Nav";
import "../styles/globals.css";
import Provider from "@/components/Provider";

const metadata = {
  title: "Promptopia",
  description: "Discover & share ai prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";

export const metadata = {
  title: "PromptPalooza",
  description: "Discover and share AI prompts",
};

export const revalidate = 300;

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-300">
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;

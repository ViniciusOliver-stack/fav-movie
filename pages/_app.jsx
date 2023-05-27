import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="px-8 py-4">
      <Component {...pageProps} />
    </div>
  );
}

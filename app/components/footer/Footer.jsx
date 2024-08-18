import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        {/* Your main content here */}
      </main>
      <footer className="bg-dark py-3 mt-auto">
        <div className="container text-center">
          <p className="mb-1 text-light">
            &copy; {new Date().getFullYear()} Cinepedia. All rights reserved.
          </p>
          <p className="mb-0">
            <a href="https://www.example.com" className="text-light" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="https://www.example.com" className="text-light" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

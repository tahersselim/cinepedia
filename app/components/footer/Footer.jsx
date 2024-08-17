import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-dark py-3 mt-4">
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
  );
}

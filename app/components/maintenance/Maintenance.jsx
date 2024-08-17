import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Maintenance() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 py-5">
      <Image 
        src="/maintenance.jpg" 
        alt="Maintenance" 
        width={900} 
        height={400} 
        className="img-fluid rounded" 
      />
    </div>
  );
}

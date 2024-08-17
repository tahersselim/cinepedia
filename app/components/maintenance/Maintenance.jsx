import Image from "next/image";

export default function Maintenance() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '20px 0',
        boxSizing: 'border-box',
      }}
    >
      <Image src="/maintenance.jpg" alt="Maintenance" width={900} height={400} />
    </div>
  );
}

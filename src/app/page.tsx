import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-navy">
      <div className="text-center">
        <Image
          src="/images/sapper-logo.svg"
          alt="Sapper Consulting"
          width={200}
          height={50}
          className="mx-auto mb-6"
          priority
        />
        <p className="text-xl text-cyan">
          Site under construction
        </p>
      </div>
    </div>
  );
}

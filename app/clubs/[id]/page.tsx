import ClubClient from "./ClubClient";

export async function generateStaticParams() {
  return [
    { id: 'cyber-security' },
    { id: 'code-chef' },
    { id: 'microsoft' },
  ];
}

// Next.js 15 requires awaiting params
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return <ClubClient id={id} />;
}
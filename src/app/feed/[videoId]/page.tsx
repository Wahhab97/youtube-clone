import React from "react";

interface PageProps {
  params: Promise<{ videoId: string }>;
}

const page = async ({ params }: PageProps) => {
  const { videoId } = await params;
  return <div>feed id: {videoId}</div>;
};

export default page;

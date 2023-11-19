export const getBaseURL = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://timeless-tech-server.vercel.app/api/v1"
  );
};

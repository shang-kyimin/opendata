"use client";

import { getRandomUsername } from "@/providers/queryApis";
import { useQuery } from "@tanstack/react-query";

export default function ApiBoard() {
  const link = "https://opendata-ebon.vercel.app";

  const query = useQuery({
    queryKey: ["initRUsername"],
    queryFn:  async () => await getRandomUsername({ quantity: 1 }),
    enabled: false,
  });

  return (
    <div className="space-y-1 bg-muted px-4 py-3 sm:p-4 rounded-lg flex flex-col gap-2 w-[90%] max-w-lg lg:self-stretch lg:min-h-[32rem]">
      <div className="text-xs sm:text-sm flex gap-1 md:gap-2 justify-start items-start md:items-center flex-col md:flex-row px-2">
        <p><button onClick={() => {
          query.refetch();
        }} className="bg-theme text-background px-1 py-[0.2rem] rounded-[0.5rem] sm:px-2 sm:py-1 text-[0.6rem] sm:text-xs transition-all hover:shadow-md focus-within:shadow-md">GET</button> <span className="inline sm:hidden">| https://opendata-os.vercel.app</span></p>
        <p className="hidden md:block">|</p>
        <p><span className="hidden sm:inline">{link}</span>/api/random/usernames</p>
      </div>

      <p className="relative min-h-40 h-full sm:min-h-36 flex justify-start items-start text-sm sm:text-base border-2 border-dashed rounded-lg p-2 overflow-auto lg:self-stretch">
        {(query.isLoading || query.isError || query.isSuccess) ? (
          <span></span>
        ) : (
          <span id="initMessage">Click the 'GET' button to see results</span>
        )}
        {query.isLoading && <span>Fetching data</span>}
        {query.isError && <span>{query.error.message}</span>}
        {query.isSuccess && <code className="text-sm"><pre>{JSON.stringify(query.data, null, 2)}</pre></code>}
      </p>
    </div>
  );
}



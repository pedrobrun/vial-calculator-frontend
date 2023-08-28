import { useAuth } from "@/contexts/AuthContext";
import { getCalculations } from "@/services/calculations/getCalculations";
import { saveCalculations } from "@/services/calculations/saveCalculation";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loader from "../loader";

const History = ({ operations }: { operations: string[] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - 1);
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(currentDate);
  endDate.setDate(currentDate.getDate() + 1);
  endDate.setHours(23, 59, 59, 999);

  const { jwt } = useAuth();
  const { isLoading, error, data } = useQuery<{
    operations: string[];
    _id: string;
  }>({
    queryKey: ["getCalculations", startDate, endDate],
    enabled: !!jwt,
    queryFn: () =>
      getCalculations({ start: startDate, end: endDate, jwt: jwt as string }),
  });

  return (
    <div className="flex gap-4 my-12 items-end">
      <div className="flex flex-col items-center w-full gap-2">
        <h2>Recent History</h2>
        <div className="border rounded-sm p-2 w-full overflow-auto">
          <div className="h-[150px] w-[290px] overflow-auto whitespace-nowrap">
            {operations.map((entry, index) => (
              <div className="h-[24px]" key={index}>
                <span className="opacity-30">•</span> {entry}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-2">
        <div className="flex gap-2 items-end">
          <h2>History near Date</h2>
          <input
            type="date"
            disabled={!Boolean(jwt)}
            value={currentDate.toISOString().substr(0, 10)}
            onChange={(e) =>
              setCurrentDate(
                e.target.value ? new Date(e.target.value) : new Date(),
              )
            }
            className="text-black"
          />
        </div>
        <div className="border rounded-sm p-2 w-full overflow-auto">
          <div className="h-[150px] w-[290px] overflow-auto whitespace-nowrap">
            {jwt ? (
              isLoading ? (
                <Loader />
              ) : error ? (
                <div>{error.toString()}</div>
              ) : data && data.operations.length ? (
                data.operations.map((entry, index) => (
                  <div className="h-[24px]" key={index}>
                    <span className="opacity-30">•</span> {entry}
                  </div>
                ))
              ) : (
                <div className="opacity-50">No operations</div>
              )
            ) : (
              <div className="opacity-50">
                Sign up or Sign in to see your saved <br /> history.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

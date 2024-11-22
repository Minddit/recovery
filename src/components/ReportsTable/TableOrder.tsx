import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

import { columns } from "@/components/ReportsTable/columns";
import { DataTable } from "@/components/ReportsTable/data-table";
import { taskSchema } from "@/components/data/schema";

export const metadata = {
  title: "Orders",
  description: "A Order and issue tracker build using Order Table."
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/components/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());
  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      <div className="md:hidden"></div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight dark:text-white">
              Welcome
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your orders for this month!
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}

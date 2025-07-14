export const Table = () => {
  return (
    <table className="mt-6 w-full table-auto border-collapse rounded-lg border">
      <thead>
        <tr className="bg-gray-100 dark:bg-gray-800">
          <th className="border-b px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
            Header 1
          </th>
          <th className="border-b px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
            Header 2
          </th>
          <th className="border-b px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
            Header 3
          </th>
        </tr>
      </thead>
    </table>
  );
};

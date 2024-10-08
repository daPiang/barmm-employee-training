"use server";
import User, { getAllUserData } from "@/lib/models/User";
import TableListDisplay from "@/components/employees/employee-table";
import { Op } from "sequelize";
import UserItem from "@/components/employees/user-item";
import EmployeeTable from "@/components/employees/employee-table";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  // Fetch data from the User model with the provided query
  const dbData = await getAllUserData(query);
  function getDataForPage(pageNumber: number, data: any[]) {
    const startIndex = (pageNumber - 1) * 5;
    const endIndex = startIndex + 5;
    return data.slice(startIndex, endIndex);
  }

  const headers = [
    "Photo",
    "First Name",
    "Last Name",
    "Department",
    "Title",
    "Action",
  ];
  // Return the EmployeeList component with the formatted data
  return (
    <EmployeeTable
      tableHeaders={headers}
      dbData={dbData}
      currentPage={currentPage}
    >
      <UserItem dbData={getDataForPage(currentPage, dbData)}></UserItem>
    </EmployeeTable>
  );
}

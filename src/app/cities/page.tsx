import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CalendarBox from "@/components/CalenderBox";
import Cities from "@/components/Tables/Cities";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_META_TITLE || "Default Title",
  description: process.env.NEXT_PUBLIC_META_DESCRIPTION || "Default Description",
  // other metadata
};

const CitiesPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Cities" />

        <Cities />
      </div>
    </DefaultLayout>
  );
};

export default CitiesPage;

import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        src="/images/services/tax-services.webp"
        alt="logo"
        width={180}
        height={40}
        className="w-full rounded-md dark:hidden"
      />
    ),
    title: "Tax Services",
    paragraph:
      "Let us handle preparing your individual or small business returns. Whether you're an LLC or Corporation, we are qualified to advise on filings with all complexities. Call now to set up an appointment.",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/services/tax-attorney.webp"
        alt="logo"
        width={180}
        height={40}
        className="w-full rounded-md dark:hidden"
      />
    ),
    title: "Tax Attorney Services",
    paragraph:
      "Have a qualified CPA represent you to the IRS or New Jersey and solve your tax problem. Find out how our Tax Attorney services can assist you in resolving your tax matter. Contact us for more information. ",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/services/quickbooks.webp"
        alt="logo"
        width={180}
        height={40}
        className="w-full rounded-md dark:hidden"
      />
    ),
    title: "QuickBooks Training",
    paragraph:
      "Urgently need profit and loss statement for loan review? We provide services for financial statements preparation and managing your records on QuickBooks. Reserve a consultation to have us set up and manage your bookkeeping software.",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/services/formation.webp"
        alt="logo"
        width={180}
        height={40}
        className="w-full rounded-md dark:hidden"
      />
    ),
    title: "Business Consulting Services",
    paragraph:
      "If you're starting a new business or closing an old one, We'd love to help. By providing an array of services including business formation and payroll, we can help your entity start on the right foot. Reach us to set up an appointment.",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/services/auditing.webp"
        alt="logo"
        width={180}
        height={40}
        className="w-full rounded-md dark:hidden"
      />
    ),
    title: "Audit and Assurance Services",
    paragraph:
      "Whether your bank is requiring a financial review or management is requesting a financial audit, we can help. We provide an array of assurance services specializing in startups, Homeowner associations, and ERISA. ",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/services/managment.webp"
        alt="logo"
        width={180}
        height={40}
        className="w-full rounded-md dark:hidden"
      />
    ),
    title: "Management Advisory",
    paragraph:
      " If you're undergoing a merger or would like to restructure your business, we can help. Hire a part-time executive with our CFO services to maintain and oversee important functions and provide valuable insight on internal controls. ",
  },
];
export default featuresData;

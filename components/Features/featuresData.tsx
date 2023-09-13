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
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
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
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
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
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
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
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
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
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
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
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
];
export default featuresData;

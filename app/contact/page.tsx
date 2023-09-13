import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We understand accounting needs vary for everyone. Use our form to give
        us more insight on how we can help you. Whether a one time engagement or
        an ongoing need, we'd love to quote you appropriately."
      />

      <Contact />
    </>
  );
};

export default ContactPage;

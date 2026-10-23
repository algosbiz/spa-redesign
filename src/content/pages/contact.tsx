import PageBanner from "@/components/sections/PageBanner";
import ContactSection from "@/components/sections/ContactSection";

/** /contact/ — the live page: banner, the contact rail (details + WhatsApp form) and the map card. */
export default function ContactPage() {
  return (
    <div className="page-wrapper lh p-contact">
      <PageBanner
        subTitle="Ready When You Are"
        titleSpan="Book Your Spa"
        title="Experience in Seminyak"
        // Under the H1 (copy rewrite, 15 Oct).
        text="Spa Bali Moon is at Jl. Pangkung Sari No. 30, Petitenget, Seminyak. Open daily 9am–11pm. Message us on WhatsApp at +62 878-6317-5144 to book, or ask about treatments and packages."
        image="/images/banners/contact.webp"
        // Phones: the whole photo above the long banner text (owner, 22 Oct).
        mobilePhoto="/images/banners/contact-wide-sm.webp"
        imagePosition="40% 50%"
      />
      <ContactSection
        formSubTitle="Get in Touch"
        formTitle="Send Us a Message"
        infoSubTitle="Questions or Bookings"
        infoTitle="Let’s Arrange Your Visit"
        infoText="Message us on WhatsApp to check availability, ask about a treatment or package, or book at our Seminyak spa or at your villa or hotel."
        contactItems={[
          {
            icon: "fa-phone-plus",
            title: "WhatsApp Message",
            href: "https://wa.me/6287863175144",
            text: "+62 878-6317-5144",
          },
          {
            icon: "fa-location-dot",
            title: "Visit us",
            text: "Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Kerobokan, Kuta Utara, Badung, Bali 80361",
          },
          // Hours confirmed as 9am–11pm, as on every other page (copy rewrite, 15 Oct; was 22:00).
          { icon: "fa-clock", title: "Opening Times", text: "Open daily 9am–11pm" },
        ]}
      />
    </div>
  );
}

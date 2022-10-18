import {
  CustomNavbar,
  Header,
  Hr,
  SectionsLeft,
  SectionRight,
  FAQs,
  Footer,
  TV,
  MOBILE_IMAGE,
  APPLE_TV,
  KIDS,
} from "..";
import { secData1, secData2, secData3, secData4 } from "./homeData";
import { Stack } from "react-bootstrap";

const HomePage = () => {
  return (
    <Stack>
      <div className="head">
        <CustomNavbar />
        <Header />
      </div>

      <Hr />

      <div style={{ backgroundColor: "black" }}>
        <SectionsLeft
          title={secData1.title}
          description={secData1.description}
          image={TV}
        />

        <Hr />

        <SectionRight
          title={secData2.title}
          description={secData2.description}
          image={MOBILE_IMAGE}
        />

        <Hr />

        <SectionsLeft
          title={secData3.title}
          description={secData3.description}
          image={APPLE_TV}
        />

        <Hr />

        <SectionRight
          title={secData4.title}
          description={secData4.description}
          image={KIDS}
        />

        <Hr />

        <FAQs />

        <Hr />

        <Footer />
      </div>
    </Stack>
  );
};

export default HomePage;

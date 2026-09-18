import BaseLayout from "./components/BaseLayout";
import { fontSize, screens, spacing } from "./theme";
import Header from "./components/Header";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
import Footer from "./components/Footer";
import React from "react";
import Link from "./components/Link";
import Paragraph from "./components/Paragraph";

const style = `
  .p > * {
    font-size: ${fontSize.base}px !important;
  }

  @media (min-width:${screens.xs}) {
    .p > * {
      font-size: ${fontSize.md}px !important;
    }
  }
`;

export const PostFagdag2026: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Paragraph paddingBottom={spacing.s8}>Hei,</Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Takk for at du har registrert deg til vårt fagwebinar.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Hvis du ikke fikk sett webinaret live, eller har lyst å se det en
              gang til, finner du det her:
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              <Link href="https://zoom.us/rec/share/qkfeuO7zg65t0rZJMqkfiyotmMbshpUnk0J1XgslKpinA_9dKwWcNUnODeAyNQxu.KUSmj6VS8MW6iXP2">
                https://zoom.us/rec/share/qkfeuO7zg65t0rZJMqkfiyotmMbshpUnk0J1XgslKpinA_9dKwWcNUnODeAyNQxu.KUSmj6VS8MW6iXP2
              </Link>
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>Passkode: s2&trjY*</Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Tilgjengelig i 7 dager.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Beste hilsen, PMOS Norge
            </Paragraph>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(PostFagdag2026 as unknown as { subject: string }).subject =
  "Lenke til webinar";

export default PostFagdag2026;

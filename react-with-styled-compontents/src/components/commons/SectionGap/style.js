import styled from "styled-components";

export const SectionGapStyle = styled.section`
  padding: 140px 0;
  @media (max-width: 1199px) {
    padding: 80px 0;
  }
  .about_img {
    position: relative;
    right: 220px;
  }

  .section_gap_top {
    padding-top: 140px;
    @media (max-width: 1199px) {
      padding-top: 80px;
    }
  }

  .section_gap_bottom {
    padding-bottom: 140px;
    @media (max-width: 1199px) {
      padding-bottom: 80px;
    }
  }
`;

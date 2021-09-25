import React from "react";
import ContentContainerWrapper from "./content-container.styled";


const ContentContainerView: React.FC = (props) => (
  <ContentContainerWrapper>
    {props.children}
  </ContentContainerWrapper>
);

export default ContentContainerView;

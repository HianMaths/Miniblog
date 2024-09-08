import React from "react";
import { ContainerImage, ImageStyled } from "./StyledBanner";

export function Banner(props) {
  const { imageUrl } = props;
  return (
    <>
      <ContainerImage>
        <ImageStyled src={imageUrl} alt="Que os jogos comecem" />
      </ContainerImage>
    </>
  );
}

// Moda antiga, jeito torto de fazer
// export class Banner extends React.Component {
//   render() {
//     const { imageUrl } = this.props;
//     return (
//       <>
//         <ContainerImage>
//           <img src={imageUrl} alt="Que os jogos comecem" />
//         </ContainerImage>
//       </>
//     );
//   }
// }

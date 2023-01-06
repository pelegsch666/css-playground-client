import { useEffect, useState } from "react";
import styled from "styled-components";
import defaultTheme from "theme/defaultTheme";


function getTheStyles(shapeProperties, defaultProperties) {
  let shapeStyles = {};
  for (const prop of shapeProperties) {
    const propKey = Object.keys(prop)[0]; // red
    const propValue = prop[propKey].value;
    shapeStyles = { ...shapeStyles, [propKey]: propValue };
  }
  const allProperties = { ...shapeStyles, ...defaultProperties };
  return allProperties;
}
const StyledShapeContainer = styled.div`
${(props) => props.theme.breakpoints.down('sm')}{
	
	transform: scale(0.7);
}
`

export default function Shape({
  shapeProperties,
  defaultProperties,
  renderingKey,
}) {
  const [styles, setStyles] = useState({});
  useEffect(() => {
    setStyles(getTheStyles(shapeProperties, defaultProperties));
  }, [shapeProperties, defaultProperties]);
  switch (renderingKey) {
    case "Flex": {
      return (
        <StyledShapeContainer theme={defaultTheme} style={styles}>
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "salmon",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            2
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "navy",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            3
          </div>
        </StyledShapeContainer>
      );
    }
    case "Box Model": {
      return (
        <StyledShapeContainer theme={defaultTheme} style={styles}>
          <div
            style={{ width: "100%", height: "100%", backgroundColor: "navy" }}
          ></div>
        </StyledShapeContainer>
      );
    }
    case "Margin": {
      return (
        <StyledShapeContainer
        theme={defaultTheme}  
		style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "salmon",
              }}
            ></div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "salmon",
              }}
            ></div>
            <div style={styles}></div>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "salmon",
              }}
            ></div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "salmon",
              }}
            ></div>
          </div>
        </StyledShapeContainer>
      );
    }
    case "Rgb": {
      const { red: r, green: g, blue: b, width, height, border } = styles;
      return (
        <StyledShapeContainer
        theme={defaultTheme}  
		style={{
            width,
            height,
            border,
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
          }}
        ></StyledShapeContainer>
      );
    }
    default: {
      return <div style={styles}></div>;
    }
  }
}

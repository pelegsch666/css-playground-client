 const propertiesExplanations = {
  width: {
    description: "The width of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/width"],
  },
  height: {
    description: "The height of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/height"],
  },
  borderRadius: {
    description: "The border radius of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"],
  },
  flexDirection: {
    description: "The flex direction of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction"],
  },
  justifyContent: {
    description: "The justify content of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"],
  },
  alignItems: {
    description: "The align items of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"],
  },
  margin: {
    description: "The margin of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/margin"],
  },
  marginTop: {
    description: "The top margin of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top"],
  },
  marginBottom: {
    description: "The bottom margin of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom"],
  },
  marginLeft: {
    description: "The left margin of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left"],
  },
  marginRight: {
    description: "The right margin of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right"],
  },

  paddingLeft: {
    description: "The padding of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left"],
  },
  paddingRight: {
    description: "The padding of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right"],
  },
  paddingTop: {
    description: "The padding of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top"],
  },
  paddingBottom: {
    description: "The padding of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom"],
  },
  red: {
    description: "The red color of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb"],
  },
  green: {
    description: "The green color of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb"],
  },
  blue: {
    description: "The blue color of the element",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb"],
  },
};

export default function getPropertyExplanation(propName) {
    return propertiesExplanations[propName];
}

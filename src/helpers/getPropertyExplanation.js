 const propertiesExplanations = {
  width: {
    description: "The width CSS property sets an element's width.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/width"],
  },
  height: {
    description: "The height CSS property specifies the height of an element.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/height"],
  },
  borderRadius: {
    description: "The border-radius CSS property rounds the corners of an element's outer border edge.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"],
  },
  flexDirection: {
    description: "The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction"],
  },
  justifyContent: {
    description: `The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.`,
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"],
  },
  alignItems: {
    description: "The CSS align-items property sets the align-self value on all direct children as a group.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"],
  },
  margin: {
    description: "The margin CSS shorthand property sets the margin area on all four sides of an element.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/margin"],
  },
  marginTop: {
    description: "The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top"],
  },
  marginBottom: {
    description: "The margin-bottom CSS property sets the margin area on the bottom of an element. ",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom"],
  },
  marginLeft: {
    description: "The margin-left CSS property sets the margin area on the left side of an element. ",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left"],
  },
  marginRight: {
    description: "The margin-right CSS property sets the margin area on the right side of an element. ",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right"],
  },

  paddingLeft: {
    description: "The padding-left CSS property sets the width of the padding area to the left of an element.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left"],
  },
  paddingRight: {
    description: "The padding-right CSS property sets the width of the padding area on the right of an element.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right"],
  },
  paddingTop: {
    description: "The padding-top CSS property sets the height of the padding area on the top of an element.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top"],
  },
  paddingBottom: {
    description: "The padding-bottom CSS property sets the height of the padding area on the bottom of an element.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom"],
  },
  red: {
    description: "The rgb() functional notation expresses a color according to its red, green, and blue components. An optional alpha component represents the color's transparency.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb"],
  },
  green: {
    description: "The rgb() functional notation expresses a color according to its red, green, and blue components. An optional alpha component represents the color's transparency.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb"],
  },
  blue: {
    description: "The rgb() functional notation expresses a color according to its red, green, and blue components. An optional alpha component represents the color's transparency.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb"],
  },
};

export default function getPropertyExplanation(propName) {
    return propertiesExplanations[propName];
}

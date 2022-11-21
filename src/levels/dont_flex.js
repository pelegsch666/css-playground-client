import getRandomItemFromArray from "helpers/getRandomItemFromArray";

const dont_flex = {
  levelName: "Dont Flex",
  levelId: 2,
  renderingKey: "Flex",
  defaultProperties: {
    display: "flex",
    width: 200,
    height: 200,
    backgroundColor: "#aaffaa",
  },
  targetProperties: {
    justifyContent: {
      items: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],

      get value() {
        return this.value;
      },
    },

    alignItems: {
      items: ["flex-start", "flex-end", "center", "stretch", "baseline"],
      get value() {
        return this.value;
      },
    },

    flexDirection: {
      items: ["row", "row-reverse", "column", "column-reverse"],
      get value() {
        return this.value;
      },
    },
  },
  userProperties: {
    justifyContent: {
      items: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      value: '',
      get value() {
        return getRandomItemFromArray(this.items);
      },
	  set value(newValue) {
		 this.value = newValue
	  }
    },

    alignItems: {
      items: ["flex-start", "flex-end", "center", "stretch", "baseline"],
      get value() {
        return this.value;
      },
    },

    flexDirection: {
      items: ["row", "row-reverse", "column", "column-reverse"],
      get value() {
        return getRandomItemFromArray(this.items);
      },
    },
  },
};

export default dont_flex;

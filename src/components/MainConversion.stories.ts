import { Story, Meta } from "@storybook/vue3";
import MainConversion from "./MainConversion.vue"; // Ensure this path points to the actual MainConversion component

// Component properties inferred automatically
type ComponentProps = Parameters<typeof MainConversion>[0];

export default {
  title: "Example/MainConversion",
  component: MainConversion,
} as Meta;

const Template: Story<ComponentProps> = (args: any) => ({
  components: { MainConversion },
  setup() {
    return { args };
  },
  template: '<MainConversion v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

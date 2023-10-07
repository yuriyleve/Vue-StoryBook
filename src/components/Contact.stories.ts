import { Story, Meta } from "@storybook/vue3";
import Contact from "./Contact.vue"; // Ensure this path points to the actual Contact component

// Component properties inferred automatically
type ComponentProps = Parameters<typeof Contact>[0];

export default {
  title: "Example/Contact",
  component: Contact,
  argTypes: {
    close: { action: "closed" },
  },
} as Meta;

const Template: Story<ComponentProps> = (args: any) => ({
  components: { Contact },
  setup() {
    return { args };
  },
  template: '<Contact v-bind="args" @close="args.close" />',
});

export const Default = Template.bind({});
Default.args = {};

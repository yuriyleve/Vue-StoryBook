import type { Meta, StoryObj } from "@storybook/vue3";
import Contact from "./Contact.vue";

const meta = {
  title: "Components/Contact",
  component: Contact,
  argTypes: {},
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

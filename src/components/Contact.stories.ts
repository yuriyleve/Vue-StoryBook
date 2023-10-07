import type { Meta, StoryObj } from "@storybook/vue3";
import Contact from "./Contact.vue";

const meta = {
  title: "Example/Contact",
  component: Contact,
  tags: ["autodocs"],
  argTypes: {
    close: { action: "closed" },
  },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

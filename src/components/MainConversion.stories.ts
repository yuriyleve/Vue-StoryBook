import type { Meta, StoryObj } from "@storybook/vue3";
import MainConversion from "./MainConversion.vue";

const meta = {
  title: "Components/MainConversion",
  component: MainConversion,
  argTypes: {},
} satisfies Meta<typeof MainConversion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

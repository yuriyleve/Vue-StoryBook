import type { Meta, StoryObj } from "@storybook/vue3";
import MainConversion from "./MainConversion.vue";

const meta = {
  title: "Example/MainConversion",
  component: MainConversion,
  argTypes: {},
} satisfies Meta<typeof MainConversion>;

export default meta;
type Story = StoryObj<typeof meta>;

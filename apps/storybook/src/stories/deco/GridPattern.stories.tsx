import type { Meta, StoryObj } from "@storybook/react";
import { GridPattern } from "@repo/ui/components/deco/grid-pattern";

const meta = {
  title: "Deco/GridPattern",
  component: GridPattern,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "number" },
    },
  },
  args: {
    size: 20,
  },
} satisfies Meta<typeof GridPattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RightTop: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import { HoverBorderGradient } from "@repo/ui/components/deco/hover-border-gradient";

const meta = {
  title: "Deco/HoverBorderGradient",
  component: HoverBorderGradient,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    duration: {
      control: {
        type: "number",
      },
    },
    clockwise: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    duration: 1000,
    clockwise: true,
  },
} satisfies Meta<typeof HoverBorderGradient>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    children: <div className="h-16 w-40 bg-background">Hello, World!</div>,
  },
};

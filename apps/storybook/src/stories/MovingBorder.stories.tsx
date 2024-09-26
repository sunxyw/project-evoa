import type { Meta, StoryObj } from "@storybook/react";
import { MovingBorder } from "@repo/ui/components/moving-border";

const meta = {
  title: "MovingBorder",
  component: MovingBorder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rounded: {
      options: ["sm", "default", "md", "lg", "xl", "2xl", "3xl", "full"],
      control: { type: "radio" },
    },
    duration: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof MovingBorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    rounded: "3xl",
    duration: 2000,
    children: <div className="h-16 w-40 bg-background">Hello, World!</div>,
  },
};

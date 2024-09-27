import type { Meta, StoryObj } from "@storybook/react";
import { FlipWords } from "@repo/ui/components/deco/flip-words";

const meta = {
  title: "Deco/FilpWords",
  component: FlipWords,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    words: {
      control: { type: "object" },
    },
    duration: {
      control: { type: "number" },
    },
  },
  args: {
    duration: 3000,
  },
} satisfies Meta<typeof FlipWords>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    words: ["beautiful", "amazing", "wonderful"],
  },
  render: ({ words }) => (
    <div className="text-4xl">
      The world is <FlipWords words={words} />
    </div>
  ),
};

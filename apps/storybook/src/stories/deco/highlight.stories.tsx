import { Highlight } from "@repo/ui/components/deco/highlight";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Deco/Highlight",
  component: Highlight,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Highlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: () => (
    <div className="text-4xl">
      Software is not manufactured in the classical sense; it is{" "}
      <Highlight>developed or engineered</Highlight>.
    </div>
  ),
};

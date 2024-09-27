import type { Meta, StoryObj } from "@storybook/react";
import { TextGenerateEffect } from "@repo/ui/components/deco/text-generate-effect";

const meta = {
  title: "Deco/TextGenerateEffect",
  component: TextGenerateEffect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    words: {
      control: {
        type: "string",
      },
    },
    filter: {
      control: {
        type: "boolean",
      },
    },
    duration: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    filter: false,
    duration: 500,
  },
} satisfies Meta<typeof TextGenerateEffect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    words:
      "Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows",
  },
};

export const WithFilter: Story = {
  args: {
    words:
      "Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows",
    filter: true,
  },
};

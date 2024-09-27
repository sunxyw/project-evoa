import type { Meta, StoryObj } from "@storybook/react";
import { MultiStepLoader } from "@repo/ui/components/multi-step-loader";

const meta = {
  title: "MultiStepLoader",
  component: MultiStepLoader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    loadingStates: {
      control: {
        type: "object",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
    duration: {
      control: {
        type: "number",
      },
    },
    loop: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    loading: true,
    duration: 2000,
    loop: true,
  },
} satisfies Meta<typeof MultiStepLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    loadingStates: [
      {
        text: "Buying a condo",
      },
      {
        text: "Travelling in a flight",
      },
      {
        text: "Meeting Tyler Durden",
      },
      {
        text: "He makes soap",
      },
      {
        text: "We goto a bar",
      },
      {
        text: "Start a fight",
      },
      {
        text: "We like it",
      },
      {
        text: "Welcome to F**** C***",
      },
    ],
  },
};

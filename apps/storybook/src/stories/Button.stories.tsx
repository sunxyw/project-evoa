import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@repo/ui/components/button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
        "light",
        "dimmed",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "radio" },
    },
    decoration: {
      options: ["default", "glow"],
      control: { type: "radio" },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    children: "Light",
  },
};

export const Dimmed: Story = {
  args: {
    variant: "dimmed",
    children: "Dimmed",
  },
};

export const Icon: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: "🚀",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "default",
    children: (
      <>
        <span className="mr-2 size-4">🚀</span> Login with Email
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    variant: "default",
    disabled: true,
    children: "Loading...",
  },
};

export const Glow: Story = {
  args: {
    variant: "light",
    decoration: "glow",
    children: "Glow",
  },
};

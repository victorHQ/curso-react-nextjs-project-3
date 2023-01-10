import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          quaerat aspernatur deleniti harum rerum perferendis, modi expedita?
          Laborum ut veniam inventore consectetur voluptates fugit excepturi
          aperiam? Eius voluptatum magnam excepturi.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};

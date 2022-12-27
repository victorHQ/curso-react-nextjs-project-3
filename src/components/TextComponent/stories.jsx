import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Ipsam quo animi, aperiam molestiae nostrum, quisquam voluptatem
    laborum numquam distinctio eius laudantium temporibus repudiandae ad.
    Error ipsam explicabo eveniet minima magni.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};

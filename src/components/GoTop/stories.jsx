import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim deserunt
        suscipit, eveniet ipsam consequuntur dolorum harum earum beatae facere
        porro quo, veniam iure sapiente quod. Dolor quas eius atque vero.
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim deserunt
        suscipit, eveniet ipsam consequuntur dolorum harum earum beatae facere
        porro quo, veniam iure sapiente quod. Dolor quas eius atque vero.
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim deserunt
        suscipit, eveniet ipsam consequuntur dolorum harum earum beatae facere
        porro quo, veniam iure sapiente quod. Dolor quas eius atque vero.
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim deserunt
        suscipit, eveniet ipsam consequuntur dolorum harum earum beatae facere
        porro quo, veniam iure sapiente quod. Dolor quas eius atque vero.
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim deserunt
        suscipit, eveniet ipsam consequuntur dolorum harum earum beatae facere
        porro quo, veniam iure sapiente quod. Dolor quas eius atque vero.
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim deserunt
        suscipit, eveniet ipsam consequuntur dolorum harum earum beatae facere
        porro quo, veniam iure sapiente quod. Dolor quas eius atque vero.
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim deserunt
        suscipit, eveniet ipsam consequuntur dolorum harum earum beatae facere
        porro quo, veniam iure sapiente quod. Dolor quas eius atque vero.
      </p>
      <GoTop {...args} />
    </div>
  );
};

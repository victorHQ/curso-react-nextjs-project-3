import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a rel="nofollow" href="http://github.com/victorHQ" target="_blank">Feito com <span class="heart">❤</span> por Victor Hugo</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};

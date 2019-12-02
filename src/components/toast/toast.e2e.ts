import { newE2EPage } from '@stencil/core/testing';

describe('wcpl-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wcpl-toast></wcpl-toast>');

    const element = await page.find('wcpl-toast');
    expect(element).toHaveClass('hydrated');
  });
});

import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'wcpl-fader',
  styleUrl: 'fader.scss',
  shadow: true
})
export class Fader {

  @Prop() isActive: boolean = false;
  @Prop() inDelay: string = '0ms';
  @Prop() inDuration: string = '150ms';
  @Prop() inEasingEffect: string = 'ease';
  @Prop() outDelay: string = '0ms';
  @Prop() outDuration: string = '150ms';
  @Prop() outEasingEffect: string = 'ease';

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'wcpl-toast',
  styleUrl: 'toast.scss',
  shadow: true
})
export class Toast {

  @Prop({
    reflect: true,
  }) open: boolean;

  private closeToast() {
    this.open = false;
  }

  render() {
    const open = this.open;

    return (
      <Host>
        <div class={`toast ${open ? 'is-active' : ''}`} role={`${open ? 'alert' : 'null'}`}>
          <div class="toast__figure" onClick={this.closeToast.bind(this)}>
            <slot name="toast-figure"></slot>
          </div>
          <div class="toast__bd">
            <slot name="toast-bd"></slot>
          </div>
        </div>
      </Host>
    );
  }

}

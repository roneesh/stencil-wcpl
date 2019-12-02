import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

@Component({
  tag: 'wcpl-drawer',
  styleUrl: 'drawer.scss',
  shadow: true
})
export class Drawer {

  @Prop({ mutable: true }) active: boolean = false;
  @Prop({

  }) image: string;
  @Prop() flush: boolean = false;
  @Prop() error: boolean = false;
  @Event({
    eventName: 'drawerOpened',
  }) onOpen: EventEmitter<boolean>;
  @Event({
    eventName: 'drawerClosed',
    composed: false
  }) onClose: EventEmitter<boolean>;

  private handleClick() {
    const newActiveState = !this.active;
    newActiveState ?
      this.onOpen.emit(true) :
      this.onClose.emit(true);
    this.active = newActiveState;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'drawer': true,
            'is-active': this.active,
            'is-flush': this.flush,
            'has-error': this.error,
          }}
          tabIndex={0}
          role="tablist">
            <button
              class="drawer__trigger"
              aria-expanded={this.active}
              role="tab"
              onClick={this.handleClick.bind(this)}>
                <span class="drawer__trigger__hd">
                  <span class="drawer__trigger__hd__title drawer__trigger__hd__title--solo">
                    <slot name="drawer-hd"></slot>
                  </span>
                  <span class="drawer__trigger__icon">X</span>
                </span>
            </button>
            <div class="drawer__box"
            role="tabpanel"
            tabindex="-1">
            <div class="drawer__box__bd">
              <slot name="drawer-bd"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}

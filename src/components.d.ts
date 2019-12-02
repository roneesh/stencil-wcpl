/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface WcplDrawer {
    'active': boolean;
    'error': boolean;
    'flush': boolean;
    'image': string;
  }
  interface WcplFader {
    'inDelay': string;
    'inDuration': string;
    'inEasingEffect': string;
    'isActive': boolean;
    'outDelay': string;
    'outDuration': string;
    'outEasingEffect': string;
  }
  interface WcplToast {
    'open': boolean;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLWcplDrawerElement extends Components.WcplDrawer, HTMLStencilElement {}
  var HTMLWcplDrawerElement: {
    prototype: HTMLWcplDrawerElement;
    new (): HTMLWcplDrawerElement;
  };

  interface HTMLWcplFaderElement extends Components.WcplFader, HTMLStencilElement {}
  var HTMLWcplFaderElement: {
    prototype: HTMLWcplFaderElement;
    new (): HTMLWcplFaderElement;
  };

  interface HTMLWcplToastElement extends Components.WcplToast, HTMLStencilElement {}
  var HTMLWcplToastElement: {
    prototype: HTMLWcplToastElement;
    new (): HTMLWcplToastElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'wcpl-drawer': HTMLWcplDrawerElement;
    'wcpl-fader': HTMLWcplFaderElement;
    'wcpl-toast': HTMLWcplToastElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface WcplDrawer {
    'active'?: boolean;
    'error'?: boolean;
    'flush'?: boolean;
    'image'?: string;
    'onDrawerClosed'?: (event: CustomEvent<boolean>) => void;
    'onDrawerOpened'?: (event: CustomEvent<boolean>) => void;
  }
  interface WcplFader {
    'inDelay'?: string;
    'inDuration'?: string;
    'inEasingEffect'?: string;
    'isActive'?: boolean;
    'outDelay'?: string;
    'outDuration'?: string;
    'outEasingEffect'?: string;
  }
  interface WcplToast {
    'open'?: boolean;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
    'wcpl-drawer': WcplDrawer;
    'wcpl-fader': WcplFader;
    'wcpl-toast': WcplToast;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'wcpl-drawer': LocalJSX.WcplDrawer & JSXBase.HTMLAttributes<HTMLWcplDrawerElement>;
      'wcpl-fader': LocalJSX.WcplFader & JSXBase.HTMLAttributes<HTMLWcplFaderElement>;
      'wcpl-toast': LocalJSX.WcplToast & JSXBase.HTMLAttributes<HTMLWcplToastElement>;
    }
  }
}


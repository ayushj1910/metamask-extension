import React from 'react';
import type { BoxProps } from '../../ui/box/box.d';
import {
  FontWeight,
  FontStyle,
  TextVariant,
  TextAlign,
  TextTransform,
  OverflowWrap,
  TextColor,
  Color,
} from '../../../helpers/constants/design-system';

export enum TextDirection {
  LeftToRight = 'ltr',
  RightToLeft = 'rtl',
  Auto = 'auto',
}

/**
 * The InvisibleCharacter is a very useful tool if you want to make sure a line of text
 * takes up vertical space even if it's empty.
 */
export const InvisibleCharacter = '\u200B';

export enum ValidTag {
  Dd = 'dd',
  Div = 'div',
  Dt = 'dt',
  Em = 'em',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  Li = 'li',
  P = 'p',
  Span = 'span',
  Strong = 'strong',
  Ul = 'ul',
  Label = 'label',
  Input = 'input',
  Header = 'header',
}

export interface TextProps extends BoxProps {
  /**
   * The text content of the Text component
   */
  children: React.ReactNode;
  /**
   * The variation of font styles including sizes and weights of the Text component
   * Possible values:
   * `displayMd` large screen: 48px / small screen: 32px,
   * `headingLg` large screen: 32px / small screen: 24px,
   * `headingMd` large screen: 24px / small screen: 18px,
   * `headingSm` large screen: 18px / small screen: 16px,
   * `bodyLgMedium` large screen: 18px / small screen: 16px,
   * `bodyMd` large screen: 16px / small screen: 14px,
   * `bodyMdBold` large screen: 16px / small screen: 14px,
   * `bodySm` large screen: 14px / small screen: 12px,
   * `bodySmBold` large screen: 14px / small screen: 12px,
   * `bodyXs` large screen: 12px / small screen: 10px,
   * `inherit`
   */
  variant?: TextVariant;
  /**
   * The color of the Text component Should use the COLOR object from
   * ./ui/helpers/constants/design-system.js
   */
  color?: TextColor | Color;
  /**
   * The font-weight of the Text component. Should use the FontWeight enum from
   * ./ui/helpers/constants/design-system.js
   */
  fontWeight?: FontWeight;
  /**
   * The font-style of the Text component. Should use the FontStyle enum from
   * ./ui/helpers/constants/design-system.js
   */
  fontStyle?: FontStyle;
  /**
   * The textTransform of the Text component. Should use the TextTransform enum from
   * ./ui/helpers/constants/design-system.js
   */
  textTransform?: TextTransform;
  /**
   * The text-align of the Text component. Should use the TextAlign enum from
   * ./ui/helpers/constants/design-system.js
   */
  textAlign?: TextAlign;
  /**
   * Change the dir (direction) global attribute of text to support the direction a language is written
   * Possible values: `LEFT_TO_RIGHT` (default), `RIGHT_TO_LEFT`, `AUTO` (user agent decides)
   */
  textDirection?: TextDirection;
  /**
   * The overflow-wrap of the Text component. Should use the OverflowWrap enum from
   * ./ui/helpers/constants/design-system.js
   */
  overflowWrap?: OverflowWrap;
  /**
   * Used for long strings that can be cut off...
   */
  ellipsis?: boolean;
  /**
   * Changes the root html element tag of the Text component.
   */
  as?: ValidTag;
  /**
   * Additional className to assign the Text component
   */
  className?: string;
}

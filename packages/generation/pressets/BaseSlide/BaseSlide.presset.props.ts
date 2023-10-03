import { PrimitiveSlideProps } from '@tok/generation/pressets/PrimitiveSlide';

export type BaseSlidePressetProps = PrimitiveSlideProps & {
  title: string;

  description: string;

  extends?: 'slide';
};

export const BaseSlidePressetDefaultProps = {
  title: 'Title',
  description: 'Description',
  button: 'Button',
  textAlign: 'left',
} as const;

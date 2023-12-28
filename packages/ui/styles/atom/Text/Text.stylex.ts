import * as stylex from '@stylexjs/stylex'
import { fontSize } from '@/styles/common'

type PossibleAs =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'b'
  | 'i'
  | 'span'
  | 'label'
  | 'strong'

type PossibleVariant =
  | 'title-xl'
  | 'title-lg'
  | 'title-md'
  | 'title-sm'
  | 'p-large'
  | 'p-base'
  | 'p-small'

const defaultVariant: (as: PossibleAs | undefined) => PossibleVariant = (
  as,
) => {
  switch (as) {
    case 'h1':
      return 'title-xl'
    case 'h2':
      return 'title-lg'
    case 'h3':
      return 'title-md'
    case 'h4':
      return 'title-sm'
    default:
      return 'p-base'
  }
}

const styles = stylex.create({
  fontSize: (as) => ({
    'font-size': fontSize[defaultVariant(as)],
    width: '100%',
    margin: 0,
  }),
})

const Text = (as: PossibleAs | undefined) => stylex.props(styles.fontSize(as))

export default Text

import local from 'next/font/local'

const defaultFonts = local({
  src: [
    {
      path: '../public/Pretendard/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/Pretendard/Pretendard-Bold.woff2',
      weight: '700',
    },
  ],
})

export default defaultFonts

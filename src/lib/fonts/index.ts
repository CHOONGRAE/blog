import local from 'next/font/local'

const globalFonts = local({
  src: [
    {
      path: '../../../public/fonts/Pretendard/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../../public/fonts/Pretendard/Pretendard-Bold.woff2',
      weight: '700',
    },
  ],
})

export default globalFonts

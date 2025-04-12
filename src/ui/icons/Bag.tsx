export const Bag = ({ active }: { active: boolean }) => {
  return active ? (
    <svg
      data-testid='bag-icon-active'
      xmlns='http://www.w3.org/2000/svg'
      width='13'
      height='16'
      viewBox='0 0 13 16'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.47059 0H3.76471V3.76471H0V16H12.2353V3.76471H8.47059V0ZM7.52941 3.76471V7.05882H8.47059V3.76471H7.52941ZM4.70588 3.76471V7.05882H3.76471V3.76471H4.70588ZM4.70588 3.76471H7.52941V0.941176H4.70588V3.76471Z'
        fill='black'
      />
    </svg>
  ) : (
    <svg
      data-testid='bag-icon'
      xmlns='http://www.w3.org/2000/svg'
      width='13'
      height='17'
      viewBox='0 0 13 17'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.47059 0.320312H3.76471V4.08502H0V16.3203H12.2353V4.08502H8.47059V0.320312ZM7.52941 5.0262V7.37914H8.47059V5.0262H11.2941V15.3791H0.941176V5.0262H3.76471V7.37914H4.70588V5.0262H7.52941ZM7.52941 4.08502V1.26149H4.70588V4.08502H7.52941Z'
        fill='black'
      />
    </svg>
  )
}

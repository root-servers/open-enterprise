import React from 'react'
import PropTypes from 'prop-types'

const GitHub = ({width, height, color}) => (
  <svg width={width} height={height} viewBox='0 0 24 24'>
    <g fill='none' fillRule='evenodd'>
      <g transform='translate(-1030 -177)' fill={color}>
        <g transform='translate(920 169)'>
          <path d='M122,8 C115.36,8 110,13.3594421 110,19.9987511 C110,25.2782015 113.44,29.7577353 118.24,31.3575687 C118.88,31.4375604 119.04,31.1175937 119.04,30.797627 L119.04,28.7178435 C115.68,29.4377686 114.96,27.11801 114.96,27.11801 C114.4,25.7581516 113.6,25.3581932 113.6,25.3581932 C112.48,24.6382681 113.68,24.6382681 113.68,24.6382681 C114.88,24.7182598 115.52,25.8381432 115.52,25.8381432 C116.56,27.6779517 118.32,27.11801 119.04,26.7980433 C119.12,25.9981266 119.44,25.5181765 119.84,25.1982099 C117.2,24.8782432 114.4,23.8383514 114.4,19.278826 C114.4,17.9989592 114.88,16.8790758 115.6,16.079159 C115.44,15.7591924 115.04,14.5593172 115.68,12.8794921 C115.68,12.8794921 116.72,12.5595254 118.96,14.0793672 C119.92,13.8393922 120.96,13.6794088 122,13.6794088 C123.04,13.6794088 124.08,13.8393922 125.04,14.0793672 C127.36,12.5595254 128.32,12.8794921 128.32,12.8794921 C128.96,14.5593172 128.56,15.7591924 128.4,16.079159 C129.2,16.8790758 129.6,17.9989592 129.6,19.278826 C129.6,23.9183431 126.8,24.8782432 124.16,25.1982099 C124.56,25.5981682 124.96,26.3180933 124.96,27.4379767 L124.96,30.7176353 C124.96,31.037602 125.2,31.4375604 125.76,31.2775771 C130.56,29.6777436 133.92,25.1982099 133.92,19.9187594 C134,13.3594421 128.64,8 122,8 Z'
            id='github'
          />
        </g>
      </g>
    </g>
  </svg>
)

GitHub.propTypes = {
  color: PropTypes.string
}

GitHub.defaultProps = {
  color: '#222',
  width: '24px',
  height: '24px',
}

export default GitHub

import { MenuEntry } from '@apeswapfinance/uikit'

export const BASE_APP_URL = process.env.REACT_APP_BASE_APP_URL || 'https://apeswap-frontend.vercel.app';

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: BASE_APP_URL,
  },
  {
    label: 'Pirate Stats',
    icon: 'StatsIcon',
    href: `${BASE_APP_URL}/stats`,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: `${BASE_APP_URL}/farms`,
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: `${BASE_APP_URL}/pools`,
  },
  {
    label: 'IAO',
    icon: 'IfoIcon',
    href: `${BASE_APP_URL}/iao`,
  },
  {
    label: 'NFA',
    icon: 'apeNFTIcon',
    href: `${BASE_APP_URL}/nft`,
  },
  {
    label: 'PirateZone',
    icon: 'ApeZone',
    href: `${BASE_APP_URL}/apezone`,
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: `${BASE_APP_URL}/lottery`,
  // },
  {
    label: 'Pirate Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.pirateswap.org',
      },
      {
        label: 'Tokens',
        href: 'https://info.pirateswap.org/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.pirateswap.org/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.pirateswap.org/accounts',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/dreadPirate-Roberts',
      },
      {
        label: 'Docs',
        href: 'https://docs.pirateswap.org',
      },
      {
        label: 'Blog',
        href: 'https://pirateswap.medium.com',
      },
      {
        label: 'Team',
        href: 'https://medium.com/@dreadroberts268/meet-the-founding-pirates-behind-pirateswap-46f4df93e958',
      },
      {
        label: 'Community Feedback',
        href: 'https://discourse.pirateswap.org/',
      },
      {
        label: 'PirateTV',
        href: 'https://anchor.fm/piratetv',
      },
      {
        label: 'Bug Bounty Program',
        href: 'https://pirateswap.gitbook.io/dreadPirate-Roberts/security/bug-bounty-program',
      },
      {
        label: 'GEMZ Audit Report',
        href:
          'https://github.com/dreadPirate-Roberts/pirateswap-letters-of-marquee/blob/master/audits/PirateSwap_GEMZ_Audit_Report_21.08.05.pdf',
      },
    ],
  },
]

export default config

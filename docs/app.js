// Platform Data
const platformsData = [
  // CEX
  {
    name: "MEXC",
    type: "CEX",
    url: "https://www.mexc.com",
    affiliate_link: "https://promote.mexc.com/r/qJYxTnPa",

    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BqBQD5Ojw1ianKY8TgMNeKGmX9RINxk_hrbfufkC8A&s=10",
    kyc_tier: "Tiered (up to 10 BTC/day no KYC)",
    supported_countries: "Global except US",
    fiat_deposit: false,
    volume_24h: "$6.37B",
    fees: "0.025% - 0.2%",
    reputation: "10/10 CoinGecko",
    cryptocurrencies: "1600+",
    features: ["Spot", "Futures", "Margin Trading"]
  },
  {
    name: "Bybit",
    type: "CEX",
    url: "https://www.bybit.eu",
    affiliate_link: "https://partner.bybit.com/b/58129",
    logo: "https://cdn.brandfetch.io/idUW3Hal3b/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "Tiered (20,000 USDT/day no KYC)",
    supported_countries: "Global except US, UK, Singapore",
    fiat_deposit: false,
    volume_24h: "$7.07B",
    fees: "0.01% - 0.1%",
    reputation: "10/10 CoinGecko",
    cryptocurrencies: "400+",
    features: ["Spot", "Derivatives", "Copy Trading"]
  },
  {
    name: "CoinEx",
    type: "CEX",
    url: "https://www.coinex.com/en/",
    logo: "https://images.seeklogo.com/logo-png/39/1/coinex-logo-png_seeklogo-394301.png",
    kyc_tier: "None ($10,000/day)",
    supported_countries: "Global except US (NY)",
    fiat_deposit: false,
    volume_24h: "$491M",
    fees: "0.2%",
    reputation: "8/10 CoinGecko",
    cryptocurrencies: "600+",
    features: ["Spot", "Futures", "AMM"]
  },
  {
    name: "Nonkyc.io",
    type: "CEX",
    url: "https://nonkyc.io/",
    affiliate_link: "https://nonkyc.io/?ref=6465fe372b05bfd8e43600c6&campaign=testcampaign&source=testsource&zone=testzone",
    logo: "https://pbs.twimg.com/profile_images/1645673554850054145/Li_ILJRZ_400x400.jpg",
    kyc_tier: "None",
    supported_countries: "Global",
    fiat_deposit: false,
    volume_24h: "$71.9M",
    fees: "0.2%",
    reputation: "8/10 CoinGecko",
    cryptocurrencies: "190+",
    features: ["Spot", "Trading pairs"]
  },
  {
    name: "BingX",
    type: "CEX",
    url: "https://bingx.com",
    logo: "https://images.seeklogo.com/logo-png/51/1/bingx-logo-png_seeklogo-513450.png",
    kyc_tier: "Tiered",
    supported_countries: "Global except US",
    fiat_deposit: false,
    volume_24h: "$1.31B",
    fees: "0.075% - 0.2%",
    reputation: "9/10 CoinGecko",
    cryptocurrencies: "500+",
    features: ["Spot", "Copy Trading", "Grid Trading"]
  },
  {
    name: "PrimeXBT",
    type: "CEX",
    url: "https://primexbt.com/",
    logo: "https://cdn.brandfetch.io/id9CMdpxC6/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "None (~$20,000/day)",
    supported_countries: "Global except US",
    fiat_deposit: false,
    volume_24h: "N/A",
    fees: "0.01% - 0.05%",
    reputation: "Medium",
    cryptocurrencies: "5+",
    features: ["Crypto", "Forex", "Indices", "Commodities"]
  },
  
  // DEX
  {
    name: "Uniswap",
    type: "DEX",
    url: "https://app.uniswap.org/",
    logo: "https://images.seeklogo.com/logo-png/39/1/uniswap-logo-png_seeklogo-398214.png",
    kyc_tier: "None",
    supported_countries: "Global",
    fiat_deposit: false,
    volume_24h: "$4B+ TVL",
    fees: "0.05% - 1%",
    reputation: "High",
    cryptocurrencies: "900+",
    blockchains: ["Ethereum", "Polygon", "Arbitrum", "Optimism", "BNB Chain"],
    features: ["AMM", "Liquidity pools", "Governance"]
  },
  {
    name: "StealthEX",
    type: "DEX (Instant Swap)",
    url: "https://stealthex.io",
 logo: "https://pbs.twimg.com/profile_images/1744414370459729920/Ozm2U_Wk_400x400.png",
    kyc_tier: "No KYC up to $700/transaction, may request for flagged activity or higher limits",
    supported_countries: "Global",
    fiat_deposit: true,
    volume_24h: "Not disclosed",
    fees: "0.25% - 0.5% (varies by pair & network)",
    reputation: "Popular in privacy communities, strong aggregator ratings",
    cryptocurrencies: "2000+",
    features: [
        "Instant cross-chain swaps",
        "Non-custodial (wallet-to-wallet)",
        "No account required",
        "Supports privacy coins (Monero, Pirate Chain, Zcash...)",
        "Crypto purchase via card (no-KYC limit)",
        "Fixed or floating swap rates",
        "Multilingual support"
    ]
},
  {
    name: "PancakeSwap",
    type: "DEX",
    url: "https://pancakeswap.finance/",
    logo: "https://cdn.brandfetch.io/idaVuWPOqe/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "None",
    supported_countries: "Global",
    fiat_deposit: false,
    volume_24h: "High",
    fees: "0.25%",
    reputation: "High",
    cryptocurrencies: "50+",
    blockchains: ["BNB Chain", "Ethereum", "Aptos"],
    features: ["Yield farming", "Staking", "NFT Marketplace", "Lottery"]
  },
  {
    name: "dYdX",
    type: "DEX",
    url: "https://www.dydx.xyz/",
    logo: "https://cdn.brandfetch.io/idMVlnNUSO/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "None",
    supported_countries: "Global except US, Canada",
    fiat_deposit: false,
    volume_24h: "High",
    fees: "0.02% - 0.05%",
    reputation: "High",
    cryptocurrencies: "35+",
    blockchains: ["Cosmos SDK"],
    features: ["Perpetual futures", "20x leverage", "Advanced trading"]
  },
  {
    name: "Bisq",
    type: "DEX",
    url: "https://bisq.network/",
    logo: "https://cdn.brandfetch.io/idvZkLhs88/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "None",
    supported_countries: "Global",
    fiat_deposit: true,
    volume_24h: "Low",
    fees: "Variable",
    reputation: "High (Privacy focused)",
    cryptocurrencies: "30+",
    blockchains: ["Bitcoin", "Tor network"],
    features: ["P2P trading", "Desktop app", "Escrow", "Fiat onramp"]
  },
  // Bridges
  {
    name: "GhostSwap",
    type: "Bridge",
    url: "https://ghostswap.io/",
    logo: "https://cdn.brandfetch.io/idTY3y6GM_/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "None",
    supported_countries: "Global",
    fiat_deposit: false,
    volume_24h: "N/A",
    fees: "<0.5%",
    reputation: "Medium",
    cryptocurrencies: "1500+",
    blockchains: ["90+ networks"],
    features: ["Cross-chain swaps", "No account needed", "HTLC"]
  },
  {
    name: "Portal Bridge",
    type: "Bridge",
    url: "https://portalbridge.com/",
    logo: "https://cdn.brandfetch.io/ideyh4tbOF/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "None",
    supported_countries: "Global",
    fiat_deposit: false,
    volume_24h: "High",
    fees: "Variable (gas dependent)",
    reputation: "High",
    cryptocurrencies: "Many",
    blockchains: ["20+ including Ethereum, Solana, BNB, Polygon"],
    features: ["Token transfers", "NFTs", "Cross-chain messaging"]
  },
  {
    name: "Synapse Protocol",
    type: "Bridge",
    url: "https://synapseprotocol.com",
    logo: "https://pbs.twimg.com/profile_images/1692635184837836800/uZB0CnEG_400x400.jpg",
    kyc_tier: "None",
    supported_countries: "Global",
    fiat_deposit: false,
    volume_24h: "Medium",
    fees: "Near-zero with reimbursement",
    reputation: "High",
    cryptocurrencies: "Major assets",
    blockchains: ["Ethereum", "Arbitrum", "Optimism", "Polygon", "Avalanche"],
    features: ["Fast transfers", "Staking", "AMM"]
  },
  {
    name: "Symbiosis Finance",
    type: "Bridge",
    url: "https://symbiosis.finance/",
    logo: "https://cdn.brandfetch.io/id_g3_VMdQ/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "None",
    supported_countries: "Global",
    fiat_deposit: false,
    volume_24h: "Medium",
    fees: "Low",
    reputation: "Medium",
    cryptocurrencies: "Many",
    blockchains: ["Multi-chain"],
    features: ["Automatic routing", "Cross-chain swaps"]
  },
 
  // ATMs
  
  {
    name: "Coinstar Bitcoin Machines",
    type: "ATM",
    url: "https://www.coinstar.com/crypto/",
    logo: "https://pbs.twimg.com/profile_images/1402770991873347584/76ObxWjr_400x400.jpg",
    kyc_tier: "Intermediate",
    supported_countries: "US only",
    fiat_deposit: true,
    volume_24h: "N/A",
    fees: "4-11%",
    reputation: "High",
    cryptocurrencies: "BTC, ETH, LTC, DOGE, USDC, 8+",
    locations: "20,000+ kiosks in 49 states"
  },
 
  {
    name: "LibertyX ATM",
    type: "ATM",
    url: "https://libertyx.com/",
    logo: "https://pbs.twimg.com/profile_images/1659303443314647043/Mz-jD1Jq_400x400.jpg",
    kyc_tier: "Tiered",
    supported_countries: "US only",
    fiat_deposit: true,
    volume_24h: "N/A",
    fees: "8%",
    reputation: "High",
    cryptocurrencies: "BTC",
    locations: "30,000+ locations (CVS, Walgreens, Costco)"
  },
  {
    name: "RockitCoin",
    type: "ATM",
    url: "https://www.rockitcoin.com/",
    logo: "https://images.crunchbase.com/image/upload/c_pad,h_160,w_160,f_auto,b_white,q_auto:eco,dpr_1/cxdnypnu55drlxd0jwa9?ik-sanitizeSvg=true",
    kyc_tier: "Low (phone number only)",
    supported_countries: "US, Puerto Rico",
    fiat_deposit: true,
    volume_24h: "N/A",
    fees: "Spread + $1-2",
    reputation: "High",
    cryptocurrencies: "BTC, BCH, LTC, ETH",
    locations: "1,500+ ATMs"
  },
  {
    name: "Bitcoin Depot",
    type: "ATM",
    url: "https://bitcoindepot.com/",
    logo: "https://pbs.twimg.com/profile_images/1487080291168575490/6p3qO2B2_400x400.jpg",
    kyc_tier: "Intermediate",
    supported_countries: "US (South)",
    fiat_deposit: true,
    volume_24h: "N/A",
    fees: "Variable",
    reputation: "Medium",
    cryptocurrencies: "BTC, LTC, ETH",
    locations: "Texas, Louisiana, Mississippi, Alabama"
  },
  
  {
    name: "Bitcoin Well",
    type: "ATM",
    url: "https://bitcoinwell.com/",
    logo: "https://cdn.brandfetch.io/id5fQwmdy9/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "Tiered",
    supported_countries: "Canada, US",
    fiat_deposit: true,
    volume_24h: "N/A",
    fees: "Variable",
    reputation: "Medium",
    cryptocurrencies: "BTC",
    locations: "Multiple locations"
  },
  // P2P
  {
    name: "Hodl Hodl",
    type: "P2P",
    url: "https://hodlhodl.com/",
    logo: "https://cdn.brandfetch.io/idZyVJrbt0/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "None",
    supported_countries: "Global",
    fiat_deposit: true,
    volume_24h: "Low",
    fees: "Variable",
    reputation: "High",
    cryptocurrencies: "BTC",
    payment_methods: ["100+ fiat currencies", "Bank transfer", "Cash"]
  },
  {
    name: "Peach Bitcoin",
    type: "P2P",
    url: "https://peachbitcoin.com/",
    logo: "https://cdn.brandfetch.io/id2S-yq7oe/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "None",
    supported_countries: "Global",
    fiat_deposit: true,
    volume_24h: "Low",
    fees: "Free to sell",
    reputation: "Medium",
    cryptocurrencies: "BTC",
    payment_methods: ["Gift cards", "Bank transfer", "Cash"]
  },
  
  {
    name: "LocalCoinSwap",
    type: "P2P",
    url: "https://localcoinswap.com/",
    logo: "https://cdn.brandfetch.io/idDL0a3wYC/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "None",
    supported_countries: "Global",
    fiat_deposit: true,
    volume_24h: "Low",
    fees: "Low",
    reputation: "Medium",
    cryptocurrencies: "Multiple",
    payment_methods: ["Various"]
  },
 
  {
    name: "OpenPeer",
    type: "P2P",
    url: "https://openpeer.xyz",
    kyc_tier: "Optional (peer decides)",
    logo: "https://cdn.brandfetch.io/idh3uzJ_Bo/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    supported_countries: "Global except US",
    fiat_deposit: true,
    volume_24h: "Low",
    fees: "Low",
    reputation: "Medium",
    cryptocurrencies: "10+",
    payment_methods: ["100+ fiat currencies", "Various methods"]
  },
  // Instant Swaps
  {
    name: "SimpleSwap",
    type: "Instant Swap",
    url: "https://simpleswap.io",
    logo: "https://cdn.brandfetch.io/idUetsSG2c/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "None (may request on partner request)",
    supported_countries: "Global except US",
    fiat_deposit: false,
    volume_24h: "Medium",
    fees: "Variable",
    reputation: "Medium",
    cryptocurrencies: "500+",
    features: ["No registration", "Fast swaps"]
  },
  {
    name: "Changelly",
    type: "Instant Swap",
    url: "https://changelly.com",
    logo: "https://cdn.brandfetch.io/idl324uOhC/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    kyc_tier: "Email only",
    supported_countries: "Global except US",
    fiat_deposit: true,
    volume_24h: "Medium",
    fees: "0.25%",
    reputation: "High",
    cryptocurrencies: "200+",
    features: ["P2P", "Instant swap"]
  },
 {
    name: "Boltz",
    type: "Instant Swap",
    url: "https://boltz.exchange/",
    logo: "https://raw.githubusercontent.com/BoltzExchange/logo/refs/heads/master/boltz-favicon.ico",
    kyc_tier: "No KYC",
    supported_countries: "Global",
    fiat_deposit: true,
    volume_24h: "High",
    fees: "0.25%",
    reputation: "High",
    cryptocurrencies: "1+",
    features: ["P2P", "Instant swap"]
  }, 
  
];

// Type color mapping
const typeColors = {
  'CEX': { color: '#3b82f6', rgb: '59, 130, 246' },
  'DEX': { color: '#22c55e', rgb: '34, 197, 94' },
  'Bridge': { color: '#a855f7', rgb: '168, 85, 247' },
  'ATM': { color: '#f97316', rgb: '249, 115, 22' },
  'P2P': { color: '#ef4444', rgb: '239, 68, 68' },
  'Instant Swap': { color: '#06b6d4', rgb: '6, 182, 212' }
};

// State
let filteredPlatforms = [...platformsData];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const countryFilter = document.getElementById('countryFilter');
const fiatFilter = document.getElementById('fiatFilter');
const feesFilter = document.getElementById('feesFilter');
const sortFilter = document.getElementById('sortFilter');
const platformsGrid = document.getElementById('platformsGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const modal = document.getElementById('platformModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');

// Initialize
function init() {
  updateStatistics();
  renderPlatforms();
  attachEventListeners();
}

// Update statistics
function updateStatistics() {
  const counts = {
    cex: platformsData.filter(p => p.type === 'CEX').length,
    dex: platformsData.filter(p => p.type === 'DEX').length,
    bridge: platformsData.filter(p => p.type === 'Bridge').length,
    atm: platformsData.filter(p => p.type === 'ATM').length,
    p2p: platformsData.filter(p => p.type === 'P2P').length,
    swap: platformsData.filter(p => p.type === 'Instant Swap').length
  };
  
  document.getElementById('totalPlatforms').textContent = `${platformsData.length}+`;
  document.getElementById('cexCount').textContent = counts.cex;
  document.getElementById('dexCount').textContent = counts.dex;
  document.getElementById('bridgeCount').textContent = counts.bridge;
  document.getElementById('atmCount').textContent = counts.atm;
  document.getElementById('p2pCount').textContent = counts.p2p;
  document.getElementById('swapCount').textContent = counts.swap;
}

// Attach event listeners
function attachEventListeners() {
  searchInput.addEventListener('input', handleFilters);
  categoryFilter.addEventListener('change', handleFilters);
  countryFilter.addEventListener('change', handleFilters);
  fiatFilter.addEventListener('change', handleFilters);
  feesFilter.addEventListener('change', handleFilters);
  sortFilter.addEventListener('change', handleFilters);
  
  modalOverlay.addEventListener('click', closeModal);
}

// Handle filters
function handleFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const country = countryFilter.value;
  const fiat = fiatFilter.value;
  const fees = feesFilter.value;
  const sort = sortFilter.value;
  
  // Filter platforms
  filteredPlatforms = platformsData.filter(platform => {
    // Search filter
    const matchesSearch = platform.name.toLowerCase().includes(searchTerm);
    
    // Category filter
    const matchesCategory = category === 'all' || platform.type === category;
    
    // Country filter
    let matchesCountry = true;
    if (country !== 'all') {
      if (country === 'Global') {
        matchesCountry = platform.supported_countries.includes('Global');
      } else {
        matchesCountry = platform.supported_countries.includes(country);
      }
    }
    
    // Fiat filter
    let matchesFiat = true;
    if (fiat === 'yes') {
      matchesFiat = platform.fiat_deposit === true;
    } else if (fiat === 'no') {
      matchesFiat = platform.fiat_deposit === false;
    }
    
    // Fees filter
    let matchesFees = true;
    if (fees !== 'all') {
      const feeString = platform.fees.toLowerCase();
      if (fees === 'low') {
        matchesFees = feeString.includes('0.0') || feeString.includes('near-zero') || feeString.includes('<0.1');
      } else if (fees === 'medium') {
        matchesFees = feeString.includes('0.1') || feeString.includes('0.2') || feeString.includes('0.25');
      } else if (fees === 'high') {
        matchesFees = feeString.includes('%') && !feeString.includes('0.0') && !feeString.includes('0.1');
      }
    }
    
    return matchesSearch && matchesCategory && matchesCountry && matchesFiat && matchesFees;
  });
  
  // Sort platforms
  if (sort === 'name') {
    filteredPlatforms.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === 'reputation') {
    filteredPlatforms.sort((a, b) => {
      const repA = a.reputation.toLowerCase().includes('high') ? 3 : a.reputation.includes('10') ? 3 : a.reputation.toLowerCase().includes('medium') ? 2 : 1;
      const repB = b.reputation.toLowerCase().includes('high') ? 3 : b.reputation.includes('10') ? 3 : b.reputation.toLowerCase().includes('medium') ? 2 : 1;
      return repB - repA;
    });
  } else if (sort === 'volume') {
    filteredPlatforms.sort((a, b) => {
      const volA = parseVolume(a.volume_24h);
      const volB = parseVolume(b.volume_24h);
      return volB - volA;
    });
  }
  
  renderPlatforms();
}

// Parse volume for sorting
function parseVolume(volume) {
  if (!volume || volume === 'N/A') return 0;
  if (volume.toLowerCase().includes('high')) return 1000000000;
  if (volume.toLowerCase().includes('medium')) return 500000000;
  if (volume.toLowerCase().includes('low')) return 100000000;
  
  const match = volume.match(/([\d.]+)([BMK])?/);
  if (!match) return 0;
  
  let value = parseFloat(match[1]);
  const unit = match[2];
  
  if (unit === 'B') value *= 1000000000;
  else if (unit === 'M') value *= 1000000;
  else if (unit === 'K') value *= 1000;
  
  return value;
}

// Render platforms
function renderPlatforms() {
  resultsCount.textContent = `${filteredPlatforms.length} platform${filteredPlatforms.length !== 1 ? 's' : ''}`;
  
  if (filteredPlatforms.length === 0) {
    platformsGrid.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }
  
  platformsGrid.style.display = 'grid';
  noResults.style.display = 'none';
  
  platformsGrid.innerHTML = filteredPlatforms.map(platform => {
    const typeColor = typeColors[platform.type];
    
    return `
      <div class="platform-card" onclick="openModal('${platform.name.replace(/'/g, "\\'")}')"
           style="--type-color: ${typeColor.color}; --type-color-rgb: ${typeColor.rgb}; --type-color-light: ${typeColor.color}99;">
        <div class="platform-header">
         <div class="platform-logo" style="background: linear-gradient(135deg, ${typeColor.color} 0%, ${typeColor.color}99 100%);">
  ${platform.logo
    ? `<img src="${platform.logo}" alt="${platform.name} logo" class="platform-logo-img" loading="lazy"
             onerror="this.style.display='none'; this.parentElement.textContent='${platform.name.charAt(0)}';">`
    : platform.name.charAt(0)
  }
</div>

          <div class="platform-info">
            <div class="platform-name">${platform.name}</div>
            <span class="platform-type" style="background: rgba(${typeColor.rgb}, 0.15); color: ${typeColor.color}; border-color: rgba(${typeColor.rgb}, 0.3);">
              ${platform.type}
            </span>
          </div>
        </div>
        
        <div class="platform-details">
          <div class="detail-row">
            <span class="detail-label">KYC Requirement:</span>
            <span class="detail-value">${platform.kyc_tier}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Availability:</span>
            <span class="detail-value">${platform.supported_countries}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Fiat Deposit:</span>
            <span class="detail-value">
              <span class="fiat-icon ${platform.fiat_deposit ? 'fiat-yes' : 'fiat-no'}">
                ${platform.fiat_deposit ? '✓ Yes' : '✗ No'}
              </span>
            </span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Fees:</span>
            <span class="detail-value">${platform.fees}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Reputation:</span>
            <span class="detail-value">${platform.reputation}</span>
          </div>
        </div>
        
        <button class="view-details-btn">View Full Details →</button>
      </div>
    `;
  }).join('');
}

// Open modal
function openModal(platformName) {
  const platform = platformsData.find(p => p.name === platformName);
  if (!platform) return;
  
  const typeColor = typeColors[platform.type];
  
  let modalHTML = `
    <div class="modal-header" style="--type-color: ${typeColor.color}; --type-color-light: ${typeColor.color}99;">
      <div class="modal-logo" style="background: linear-gradient(135deg, ${typeColor.color} 0%, ${typeColor.color}99 100%);">
        ${platform.name.charAt(0)}
      </div>
      <div class="modal-title-section">
        <h2 class="modal-title">${platform.name}</h2>
        <span class="platform-type" style="background: rgba(${typeColor.rgb}, 0.15); color: ${typeColor.color}; border-color: rgba(${typeColor.rgb}, 0.3);">
          ${platform.type}
        </span>
      </div>
      <button class="modal-close" onclick="closeModal()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    
    <div class="modal-body">
      <div class="modal-section">
        <h3>Platform Information</h3>
        <div class="modal-detail-grid">
          <div class="modal-detail-row">
            <span class="modal-detail-label">KYC Requirement</span>
            <span class="modal-detail-value">${platform.kyc_tier}</span>
          </div>
          <div class="modal-detail-row">
            <span class="modal-detail-label">Supported Countries</span>
            <span class="modal-detail-value">${platform.supported_countries}</span>
          </div>
          <div class="modal-detail-row">
            <span class="modal-detail-label">Fiat Deposit</span>
            <span class="modal-detail-value">
              <span class="fiat-icon ${platform.fiat_deposit ? 'fiat-yes' : 'fiat-no'}">
                ${platform.fiat_deposit ? '✓ Available' : '✗ Not Available'}
              </span>
            </span>
          </div>
          <div class="modal-detail-row">
            <span class="modal-detail-label">24h Volume</span>
            <span class="modal-detail-value">${platform.volume_24h}</span>
          </div>
          <div class="modal-detail-row">
            <span class="modal-detail-label">Trading Fees</span>
            <span class="modal-detail-value">${platform.fees}</span>
          </div>
          <div class="modal-detail-row">
            <span class="modal-detail-label">Reputation</span>
            <span class="modal-detail-value">${platform.reputation}</span>
          </div>
          <div class="modal-detail-row">
            <span class="modal-detail-label">Cryptocurrencies</span>
            <span class="modal-detail-value">${platform.cryptocurrencies}</span>
          </div>
  `;
  
  // Add locations for ATMs
  if (platform.locations) {
    modalHTML += `
          <div class="modal-detail-row">
            <span class="modal-detail-label">Locations</span>
            <span class="modal-detail-value">${platform.locations}</span>
          </div>
    `;
  }
  
  modalHTML += `
        </div>
      </div>
  `;
  
  // Add features
  if (platform.features && platform.features.length > 0) {
    modalHTML += `
      <div class="modal-section">
        <h3>Features</h3>
        <div class="feature-list">
          ${platform.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
        </div>
      </div>
    `;
  }
  
  // Add blockchains for DEX/Bridges
  if (platform.blockchains && platform.blockchains.length > 0) {
    modalHTML += `
      <div class="modal-section">
        <h3>Supported Blockchains</h3>
        <div class="blockchain-list">
          ${platform.blockchains.map(b => `<span class="blockchain-tag">${b}</span>`).join('')}
        </div>
      </div>
    `;
  }
  
  // Add payment methods for P2P
  if (platform.payment_methods && platform.payment_methods.length > 0) {
    modalHTML += `
      <div class="modal-section">
        <h3>Payment Methods</h3>
        <div class="feature-list">
          ${platform.payment_methods.map(m => `<span class="feature-tag">${m}</span>`).join('')}
        </div>
      </div>
    `;
  }
  
  // Add CTA and disclaimer
  modalHTML += `
      <div class="modal-section">
       <a href="${platform.affiliate_link || platform.url}" target="_blank" rel="nofollow noopener noreferrer" class="visit-platform-btn">
  Visit ${platform.name}
</a>                              

          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 3H3v10h10v-3M9 3h4v4M13 3L7 9"/>
          </svg>
        </a>
      </div>
      
      <div class="modal-disclaimer">
        <strong>⚠️ Important:</strong> Always do your own research before using any cryptocurrency platform. 
        Start with small amounts to test the service. This directory provides information only and does not 
        endorse or recommend specific platforms. Cryptocurrency trading carries financial risk.
      </div>
    </div>
  `;
  
  modalContent.innerHTML = modalHTML;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Make closeModal global for onclick
window.closeModal = closeModal;
window.openModal = openModal;

// Initialize app
init();

function openFilters(){
  // copie valeurs actuelles vers la modal
  const pairs = [
    ['categoryFilter','categoryFilterM'],
    ['countryFilter','countryFilterM'],
    ['fiatFilter','fiatFilterM'],
    ['feesFilter','feesFilterM'],
    ['sortFilter','sortFilterM'],
  ];
  pairs.forEach(([src, dst])=>{
    const s = document.getElementById(src), d = document.getElementById(dst);
    if(s && d){ d.value = s.value; }
  });
  document.getElementById('filters-modal').style.display='flex';
}
function closeFilters(){
  document.getElementById('filters-modal').style.display='none';
}
// Synchronise la valeur de la modal vers les selects desktop et relance le filtrage
function syncAndApply(fromId, toId){
  const from = document.getElementById(fromId);
  const to = document.getElementById(toId);
  if(from && to){ to.value = from.value; }
  handleFilters();
}
window.openFilters = openFilters;
window.closeFilters = closeFilters;
window.syncAndApply = syncAndApply;
window.handleFilters = handleFilters; // utile si tu veux l’appeler directement


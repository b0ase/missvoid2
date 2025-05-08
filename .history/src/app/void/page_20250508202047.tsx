"use client";

import { useState } from 'react';

export default function VoidTokenPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">$VOID SHARES</h1>
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Pre-launch Disclaimer Banner */}
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-6 text-center">
          <p className="text-amber-300 font-medium">
            PRE-LAUNCH NOTICE: $VOID tokens have not been launched yet. The following details represent projected metrics.
          </p>
          <p className="text-gray-300 text-sm mt-1">
            Expected Public Launch Date: <span className="text-white font-medium">March 15, 2026</span>
          </p>
        </div>
      
        <div className="bg-black p-6 rounded-lg border border-gray-800 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mr-3 md:mr-4">
                <span className="text-black text-xl md:text-2xl font-bold">$V</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold">$VOID</h2>
                <p className="text-gray-400">Company Shares in Miss Void LTD</p>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-xl font-bold">$0.87 USD <span className="text-xs text-gray-400">(projected)</span></p>
              <p className="text-green-500">+12.4% (24h) <span className="text-xs text-gray-400">(simulated)</span></p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 mb-6">
            <div className="bg-gray-900 p-4 rounded border border-gray-700">
              <p className="text-gray-400 text-sm">Projected Launch Price (2026)</p>
              <p className="text-xl font-medium">$0.87 per token</p>
            </div>
            <div className="bg-gray-900 p-4 rounded border border-gray-700">
              <p className="text-gray-400 text-sm">Initial Token Allocation</p>
              <p className="text-xl font-medium">10M of 1B total supply</p>
              <p className="text-xs text-gray-500">1% of total supply at launch</p>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded border border-gray-700 mb-6">
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-amber-400 mr-2">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="text-amber-400 font-medium">Important Note on Projections</span>
            </div>
            <p className="text-sm text-gray-300">
              All financial metrics shown are projections for the 2026 launch. These figures are estimates based on our planned token economics and are subject to change. No real market cap or valuation exists as the token has not launched.
            </p>
          </div>
          
          <div className="mb-6 border-b border-gray-700 overflow-x-auto pb-1">
            {/* Mobile Tab Selector (visible on small screens only) */}
            <div className="block sm:hidden px-2 py-2">
              <select 
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
              >
                <option value="overview">Overview</option>
                <option value="benefits">Shareholder Benefits</option>
                <option value="acquire">How to Acquire</option>
                <option value="staking">Revenue Distribution</option>
                <option value="roadmap">Launch Roadmap</option>
                <option value="hiring">Hiring Plan</option>
              </select>
            </div>
            
            {/* Standard Tabs (hidden on very small screens) */}
            <ul className="hidden sm:flex whitespace-nowrap space-x-2 min-w-full">
              <li>
                <button 
                  className={`inline-block p-3 sm:p-4 border-b-2 rounded-t-lg ${
                    activeTab === 'overview' 
                      ? 'text-white border-white font-medium' 
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
              </li>
              <li>
                <button 
                  className={`inline-block p-3 sm:p-4 border-b-2 rounded-t-lg ${
                    activeTab === 'benefits' 
                      ? 'text-white border-white font-medium' 
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setActiveTab('benefits')}
                >
                  Shareholder Benefits
                </button>
              </li>
              <li>
                <button 
                  className={`inline-block p-3 sm:p-4 border-b-2 rounded-t-lg ${
                    activeTab === 'acquire' 
                      ? 'text-white border-white font-medium' 
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setActiveTab('acquire')}
                >
                  How to Acquire
                </button>
              </li>
              <li>
                <button 
                  className={`inline-block p-3 sm:p-4 border-b-2 rounded-t-lg ${
                    activeTab === 'staking' 
                      ? 'text-white border-white font-medium' 
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setActiveTab('staking')}
                >
                  Revenue Distribution
                </button>
              </li>
              <li>
                <button 
                  className={`inline-block p-3 sm:p-4 border-b-2 rounded-t-lg ${
                    activeTab === 'roadmap' 
                      ? 'text-white border-white font-medium' 
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setActiveTab('roadmap')}
                >
                  Launch Roadmap
                </button>
              </li>
              <li>
                <button 
                  className={`inline-block p-3 sm:p-4 border-b-2 rounded-t-lg ${
                    activeTab === 'hiring' 
                      ? 'text-white border-white font-medium' 
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setActiveTab('hiring')}
                >
                  Hiring Plan
                </button>
              </li>
            </ul>
          </div>
          
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <p className="text-gray-300">
                $VOID represents equity shares in Miss Void LTD. As a shareholder, you own a proportional stake in the company and are entitled to revenue distributions based on your holdings. 100% of shares are owned by Miss Void LTD unless sold to investors to raise capital for company development. Built on the Solana blockchain as SPL tokens, $VOID shares offer transparent ownership with fast transactions and minimal fees.
              </p>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Share Distribution</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-1 border-b border-gray-800">
                    <span className="text-gray-300">Company Reserve</span>
                    <span className="text-white">50%</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-800">
                    <span className="text-gray-300">Investors</span>
                    <span className="text-white">30%</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-800">
                    <span className="text-gray-300">Team & Advisors</span>
                    <span className="text-white">15%</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-300">Public Sale</span>
                    <span className="text-white">5%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700 mb-4">
                <h3 className="text-lg font-medium text-white mb-3">Token Release Schedule (Planned)</h3>
                <p className="text-sm text-gray-300 mb-2">
                  Our token release strategy is designed to ensure controlled distribution. Based on our projected model, the release schedule after launch would be as follows:
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-1 border-b border-gray-800">
                    <span className="text-gray-300">Initial Launch</span>
                    <span className="text-white">1% (10M tokens)</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-800">
                    <span className="text-gray-300">Year 1 After Launch</span>
                    <span className="text-white">Up to 10% (100M total)</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-800">
                    <span className="text-gray-300">Year 2 After Launch</span>
                    <span className="text-white">Up to 25% (250M total)</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-300">Long-term Release</span>
                    <span className="text-white">Based on company milestones</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Solana-Based Shares</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start py-1 border-b border-gray-800">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">24/7 Tradable Shares</span>
                      <p className="text-gray-400 text-xs mt-1">Unlike traditional stocks with limited trading hours, $VOID shares can be bought, sold, and transferred 24/7.</p>
                    </div>
                  </div>
                  <div className="flex items-start py-1 border-b border-gray-800">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">Low-cost Transfers</span>
                      <p className="text-gray-400 text-xs mt-1">Transfer shares with minimal transaction fees—a fraction of traditional stock exchange costs.</p>
                    </div>
                  </div>
                  <div className="flex items-start py-1 border-b border-gray-800">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">Automatic Revenue Distribution</span>
                      <p className="text-gray-400 text-xs mt-1">Smart contracts handle revenue distribution to shareholders who stake their shares, ensuring transparency and precision.</p>
                    </div>
                  </div>
                  <div className="flex items-start py-1">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">Provable Ownership</span>
                      <p className="text-gray-400 text-xs mt-1">Blockchain technology provides immutable proof of ownership and transparent record of all share transfers.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300">
                Miss Void LTD offers shareholders direct exposure to the growing AI-generated fashion design market. As the company expands its operations and increases revenue, shareholders who stake their $VOID tokens receive proportional distributions of company profits.
              </p>
            </div>
          )}
          
          {activeTab === 'benefits' && (
            <div className="space-y-6">
              <p className="text-gray-300">
                $VOID shareholders enjoy multiple benefits beyond standard equity ownership, creating exceptional value for both individual and institutional investors in Miss Void LTD.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Revenue Distributions</h3>
                  <p className="text-sm text-gray-400">
                    Receive proportional distributions of Miss Void LTD revenue when staking your shares, with funds transferred directly to your wallet.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Voting Rights</h3>
                  <p className="text-sm text-gray-400">
                    Participate in key company decisions through shareholder votes, with voting power proportional to your holdings.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Preferred Design Access</h3>
                  <p className="text-sm text-gray-400">
                    Major shareholders receive early access to premium design collections before public release, with exclusive design options.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Shareholder Discounts</h3>
                  <p className="text-sm text-gray-400">
                    Substantial discounts on MISS VOID products and services based on shareholding tier, including design generation and manufacturing.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Investor Events</h3>
                  <p className="text-sm text-gray-400">
                    Premium shareholders gain access to exclusive investor events, fashion shows, and quarterly earnings calls with the executive team.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Share Appreciation</h3>
                  <p className="text-sm text-gray-400">
                    As Miss Void LTD grows, your share value may increase, potentially providing both ongoing distributions and capital appreciation.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'acquire' && (
            <div className="space-y-6">
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Pre-Launch Notice</h3>
                <p className="text-sm text-gray-300 mb-2">
                  $VOID tokens are not currently available for public trading. Upon launch (expected March 15, 2026), they will be available through the following channels:
                </p>
                <div className="text-sm bg-gray-800 rounded p-3 text-amber-300">
                  Current Status: Pre-launch development phase
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Future Centralized Exchanges (CEX)</h3>
                <p className="text-sm text-gray-400 mb-4">
                  $VOID shares are planned to be listed on these centralized exchanges:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-800 p-3 rounded border border-gray-700 flex items-center justify-center">
                    <span className="text-white font-medium">Binance</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-700 flex items-center justify-center">
                    <span className="text-white font-medium">Coinbase</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-700 flex items-center justify-center">
                    <span className="text-white font-medium">KuCoin</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-700 flex items-center justify-center">
                    <span className="text-white font-medium">OKX</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Future Decentralized Exchanges (DEX)</h3>
                <p className="text-sm text-gray-400 mb-4">
                  $VOID shares will be available on these Solana-based decentralized exchanges:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-800 p-3 rounded border border-gray-700 flex items-center justify-center">
                    <span className="text-white font-medium">Raydium</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-700 flex items-center justify-center">
                    <span className="text-white font-medium">Orca</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-700 flex items-center justify-center">
                    <span className="text-white font-medium">Jupiter</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-700 flex items-center justify-center">
                    <span className="text-white font-medium">Serum</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Private Funding Rounds</h3>
                <p className="text-sm text-gray-400 mb-3">
                  Prior to public launch, we're conducting several funding rounds:
                </p>
                <div className="space-y-2 mb-2">
                  <div className="bg-gray-800 p-3 rounded border border-gray-700">
                    <div className="flex flex-wrap justify-between">
                      <span className="text-white">Seed Round</span>
                      <span className="text-amber-300">Completed</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Price: $0.35 USD per token</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-700">
                    <div className="flex flex-wrap justify-between">
                      <span className="text-white">Private Sale</span>
                      <span className="text-green-400">Current</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Price: $0.55 USD per token</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-700">
                    <div className="flex flex-wrap justify-between">
                      <span className="text-white">Strategic Round</span>
                      <span className="text-gray-400">Q3 2025</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Price: $0.70 USD per token</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-700">
                    <div className="flex flex-wrap justify-between">
                      <span className="text-white">Public Sale</span>
                      <span className="text-gray-400">March 2026</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Expected Price: $0.87 USD per token</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-lg font-medium text-white">Interested in pre-launch investment?</h3>
                  <p className="text-sm text-gray-400">Contact our investor relations team for private round opportunities</p>
                </div>
                <button className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition w-full sm:w-auto">
                  Contact Team
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'staking' && (
            <div className="space-y-6">
              <p className="text-gray-300">
                By staking your $VOID shares, you become eligible to receive revenue distributions from Miss Void LTD operations. Miss Void LTD proportionally distributes revenue from the business directly to shareholders who complete staking periods.
              </p>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Revenue Distribution Tiers</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-transparent">
                    <thead>
                      <tr>
                        <th className="px-2 md:px-4 py-2 text-left text-gray-400">Tier</th>
                        <th className="px-2 md:px-4 py-2 text-left text-gray-400">$VOID Required</th>
                        <th className="px-2 md:px-4 py-2 text-left text-gray-400">Distribution %</th>
                        <th className="px-2 md:px-4 py-2 text-left text-gray-400">Benefits</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr>
                        <td className="px-2 md:px-4 py-3 text-white">Basic Shareholder</td>
                        <td className="px-2 md:px-4 py-3 text-white">500</td>
                        <td className="px-2 md:px-4 py-3 text-white">Base rate</td>
                        <td className="px-2 md:px-4 py-3 text-gray-400 text-xs md:text-sm">Standard revenue share, basic voting rights</td>
                      </tr>
                      <tr>
                        <td className="px-2 md:px-4 py-3 text-white">Premium Shareholder</td>
                        <td className="px-2 md:px-4 py-3 text-white">2,500</td>
                        <td className="px-2 md:px-4 py-3 text-white">Base + 5%</td>
                        <td className="px-2 md:px-4 py-3 text-gray-400 text-xs md:text-sm">Enhanced revenue share, design discounts</td>
                      </tr>
                      <tr>
                        <td className="px-2 md:px-4 py-3 text-white">Executive Shareholder</td>
                        <td className="px-2 md:px-4 py-3 text-white">10,000</td>
                        <td className="px-2 md:px-4 py-3 text-white">Base + 10%</td>
                        <td className="px-2 md:px-4 py-3 text-gray-400 text-xs md:text-sm">Priority revenue share, exclusive designs</td>
                      </tr>
                      <tr>
                        <td className="px-2 md:px-4 py-3 text-white">Board Member</td>
                        <td className="px-2 md:px-4 py-3 text-white">50,000</td>
                        <td className="px-2 md:px-4 py-3 text-white">Base + 15%</td>
                        <td className="px-2 md:px-4 py-3 text-gray-400 text-xs md:text-sm">Premium revenue share, strategic voting</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Distribution Process</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Revenue distribution follows this simple process:
                  </p>
                  <ol className="space-y-2 text-sm text-gray-400 list-decimal pl-5">
                    <li>Stake your $VOID shares through our platform</li>
                    <li>Complete the full staking period (minimum 30 days)</li>
                    <li>Receive your proportional share of company revenue</li>
                  </ol>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Commitment Periods</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Additional revenue bonus based on staking commitment:
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-1 border-b border-gray-800">
                      <span className="text-gray-300">30 Days</span>
                      <span className="text-white">Base distribution rate</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-800">
                      <span className="text-gray-300">90 Days</span>
                      <span className="text-white">+5% revenue bonus</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-800">
                      <span className="text-gray-300">180 Days</span>
                      <span className="text-white">+10% revenue bonus</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-300">365 Days</span>
                      <span className="text-white">+15% revenue bonus</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Shareholder Dashboard</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-800 p-3 rounded border border-gray-700">
                    <p className="text-xs text-gray-400">Your Staked Shares</p>
                    <p className="text-xl font-medium text-white">0.00</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-700">
                    <p className="text-xs text-gray-400">Pending Distributions</p>
                    <p className="text-xl font-medium text-white">$0.00</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-700">
                    <p className="text-xs text-gray-400">Total Received</p>
                    <p className="text-xl font-medium text-white">$0.00</p>
                  </div>
                </div>
                <button className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition w-full">
                  Connect Phantom Wallet to Stake Shares
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'roadmap' && (
            <div className="space-y-6">
              <p className="text-gray-300 mb-4">
                The MISS VOID development and launch roadmap outlines our strategic milestones from platform development to token 
                launch and global expansion. Each phase builds upon the previous, ensuring a stable and growth-oriented trajectory.
              </p>
              
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-800"></div>
                
                {/* Phase 1 */}
                <div className="relative mb-10">
                  <div className="flex">
                    <div className="relative z-10 flex items-center justify-center flex-shrink-0 w-10 h-10 bg-gray-900 rounded-full border-2 border-white">
                      <span className="text-white font-medium">1</span>
                    </div>
                    <div className="ml-6">
                      <div className="flex items-center">
                        <h3 className="text-xl font-bold text-white">Foundation Phase</h3>
                        <span className="ml-3 bg-green-900 text-green-300 text-xs px-2 py-1 rounded">Completed</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">Q1-Q2 2025</p>
                      
                      <div className="mt-3 bg-gray-900 p-4 rounded border border-gray-800">
                        <ul className="text-sm text-gray-300 space-y-3">
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            <div>
                              <span className="font-medium">Platform Development</span>
                              <p className="text-xs text-gray-400 mt-1">Creation of core AI design system, manufacturing integration, and distribution network</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            <div>
                              <span className="font-medium">Company Formation</span>
                              <p className="text-xs text-gray-400 mt-1">Legal establishment of Miss Void LTD and governance structures</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            <div>
                              <span className="font-medium">Tokenomics Design</span>
                              <p className="text-xs text-gray-400 mt-1">Develop token structure, distribution mechanics, and incentive systems</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            <div>
                              <span className="font-medium">Seed Funding Round</span>
                              <p className="text-xs text-gray-400 mt-1">Initial capital raise from strategic investors at $0.35 per token</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phase 2 */}
                <div className="relative mb-10">
                  <div className="flex">
                    <div className="relative z-10 flex items-center justify-center flex-shrink-0 w-10 h-10 bg-gray-900 rounded-full border-2 border-white">
                      <span className="text-white font-medium">2</span>
                    </div>
                    <div className="ml-6">
                      <div className="flex items-center">
                        <h3 className="text-xl font-bold text-white">Growth & Testing Phase</h3>
                        <span className="ml-3 bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded">Current</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">Q3-Q4 2025</p>
                      
                      <div className="mt-3 bg-gray-900 p-4 rounded border border-gray-800">
                        <ul className="text-sm text-gray-300 space-y-3">
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            <div>
                              <span className="font-medium">Private Sale Round</span>
                              <p className="text-xs text-gray-400 mt-1">Second funding round at $0.55 per token for qualified investors</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">→</span>
                            <div>
                              <span className="font-medium">Beta Platform Launch</span>
                              <p className="text-xs text-gray-400 mt-1">Limited access release of the franchise design system to early adopters</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-500 mr-2">○</span>
                            <div>
                              <span className="font-medium">Strategic Partnerships</span>
                              <p className="text-xs text-gray-400 mt-1">Establish key manufacturing and distribution partnerships</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-500 mr-2">○</span>
                            <div>
                              <span className="font-medium">Token Smart Contract Development</span>
                              <p className="text-xs text-gray-400 mt-1">Development and audit of $VOID token on Solana blockchain</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phase 3 */}
                <div className="relative mb-10">
                  <div className="flex">
                    <div className="relative z-10 flex items-center justify-center flex-shrink-0 w-10 h-10 bg-gray-900 rounded-full border-2 border-gray-700">
                      <span className="text-gray-400 font-medium">3</span>
                    </div>
                    <div className="ml-6">
                      <div className="flex items-center">
                        <h3 className="text-xl font-bold text-gray-300">Pre-Launch Phase</h3>
                        <span className="ml-3 bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">Upcoming</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">Q1-Q2 2026</p>
                      
                      <div className="mt-3 bg-gray-900 p-4 rounded border border-gray-800">
                        <ul className="text-sm text-gray-400 space-y-3">
                          <li className="flex items-start">
                            <span className="text-gray-500 mr-2">○</span>
                            <div>
                              <span className="font-medium">Strategic Round</span>
                              <p className="text-xs text-gray-500 mt-1">Final private funding round at $0.70 per token</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-500 mr-2">○</span>
                            <div>
                              <span className="font-medium">Platform Refinement</span>
                              <p className="text-xs text-gray-500 mt-1">Testing and optimization based on beta user feedback</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-500 mr-2">○</span>
                            <div>
                              <span className="font-medium">Exchange Partnerships</span>
                              <p className="text-xs text-gray-500 mt-1">Secure listings on major centralized and decentralized exchanges</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-500 mr-2">○</span>
                            <div>
                              <span className="font-medium">Marketing Campaign</span>
                              <p className="text-xs text-gray-500 mt-1">Comprehensive global marketing initiative for platform and token launch</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phase 4 */}
                <div className="relative">
                  <div className="flex">
                    <div className="relative z-10 flex items-center justify-center flex-shrink-0 w-10 h-10 bg-gray-900 rounded-full border-2 border-gray-700">
                      <span className="text-gray-400 font-medium">4</span>
                    </div>
                    <div className="ml-6">
                      <div className="flex items-center">
                        <h3 className="text-xl font-bold text-gray-300">Public Launch Phase</h3>
                        <span className="ml-3 bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">Scheduled</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">March 15, 2026 and beyond</p>
                      
                      <div className="mt-3 bg-gray-900 p-4 rounded border border-gray-800">
                        <ul className="text-sm text-gray-400 space-y-3">
                          <li className="flex items-start">
                            <span className="text-gray-500 mr-2">○</span>
                            <div>
                              <span className="font-medium">$VOID Token Launch</span>
                              <p className="text-xs text-gray-500 mt-1">Public sale at $0.87 per token with initial exchange listings</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-500 mr-2">○</span>
                            <div>
                              <span className="font-medium">Full Platform Launch</span>
                              <p className="text-xs text-gray-500 mt-1">Public access to complete MISS VOID franchise design system</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-500 mr-2">○</span>
                            <div>
                              <span className="font-medium">Staking System Activation</span>
                              <p className="text-xs text-gray-500 mt-1">Revenue distribution mechanics go live for shareholders</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-500 mr-2">○</span>
                            <div>
                              <span className="font-medium">Global Expansion</span>
                              <p className="text-xs text-gray-500 mt-1">Scaling of designer network, manufacturing capabilities, and retail partnerships</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700 mt-8">
                <h3 className="text-lg font-medium text-white mb-2">Target Metrics at Launch</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800 p-3 rounded">
                    <p className="text-sm text-gray-400">Platform Users</p>
                    <p className="text-xl font-medium text-white">10,000+</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <p className="text-sm text-gray-400">Franchise Designers</p>
                    <p className="text-xl font-medium text-white">500+</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <p className="text-sm text-gray-400">Retail Partners</p>
                    <p className="text-xl font-medium text-white">75+</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'hiring' && (
            <div className="space-y-6">
              <p className="text-gray-300 mb-4">
                The success of Miss Void LTD depends on assembling a world-class team of professionals who combine technical expertise, creative vision, and business acumen. This hiring plan outlines the key roles, compensation, responsibilities, and qualifications we seek as we build the company.
              </p>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700 mb-6">
                <h3 className="text-lg font-medium text-white mb-3">Executive Leadership</h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-white font-medium">Chief Executive Officer</h4>
                      <span className="text-green-400 font-medium">$180,000 - $220,000/year</span>
                    </div>
                    <div className="mb-3">
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Core Team</span>
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Full-time</span>
                      <span className="bg-amber-900 text-xs text-amber-300 px-2 py-1 rounded">Priority Hire</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Responsibilities</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>Develop and execute company vision and strategy</li>
                          <li>Secure funding and manage investor relations</li>
                          <li>Build and lead the executive team</li>
                          <li>Ensure compliance with legal and regulatory requirements</li>
                          <li>Drive company growth and oversee business operations</li>
                          <li>Represent the company to stakeholders and the public</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Qualifications</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>7+ years of leadership experience in fashion tech or related industries</li>
                          <li>Proven track record of leading teams and driving business growth</li>
                          <li>Strong understanding of AI technologies and blockchain</li>
                          <li>Experience with fundraising and investor relations</li>
                          <li>Excellent communication and strategic thinking skills</li>
                          <li>Visionary mindset with practical execution abilities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-white font-medium">Chief Technology Officer</h4>
                      <span className="text-green-400 font-medium">$160,000 - $200,000/year</span>
                    </div>
                    <div className="mb-3">
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Core Team</span>
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Full-time</span>
                      <span className="bg-amber-900 text-xs text-amber-300 px-2 py-1 rounded">Priority Hire</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Responsibilities</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>Lead AI development and integration for design systems</li>
                          <li>Oversee blockchain infrastructure and token mechanics</li>
                          <li>Build and manage the technical team</li>
                          <li>Develop technology roadmap aligned with business strategy</li>
                          <li>Ensure platform security, scalability, and reliability</li>
                          <li>Establish technical standards and best practices</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Qualifications</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>10+ years of software development experience</li>
                          <li>5+ years in technical leadership roles</li>
                          <li>Deep expertise in AI/ML, preferably in generative models</li>
                          <li>Experience with blockchain technology, preferably Solana</li>
                          <li>Strong background in scalable web applications</li>
                          <li>Track record of successful product development</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-white font-medium">Creative Director</h4>
                      <span className="text-green-400 font-medium">$140,000 - $180,000/year</span>
                    </div>
                    <div className="mb-3">
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Core Team</span>
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Full-time</span>
                      <span className="bg-amber-900 text-xs text-amber-300 px-2 py-1 rounded">Priority Hire</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Responsibilities</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>Define and maintain MISS VOID's distinctive aesthetic</li>
                          <li>Guide AI model training for design generation</li>
                          <li>Oversee design quality across all product categories</li>
                          <li>Develop seasonal design directions and concepts</li>
                          <li>Collaborate with marketing on brand positioning</li>
                          <li>Build and mentor the design team</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Qualifications</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>8+ years in fashion design or related creative fields</li>
                          <li>Portfolio demonstrating strong conceptual design skills</li>
                          <li>Experience with digital design tools and processes</li>
                          <li>Understanding of AI-assisted creative workflows</li>
                          <li>Strong visual communication skills</li>
                          <li>Experience leading creative teams</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700 mb-6">
                <h3 className="text-lg font-medium text-white mb-3">Technical Team</h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-white font-medium">AI Research Engineer</h4>
                      <span className="text-green-400 font-medium">$130,000 - $170,000/year</span>
                    </div>
                    <div className="mb-3">
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Technical</span>
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Full-time</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Responsibilities</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>Develop and fine-tune AI models for fashion design</li>
                          <li>Research and implement cutting-edge generative algorithms</li>
                          <li>Create systems for design parameter control and customization</li>
                          <li>Optimize model performance and quality</li>
                          <li>Collaborate with design team on creative direction</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Qualifications</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>MS/PhD in Computer Science, AI, or related field</li>
                          <li>3+ years experience with generative AI models</li>
                          <li>Strong understanding of computer vision and image processing</li>
                          <li>Experience with PyTorch, TensorFlow, or similar</li>
                          <li>Publications or projects in generative image models</li>
                          <li>Interest in fashion and design (preferred)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-white font-medium">Blockchain Developer</h4>
                      <span className="text-green-400 font-medium">$120,000 - $160,000/year</span>
                    </div>
                    <div className="mb-3">
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Technical</span>
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Full-time</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Responsibilities</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>Develop smart contracts for $VOID token economics</li>
                          <li>Build staking and revenue distribution systems</li>
                          <li>Create secure wallet integration for the platform</li>
                          <li>Implement voting and governance mechanisms</li>
                          <li>Ensure security and auditability of blockchain systems</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Qualifications</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>4+ years experience in blockchain development</li>
                          <li>Experience with Solana, Rust, and SPL tokens</li>
                          <li>Strong understanding of cryptography and security</li>
                          <li>Previous work on token economics or DeFi projects</li>
                          <li>Experience with smart contract audits</li>
                          <li>Familiarity with web3 frontend integration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-white font-medium">Full-Stack Developer</h4>
                      <span className="text-green-400 font-medium">$110,000 - $150,000/year</span>
                    </div>
                    <div className="mb-3">
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Technical</span>
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Full-time</span>
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded">2 Positions</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Responsibilities</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>Develop and maintain the MISS VOID platform</li>
                          <li>Build user interfaces for design generation and customization</li>
                          <li>Implement manufacturing and distribution integrations</li>
                          <li>Ensure platform performance, security, and scalability</li>
                          <li>Collaborate with AI and blockchain teams on integration</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Qualifications</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>5+ years of full-stack development experience</li>
                          <li>Strong proficiency in React/Next.js and Node.js</li>
                          <li>Experience with databases and API development</li>
                          <li>Understanding of cloud infrastructure and deployment</li>
                          <li>Familiarity with web3 technologies (preferred)</li>
                          <li>Experience with e-commerce platforms (preferred)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700 mb-6">
                <h3 className="text-lg font-medium text-white mb-3">Business & Operations</h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-white font-medium">Chief Financial Officer</h4>
                      <span className="text-green-400 font-medium">$150,000 - $190,000/year</span>
                    </div>
                    <div className="mb-3">
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Core Team</span>
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Full-time</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Responsibilities</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>Manage company finances and financial planning</li>
                          <li>Oversee token economics and revenue distribution</li>
                          <li>Develop financial models and forecasts</li>
                          <li>Ensure compliance with financial regulations</li>
                          <li>Manage investor relations and fundraising</li>
                          <li>Build and lead the finance team</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Qualifications</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>CPA or MBA with 8+ years of financial management experience</li>
                          <li>Experience in startups or high-growth companies</li>
                          <li>Understanding of blockchain and token economics</li>
                          <li>Knowledge of fashion industry economics (preferred)</li>
                          <li>Experience with fundraising and investor management</li>
                          <li>Strong analytical and strategic thinking skills</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-white font-medium">Supply Chain Manager</h4>
                      <span className="text-green-400 font-medium">$100,000 - $140,000/year</span>
                    </div>
                    <div className="mb-3">
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Operations</span>
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Full-time</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Responsibilities</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>Develop manufacturing and distribution networks</li>
                          <li>Manage relationships with production partners</li>
                          <li>Optimize production costs and quality standards</li>
                          <li>Implement quality control processes</li>
                          <li>Ensure sustainable and ethical production practices</li>
                          <li>Coordinate logistics and inventory management</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Qualifications</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>5+ years in fashion supply chain management</li>
                          <li>Experience with on-demand manufacturing models</li>
                          <li>Knowledge of textiles and production techniques</li>
                          <li>Understanding of international logistics</li>
                          <li>Experience with digital production systems</li>
                          <li>Track record of optimizing production efficiency</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-white font-medium">Marketing Director</h4>
                      <span className="text-green-400 font-medium">$120,000 - $160,000/year</span>
                    </div>
                    <div className="mb-3">
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Marketing</span>
                      <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded mr-1">Full-time</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Responsibilities</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>Develop and execute marketing strategy</li>
                          <li>Build brand awareness and positioning</li>
                          <li>Manage social media and digital marketing campaigns</li>
                          <li>Coordinate PR and influencer relationships</li>
                          <li>Analyze market trends and consumer behavior</li>
                          <li>Drive user acquisition and retention</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-1">Qualifications</h5>
                        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
                          <li>8+ years in marketing, preferably in fashion</li>
                          <li>Experience with luxury or high-end brand marketing</li>
                          <li>Strong digital marketing and social media expertise</li>
                          <li>Understanding of crypto/web3 marketing (preferred)</li>
                          <li>Data-driven approach to campaign optimization</li>
                          <li>Creative problem-solving and strategic thinking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-4">Hiring Timeline & Budget</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-transparent">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-gray-400">Phase</th>
                        <th className="px-4 py-2 text-left text-gray-400">Timeline</th>
                        <th className="px-4 py-2 text-left text-gray-400">Roles</th>
                        <th className="px-4 py-2 text-left text-gray-400">Annual Budget</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr>
                        <td className="px-4 py-3 text-white">Phase 1: Founding Team</td>
                        <td className="px-4 py-3 text-white">Q1-Q2 2025</td>
                        <td className="px-4 py-3 text-gray-300 text-sm">CEO, CTO, Creative Director, AI Engineer, Blockchain Developer</td>
                        <td className="px-4 py-3 text-white">$750,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-white">Phase 2: Core Team</td>
                        <td className="px-4 py-3 text-white">Q3-Q4 2025</td>
                        <td className="px-4 py-3 text-gray-300 text-sm">CFO, Full-Stack Developers (2), Marketing Director</td>
                        <td className="px-4 py-3 text-white">$1.2M</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-white">Phase 3: Expansion</td>
                        <td className="px-4 py-3 text-white">Q1-Q2 2026</td>
                        <td className="px-4 py-3 text-gray-300 text-sm">Supply Chain Manager, UI/UX Designer, Community Manager, Content Creator</td>
                        <td className="px-4 py-3 text-white">$2.1M</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 text-center">
                  <button className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition">
                    Apply for Open Positions
                  </button>
                  <p className="text-xs text-gray-400 mt-2">
                    Miss Void LTD is committed to creating an inclusive workplace and encourages applications from diverse candidates.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
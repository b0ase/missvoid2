"use client";

import { useState } from 'react';

export default function VoidTokenPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">$VOID SHARES</h1>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="bg-black p-6 rounded-lg border border-gray-800 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <span className="text-black text-2xl font-bold">$V</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">$VOID</h2>
                <p className="text-gray-400">Company Shares in Miss Void LTD</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold">$0.87 USD</p>
              <p className="text-green-500">+12.4% (24h)</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-900 p-4 rounded border border-gray-700">
              <p className="text-gray-400 text-sm">Market Cap</p>
              <p className="text-xl font-medium">$8.7M</p>
            </div>
            <div className="bg-gray-900 p-4 rounded border border-gray-700">
              <p className="text-gray-400 text-sm">Circulating Shares</p>
              <p className="text-xl font-medium">10M $VOID</p>
            </div>
            <div className="bg-gray-900 p-4 rounded border border-gray-700">
              <p className="text-gray-400 text-sm">Total Shares</p>
              <p className="text-xl font-medium">25M $VOID</p>
            </div>
          </div>
          
          <div className="mb-6 border-b border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                <button 
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === 'overview' 
                      ? 'text-white border-white font-medium' 
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
              </li>
              <li className="mr-2">
                <button 
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === 'benefits' 
                      ? 'text-white border-white font-medium' 
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setActiveTab('benefits')}
                >
                  Shareholder Benefits
                </button>
              </li>
              <li className="mr-2">
                <button 
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === 'acquire' 
                      ? 'text-white border-white font-medium' 
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setActiveTab('acquire')}
                >
                  How to Acquire
                </button>
              </li>
              <li className="mr-2">
                <button 
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === 'staking' 
                      ? 'text-white border-white font-medium' 
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setActiveTab('staking')}
                >
                  Revenue Distribution
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
              <p className="text-gray-300">
                There are multiple ways to acquire $VOID shares, leveraging Solana's fast and secure blockchain for both centralized and decentralized exchanges.
              </p>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Centralized Exchanges (CEX)</h3>
                <p className="text-sm text-gray-400 mb-4">
                  $VOID shares are listed on the following centralized exchanges:
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
                <h3 className="text-lg font-medium text-white mb-3">Decentralized Exchanges (DEX)</h3>
                <p className="text-sm text-gray-400 mb-4">
                  $VOID shares are available on these Solana-based decentralized exchanges:
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
                <h3 className="text-lg font-medium text-white mb-3">Direct Investment</h3>
                <p className="text-sm text-gray-400 mb-3">
                  For substantial investments, qualified investors can contact:
                </p>
                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                  <p className="text-white font-medium">Investor Relations</p>
                  <p className="text-sm text-gray-400 mt-1">investors@missvoid.com</p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-white">Ready to invest in $VOID?</h3>
                  <p className="text-sm text-gray-400">Connect your Solana wallet to purchase shares directly</p>
                </div>
                <button className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition">
                  Connect Wallet
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
                        <th className="px-4 py-2 text-left text-gray-400">Tier</th>
                        <th className="px-4 py-2 text-left text-gray-400">$VOID Required</th>
                        <th className="px-4 py-2 text-left text-gray-400">Distribution %</th>
                        <th className="px-4 py-2 text-left text-gray-400">Benefits</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr>
                        <td className="px-4 py-3 text-white">Basic Shareholder</td>
                        <td className="px-4 py-3 text-white">500</td>
                        <td className="px-4 py-3 text-white">Base rate</td>
                        <td className="px-4 py-3 text-gray-400 text-sm">Standard revenue share, basic voting rights</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-white">Premium Shareholder</td>
                        <td className="px-4 py-3 text-white">2,500</td>
                        <td className="px-4 py-3 text-white">Base + 5%</td>
                        <td className="px-4 py-3 text-gray-400 text-sm">Enhanced revenue share, design discounts</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-white">Executive Shareholder</td>
                        <td className="px-4 py-3 text-white">10,000</td>
                        <td className="px-4 py-3 text-white">Base + 10%</td>
                        <td className="px-4 py-3 text-gray-400 text-sm">Priority revenue share, exclusive designs</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-white">Board Member</td>
                        <td className="px-4 py-3 text-white">50,000</td>
                        <td className="px-4 py-3 text-white">Base + 15%</td>
                        <td className="px-4 py-3 text-gray-400 text-sm">Premium revenue share, strategic voting</td>
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
        </div>
      </div>
    </div>
  );
} 
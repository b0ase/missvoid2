"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function VoidTokenPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">$VOID TOKEN</h1>
        <Link href="/design" className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition">
          Back to Design Studio
        </Link>
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
              <p className="text-gray-400 text-sm">Circulating Supply</p>
              <p className="text-xl font-medium">10M $VOID</p>
            </div>
            <div className="bg-gray-900 p-4 rounded border border-gray-700">
              <p className="text-gray-400 text-sm">Total Supply</p>
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
                    activeTab === 'utility' 
                      ? 'text-white border-white font-medium' 
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setActiveTab('utility')}
                >
                  Utility
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
                  Staking
                </button>
              </li>
            </ul>
          </div>
          
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <p className="text-gray-300">
                $VOID is the native utility token of the MISS VOID design ecosystem. It powers transactions, grants access to exclusive designs, and allows holders to participate in governance decisions. Built on the Solana blockchain as an SPL token, $VOID leverages lightning-fast transactions and minimal fees to create alignment between designers, manufacturers, and consumers.
              </p>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Token Distribution</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-1 border-b border-gray-800">
                    <span className="text-gray-300">Designer Community</span>
                    <span className="text-white">30%</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-800">
                    <span className="text-gray-300">Platform Development</span>
                    <span className="text-white">25%</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-800">
                    <span className="text-gray-300">Liquidity Pool</span>
                    <span className="text-white">20%</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-800">
                    <span className="text-gray-300">Team & Advisors</span>
                    <span className="text-white">15%</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-300">Community Treasury</span>
                    <span className="text-white">10%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Solana Advantages</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start py-1 border-b border-gray-800">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">Ultra-Low Fees</span>
                      <p className="text-gray-400 text-xs mt-1">Transaction costs on Solana are a fraction of a cent, making microtransactions economically viable.</p>
                    </div>
                  </div>
                  <div className="flex items-start py-1 border-b border-gray-800">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">Blazing Speed</span>
                      <p className="text-gray-400 text-xs mt-1">With 65,000 TPS, transactions confirm in under 400ms — perfect for real-time design marketplace interactions.</p>
                    </div>
                  </div>
                  <div className="flex items-start py-1 border-b border-gray-800">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">Energy Efficiency</span>
                      <p className="text-gray-400 text-xs mt-1">Solana's eco-friendly Proof of Stake consensus aligns with MISS VOID's sustainable fashion ethos.</p>
                    </div>
                  </div>
                  <div className="flex items-start py-1">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">Scalable Infrastructure</span>
                      <p className="text-gray-400 text-xs mt-1">Built to handle global fashion distribution networks without congestion or slowdowns.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300">
                The $VOID token implements a deflationary model where a percentage of each transaction is burned, decreasing the overall supply over time and potentially increasing value for long-term holders.
              </p>
            </div>
          )}
          
          {activeTab === 'utility' && (
            <div className="space-y-6">
              <p className="text-gray-300">
                $VOID tokens have multiple utilities within the MISS VOID ecosystem, creating a seamless experience for designers, manufacturers, and fashion enthusiasts.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Design Discounts</h3>
                  <p className="text-sm text-gray-400">
                    Receive up to 30% discount on design generation fees when paying with $VOID tokens. Higher tier holders receive priority access to new design features.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Manufacturing Priority</h3>
                  <p className="text-sm text-gray-400">
                    $VOID holders gain priority manufacturing slots, reducing production times by up to 50% during high-demand periods.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Exclusive Designs</h3>
                  <p className="text-sm text-gray-400">
                    Access token-gated exclusive design collections and limited editions only available to $VOID holders.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Governance Rights</h3>
                  <p className="text-sm text-gray-400">
                    Participate in platform governance decisions, including feature prioritization and ecosystem fund allocation.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Royalty Sharing</h3>
                  <p className="text-sm text-gray-400">
                    Stake $VOID to earn a share of platform royalties generated from successful designs in the marketplace.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Instant Settlements</h3>
                  <p className="text-sm text-gray-400">
                    Leverage Solana's speed for real-time payments to designers and manufacturers with no delays or high fees.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'acquire' && (
            <div className="space-y-6">
              <p className="text-gray-300">
                There are multiple ways to acquire $VOID tokens, leveraging Solana's fast and affordable infrastructure for both centralized and decentralized exchanges.
              </p>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Centralized Exchanges (CEX)</h3>
                <p className="text-sm text-gray-400 mb-4">
                  $VOID is listed on the following centralized exchanges:
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
                  $VOID is available on these Solana-based decentralized exchanges:
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
                <h3 className="text-lg font-medium text-white mb-3">Earn $VOID</h3>
                <p className="text-sm text-gray-400 mb-3">
                  Alternative ways to earn $VOID tokens:
                </p>
                <ul className="space-y-2 text-sm text-gray-400 list-disc pl-5">
                  <li>Create and sell popular MISS VOID designs (earn 5% of sale value in $VOID)</li>
                  <li>Participate in governance votes (earn voting rewards)</li>
                  <li>Stake existing tokens for APY returns</li>
                  <li>Refer new designers to the platform</li>
                  <li>Complete bounties in the MISS VOID ecosystem</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-white">Ready to get $VOID?</h3>
                  <p className="text-sm text-gray-400">Connect your Solana wallet to make purchases directly</p>
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
                Staking $VOID tokens on Solana provides multiple benefits, including passive income, increased platform utility, and governance weight, all with minimal gas fees and instant rewards.
              </p>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Staking Tiers</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-transparent">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-gray-400">Tier</th>
                        <th className="px-4 py-2 text-left text-gray-400">$VOID Required</th>
                        <th className="px-4 py-2 text-left text-gray-400">APY</th>
                        <th className="px-4 py-2 text-left text-gray-400">Benefits</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr>
                        <td className="px-4 py-3 text-white">Void Initiate</td>
                        <td className="px-4 py-3 text-white">500</td>
                        <td className="px-4 py-3 text-white">8%</td>
                        <td className="px-4 py-3 text-gray-400 text-sm">Basic discounts, standard manufacturing</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-white">Void Adept</td>
                        <td className="px-4 py-3 text-white">2,500</td>
                        <td className="px-4 py-3 text-white">12%</td>
                        <td className="px-4 py-3 text-gray-400 text-sm">15% discounts, priority manufacturing</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-white">Void Master</td>
                        <td className="px-4 py-3 text-white">10,000</td>
                        <td className="px-4 py-3 text-white">18%</td>
                        <td className="px-4 py-3 text-gray-400 text-sm">25% discounts, exclusive collections</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-white">Void Oracle</td>
                        <td className="px-4 py-3 text-white">50,000</td>
                        <td className="px-4 py-3 text-white">24%</td>
                        <td className="px-4 py-3 text-gray-400 text-sm">30% discounts, royalty sharing, governance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Staking Process</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Simple three-step process to start earning rewards:
                  </p>
                  <ol className="space-y-2 text-sm text-gray-400 list-decimal pl-5">
                    <li>Connect your Solana wallet containing $VOID tokens</li>
                    <li>Select the amount you wish to stake</li>
                    <li>Choose your lock period (longer periods = higher APY)</li>
                  </ol>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">Lock Periods</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    APY boost based on commitment length:
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-1 border-b border-gray-800">
                      <span className="text-gray-300">30 Days</span>
                      <span className="text-white">+0% (base APY)</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-800">
                      <span className="text-gray-300">90 Days</span>
                      <span className="text-white">+5% APY bonus</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-800">
                      <span className="text-gray-300">180 Days</span>
                      <span className="text-white">+10% APY bonus</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-300">365 Days</span>
                      <span className="text-white">+15% APY bonus</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-3">Staking Dashboard</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-800 p-3 rounded border border-gray-700">
                    <p className="text-xs text-gray-400">Your Staked $VOID</p>
                    <p className="text-xl font-medium text-white">0.00</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-700">
                    <p className="text-xs text-gray-400">Unclaimed Rewards</p>
                    <p className="text-xl font-medium text-white">0.00</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-700">
                    <p className="text-xs text-gray-400">Current APY</p>
                    <p className="text-xl font-medium text-white">0%</p>
                  </div>
                </div>
                <button className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition w-full">
                  Connect Phantom Wallet to Stake
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
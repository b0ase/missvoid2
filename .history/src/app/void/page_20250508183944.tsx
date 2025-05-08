"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function VoidTokenPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">$VOID SHARES</h1>
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
        </div>
      </div>
    </div>
  );
}

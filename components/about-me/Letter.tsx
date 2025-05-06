import React from 'react';
import Image from 'next/image';
import MyAntPFP from '@/public/images/svg/ant.svg';

export default function Letter() {
  return (
    <div className="relative px-5 lg:px-0">
      <h2 className="text-transparent">About Me</h2>
      <div className="relative">
        {/* Letter Bottom */}
        <div className="absolute left-0 top-0 z-10 h-full w-full -rotate-1 rounded-lg bg-letter-middle lg:-rotate-2"></div>
        {/* Letter Middle */}
        <div className="absolute left-1 top-1 z-20 h-[98%] w-[98%] -rotate-1 rounded-lg bg-letter-bottom lg:left-3 lg:top-10 lg:h-[95%] lg:w-[98%] lg:rotate-3"></div>
        {/* Letter Top */}
        <div className="relative z-30 -rotate-1 rounded-lg bg-letter-top shadow-letter-top lg:rotate-2 lg:rounded-xl">
          <article className="space-y-4 p-4 text-base text-white/80 lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
            <p>Hello everyone, I&apos;m Benjamin Wilson — a blockchain engineer based in Phoenix, AZ.</p>
            <p>
            I’m a Computer Science graduate from Sonoma State University, and over the past few years, I’ve focused deeply on building core blockchain infrastructure. Most of my work revolves around the Cosmos SDK, Bitcoin, and cross-chain bridge systems.
            </p>
            <p>
            I’ve helped design and implement bridges between Bitcoin and Cosmos, developed oracle systems, and deployed smart contracts using CosmWasm to support cross-chain DeFi. I’ve also worked on scalable architecture like DAG-based consensus systems, parallel transaction execution, and secure key management with TSS wallets.
            </p>
            <p>
            What drives me is building tools that are not only technically solid but actually move the needle in making decentralized tech more usable, secure, and scalable.
            </p>
            <p>So, my signature skills are as follows:</p>
            <ul className="list-disc pl-6">
              <li> Layer 1 Blockchain — Cosmos, Bitcoin, Ethereum, Solana</li>
              <li>Programming Language — Golang, Rust, C/C++, Python, JavaScript</li>
              <li>Tool — Hardhat, Ganache, OpenZepplin</li>
              <li> Devops — Docker, Kubernetes, AWS/Azure/GCP, Terraform, Github CI/CD, Grafana, Prometheus,
              Linux/Unix, Agile, Jira</li>
              <li>Cryptography — Zero-Knowledge Proofs (zk-SNARKs, zkSTARKs), Elliptic Curve Cryptography, Hash
              Functions</li>
            </ul>
            <p>
            I enjoy working with people who care about clean architecture, hard problems, and the future of open networks. If you’re building something meaningful in this space—or just want to bounce ideas around—let’s connect.
            </p>
            <p>Let&apos;s build the future together.</p>
            <div className="mb-10 font-handwriting text-4xl lg:text-6xl">
              <div className="text-white">My Ant</div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <Image src={MyAntPFP} alt="MyAnt PFP" />
              </div>
              <div className="lg:ml-4">
                <div className="text-xl font-semibold text-white lg:text-2xl">
                  Benjamin Wilson
                </div>
                <div className="text-[12px] lg:text-lg">
                  Blockchain Engineer
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

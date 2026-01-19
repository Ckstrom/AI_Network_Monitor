import React, { useState } from 'react';
import {
  Upload,
  Activity,
  AlertTriangle,
  CheckCircle,
  Network,
  FileText,
  ShieldAlert,
  Zap,
  Info
} from 'lucide-react';

export default function NetworkMonitor() {
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  // Mocks the file upload process
  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    setFile(uploadedFile);
    setAnalyzing(true);
    setShowDashboard(false);

    // Simulate a 1.5s analysis delay
    setTimeout(() => {
      setAnalyzing(false);
      setShowDashboard(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white font-sans relative">
      {/* Pink Left Border */}
      <div className="fixed left-0 top-0 bottom-0 w-1 bg-pink-500 z-20"></div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* --- Header Section --- */}
        <div className="mb-8 relative">
          <Network className="w-12 h-12 text-blue-900 absolute left-0 top-0" />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-900 tracking-tight mb-2">AI Network Monitor</h1>
            <p className="text-gray-600 text-lg">Upload Wireshark pcapng files for intelligent analysis</p>
          </div>
        </div>

        {/* --- Upload Section --- */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Upload className="w-5 h-5 text-blue-900" />
            <span className="text-blue-900 font-medium">Click to upload pcapng/pcap file</span>
            <span className="text-gray-500">Wireshark network capture files supported</span>
          </div>
          
          <div className="flex items-center gap-3">
            <label className="cursor-pointer">
              <input
                type="file"
                accept=".pcapng,.pcap"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <span className="inline-block px-4 py-2 bg-gray-100 border border-gray-300 rounded text-gray-700 hover:bg-gray-200 transition-colors">
                Choose File
              </span>
            </label>
            <span className="text-gray-500 text-sm">
              {file ? file.name : 'No file chosen'}
            </span>
          </div>

          {/* Success Banner */}
          {file && !analyzing && (
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-700 text-sm font-medium">
                File parsed successfully: PCAP format, 2.77 KB
              </span>
            </div>
          )}
        </div>

        {/* --- Loading Indicator --- */}
        {analyzing && (
          <div className="text-center py-12 animate-pulse">
            <Activity className="w-12 h-12 text-blue-900 mx-auto mb-4 animate-spin" />
            <h3 className="text-gray-700 text-xl font-medium">Analyzing network traffic...</h3>
          </div>
        )}

        {/* --- MAIN DASHBOARD --- */}
        {showDashboard && (
          <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700">

            {/* 1. Analysis Summary */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Activity className="w-6 h-6 text-blue-900" />
                Analysis Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The capture contains approximately 8-12 packets over a brief period, featuring mDNS/DNS-SD service discovery traffic (Googlecast devices), IPv6 Router Advertisements, SSDP discovery requests, and encrypted communications. The traffic originates from a local network (10.0.0.0/8) with devices advertising services and discovering UPnP devices.
              </p>
            </div>

            {/* 2. Traffic Statistics */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-green-600" />
                Traffic Statistics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="text-blue-900 text-sm mb-2 font-medium">Total Packets</div>
                  <div className="text-3xl font-bold text-gray-900">8-12</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="text-blue-900 text-sm mb-2 font-medium">Duration</div>
                  <div className="text-3xl font-bold text-gray-900">approximately 4-5 seconds</div>
                </div>
              </div>

              <div>
                <h3 className="text-blue-900 text-sm mb-4 font-medium">Protocols Detected</h3>
                <div className="flex flex-wrap gap-2">
                  {['Ethernet', 'IPv4', 'IPv6', 'UDP', 'TCP', 'mDNS', 'DNS-SD', 'SSDP', 'ICMPv6', 'Router Advertisement'].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-blue-100 text-blue-900 rounded-full text-sm font-medium border border-blue-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Security Findings */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ShieldAlert className="w-6 h-6 text-red-600" />
                Security Findings
              </h2>
              <div className="space-y-4">
                {/* Finding 1: Medium (Yellow) */}
                <div className="bg-[#FEF9C3] rounded-lg p-6 border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-700" />
                    <span className="text-yellow-800 font-bold text-sm tracking-wide">MEDIUM</span>
                  </div>
                  <h3 className="text-yellow-900 font-bold text-lg mb-2">mDNS traffic advertising Googlecast services</h3>
                  <p className="text-yellow-800 mb-4 font-medium">
                    (_googlecast._tcp.local) with identifier _17608BC8_sub, revealing device presence and capabilities on the network
                  </p>
                  <div className="text-yellow-900/80 text-sm">
                    <span className="font-bold">Recommendation:</span> Verify that Googlecast/Chromecast device advertising is intentional and limit mDNS traffic to trusted network segments using VLANs or firewall rules
                  </div>
                </div>

                 {/* Finding 2: Medium (Yellow) */}
                 <div className="bg-[#FEF9C3] rounded-lg p-6 border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-700" />
                    <span className="text-yellow-800 font-bold text-sm tracking-wide">MEDIUM</span>
                  </div>
                  <h3 className="text-yellow-900 font-bold text-lg mb-2">SSDP M-SEARCH discovery requests</h3>
                  <p className="text-yellow-800 mb-4 font-medium">
                    to 239.255.255.250:1900 searching for UPnP BasicDevice:1, indicating active device discovery from source 169.254.100.1
                  </p>
                  <div className="text-yellow-900/80 text-sm">
                    <span className="font-bold">Recommendation:</span> Audit UPnP-enabled devices as UPnP has known security vulnerabilities; consider disabling UPnP if not required or restricting to specific network segments
                  </div>
                </div>

                {/* Finding 3: Low (Blue) */}
                <div className="bg-[#DBEAFE] rounded-lg p-6 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-blue-700" />
                    <span className="text-blue-800 font-bold text-sm tracking-wide">LOW</span>
                  </div>
                  <h3 className="text-blue-900 font-bold text-lg mb-2">IPv6 Router Advertisements</h3>
                  <p className="text-blue-800 mb-4 font-medium">
                    from fe80::aa70:5dff:fe55:99fb advertising prefix 2601:45:8100:f480::/64 and routes to 2001:558:feed::/48, indicating dual-stack network configuration
                  </p>
                  <div className="text-blue-900/80 text-sm">
                    <span className="font-bold">Recommendation:</span> Ensure IPv6 is intentionally configured and properly secured with appropriate firewall rules; disable if not needed
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Performance Issues */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Issues</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"></div>
                <h3 className="text-yellow-800 font-bold text-lg mb-2">Multicast overhead</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Multiple mDNS packets sent to 224.0.0.251 and ff02::fb on both IPv4 and IPv6, showing redundant dual-stack service advertisements
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="text-blue-900 font-bold">Impact:</span> Minor network overhead from duplicate mDNS announcements; typical behavior but increases broadcast domain traffic
                </p>
              </div>
            </div>

            {/* 5. Detected Anomalies & Key Insights */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

              {/* Anomalies */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detected Anomalies</h2>
                <ul className="space-y-4">
                  {[
                    "Source IP 169.254.100.1 (APIPA/link-local range) sending SSDP discovery with TTL=4, suggesting a device without proper DHCP configuration",
                    "Multiple identical mDNS queries repeated across different packets with only timestamp changes, indicating periodic service announcements",
                    "IPv6 packets contain Router Advertisements with both 2001:558:feed::/48 (Comcast) and 2601:45:8100:f480::/64 prefixes",
                    "MAC address a8:70:5d:55:99:fb appears as both source and destination in different contexts, acting as router/gateway",
                    "Encrypted payload patterns in TCP streams to Google services show characteristic TLS handshake remnants"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Insights */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  Key Insights
                </h2>
                <ul className="space-y-4">
                  {[
                    "This appears to be residential or small office network traffic with consumer IoT devices (Chromecast) and cable modem IPv6 connectivity (Comcast/Xfinity prefixes)",
                    "The network is dual-stack (IPv4/IPv6) with active service discovery protocols enabled, typical of home networks with smart devices",
                    "Device with APIPA address 169.254.100.1 may have DHCP issues or be intentionally configured for link-local communication",
                    "No obvious malicious activity detected, but the presence of UPnP and mDNS increases"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
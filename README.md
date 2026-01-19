# AI_Network_Monitor
AI Network Monitor is a smart web application that employs artificial intelligence to analyze Wireshark network packet captures. This tool assists in transforming complex pcapng/pcap files into usable and valuable security insights. Using this application, network administrators and security professionals can perform network analysis more easily and understandably.

**Technologies & APIs Used:**

**AI & Analysis**

Anthropic Claude API (claude-sonnet-4-20250514):
    Used for intelligent network traffic analysis
    Analyzes packet patterns, protocols, and security threats
    Provides AI-powered insights and recommendations

Frontend Framework & Libraries:
    React (with Hooks: useState)
          Component-based UI architecture
          State management for file handling and analysis results

    Lucide React (v0.263.1)
          Icon library for UI elements (Upload, Activity, AlertTriangle, CheckCircle, TrendingUp, Network icons)

    Tailwind CSS
          Utility-first CSS framework for styling
          Responsive design and modern UI components


**File Processing**

Browser FileReader API
    Client-side file reading and parsing
    Converts pcapng/pcap files to ArrayBuffer for analysis
    Hex dump generation from binary packet data



**Network Protocols Supported**

Wireshark capture formats: .pcapng and .pcap
Detection of protocols: TCP, UDP, HTTP, HTTPS, DNS, and more

**Key Features**

Real-time file parsing in the browser
AI-powered security threat detection
Performance analysis and anomaly detection
No server-side storage (privacy-focused)
Severity-based security findings (Critical, High, Medium, Low)

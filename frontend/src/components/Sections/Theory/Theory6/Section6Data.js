export const headings = [
    { id: "networking", label: "1. Networking" },
    { id: "tcp", label: "2. TCP/IP" },
    { id: "udp", label: "3. UDP" },
    { id: "tcp-vs-udp", label: "4. TCP vs UDP" },
];

export const tips = [
    "Every time you open a website, your browser establishes a TCP connection — the famous 'three-way handshake' (SYN, SYN-ACK, ACK) happens before a single byte of data is sent.",
    "UDP is used in online games, video calls, and live streaming because losing a few packets is acceptable — but waiting for retransmission like TCP does would cause noticeable lag.",
    "Java's networking API is built on top of the operating system's socket API, which was originally developed for Unix in the 1980s and is still the foundation of internet communication today.",
];
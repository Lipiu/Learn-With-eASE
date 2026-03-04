import '../../Section/SectionTheory.css';

function Section6Theory(){
    return(
        <div className="theory-container">
            <h2 className="theory-title">
                Section 6 – Networking (TCP & UDP)
            </h2>

            <section id="networking">

                <h3>1. Networking in Java</h3>

                <p>
                    Java provides networking support through the <strong>java.net</strong> package.
                    The two main communication protocols are:
                </p>

                <ul>
                    <li><strong>TCP</strong> – reliable, connection-oriented communication.</li>
                    <li><strong>UDP</strong> – fast, connectionless communication.</li>
                </ul>

                <p>
                    Networking works using <strong>sockets</strong>, which represent endpoints
                    of communication between two machines.
                </p>
            </section>
            <section id="tcp">
                <h3>2. TCP (Transmission Control Protocol)</h3>

                <ul>
                    <li>Connection-oriented.</li>
                    <li>Reliable (guarantees delivery).</li>
                    <li>Ordered data transmission.</li>
                    <li>Used for web, file transfer, email, etc.</li>
                </ul>

                <h4>TCP Server Example</h4>

                <pre>
                    {
                        'class SimpleTCPServer {\n' +
                        '\tpublic static void main(String[] args) throws Exception {\n' +
                        '\t\tServerSocket serverSocket = new ServerSocket(5000);\n' +
                        '\t\tSystem.out.println("Server started...");\n\n' +
                        '\t\tSocket socket = serverSocket.accept();\n' +
                        '\t\tBufferedReader reader = new BufferedReader(\n' +
                        '\t\t\tnew InputStreamReader(socket.getInputStream()));\n' +
                        '\t\tPrintWriter writer = new PrintWriter(socket.getOutputStream(), true);\n\n' +
                        '\t\tString message = reader.readLine();\n' +
                        '\t\tSystem.out.println("Client says: " + message);\n\n' +
                        '\t\twriter.println("Hello Client!");\n\n' +
                        '\t\tsocket.close();\n' +
                        '\t\tserverSocket.close();\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <h4>TCP Client Example</h4>

                <pre>
                    {
                        'class SimpleTCPClient {\n' +
                        '\tpublic static void main(String[] args) throws Exception {\n' +
                        '\t\tSocket socket = new Socket("localhost", 5000);\n\n' +
                        '\t\tPrintWriter writer = new PrintWriter(socket.getOutputStream(), true);\n' +
                        '\t\tBufferedReader reader = new BufferedReader(\n' +
                        '\t\t\tnew InputStreamReader(socket.getInputStream()));\n\n' +
                        '\t\twriter.println("Hello Server!");\n' +
                        '\t\tSystem.out.println("Server says: " + reader.readLine());\n\n' +
                        '\t\tsocket.close();\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    The server waits using <code>ServerSocket.accept()</code>.
                    The client connects using <code>new Socket(host, port)</code>.
                    TCP ensures reliable and ordered communication.
                </p>
            </section>
            <section id="udp">
                <h3>3. UDP (User Datagram Protocol)</h3>

                <ul>
                    <li>Connectionless.</li>
                    <li>No delivery guarantee.</li>
                    <li>Faster than TCP.</li>
                    <li>Used in streaming, gaming, DNS.</li>
                </ul>

                <h4>UDP Server Example</h4>

                <pre>
                    {
                        'class SimpleUDPServer {\n' +
                        '\tpublic static void main(String[] args) throws Exception {\n' +
                        '\t\tDatagramSocket socket = new DatagramSocket(6000);\n\n' +
                        '\t\tbyte[] buffer = new byte[256];\n' +
                        '\t\tDatagramPacket packet = new DatagramPacket(buffer, buffer.length);\n\n' +
                        '\t\tsocket.receive(packet);\n' +
                        '\t\tString message = new String(packet.getData()).trim();\n' +
                        '\t\tSystem.out.println("Client says: " + message);\n\n' +
                        '\t\tString response = "Hello UDP Client!";\n' +
                        '\t\tDatagramPacket responsePacket = new DatagramPacket(\n' +
                        '\t\t\tresponse.getBytes(), response.length(),\n' +
                        '\t\t\tpacket.getAddress(), packet.getPort());\n\n' +
                        '\t\tsocket.send(responsePacket);\n' +
                        '\t\tsocket.close();\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <h4>UDP Client Example</h4>

                <pre>
                    {
                        'class SimpleUDPClient {\n' +
                        '\tpublic static void main(String[] args) throws Exception {\n' +
                        '\t\tDatagramSocket socket = new DatagramSocket();\n\n' +
                        '\t\tInetAddress address = InetAddress.getByName("localhost");\n' +
                        '\t\tbyte[] message = "Hello UDP Server!".getBytes();\n\n' +
                        '\t\tDatagramPacket packet = new DatagramPacket(\n' +
                        '\t\t\tmessage, message.length, address, 6000);\n' +
                        '\t\tsocket.send(packet);\n\n' +
                        '\t\tbyte[] buffer = new byte[256];\n' +
                        '\t\tDatagramPacket responsePacket = new DatagramPacket(buffer, buffer.length);\n' +
                        '\t\tsocket.receive(responsePacket);\n\n' +
                        '\t\tSystem.out.println("Server says: " +\n' +
                        '\t\t\tnew String(responsePacket.getData()).trim());\n\n' +
                        '\t\tsocket.close();\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    UDP uses <code>DatagramSocket</code> and <code>DatagramPacket</code>.
                    There is no connection setup like TCP.
                    Messages are sent independently.
                </p>
            </section>
            <section id="tcp-vs-udp">
                <h3>4. TCP vs UDP Comparison</h3>

                <ul>
                    <li><strong>TCP</strong> → Reliable, ordered, slower.</li>
                    <li><strong>UDP</strong> → Fast, connectionless, no guarantee.</li>
                    <li>TCP uses ServerSocket & Socket.</li>
                    <li>UDP uses DatagramSocket & DatagramPacket.</li>
                </ul>

            </section>
        </div>
    )
}

export default Section6Theory;

var myVariable = `
{"0": {
    "doc": "TCP/IP Network Setup",
    "title": "TCP/IP Network Setup",
    "content": "For the TCP/IP demonstrations, both the target board and the host computer should be in the same network. The host computer can be connected to a router via an ethernet cable or Wi-Fi. The target board should be connected to the router via an ethernet cable. Please refer to the following connection diagram. | All the TCP/IP Application Demonstration projects that are part of this distribution use the Microchip hardware development boards. They are pre-configured with specific PHY Drivers. The default PHY driver can be changed as some of the hardware boards support different PHY daughter boards. To use a different PHY for a specific board, use MPLAB® Harmony Configurator (MHC) to select and configure the PHY. Make sure that correct PHY address and configuration flags are used for the particular PHY daughter board. The MII/RMII and I/O configuration flags should match the hardware for the PHY board. The TCP/IP application demonstrations assume that IPv4 is enabled. If IPv4 is not enabled in MHC, the code in app.c will not build and needs to be updated to remove the IPv4 dependencies. | All the demos have DHCP enabled, and expect a DHCP server to be available. If there is no DHCP server, then the default static IP address will be used: 192.168.100.11. If this static address does not match your network settings, use MPLAB® Harmony Configurator (MHC) to modify the static IP address of the network interface. | The NetBIOS name of the TCP/IP application is specified during the initialization of TCP/IP stack. It is the hostName member of TCPIP_HOSTS_CONFIGURATION structure. The NetBIOS service must be enabled in demonstration configuration, for the TCP/IP demonstration to respond to NetBIOS queries. Alternatively, use the IPv4 or IPv6 address (if IPv6 is enabled) of the board directly. | The IPv4 and IPv6 addresses can be obtained by running the TCP/IP Discovery utility on the computer. It requires the TCP/IP Announce module enabled in demonstration configuration, through MHC. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/readme.html",
    "relUrl": "/apps/readme.html"
  },"1": {
    "doc": "TCP/IP WolfSSL TCP Server",
    "title": "TCP/IP WolfSSL TCP Server",
    "content": "This configuration demonstrates creating a simple Internet Web server, that operates with clear text (TCP Port 80), and with encrypted text (TCP Port 443). If IPv6 is enabled than the demonstration also serves both types of connections on IPv6. The Web server only serves one page with the text ‘Nothing Here’ to all Web clients. This demonstration uses the NET_PRES layer for encrypted communication through an external service provider for TLS support. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_server/readme.html#tcpip-wolfssl-tcp-server",
    "relUrl": "/apps/wolfssl_tcp_server/readme.html#tcpip-wolfssl-tcp-server"
  },"2": {
    "doc": "TCP/IP WolfSSL TCP Server",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP WolfSSL TCP server application on PIC32MZ EF family on both bare metal and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_server/readme.html#development-kits",
    "relUrl": "/apps/wolfssl_tcp_server/readme.html#development-kits"
  },"3": {
    "doc": "TCP/IP WolfSSL TCP Server",
    "title": "TCP/IP WolfSSL TCP Server",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_server/readme.html",
    "relUrl": "/apps/wolfssl_tcp_server/readme.html"
  },"4": {
    "doc": "TCP/IP TCP Server",
    "title": "TCP/IP TCP Server Application",
    "content": "The TCP/IP TCP Server configuration demonstrates creating a network server that uses the MPLAB Harmony TCP API to create a TCP/IP echo server on port 9760. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_server/readme.html#tcpip-tcp-server-application",
    "relUrl": "/apps/tcpip_tcp_server/readme.html#tcpip-tcp-server-application"
  },"5": {
    "doc": "TCP/IP TCP Server",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP TCP Server Application on PIC32MZ EF &amp; DA family on both bare metal and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_server/readme.html#development-kits",
    "relUrl": "/apps/tcpip_tcp_server/readme.html#development-kits"
  },"6": {
    "doc": "TCP/IP TCP Server",
    "title": "TCP/IP TCP Server",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_server/readme.html",
    "relUrl": "/apps/tcpip_tcp_server/readme.html"
  },"7": {
    "doc": "TCP/IP Berkeley TCP Client",
    "title": "TCP/IP Berkeley TCP Client",
    "content": "The Berkeley TCP Client configuration demonstrates creating a network client with the Berkeley API to make a TCP/IP connection to a web server. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_client/readme.html#tcpip-berkeley-tcp-client",
    "relUrl": "/apps/berkeley_tcp_client/readme.html#tcpip-berkeley-tcp-client"
  },"8": {
    "doc": "TCP/IP Berkeley TCP Client",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP Berkeley TCP Client Application on PIC32MZ EF and DA family on both Bare-metal ( non-RTOS ) and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_client/readme.html#development-kits",
    "relUrl": "/apps/berkeley_tcp_client/readme.html#development-kits"
  },"9": {
    "doc": "TCP/IP Berkeley TCP Client",
    "title": "TCP/IP Berkeley TCP Client",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_client/readme.html",
    "relUrl": "/apps/berkeley_tcp_client/readme.html"
  },"10": {
    "doc": "TCP/IP TCP Client",
    "title": "TCP/IP TCP Client",
    "content": "The TCP Client configuration demonstrates creating a network client with the MPLAB Harmony TCP API to make a TCP/IP connection to a web server. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client/readme.html#tcpip-tcp-client",
    "relUrl": "/apps/tcpip_tcp_client/readme.html#tcpip-tcp-client"
  },"11": {
    "doc": "TCP/IP TCP Client",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP TCP Client Application on PIC32MZ EF &amp; DA family on both bare metal and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client/readme.html#development-kits",
    "relUrl": "/apps/tcpip_tcp_client/readme.html#development-kits"
  },"12": {
    "doc": "TCP/IP TCP Client",
    "title": "TCP/IP TCP Client",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client/readme.html",
    "relUrl": "/apps/tcpip_tcp_client/readme.html"
  },"13": {
    "doc": "TCP/IP WolfSSL TCP Client",
    "title": "TCP/IP WolfSSL TCP Client",
    "content": "This configuration demonstrates creating an Internet client that uses the MPLAB Harmony TCP API to create a TCP/IP connection to a Web server. The connection can either be clear text, or it can use TLS to encrypt the connection with wolfSSL. The demonstration can use either IPv4 or IPv6. This demonstration uses the NET_PRES layer for encrypted communication through an external service provider for TLS support. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_client/readme.html#tcpip-wolfssl-tcp-client",
    "relUrl": "/apps/wolfssl_tcp_client/readme.html#tcpip-wolfssl-tcp-client"
  },"14": {
    "doc": "TCP/IP WolfSSL TCP Client",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP WolfSSL TCP Client application on PIC32MZ EF family on both bare metal and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_client/readme.html#development-kits",
    "relUrl": "/apps/wolfssl_tcp_client/readme.html#development-kits"
  },"15": {
    "doc": "TCP/IP WolfSSL TCP Client",
    "title": "TCP/IP WolfSSL TCP Client",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_client/readme.html",
    "relUrl": "/apps/wolfssl_tcp_client/readme.html"
  },"16": {
    "doc": "TCP/IP UDP Client",
    "title": "TCP/IP UDP Client",
    "content": "The UDP Client configuration demonstrates creating a network Client with the API to make a UDP/IP connection to a specified port. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client/readme.html#tcpip-udp-client",
    "relUrl": "/apps/tcpip_udp_client/readme.html#tcpip-udp-client"
  },"17": {
    "doc": "TCP/IP UDP Client",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP UDP Client Application on PIC32MZ EF &amp; DA family on both bare metal(non rtos) and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client/readme.html#development-kits",
    "relUrl": "/apps/tcpip_udp_client/readme.html#development-kits"
  },"18": {
    "doc": "TCP/IP UDP Client",
    "title": "TCP/IP UDP Client",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client/readme.html",
    "relUrl": "/apps/tcpip_udp_client/readme.html"
  },"19": {
    "doc": "TCP/IP Berkeley TCP Server",
    "title": "TCP/IP Berkeley TCP Server",
    "content": "The Berkeley TCP Server configuration demonstrates creating a creating a network server that uses the Berkeley API to create a TCP/IP echo server on port 9760. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_server/readme.html#tcpip-berkeley-tcp-server",
    "relUrl": "/apps/berkeley_tcp_server/readme.html#tcpip-berkeley-tcp-server"
  },"20": {
    "doc": "TCP/IP Berkeley TCP Server",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP Berkeley TCP Server Application on PIC32MZ EF and DA family on both Bare-metal ( non-RTOS ) and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_server/readme.html#development-kits",
    "relUrl": "/apps/berkeley_tcp_server/readme.html#development-kits"
  },"21": {
    "doc": "TCP/IP Berkeley TCP Server",
    "title": "TCP/IP Berkeley TCP Server",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_server/readme.html",
    "relUrl": "/apps/berkeley_tcp_server/readme.html"
  },"22": {
    "doc": "TCP/IP TCP and UDP Client Server",
    "title": "TCP/IP TCP and UDP Client Server",
    "content": "The TCP Client Server configuration demonstrates creating a network client and a network server that uses the MPLAB Harmony TCP API. This demonstration is a combination of the TCP/IP Client and TCP/IP Server application for both TCP and UDP sockets. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_client_server/readme.html#tcpip-tcp-and-udp-client-server",
    "relUrl": "/apps/tcpip_client_server/readme.html#tcpip-tcp-and-udp-client-server"
  },"23": {
    "doc": "TCP/IP TCP and UDP Client Server",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP TCP Client Server Application on PIC32MZ EF &amp; DA family for both bare-metal(non-RTOS) and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_client_server/readme.html#development-kits",
    "relUrl": "/apps/tcpip_client_server/readme.html#development-kits"
  },"24": {
    "doc": "TCP/IP TCP and UDP Client Server",
    "title": "TCP/IP TCP and UDP Client Server",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_client_server/readme.html",
    "relUrl": "/apps/tcpip_client_server/readme.html"
  },"25": {
    "doc": "TCP/IP WolfSSL MQTT",
    "title": "TCP/IP WolfSSL MQTT Application",
    "content": "The wolfMQTT application demonstrates a simple MQTT application using the 3rd party wolfMQTT library. The application uses the console to implement a simple set of commands to start a MQTT connection to a selected broker. The connection parameters can be adjusted using various MQTT related commands. This demonstration uses the NET_PRES layer which supports encrypted communication through an external service provider for TLS support (usually wolfSSL). ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfmqtt_demo/readme.html#tcpip-wolfssl-mqtt-application",
    "relUrl": "/apps/wolfmqtt_demo/readme.html#tcpip-wolfssl-mqtt-application"
  },"26": {
    "doc": "TCP/IP WolfSSL MQTT",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP WolFMQTT Application on PIC32MZ EF family development kits. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfmqtt_demo/readme.html#development-kits",
    "relUrl": "/apps/wolfmqtt_demo/readme.html#development-kits"
  },"27": {
    "doc": "TCP/IP WolfSSL MQTT",
    "title": "TCP/IP WolfSSL MQTT",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfmqtt_demo/readme.html",
    "relUrl": "/apps/wolfmqtt_demo/readme.html"
  },"28": {
    "doc": "TCP/IP UDP Client Server",
    "title": "TCP/IP UDP Client Server",
    "content": "The UDP Client Server configuration demonstrates creating a network client and a network server that uses the MPLAB Harmony UDP API. This demonstration shows how the UDP/IP loopback works and it is a combination of the TCP/IP UDP Client and TCP/IP UDP Server application. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client_server/readme.html#tcpip-udp-client-server",
    "relUrl": "/apps/tcpip_udp_client_server/readme.html#tcpip-udp-client-server"
  },"29": {
    "doc": "TCP/IP UDP Client Server",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP UDP Client Server Application on PIC32MZ EF &amp; DA family on both bare metal(non rtos) and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client_server/readme.html#development-kits",
    "relUrl": "/apps/tcpip_udp_client_server/readme.html#development-kits"
  },"30": {
    "doc": "TCP/IP UDP Client Server",
    "title": "TCP/IP UDP Client Server",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client_server/readme.html",
    "relUrl": "/apps/tcpip_udp_client_server/readme.html"
  },"31": {
    "doc": "TCP/IP Berkeley UDP Client",
    "title": "TCP/IP Berkeley UDP Client",
    "content": "The Berkeley UDP Client configuration demonstrates creating a network Client with the Berkeley API to make a UDP/IP connection to a specified port. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_client/readme.html#tcpip-berkeley-udp-client",
    "relUrl": "/apps/berkeley_udp_client/readme.html#tcpip-berkeley-udp-client"
  },"32": {
    "doc": "TCP/IP Berkeley UDP Client",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP Berkeley UDP Client Application on PIC32MZ EF and DA family on both Bare-metal ( non-RTOS ) and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_client/readme.html#development-kits",
    "relUrl": "/apps/berkeley_udp_client/readme.html#development-kits"
  },"33": {
    "doc": "TCP/IP Berkeley UDP Client",
    "title": "TCP/IP Berkeley UDP Client",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_client/readme.html",
    "relUrl": "/apps/berkeley_udp_client/readme.html"
  },"34": {
    "doc": "TCP/IP SNMP SDCARD FATFS Application",
    "title": "TCP/IP SNMP SDCARD FATFS Application",
    "content": "The Microchip SNMP Server is a multi-lingual implementation, which supports SNMPv1, V2c, and V3 server features simultaneously. The SNMP Server is implemented to address the requirements of embedded applications and works with both IPv4 and IPv6 addresses. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_sdcard_fatfs/readme.html#tcpip-snmp-sdcard-fatfs-application",
    "relUrl": "/apps/snmpv3_sdcard_fatfs/readme.html#tcpip-snmp-sdcard-fatfs-application"
  },"35": {
    "doc": "TCP/IP SNMP SDCARD FATFS Application",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the SNMP Application on PIC32MZ EF &amp; DA family on both bare metal (non-RTOS) and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_sdcard_fatfs/readme.html#development-kits",
    "relUrl": "/apps/snmpv3_sdcard_fatfs/readme.html#development-kits"
  },"36": {
    "doc": "TCP/IP SNMP SDCARD FATFS Application",
    "title": "TCP/IP SNMP SDCARD FATFS Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_sdcard_fatfs/readme.html",
    "relUrl": "/apps/snmpv3_sdcard_fatfs/readme.html"
  },"37": {
    "doc": "TCP/IP Web Server NVM MPFS Application",
    "title": "TCP/IP Web Server NVM MPFS Application",
    "content": "The Web Server Non-volatile Memory (NVM) MPFS configuration demonstrates creating an HTTP web server on a Microchip evaluation board. The Non-Volatile Memory (NVM) Microchip Proprietary File System (MPFS) is used for storing the web pages in the internal Flash. This demonstration uses the HTTP server which supports encrypted communication through the NET_PRES layer and an external service provider for TLS support. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_server_nvm_mpfs/readme.html#tcpip-web-server-nvm-mpfs-application",
    "relUrl": "/apps/web_server_nvm_mpfs/readme.html#tcpip-web-server-nvm-mpfs-application"
  },"38": {
    "doc": "TCP/IP Web Server NVM MPFS Application",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the Web Server Application on PIC32MZ EF family on both bare metal and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_server_nvm_mpfs/readme.html#development-kits",
    "relUrl": "/apps/web_server_nvm_mpfs/readme.html#development-kits"
  },"39": {
    "doc": "TCP/IP Web Server NVM MPFS Application",
    "title": "TCP/IP Web Server NVM MPFS Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_server_nvm_mpfs/readme.html",
    "relUrl": "/apps/web_server_nvm_mpfs/readme.html"
  },"40": {
    "doc": "TCP/IP UDP Server",
    "title": "TCP/IP UDP Server",
    "content": "The UDP Server configuration demonstrates creating a network server that uses the MPLAB Harmony UDP API to create a UDP/IP echo server on port 9760. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_server/readme.html#tcpip-udp-server",
    "relUrl": "/apps/tcpip_udp_server/readme.html#tcpip-udp-server"
  },"41": {
    "doc": "TCP/IP UDP Server",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP UDP Server Application on PIC32MZ EF &amp; DA family on both bare metal(non rtos) and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_server/readme.html#development-kits",
    "relUrl": "/apps/tcpip_udp_server/readme.html#development-kits"
  },"42": {
    "doc": "TCP/IP UDP Server",
    "title": "TCP/IP UDP Server",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_server/readme.html",
    "relUrl": "/apps/tcpip_udp_server/readme.html"
  },"43": {
    "doc": "TCP/IP Berkeley UDP Relay",
    "title": "TCP/IP Berkeley UDP Relay",
    "content": "The Berkeley UDP Relay configuration demonstrates the use of multiple sockets for both sending and receiving. There are three different sub-functions of this application: . | UDP Relay, which accepts UDP packets on one socket, and sends the packets out on a different socket | UDP Relay Client, which generates UDP traffic that is compatible with the UDP Relay Server | UDP Relay Server, which receives and checks traffic for a packet count and reports is any packets are dropped | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_relay/readme.html#tcpip-berkeley-udp-relay",
    "relUrl": "/apps/berkeley_udp_relay/readme.html#tcpip-berkeley-udp-relay"
  },"44": {
    "doc": "TCP/IP Berkeley UDP Relay",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP Berkeley UDP Relay Application on PIC32MZ EF and DA family on both Bare-metal ( non-RTOS ) and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_relay/readme.html#development-kits",
    "relUrl": "/apps/berkeley_udp_relay/readme.html#development-kits"
  },"45": {
    "doc": "TCP/IP Berkeley UDP Relay",
    "title": "TCP/IP Berkeley UDP Relay",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_relay/readme.html",
    "relUrl": "/apps/berkeley_udp_relay/readme.html"
  },"46": {
    "doc": "TCP/IP SNMP NVM MPFS Application",
    "title": "TCP/IP SNMP NVM MPFS Application",
    "content": "The Microchip SNMP Server is a multi-lingual implementation, which supports SNMPv1, V2c, and V3 server features simultaneously. The SNMP Server is implemented to address the requirements of embedded applications and works with both IPv4 and IPv6 addresses. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_nvm_mpfs/readme.html#tcpip-snmp-nvm-mpfs-application",
    "relUrl": "/apps/snmpv3_nvm_mpfs/readme.html#tcpip-snmp-nvm-mpfs-application"
  },"47": {
    "doc": "TCP/IP SNMP NVM MPFS Application",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the SNMP Application on PIC32MZ EF &amp; DA family on both bare metal (non-RTOS) and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_nvm_mpfs/readme.html#development-kits",
    "relUrl": "/apps/snmpv3_nvm_mpfs/readme.html#development-kits"
  },"48": {
    "doc": "TCP/IP SNMP NVM MPFS Application",
    "title": "TCP/IP SNMP NVM MPFS Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_nvm_mpfs/readme.html",
    "relUrl": "/apps/snmpv3_nvm_mpfs/readme.html"
  },"49": {
    "doc": "TCP/IP Web NET Server SDCARD Application",
    "title": "TCP/IP WEB-NET Server SDCARD FATFS Application",
    "content": "The Web Net Server SDCard configuration demonstrates creating an HTTP web server on a Microchip evaluation board. The FAT FS File System is used for storing the web pages on an external SD Card. This demonstration uses the HTTP_NET server which supports encrypted communication through the NET_PRES layer and an external service provider for TLS support. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_sdcard_fatfs/readme.html#tcpip-web-net-server-sdcard-fatfs-application",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/readme.html#tcpip-web-net-server-sdcard-fatfs-application"
  },"50": {
    "doc": "TCP/IP Web NET Server SDCARD Application",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the Web Net Server Application on PIC32MZ EF &amp; DA family on both bare-metal and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_sdcard_fatfs/readme.html#development-kits",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/readme.html#development-kits"
  },"51": {
    "doc": "TCP/IP Web NET Server SDCARD Application",
    "title": "TCP/IP Web NET Server SDCARD Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_sdcard_fatfs/readme.html",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/readme.html"
  },"52": {
    "doc": "TCP/IP WEB-NET & FTP SERVER with MPFS & FATF FS",
    "title": "TCP/IP WEB &amp; FTP SERVER Application with MPFS &amp; FATF FS",
    "content": "The Web and FTP Server configuration demonstrates creating an application where HTTP web server will use MPFS FS with NVM media and FTP server will use FAT FS with SDCARD as media. The Non-Volatile Memory (NVM) Microchip Proprietary File System (MPFS) is used for storing the web pages in the internal Flash. The FAT FS File System is used for storing any type of files and FTP server will read from and write to this FS. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_ftp_server_mpfs_fatfs/readme.html#tcpip-web--ftp-server-application-with-mpfs--fatf-fs",
    "relUrl": "/apps/web_ftp_server_mpfs_fatfs/readme.html#tcpip-web--ftp-server-application-with-mpfs--fatf-fs"
  },"53": {
    "doc": "TCP/IP WEB-NET & FTP SERVER with MPFS & FATF FS",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the multi media TCP/IP Application on PIC32MZ EF &amp; DA family on both bare-metal ( non-RTOS ) and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_ftp_server_mpfs_fatfs/readme.html#development-kits",
    "relUrl": "/apps/web_ftp_server_mpfs_fatfs/readme.html#development-kits"
  },"54": {
    "doc": "TCP/IP WEB-NET & FTP SERVER with MPFS & FATF FS",
    "title": "TCP/IP WEB-NET & FTP SERVER with MPFS & FATF FS",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_ftp_server_mpfs_fatfs/readme.html",
    "relUrl": "/apps/web_ftp_server_mpfs_fatfs/readme.html"
  },"55": {
    "doc": "TCP/IP Berkeley UDP Server",
    "title": "TCP/IP Berkeley UDP Server",
    "content": "The Berkeley UDP Server configuration demonstrates creating a network client with the Berkeley API to make a UDP/IP connection to a specified port. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_server/readme.html#tcpip-berkeley-udp-server",
    "relUrl": "/apps/berkeley_udp_server/readme.html#tcpip-berkeley-udp-server"
  },"56": {
    "doc": "TCP/IP Berkeley UDP Server",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP Berkeley UDP Server Application on PIC32MZ EF and DA family on both Bare-metal ( non-RTOS ) and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_server/readme.html#development-kits",
    "relUrl": "/apps/berkeley_udp_server/readme.html#development-kits"
  },"57": {
    "doc": "TCP/IP Berkeley UDP Server",
    "title": "TCP/IP Berkeley UDP Server",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_server/readme.html",
    "relUrl": "/apps/berkeley_udp_server/readme.html"
  },"58": {
    "doc": "TCP/IP IPERF Application",
    "title": "TCP/IP IPERF Application",
    "content": "Iperf is a standard networking tool that helps to measure networking bandwidth and performance. The iperf demo creates an application that can be used for running iperf and measuring the network performance. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/iperf_demo/readme.html#tcpip-iperf-application",
    "relUrl": "/apps/iperf_demo/readme.html#tcpip-iperf-application"
  },"59": {
    "doc": "TCP/IP IPERF Application",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the Iperf Application on PIC32MZ EF &amp; DA family on both bare metal and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/iperf_demo/readme.html#development-kits",
    "relUrl": "/apps/iperf_demo/readme.html#development-kits"
  },"60": {
    "doc": "TCP/IP IPERF Application",
    "title": "TCP/IP IPERF Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/iperf_demo/readme.html",
    "relUrl": "/apps/iperf_demo/readme.html"
  },"61": {
    "doc": "TCP/IP Web NET Server NVM MPFS Application",
    "title": "TCP/IP Web NET Server NVM MPFS Application",
    "content": "The Web Net Server Non-volatile Memory (NVM) MPFS configuration demonstrates creating an HTTP web server on a Microchip evaluation board. The Non-Volatile Memory (NVM) Microchip Proprietary File System (MPFS) is used for storing the web pages in the internal Flash. This demonstration uses the HTTP_NET server which supports encrypted communication through the NET_PRES layer and an external service provider for TLS support. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_nvm_mpfs/readme.html#tcpip-web-net-server-nvm-mpfs-application",
    "relUrl": "/apps/web_net_server_nvm_mpfs/readme.html#tcpip-web-net-server-nvm-mpfs-application"
  },"62": {
    "doc": "TCP/IP Web NET Server NVM MPFS Application",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the Web Server Application on PIC32MZ EF &amp; DA family on both bare metal and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_nvm_mpfs/readme.html#development-kits",
    "relUrl": "/apps/web_net_server_nvm_mpfs/readme.html#development-kits"
  },"63": {
    "doc": "TCP/IP Web NET Server NVM MPFS Application",
    "title": "TCP/IP Web NET Server NVM MPFS Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_nvm_mpfs/readme.html",
    "relUrl": "/apps/web_net_server_nvm_mpfs/readme.html"
  },"64": {
    "doc": "TCP/IP TCP Client Server",
    "title": "TCP/IP TCP Client Server",
    "content": "The TCP Client Server configuration demonstrates creating a network client and server that uses the MPLAB Harmony TCP API. This demonstration is a combination of the TCP/IP Client and TCP/IP Server application. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client_server/readme.html#tcpip-tcp-client-server",
    "relUrl": "/apps/tcpip_tcp_client_server/readme.html#tcpip-tcp-client-server"
  },"65": {
    "doc": "TCP/IP TCP Client Server",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP TCP Client Server Application on PIC32MZ EF &amp; DA family on both bare metal and FreeRTOS. | Development Kit | . | PIC32MZ Starter Kit MHC Configuration | . | PIC32MZ Starter Kit Hardware Configuration | . | PIC32MZ Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client_server/readme.html#development-kits",
    "relUrl": "/apps/tcpip_tcp_client_server/readme.html#development-kits"
  },"66": {
    "doc": "TCP/IP TCP Client Server",
    "title": "TCP/IP TCP Client Server",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client_server/readme.html",
    "relUrl": "/apps/tcpip_tcp_client_server/readme.html"
  },"67": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP IPERF Application Hardware Configuration",
    "content": "This is the following section describes the hardware configuration and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration as per the microcontroller. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration which use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/iperf_demo/docs/readme_hardware_configuration.html#tcpip-iperf-application-hardware-configuration",
    "relUrl": "/apps/iperf_demo/docs/readme_hardware_configuration.html#tcpip-iperf-application-hardware-configuration"
  },"68": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/iperf_demo/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/iperf_demo/docs/readme_hardware_configuration.html"
  },"69": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP SNMP NVM MPFS Application Hardware Configuration",
    "content": "This is the following section describes the hardware configuration and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_nvm_mpfs/docs/readme_hardware_configuration.html#tcpip-snmp-nvm-mpfs-application-hardware-configuration",
    "relUrl": "/apps/snmpv3_nvm_mpfs/docs/readme_hardware_configuration.html#tcpip-snmp-nvm-mpfs-application-hardware-configuration"
  },"70": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_nvm_mpfs/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/snmpv3_nvm_mpfs/docs/readme_hardware_configuration.html"
  },"71": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP Web NET Server SDCARD FATFS Hardware Configuration",
    "content": "This is the following section describes the hardware configuration and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF Device hardware configuration with SDMMC(Secure Digital/ MultiMediaCard interface) interface. | . | Refer to the PIC32MZ EF Starter Kit User Guide . | Refer to the Starter Kit I/O Expansion Board - DM320002 User Guide . | Refer to the SDMMC PICtail daughter board - AC164122 User Guide . | Insert the SDMMC PICtail daughter board (AC164122) into the SPI1 slot of the I/O Expansion Board (DM320002) . | Insert the PIC32MZ EF Starter Kit into the I/O Expansion Board (DM320002) . | Establish a connection between the router/switch with the PIC32MZ Starter Kit through the RJ45 connector on PHY daughter board. Power the board using the 9V power adapter . | The demo application is configured for the SPI1 slot, using the following I/O pins: . | SPI 1 | Pin Selection | . | SCK1 - SPI clock | RD1 | . | SDI1 - SPI Data Input | RD14 | . | SDO1 - SPI Data Output | RD10 | . | SPI Chip Select | RB1 | . | . | This section describes the PIC32MZ DA device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board. | Insert MicroSD Card in the MicroSD Card slot (J10) on the development board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_sdcard_fatfs/docs/readme_hardware_configuration.html#tcpip-web-net-server-sdcard-fatfs-hardware-configuration",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_hardware_configuration.html#tcpip-web-net-server-sdcard-fatfs-hardware-configuration"
  },"72": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_sdcard_fatfs/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_hardware_configuration.html"
  },"73": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP WEB-NET and FTP Server Hardware Configuration",
    "content": "This is the following section describes the hardware configuration and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF Device hardware configuration with SDMMC(Secure Digital/ MultiMediaCard interface) interface. | Refer to the PIC32MZ EF Starter Kit User Guide . | Refer to the Starter Kit I/O Expansion Board - DM320002 User Guide . | Refer to the SDMMC PICtail daughter board - AC164122 User Guide . | Insert the SDMMC PICtail daughter board (AC164122) into the SPI1 slot of the I/O Expansion Board (DM320002) . | Insert the PIC32MZ EF Starter Kit into the I/O Expansion Board (DM320002) . | Establish a connection between the router/switch with the PIC32MZ Starter Kit through the RJ45 connector on PHY daughter board. Power the board using the 9V power adapter . | The demo application is configured for the SPI1 slot, using the following I/O pins: . | SPI 1 | Pin Selection | . | SCK1 - SPI clock | RD1 | . | SDI1 - SPI Data Input | RD14 | . | SDO1 - SPI Data Output | RD10 | . | SPI Chip Select | RB1 | . | . | This section describes the PIC32MZ DA device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board. | Insert MicroSD Card in the MicroSD Card slot (J10) on the development board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_ftp_server_mpfs_fatfs/docs/readme_hardware_configuration.html#tcpip-web-net-and-ftp-server-hardware-configuration",
    "relUrl": "/apps/web_ftp_server_mpfs_fatfs/docs/readme_hardware_configuration.html#tcpip-web-net-and-ftp-server-hardware-configuration"
  },"74": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_ftp_server_mpfs_fatfs/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/web_ftp_server_mpfs_fatfs/docs/readme_hardware_configuration.html"
  },"75": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP Berkeley UDP Server Hardware Configuration",
    "content": "This is the following section describes the hardware configurations and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration which use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_server/docs/readme_hardware_configuration.html#tcpip-berkeley-udp-server-hardware-configuration",
    "relUrl": "/apps/berkeley_udp_server/docs/readme_hardware_configuration.html#tcpip-berkeley-udp-server-hardware-configuration"
  },"76": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_server/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/berkeley_udp_server/docs/readme_hardware_configuration.html"
  },"77": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP SNMP SDCARD FATFS Hardware Configuration",
    "content": "This is the following section describes the hardware configuration and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF Device hardware configuration with SDMMC(Secure Digital/ MultiMediaCard interface) interface. | . | Refer to the PIC32MZ EF Starter Kit User Guide . | Refer to the Starter Kit I/O Expansion Board - DM320002 User Guide . | Refer to the SDMMC PICtail daughter board - AC164122 User Guide . | Insert the SDMMC PICtail daughter board (AC164122) into the SPI1 slot of the I/O Expansion Board (DM320002) . | Insert the PIC32MZ EF Starter Kit into the I/O Expansion Board (DM320002) . | Establish a connection between the router/switch with the PIC32MZ Starter Kit through the RJ45 connector on PHY daughter board. Power the board using the 9V power adapter . | The demo application is configured for the SPI1 slot, using the following I/O pins: . | SPI 1 | Pin Selection | . | SCK1 - SPI clock | RD1 | . | SDI1 - SPI Data Input | RD14 | . | SDO1 - SPI Data Output | RD10 | . | SPI Chip Select | RB1 | . | . | This section describes the PIC32MZ DA device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board. | Insert MicroSD Card in the MicroSD Card slot (J10) on the development board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_sdcard_fatfs/docs/readme_hardware_configuration.html#tcpip-snmp-sdcard-fatfs-hardware-configuration",
    "relUrl": "/apps/snmpv3_sdcard_fatfs/docs/readme_hardware_configuration.html#tcpip-snmp-sdcard-fatfs-hardware-configuration"
  },"78": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_sdcard_fatfs/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/snmpv3_sdcard_fatfs/docs/readme_hardware_configuration.html"
  },"79": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP Web Server NVM MPFS Hardware Configuration",
    "content": "This is the following section describes the hardware configurations and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_server_nvm_mpfs/docs/readme_hardware_configuration.html#tcpip-web-server-nvm-mpfs-hardware-configuration",
    "relUrl": "/apps/web_server_nvm_mpfs/docs/readme_hardware_configuration.html#tcpip-web-server-nvm-mpfs-hardware-configuration"
  },"80": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_server_nvm_mpfs/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/web_server_nvm_mpfs/docs/readme_hardware_configuration.html"
  },"81": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP UDP Client Hardware Configuration",
    "content": "This is the following section describes the hardware configuration and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_server/docs/readme_hardware_configuration.html#tcpip-udp-client-hardware-configuration",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_hardware_configuration.html#tcpip-udp-client-hardware-configuration"
  },"82": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_server/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_hardware_configuration.html"
  },"83": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP Berkeley UDP Relay Hardware Configuration",
    "content": "This is the following section describes the hardware configurations and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration which use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_relay/docs/readme_hardware_configuration.html#tcpip-berkeley-udp-relay-hardware-configuration",
    "relUrl": "/apps/berkeley_udp_relay/docs/readme_hardware_configuration.html#tcpip-berkeley-udp-relay-hardware-configuration"
  },"84": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_relay/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/berkeley_udp_relay/docs/readme_hardware_configuration.html"
  },"85": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP TCP and UDP Client Server Hardware Configuration",
    "content": "This is the following section describes the hardware configurations for both PIC32MZ EF and DA devices. One of the configuration can be used for this application demonstration as per the microcontroller. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_client_server/docs/readme_hardware_configuration.html#tcpip-tcp-and-udp-client-server-hardware-configuration",
    "relUrl": "/apps/tcpip_client_server/docs/readme_hardware_configuration.html#tcpip-tcp-and-udp-client-server-hardware-configuration"
  },"86": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_client_server/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_client_server/docs/readme_hardware_configuration.html"
  },"87": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP TCP WolfSSL Client Hardware Configuration",
    "content": "This is the following section describes the hardware configurations and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfmqtt_demo/docs/readme_hardware_configuration.html#tcpip-tcp-wolfssl-client-hardware-configuration",
    "relUrl": "/apps/wolfmqtt_demo/docs/readme_hardware_configuration.html#tcpip-tcp-wolfssl-client-hardware-configuration"
  },"88": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfmqtt_demo/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/wolfmqtt_demo/docs/readme_hardware_configuration.html"
  },"89": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP UDP Client Hardware Configuration",
    "content": "This is the following section describes the hardware configuration and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client_server/docs/readme_hardware_configuration.html#tcpip-udp-client-hardware-configuration",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_hardware_configuration.html#tcpip-udp-client-hardware-configuration"
  },"90": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client_server/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_hardware_configuration.html"
  },"91": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP Berkeley UDP Client Hardware Configuration",
    "content": "This is the following section describes the hardware configurations and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration which use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_client/docs/readme_hardware_configuration.html#tcpip-berkeley-udp-client-hardware-configuration",
    "relUrl": "/apps/berkeley_udp_client/docs/readme_hardware_configuration.html#tcpip-berkeley-udp-client-hardware-configuration"
  },"92": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_client/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/berkeley_udp_client/docs/readme_hardware_configuration.html"
  },"93": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP TCP Client Hardware Configuration",
    "content": "This is the following section describes the hardware configurations and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client/docs/readme_hardware_configuration.html#tcpip-tcp-client-hardware-configuration",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_hardware_configuration.html#tcpip-tcp-client-hardware-configuration"
  },"94": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_hardware_configuration.html"
  },"95": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP TCP WolfSSL Client Hardware Configuration",
    "content": "This is the following section describes the hardware configurations for both PIC32MZ EF and DA devices. One of the configuration can be used for this application demonstration as per the microcontroller. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_client/docs/readme_hardware_configuration.html#tcpip-tcp-wolfssl-client-hardware-configuration",
    "relUrl": "/apps/wolfssl_tcp_client/docs/readme_hardware_configuration.html#tcpip-tcp-wolfssl-client-hardware-configuration"
  },"96": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_client/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/wolfssl_tcp_client/docs/readme_hardware_configuration.html"
  },"97": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP UDP Client Hardware Configuration",
    "content": "This is the following section describes the hardware configuration and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client/docs/readme_hardware_configuration.html#tcpip-udp-client-hardware-configuration",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_hardware_configuration.html#tcpip-udp-client-hardware-configuration"
  },"98": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_hardware_configuration.html"
  },"99": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP Berkeley TCP Server Hardware Configuration",
    "content": "This is the following section describes the hardware configurations for both PIC32MZ EF and DA devices. One of the configuration can be used for this application demonstration as per the microcontroller. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_server/docs/readme_hardware_configuration.html#tcpip-berkeley-tcp-server-hardware-configuration",
    "relUrl": "/apps/berkeley_tcp_server/docs/readme_hardware_configuration.html#tcpip-berkeley-tcp-server-hardware-configuration"
  },"100": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_server/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/berkeley_tcp_server/docs/readme_hardware_configuration.html"
  },"101": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP TCP Client Server Hardware Configuration",
    "content": "This is the following section describes the hardware configurations for both PIC32MZ EF and DA devices. One of the configuration can be used for this application demonstration as per the microcontroller. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client_server/docs/readme_hardware_configuration.html#tcpip-tcp-client-server-hardware-configuration",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_hardware_configuration.html#tcpip-tcp-client-server-hardware-configuration"
  },"102": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client_server/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_hardware_configuration.html"
  },"103": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP TCP WolfSSL Server Hardware Configuration",
    "content": "This is the following section describes the hardware configurations and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_server/docs/readme_hardware_configuration.html#tcpip-tcp-wolfssl-server-hardware-configuration",
    "relUrl": "/apps/wolfssl_tcp_server/docs/readme_hardware_configuration.html#tcpip-tcp-wolfssl-server-hardware-configuration"
  },"104": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_server/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/wolfssl_tcp_server/docs/readme_hardware_configuration.html"
  },"105": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP TCP Server Hardware Configuration",
    "content": "This is the following section describes the hardware configurations and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes PIC32MZ EF device hardware configuration for external Ethernet controller ENC28J60 with PIC32MZ2048EFH144 development board. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | Refer to the ENC28j60 External Ethernet PICtail Plus Daughter Board [User Guide][https://www.microchip.com/developmenttools/ProductDetails/AC164123] . | Refer to Starter Kit I/O Expansion Board [User Guide][https://www.microchip.com/developmenttools/ProductDetails/DM320002] . | . The 10 Mbps Ethernet PICtail Plus Daughter Board is inserted to J2(or J4) on the Starter Kit I/O Expansion Board. The J2, PICtail Plus (SPI) connector on Ethernet PICtail Plus Daughter Board is attached to I/O Expansion Board. The PICtail daughter board is inserted to use SPI1. The PIC32MZ Embedded Connectivity with FPU (EF) Starter Kit is connected to J1 on the Starter Kit I/O Expansion board. The pin 46 on J10 and pin 47 on J11 (on I/O Expansion board) need to be connected to control the Chip-Select line by the PIC32. To power the set-up, connect the micro USB cable from the computer to the micro-A/B port J4 on the PIC32MZ EF Starter Kit . For serial console, connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . Please refer to the following figure for more detail. | This section describes PIC32MZ EF device hardware configuration for external Ethernet controller ENC624J600 with PIC32MZ2048EFH144 development board. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | Refer to the ENCX24j600 External Ethernet PICtail Plus Daughter Board [User Guide][https://www.microchip.com/developmenttools/ProductDetails/AC164132] . | Refer to Starter Kit I/O Expansion Board [User Guide][https://www.microchip.com/developmenttools/ProductDetails/DM320002] . | . The Fast 100Mbps Ethernet PICtail Plus Daughter Board is inserted to J2(or J4) on the Starter Kit I/O Expansion Board. The J2, PICtail Plus (SPI) connector on Fast 100Mbps Ethernet PICtail Plus Daughter Board is attached to I/O Expansion Board with white arrows on the two boards lined up. The PICtail daughter board is inserted to use SPI1. The PIC32MZ Embedded Connectivity with FPU (EF) Starter Kit is connected to J1 on the Starter Kit I/O Expansion board. The pin 46 on J10 and pin 47 on J11 (on I/O Expansion board) need to be connected to control the Chip-Select line by the PIC32. To power the set-up, connect the micro USB cable from the computer to the micro-A/B port J4 on the PIC32MZ EF Starter Kit . For serial console, connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | This section describes the PIC32MZ DA device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_server/docs/readme_hardware_configuration.html#tcpip-tcp-server-hardware-configuration",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_hardware_configuration.html#tcpip-tcp-server-hardware-configuration"
  },"106": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_server/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_hardware_configuration.html"
  },"107": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP Web Net Server NVM MPFS Hardware Configuration",
    "content": "This is the following section describes the hardware configurations and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_nvm_mpfs/docs/readme_hardware_configuration.html#tcpip-web-net-server-nvm-mpfs-hardware-configuration",
    "relUrl": "/apps/web_net_server_nvm_mpfs/docs/readme_hardware_configuration.html#tcpip-web-net-server-nvm-mpfs-hardware-configuration"
  },"108": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_nvm_mpfs/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/web_net_server_nvm_mpfs/docs/readme_hardware_configuration.html"
  },"109": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP Berkeley TCP Client Hardware Configuration",
    "content": "This is the following section describes the hardware configurations and one of the configuration can be used for this application demonstration. | This section describes the PIC32MZ EF device default hardware configuration use USB device as on board debugger and programmer for this application demonstration as per the microcontroller. | Refer to the PIC32MZ EF Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit . | Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit . | Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board . | . | This section describes the PIC32MZ EF device hardware configuration with the combination of RealICE, or ICD4 and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration. | Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the PIC32MZ Extended Connectivity w/FPU (EF) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together . | Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board . | Connect a USB Mini-b (5 pin) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port . | Connect the 9V power supply to the Starter Kit I/O Expansion Board . | . | This section describes the PIC32MZ DA device default hardware configuration which use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MZ DA Ethernet Starter Kit User Guide for the programming/debugging options supported. | No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit . | Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit . | Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit . | Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_client/docs/readme_hardware_configuration.html#tcpip-berkeley-tcp-client-hardware-configuration",
    "relUrl": "/apps/berkeley_tcp_client/docs/readme_hardware_configuration.html#tcpip-berkeley-tcp-client-hardware-configuration"
  },"110": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_client/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/berkeley_tcp_client/docs/readme_hardware_configuration.html"
  },"111": {
    "doc": "MHC Configuration",
    "title": "TCP/IP TCP Server MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the TCP Server demonstration application. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . | TCP/IP stack module with internal ethmac . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP stack module with external mac daughter board . Both ENC28j60 and ENCX24j600 daughter board use SPI1 driver and peripheral to communicate with the PIC32MZ EF controller. - . | . | TCP/IP Application Layer . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. | TCPIP Driver Layer . | Internal ethernet driver(ethmac) . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | External ENC28j60 ethernet driver . TCP/IP ENC28j60 driver module selected for the external ethernet mac ENC28j60 device. For high MAC TX and RX performance DRV_ENC28j60_MAC_TX_DESCRIPTORS and DRV_ENC28j60_MAC_RX_DESCRIPTORS can be configured respectively more than the default descriptor value size “2”. | External ENCX24j600 ethernet driver . TCP/IP ENCx24j600 driver module selected for the external ethernet mac ENC28j60 device. For high MAC TX and RX performance DRV_ENCX24j600_MAC_TX_DESCRIPTORS and DRV_ENCX24j600_MAC_RX_DESCRIPTORS can be configured respectively more than the default descriptor value size “2”. | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_server/docs/readme_mhc_configuration.html#tcpip-tcp-server-mhc-configuration",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_mhc_configuration.html#tcpip-tcp-server-mhc-configuration"
  },"112": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_server/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_mhc_configuration.html"
  },"113": {
    "doc": "MHC Configuration",
    "title": "TCP/IP TCP WolfSSL Server MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the TCP Client demonstration application. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. NOTE:- FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. The below snapshot provides the details of the wolfssl_crypto, wolfSSL and presentation layer configuration. TCP sockets calculate the ISN using the wolfSSL crypto library. NOTE:- The above diagram shows that the Hardware cryptography is disabled for wolfssl_crypto configuration. To work with Hardware cryptography, the Hardware cryptography should be enabled wolfssl_crypto Configuration. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_server/docs/readme_mhc_configuration.html#tcpip-tcp-wolfssl-server-mhc-configuration",
    "relUrl": "/apps/wolfssl_tcp_server/docs/readme_mhc_configuration.html#tcpip-tcp-wolfssl-server-mhc-configuration"
  },"114": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_server/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/wolfssl_tcp_server/docs/readme_mhc_configuration.html"
  },"115": {
    "doc": "MHC Configuration",
    "title": "TCP/IP TCP Client Server MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the TCP Client demonstration application. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client_server/docs/readme_mhc_configuration.html#tcpip-tcp-client-server-mhc-configuration",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_mhc_configuration.html#tcpip-tcp-client-server-mhc-configuration"
  },"116": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client_server/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_mhc_configuration.html"
  },"117": {
    "doc": "MHC Configuration",
    "title": "TCP/IP Berkeley TCP Server MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the TCP Server application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. Berkeley API module provides the Berkeley_Socket_Distribution (BSD) wrapper to the native Microchip TCP/IP Stack APIs. During this component selection, the required transport and network modules are also selected. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_server/docs/readme_mhc_configuration.html#tcpip-berkeley-tcp-server-mhc-configuration",
    "relUrl": "/apps/berkeley_tcp_server/docs/readme_mhc_configuration.html#tcpip-berkeley-tcp-server-mhc-configuration"
  },"118": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_server/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/berkeley_tcp_server/docs/readme_mhc_configuration.html"
  },"119": {
    "doc": "MHC Configuration",
    "title": "TCP/IP UDP Client MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in this application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client/docs/readme_mhc_configuration.html#tcpip-udp-client-mhc-configuration",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_mhc_configuration.html#tcpip-udp-client-mhc-configuration"
  },"120": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_mhc_configuration.html"
  },"121": {
    "doc": "MHC Configuration",
    "title": "TCP/IP TCP WolfSSL Client MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the TCP Client demonstration application. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. TCP sockets calculate the ISN using the wolfSSL crypto library. NOTE:- FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. The below snapshot provides the details of the wolfssl_crypto, wolfSSL and presentation layer configuration. NOTE:- The above diagram shows that the Hardware cryptography is disabled for wolfssl_crypto configuration. To work with Hardware cryptography, the Hardware cryptography should be enabled wolfssl_crypto Configuration. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server.DNS Client provides DNS resolution capabilities to the stack. During these components selection, the required transport and network modules are also selected. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_client/docs/readme_mhc_configuration.html#tcpip-tcp-wolfssl-client-mhc-configuration",
    "relUrl": "/apps/wolfssl_tcp_client/docs/readme_mhc_configuration.html#tcpip-tcp-wolfssl-client-mhc-configuration"
  },"122": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_client/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/wolfssl_tcp_client/docs/readme_mhc_configuration.html"
  },"123": {
    "doc": "MHC Configuration",
    "title": "TCP/IP TCP Client MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the TCP Client demonstration application. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client/docs/readme_mhc_configuration.html#tcpip-tcp-client-mhc-configuration",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_mhc_configuration.html#tcpip-tcp-client-mhc-configuration"
  },"124": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_mhc_configuration.html"
  },"125": {
    "doc": "MHC Configuration",
    "title": "TCP/IP Berkeley UDP Client MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in this application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. Berkeley API module provides the Berkeley_Socket_Distribution (BSD) wrapper to the native Microchip TCP/IP Stack APIs. During this component selection, the required transport and network modules are also selected. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_client/docs/readme_mhc_configuration.html#tcpip-berkeley-udp-client-mhc-configuration",
    "relUrl": "/apps/berkeley_udp_client/docs/readme_mhc_configuration.html#tcpip-berkeley-udp-client-mhc-configuration"
  },"126": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_client/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/berkeley_udp_client/docs/readme_mhc_configuration.html"
  },"127": {
    "doc": "MHC Configuration",
    "title": "TCP/IP UDP Client Server MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in this application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client_server/docs/readme_mhc_configuration.html#tcpip-udp-client-server-mhc-configuration",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_mhc_configuration.html#tcpip-udp-client-server-mhc-configuration"
  },"128": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client_server/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_mhc_configuration.html"
  },"129": {
    "doc": "MHC Configuration",
    "title": "TCP/IP TCP WolfSSL Client MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the TCP Client demonstration application. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. NOTE:- FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. TCP sockets calculate the ISN using the wolfSSL crypto library. The below snapshot provides the details of the wolfssl_crypto, wolfSSL and presentation layer configuration. The configuration options for the wolfMQTT are the standard ones supported by wolfMQTT (see wolfMQTT site). Note that the project has already selected the 3rd party wolfMQTT and wolfSSL libraries (for supporting encrypted connections). The NET_PRES layer is also needed because the Harmony wolfMQTT NET glue layer uses the NET_PRES to handle the connections to the broker. In order to regenerate the project after changes have been made, the wolfSSL libraries need to be downloaded and present at the Harmony 3 /wolfMQTT/ and /wolfSSL/ respectively, at the same level with /net/. Use the github repositories for wolfMQTT and wolfSSL. To configure the wolfMQTT and the wolfMWQTT NET glue layer, select the “wolfMQTT Library” module: . The configuration options for the wolfMQTT NET glue allow the application to: . | force TLS mode | enable IPv6 operation | set the maximum length of the MQTT broker | enable the NET glue debug and debug strings | set the allocation functions | set the MQTT TX and RX buffer sizes | generate the custom MQTT application template: | the files app_mqtt_task.c, app_mqtt_task.h and app_mqtt_commands.c will be added to the project | . | . NOTE:- The above diagram shows that the Hardware cryptography is disabled for wolfssl_crypto configuration. To work with Hardware cryptography, the Hardware cryptography should be enabled wolfssl_crypto Configuration. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server.DNS Client provides DNS resolution capabilities to the stack. During these components selection, the required transport and network modules are also selected. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfmqtt_demo/docs/readme_mhc_configuration.html#tcpip-tcp-wolfssl-client-mhc-configuration",
    "relUrl": "/apps/wolfmqtt_demo/docs/readme_mhc_configuration.html#tcpip-tcp-wolfssl-client-mhc-configuration"
  },"130": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfmqtt_demo/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/wolfmqtt_demo/docs/readme_mhc_configuration.html"
  },"131": {
    "doc": "MHC Configuration",
    "title": "TCP/IP TCP and UDP Client Server MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the TCP Client demonstration application. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_client_server/docs/readme_mhc_configuration.html#tcpip-tcp-and-udp-client-server-mhc-configuration",
    "relUrl": "/apps/tcpip_client_server/docs/readme_mhc_configuration.html#tcpip-tcp-and-udp-client-server-mhc-configuration"
  },"132": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_client_server/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_client_server/docs/readme_mhc_configuration.html"
  },"133": {
    "doc": "MHC Configuration",
    "title": "TCP/IP Berkeley UDP Relay MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in this application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. Berkeley API module provides the Berkeley_Socket_Distribution (BSD) wrapper to the native Microchip TCP/IP Stack APIs. During this component selection, the required transport and network modules are also selected. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_relay/docs/readme_mhc_configuration.html#tcpip-berkeley-udp-relay-mhc-configuration",
    "relUrl": "/apps/berkeley_udp_relay/docs/readme_mhc_configuration.html#tcpip-berkeley-udp-relay-mhc-configuration"
  },"134": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_relay/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/berkeley_udp_relay/docs/readme_mhc_configuration.html"
  },"135": {
    "doc": "MHC Configuration",
    "title": "TCP/IP UDP Server MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in this application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_server/docs/readme_mhc_configuration.html#tcpip-udp-server-mhc-configuration",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_mhc_configuration.html#tcpip-udp-server-mhc-configuration"
  },"136": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_server/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_mhc_configuration.html"
  },"137": {
    "doc": "MHC Configuration",
    "title": "TCP/IP Web Server NVM MPFS MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. The file system component is required to select MPFS module. This is the below snapshot for the FS configuration. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. HTTP module is selected to run the web_server for the port number 80. By default Enable MPFS upload via HTTP is selected. This is helpful When external EEPROM or serial Flash is used for storage, the option to upload the newly created image to the board is available. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_server_nvm_mpfs/docs/readme_mhc_configuration.html#tcpip-web-server-nvm-mpfs-mhc-configuration",
    "relUrl": "/apps/web_server_nvm_mpfs/docs/readme_mhc_configuration.html#tcpip-web-server-nvm-mpfs-mhc-configuration"
  },"138": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_server_nvm_mpfs/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/web_server_nvm_mpfs/docs/readme_mhc_configuration.html"
  },"139": {
    "doc": "MHC Configuration",
    "title": "TCP/IP SNMP SDCARD FATFS MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . | PIC32MZ EF Device performs read/write to an SD card using SDSPI Module . SDSPI module is selected with SPI peripheral. SDSPI driver uses an instance of the SPI driver to communicate to the SD card over the SPI bus. The TCP/IP application demonstrates FAT file system to read/write to an SD card using SDSPI driver. SNMP and WebServer demo applications use SPI peripheral to read/write from SDMMC module. | PIC32MZ DA device performs read/write to an SD card using SDMMC driver. SNMP and WebServer demo applications use SDMMC driver to read/write from SDHC peripheral module. Wolfssl crypto module enabled with MD5,SHA authentication and AES encryption/decryption privacy protocol are enabled. Wolfssl library used a open a secured socket. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. TCP sockets calculate the ISN using the wolfSSL crypto library. | . | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. HTTPNET module is selected to run the web_server for the port number 443. SNMP and SNMPv3 are an application layer protocols that facilitates the exchange of management information among network devices. Maximum SNMP Message Size can be increased and the value should be multiple of 32 bytes for larger GET-Bulk response. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_sdcard_fatfs/docs/readme_mhc_configuration.html#tcpip-snmp-sdcard-fatfs-mhc-configuration",
    "relUrl": "/apps/snmpv3_sdcard_fatfs/docs/readme_mhc_configuration.html#tcpip-snmp-sdcard-fatfs-mhc-configuration"
  },"140": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_sdcard_fatfs/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/snmpv3_sdcard_fatfs/docs/readme_mhc_configuration.html"
  },"141": {
    "doc": "MHC Configuration",
    "title": "TCP/IP Berkeley UDP Server MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in this application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. Berkeley API module provides the Berkeley_Socket_Distribution (BSD) wrapper to the native Microchip TCP/IP Stack APIs. During this component selection, the required transport and network modules are also selected. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_server/docs/readme_mhc_configuration.html#tcpip-berkeley-udp-server-mhc-configuration",
    "relUrl": "/apps/berkeley_udp_server/docs/readme_mhc_configuration.html#tcpip-berkeley-udp-server-mhc-configuration"
  },"142": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_server/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/berkeley_udp_server/docs/readme_mhc_configuration.html"
  },"143": {
    "doc": "MHC Configuration",
    "title": "TCP/IP WEB-NET &amp; FTP Server MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . | PIC32MZ EF Device performs read/write to an SD card using SDSPI Module . SDSPI module is selected with SPI peripheral. SDSPI driver uses an instance of the SPI driver to communicate to the SD card over the SPI bus. The TCP/IP application demonstrates FAT file system to read/write to an SD card using SDSPI driver. FTP application use SPI peripheral to read/write from SDMMC module. | PIC32MZ DA device performs read/write to an SD card using SDMMC driver. FTP application use SDMMC driver to read/write from SDHC peripheral module. Wolfssl crypto module enabled with MD5,SHA authentication. Wolfssl library used a open a secured socket. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. Both MPFS and FAT File System Configuration . TCP sockets calculate the ISN using the wolfSSL crypto library. | . | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. HTTPNET module is selected to run the web_server for the port number 443. FTP SERVER an application layer protocol that facilitates uploading of files to, and downloading of files from, an embedded device. | HTTPNET server with Web directory Mount path and Security port number configuration: | . Http Server module use the NVM mount path with MPFS files system. Also HTTP server module use the secured port number 443. | FTP server use the FAT FS to access files from SDCARD. | . | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_ftp_server_mpfs_fatfs/docs/readme_mhc_configuration.html#tcpip-web-net--ftp-server-mhc-configuration",
    "relUrl": "/apps/web_ftp_server_mpfs_fatfs/docs/readme_mhc_configuration.html#tcpip-web-net--ftp-server-mhc-configuration"
  },"144": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_ftp_server_mpfs_fatfs/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/web_ftp_server_mpfs_fatfs/docs/readme_mhc_configuration.html"
  },"145": {
    "doc": "MHC Configuration",
    "title": "TCP/IP Web NET Server SDCARD FATFS MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . | PIC32MZ EF Device performs read/write to an SD card using SDSPI Module . SDSPI module is selected with SPI peripheral. SDSPI driver uses an instance of the SPI driver to communicate to the SD card over the SPI bus. The TCP/IP application demonstrates FAT file system to read/write to an SD card using SDSPI driver. WebServer demo application use SPI peripheral to read/write from SDMMC module. | PIC32MZ DA device performs read/write to an SD card using SDMMC driver. SNMP and WebServer demo applications use SDMMC driver to read/write from SDHC peripheral module. | . The TCP/IP application demonstrates FAT file system to read/write to an SD card using SDSPI driver. SNMP and WebServer demo applications use SPI peripheral to read/write from SDMMC module. WolfSSL component is selected for secure connection which supports TLS v1.3 and WolfSSL-Crypto component is selected for MD5 and SHA authentication. Wolfssl crypto module enabled with MD5,SHA authentication and AES encryption/decryption privacy protocol are enabled. Wolfssl library used a open a secured socket. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. The FAT file system is selected for this application to read and write from the SDHC( sdcard ) module. This is the below snapshot for the FAT FS configuration. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. HTTPNET module is selected to run the web_server for the port number 443. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_sdcard_fatfs/docs/readme_mhc_configuration.html#tcpip-web-net-server-sdcard-fatfs-mhc-configuration",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_mhc_configuration.html#tcpip-web-net-server-sdcard-fatfs-mhc-configuration"
  },"146": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_sdcard_fatfs/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_mhc_configuration.html"
  },"147": {
    "doc": "MHC Configuration",
    "title": "TCP/IP SNMP NVM MPFS Application MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. The file system component is required to select MPFS module. This is the below snapshot for the FS configuration. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. HTTPNET module is selected to run the web_server for the port number 80. SNMP and SNMPv3 are an application layer protocols that facilitates the exchange of management information among network devices. Maximum SNMP Message Size can be increased and the value should be multiple of 32 bytes for larger GET-Bulk response. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_nvm_mpfs/docs/readme_mhc_configuration.html#tcpip-snmp-nvm-mpfs-application-mhc-configuration",
    "relUrl": "/apps/snmpv3_nvm_mpfs/docs/readme_mhc_configuration.html#tcpip-snmp-nvm-mpfs-application-mhc-configuration"
  },"148": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_nvm_mpfs/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/snmpv3_nvm_mpfs/docs/readme_mhc_configuration.html"
  },"149": {
    "doc": "MHC Configuration",
    "title": "TCP/IP IPERF Application MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. **IPERF** module is used to run the network benchmark program. The default sizes of the Iperf RX and TX buffers are set to 4KB. The performance of a socket is highly dependent on the size of its buffers. So it’s a good idea to use as large as possible buffers for the sockets that need high throughput. Bigger buffers will help obtain higher performance numbers. The other iperf parameters could be left with their default values. For a description of the parameters see the IPERF Module of the TCIP Library document. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/iperf_demo/docs/readme_mhc_configuration.html#tcpip-iperf-application-mhc-configuration",
    "relUrl": "/apps/iperf_demo/docs/readme_mhc_configuration.html#tcpip-iperf-application-mhc-configuration"
  },"150": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/iperf_demo/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/iperf_demo/docs/readme_mhc_configuration.html"
  },"151": {
    "doc": "MHC Configuration",
    "title": "TCP/IP Web NET Server NVM MPFS MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. WolfSSL component is selected for secure connection which supports TLS v1.3 and WolfSSL-Crypto component is selected for MD5 and SHA authentication. The file system component is required to select MPFS module. This is the below snapshot for the FS configuration. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. HTTPNET module is selected to run the web_server for the port number 80. By default Enable MPFS upload via HTTP is selected. This is helpful When external EEPROM or serial Flash is used for storage, the option to upload the newly created image to the board is available. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_nvm_mpfs/docs/readme_mhc_configuration.html#tcpip-web-net-server-nvm-mpfs-mhc-configuration",
    "relUrl": "/apps/web_net_server_nvm_mpfs/docs/readme_mhc_configuration.html#tcpip-web-net-server-nvm-mpfs-mhc-configuration"
  },"152": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_nvm_mpfs/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/web_net_server_nvm_mpfs/docs/readme_mhc_configuration.html"
  },"153": {
    "doc": "MHC Configuration",
    "title": "TCP/IP Berkeley TCP Client MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the TCP Client application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. Berkeley API module provides the Berkeley_Socket_Distribution (BSD) wrapper to the native Microchip TCP/IP Stack APIs. During this component selection, the required transport and network modules are also selected. | TCPIP Driver Layer . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_client/docs/readme_mhc_configuration.html#tcpip-berkeley-tcp-client-mhc-configuration",
    "relUrl": "/apps/berkeley_tcp_client/docs/readme_mhc_configuration.html#tcpip-berkeley-tcp-client-mhc-configuration"
  },"154": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_client/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/berkeley_tcp_client/docs/readme_mhc_configuration.html"
  },"155": {
    "doc": "Running Application",
    "title": "TCP/IP IPERF Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/iperf_demo/docs/readme_run_application.html#tcpip-iperf-running-application",
    "relUrl": "/apps/iperf_demo/docs/readme_run_application.html#tcpip-iperf-running-application"
  },"156": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP iperf demo on a development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on baremetal( non-RTOS ). | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP iperf demo on a development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP iperf demo on a development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on baremetal( non-RTOS ). | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP iperf demo on a development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/iperf_demo/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/iperf_demo/docs/readme_run_application.html#mplab-x-ide-project"
  },"157": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | The iperf demo is interactive, using a set of special iperf commands that are supported by the standard set of TCP/IP commands. | Pressing “help iperf” at the command prompt displays the list of the available iperf commands/options: . | A brief description of the most important settings/commands follows: . | “iperf”: starts the iperf session. Use “iperf -s” for a server connection or “iperf -c address” for a client connection . | Look at the Iperf Module for examples of iperf benchmarks | . | “iperfk” kills an ongoing iperf test. This is mainly useful for killing a iperf server waiting for connections. But the command could be also used to abort client test. | “iperfi -a address” allows to set the interface to use for iperf when the test is run on a multi-interface host. When multiple iperf instabces are used, the extra parameter “-i” could be used to specify the iperf index to which the command refers to. | “iperfs” command could be used to set the socket TX or RX buffer size dynamically. For example: . | “iperfs -tx 2048” | . | . | . Note: . | The iperf demo uses very few TCP/IP modules, to minimize the stack overhead and to obtain good throughput numbers. | However ICMP server, NBNS and Announce modules are enabled to assist in the discovery of the board on the network. | DHCP client is also enabled for acquiring a valid IP address within the network. | Some of these modules could be further disabled if they are not used in the specific network environment of the application. | . | The data throughput could vary dependent on the iperf socket settings and the network conditions. | Larger TX and RX buffers will increase the corresponding throughput. | Various devices on the network on the link between the board and the machine running the iperf application (switches, routers, etc.) could also affect the throughput. | User can eliminate these effects by connecting the board running the iperf demo directly to the machine running the test on the PC side (Linux, Windows, etc.) . | . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/iperf_demo/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/iperf_demo/docs/readme_run_application.html#running-the-demonstration"
  },"158": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/iperf_demo/docs/readme_run_application.html",
    "relUrl": "/apps/iperf_demo/docs/readme_run_application.html"
  },"159": {
    "doc": "Running Application",
    "title": "TCP/IP Berkeley UDP Server Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_server/docs/readme_run_application.html#tcpip-berkeley-udp-server-application",
    "relUrl": "/apps/berkeley_udp_server/docs/readme_run_application.html#tcpip-berkeley-udp-server-application"
  },"160": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the Berkeley UDP Server on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the Berkeley UDP Server on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on bare-metal(non-RTOS). | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the Berkeley UDP Server on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_server/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/berkeley_udp_server/docs/readme_run_application.html#mplab-x-ide-project"
  },"161": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | As soon as a valid IP address is assigned through the DHCP to the demonstration, it is ready to accept a UDP/IP connection on port 9760. | Send a UDP packet to the IP address of the hardware board and port 9760 from any UDP Client application running on the computer. | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_server/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/berkeley_udp_server/docs/readme_run_application.html#running-the-demonstration"
  },"162": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_server/docs/readme_run_application.html",
    "relUrl": "/apps/berkeley_udp_server/docs/readme_run_application.html"
  },"163": {
    "doc": "Running Application",
    "title": "TCP/IP WEB-NET &amp; FTP SERVER Running Application",
    "content": "This application uses more than one FS for the TCP/IP application demonstration. Here HTTP Net server uses Microchip Proprietary File System (MPFS) as a read only FS. Here MPFS FS reads web pages from Non-Volatile Memory (NVM) media which is used to store the web server pages. The FAT FS File System read and writes to SDCard memory media which is used for storing any type of files. FTP server will read from and write to this SDcard media using FAT FS. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_ftp_server_mpfs_fatfs/docs/readme_run_application.html#tcpip-web-net--ftp-server-running-application",
    "relUrl": "/apps/web_ftp_server_mpfs_fatfs/docs/readme_run_application.html#tcpip-web-net--ftp-server-running-application"
  },"164": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP Web Server with more than one FS on a development board with PIC32MZ2048EFH144 device and on-board KSZ8091 PHY. This implementation is based on FreeRTOS. | . | pic32mz_da_sk.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP Web Server with more than one FS on a development board with PIC32MZ2064DAS169 device and on-board LAN8740 PHY. This implementation is based on bare-metal(non-RTOS). | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP Web Server with more than one FS on a development board with PIC32MZ2064DAS169 device and on-board LAN8740 PHY. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_ftp_server_mpfs_fatfs/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/web_ftp_server_mpfs_fatfs/docs/readme_run_application.html#mplab-x-ide-project"
  },"165": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Ensure a microSD/SD card is formatted and loaded with the web pages provided within the &lt; install-dir &gt;/net/apps/web_ftp_server_mpfs_fatfs/firmware/src/web_pages directory. | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | . | Execution: . An HTTP server is hosted by the demonstration application. Open a web browser and direct it to the board running the HTTP server by typing the URL in the address bar (for example, https://mchpboard_c), and then pressing Enter. The demonstration application features following: . Real-time Hardware Control and Dynamic Variables - On the Overview page the LEDs can be clicked to toggle the LEDs on the Microchip hardware development board. The SWITCHes on the Microchip hardware development board can be pressed to toggle the Buttons on the web page. The dynamic variables can be updated in real-time on the HTTP server. Note: For the LED and SWITCH functionality portion of the demonstration, configure the GPIOs connected to LEDs and Switches on Microchip hardware development board, through the Pin Configuration manager in MPLAB® Harmony Configurator (MHC). | Form Processing - Input can be handled from the client by using the GET and POST methods (this functionality controls the on-board LEDs and is operational only on the Explorer 16 Development Board) . | Authentication - Shows an example of the commonly used restricted access feature . | Cookies - Shows an example of storing small text strings on the client side . | Server Side Includes - An example of how SSI can be used to support dynamic content . | File Uploads - Shows an example of a file upload using the POST method. The HTTP server can_accept_a user-defined MPFS/MPFS2 image file for web pages. | Send E-mail - Shows simple SMTP POST methods . | Dynamic DNS - Exercises Dynamic DNS capabilities . | Network Configuration - The MAC address, host name, and IP address of the evaluation kit can be viewed in the Network Configuration page and some configurations can be updated . | MPFS Upload - A new set of web pages can be uploaded to the web server using this feature, which is accessed through http://mchpboard_c/mpfsupload . | . Notes: The location of the MPFS image is fixed at the beginning of the Flash page specified by DRV_MEMORY_DEVICE_START_ADDRESS. The size of the MPFS upload is limited to DRV_MEMORY_DEVICE_MEDIA_SIZE in the demonstration. The HTTP File Upload functionality has to be enabled when the project is generated. | FTP Server output - . Also to transfer file , FTP output – . Open windows command console and enter FTP server IP address (here FTP server IP address - 192.168.100.11) to access the FTP SERVER . | FTP OUTPUT | . | C:&gt;ftp 192.168.100.11 | . | Connected to 192.168.100.11. | . | 220 Ready | . | User (192.168.100.11:(none)): Microchip | . | 331 Password required | . | Password: | . | 230 Logged in | . | ftp&gt; pwd | . | 257 “/” is cwd | . | ftp&gt; dir | . | 200 Command Ok | . | 125 File status okay; about to open data connection | . | -rwx—— 0 0 0 36 Aug 09 2013 file.txt | . | -rwx—— 0 0 0 12 Aug 09 2013 file1.txt | . | drwx—— 0 0 0 0 Feb 25 2019 System Volume Information | . | -rwx—— 0 0 0 24 Aug 09 2013 file_hs.txt | . | -rwx—— 0 0 0 12 Aug 09 2013 file_hs3.txt | . | -rwx—— 0 0 0 468 Aug 09 2013 file_hs5.txt | . | -rwx—— 0 0 0 42077 Aug 09 2013 Presentation1.pptx | . | drwx—— 0 0 0 0 Jul 16 2019 ATE_EtherCAT_Demo | . | -rwx—— 0 0 0 9287357 Jul 17 2019 ATE_EtherCAT_Demo.7z | . | drwx—— 0 0 0 0 Jul 17 2019 Dell_Laptop_bakcup | . | -rwx—— 0 0 0 979594 Dec 03 2019 IoT Demo.pptx | . | drwx—— 0 0 0 0 Dec 10 2019 wifi_rgb_easy_configuration | . | drwx—— 0 0 0 0 Nov 14 2019 wireless | . | drwx—— 0 0 0 0 Nov 26 2019 test_bypass_http_net_server | . | -rwx—— 0 0 0 8186726 Nov 27 2019 test_bypass_http_server_1.zip | . | drwx—— 0 0 0 0 Jan 30 2020 FOE_BinFIle | . | drwx—— 0 0 0 0 Jan 31 2020 FoE_Hex_imagefiles | . | drwx—— 0 0 0 0 Mar 16 2020 exam | . | drwx—— 0 0 0 0 Jun 02 2020 webpages | . | -rwx—— 0 0 0 525 Jun 09 2020 New Volume (D) - Shortcut.lnk | . | 226 Closing data connection. Requested file action successful. | . | ftp: 1424 bytes received in 0.20Seconds 7.19Kbytes/sec. | . | ftp&gt; cd webpages | . | 250 /webpages/ is new cwd | . | ftp&gt; dir | . | 200 Command Ok | . | 125 File status okay; about to open data connection | . | drwx—— 0 0 0 0 Jun 02 2020 dyndns | . | drwx—— 0 0 0 0 Jun 02 2020 email | . | drwx—— 0 0 0 0 Jun 02 2020 protect | . | drwx—— 0 0 0 0 Jun 02 2020 snmp | . | -rwx—— 0 0 0 1388 May 03 2019 auth.htm | . | -rwx—— 0 0 0 2104 Feb 11 2020 cookies.htm | . | -rwx—— 0 0 0 1986 Feb 11 2020 dynvars.htm | . | -rwx—— 0 0 0 161 Feb 11 2020 footer.htm | . | -rwx—— 0 0 0 2068 Feb 11 2020 forms.htm | . | -rwx—— 0 0 0 2150 Feb 11 2020 harmony.gif | . | -rwx—— 0 0 0 1232 Feb 11 2020 header.htm | . | -rwx—— 0 0 0 3798 Feb 11 2020 index.htm | . | -rwx—— 0 0 0 21 Feb 11 2020 leds.cgi | . | -rwx—— 0 0 0 3183 Feb 11 2020 mchp.css | . | -rwx—— 0 0 0 1263 Feb 11 2020 mchp.gif | . | -rwx—— 0 0 0 3721 Feb 11 2020 mchp.js | . | -rwx—— 0 0 0 512 Feb 11 2020 snmp.bib | . | -rwx—— 0 0 0 2032 Feb 11 2020 ssi.htm | . | -rwx—— 0 0 0 183 Feb 11 2020 status.xml | . | -rwx—— 0 0 0 970 Feb 11 2020 upload.htm | . | 226 Closing data connection. Requested file action successful. | . | ftp: 1267 bytes received in 0.17Seconds 7.45Kbytes/sec. | . | ftp&gt; get mchp.css | . | 200 Command Ok | . | 150 File status okay; about to open data connection | . | 226 Transfer Complete | . | ftp: 3183 bytes received in 1.42Seconds 2.24Kbytes/sec. | . | ftp&gt; put ActivityLog.xml | . | 200 Command Ok | . | 150 File status okay; about to open data connection | . | 226 Transfer Complete | . | ftp: 86262 bytes sent in 0.56Seconds 152.68Kbytes/sec. | . | ftp&gt; ls | . | 200 Command Ok | . | 125 File status okay; about to open data connection | . | Date Type FileSize filename | . | 05-03-2019 11:54:24 file 1388 auth.htm | . | 02-11-2020 16:47:38 file 2104 cookies.htm | . | 02-11-2020 16:47:38 file 1986 dynvars.htm | . | 02-11-2020 16:47:38 file 161 footer.htm | . | 02-11-2020 16:47:40 file 2068 forms.htm | . | 02-11-2020 16:47:40 file 2150 harmony.gif | . | 02-11-2020 16:47:40 file 1232 header.htm | . | 02-11-2020 16:47:40 file 3798 index.htm | . | 02-11-2020 16:47:42 file 21 leds.cgi | . | 02-11-2020 16:47:42 file 3183 mchp.css | . | 02-11-2020 16:47:42 file 1263 mchp.gif | . | 02-11-2020 16:47:42 file 3721 mchp.js | . | 02-11-2020 16:47:44 file 512 snmp.bib | . | 02-11-2020 16:47:46 file 2032 ssi.htm | . | 02-11-2020 16:47:46 file 183 status.xml | . | 02-11-2020 16:47:46 file 970 upload.htm | . | 08-09-2013 15:06:00 file 86262 ActivityLog.xml | . | 226 Closing data connection. Requested file action successful. | . | ftp: 799 bytes received in 0.16Seconds 4.99Kbytes/sec. | . | ftp&gt; | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_ftp_server_mpfs_fatfs/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/web_ftp_server_mpfs_fatfs/docs/readme_run_application.html#running-the-demonstration"
  },"166": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_ftp_server_mpfs_fatfs/docs/readme_run_application.html",
    "relUrl": "/apps/web_ftp_server_mpfs_fatfs/docs/readme_run_application.html"
  },"167": {
    "doc": "Running Application",
    "title": "TCP/IP Web NET Server SDCARD FATFS Running Application",
    "content": "This Web Net Server application uses the SD card as a memory media and reads the web pages stored according to the configured mount path. Web Server reads the external SD card content using FAT FS API. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html#tcpip-web-net-server-sdcard-fatfs-running-application",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html#tcpip-web-net-server-sdcard-fatfs-running-application"
  },"168": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the web net server SDCARD FAT FS on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a FreeRTOS implementation. | . | pic32mz_da_sk.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the web net server SDCARD FAT FS on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This is a bare-metal( non-RTOS ) implementation. | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the web net server SDCARD FAT FS on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This is a FreeRTOS implementation. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html#mplab-x-ide-project"
  },"169": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Ensure a microSD/SD card is formatted and loaded with the web pages provided within the &lt; install-dir &gt;/net/apps/web_net_server_sdcard_fatfs/firmware/src/web_pages directory. | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution: . An HTTP server is hosted by the demonstration application. Open_a web browser and direct it to the board running the HTTP server by typing the URL in the address bar (for example, https://mchpboard_c), and then pressing Enter. The demonstration application features following: . Real-time Hardware Control and Dynamic Variables - On the Overview page the LEDs can be clicked to toggle the LEDs on the Microchip hardware development board. The SWITCHes on the Microchip hardware development board can be pressed to toggle the Buttons on the web page. The dynamic variables can be updated in real-time on the HTTP server. Note: For the LED and SWITCH functionality portion of the demonstration, configure the GPIOs connected to LEDs and Switches on Microchip hardware development board, through the Pin Configuration manager in MPLAB® Harmony Configurator (MHC). | Form Processing - Input can be handled from the client by using the GET and POST methods (this functionality controls the on-board LEDs and is operational only on the Explorer 16 Development Board) . | Authentication - Shows an example of the commonly used restricted access feature . | Cookies - Shows an example of storing small text strings on the client side . | Server Side Includes - An example of how SSI can be used to support dynamic content . | File Uploads - Shows an example of a file upload using the POST method. The HTTP server can_accept_a user-defined MPFS/MPFS2 image file for web pages. | Send E-mail - Shows simple SMTP POST methods . | Dynamic DNS - Exercises Dynamic DNS capabilities . | Network Configuration - The MAC address, host name, and IP address of the evaluation kit can be viewed in the Network Configuration page and some configurations can be updated . | MPFS Upload - A new set of web pages can be uploaded to the web server using this feature, which is accessed through http://mchpboard_c/mpfsupload . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html#running-the-demonstration"
  },"170": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html"
  },"171": {
    "doc": "Running Application",
    "title": "TCP/IP SNMP NVM MPFS Running Application",
    "content": "The Non-Volatile Memory (NVM) Microchip Proprietary File System (MPFS) has the snmp.bib file along with other web page files stored in internal Flash and are accessed through the MPFS API. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_nvm_mpfs/docs/readme_run_application.html#tcpip-snmp-nvm-mpfs-running-application",
    "relUrl": "/apps/snmpv3_nvm_mpfs/docs/readme_run_application.html#tcpip-snmp-nvm-mpfs-running-application"
  },"172": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the SNMPv3 NVM MPFS on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the SNMPv3 NVM MPFS on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a FreeRTOS implementation. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_nvm_mpfs/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/snmpv3_nvm_mpfs/docs/readme_run_application.html#mplab-x-ide-project"
  },"173": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | The SNMP and SNMPv3 server is hosted by the application. | Open a SNMP manager (iREASONING SNMP manager is recommended) and Follow the steps given in iREASONING Networks MIB Browser section in the Third-Party help for complete details on using and configuring the application demonstration using the iREASONING SNMP Manager. | SNMP MIB Browser - . | Several SNMP MIB browsers are available. Users can also install a customized MIB browser specific to their application. | Verify SNMP Get, GetNext, GetBulk, Set requests and Get response operations . | For SNMP v2c , the Agent is configured with three Read communities (“public”, “read”, “ “) and three Write communities (“private”,”write”,”public”). | community Index | Read | Write | . | 1 | public | private | . | 2 | read | write | . | 3 | —– | public | . | For SNMP v3, the Agent is configured as per the following table: . | Type | USER 1 | USER 2 | USER 3 | . | USM User | microchip | SnmpAdmin | root | . | Security Level | auth, priv | auth, no priv | no auth, no priv | . | Auth Algorithm | MD5 | SHA1 | N/A | . | Auth Password | auth12345 | ChandlerUS | N/A | . | Privacy Algorithm | AES | N/A | N/A | . | Privacy Password | priv12345 | N/A | N/A | . | . | . The Microchip SNMP Stack supports both TRAP version 1 and TRAP version 2. The default trap output is a multi-varbind SNMPv3 TRAP version 2. Trap receiver setting of iReasoning to be selected and configured to visualize the trap output in the iReasoning MIB browser. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_nvm_mpfs/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/snmpv3_nvm_mpfs/docs/readme_run_application.html#running-the-demonstration"
  },"174": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_nvm_mpfs/docs/readme_run_application.html",
    "relUrl": "/apps/snmpv3_nvm_mpfs/docs/readme_run_application.html"
  },"175": {
    "doc": "Running Application",
    "title": "TCP/IP Berkeley UDP Relay Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_relay/docs/readme_run_application.html#tcpip-berkeley-udp-relay-running-application",
    "relUrl": "/apps/berkeley_udp_relay/docs/readme_run_application.html#tcpip-berkeley-udp-relay-running-application"
  },"176": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the Berkeley UDP Relay on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the Berkeley UDP Relay on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on bare-metal(non-RTOS). | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the Berkeley UDP Relay on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . The following Project Graph diagram shows the Harmony components included in the FreeRTOS TCP/IP Berkeley UDP Relay demonstration application. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_relay/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/berkeley_udp_relay/docs/readme_run_application.html#mplab-x-ide-project"
  },"177": {
    "doc": "Running Application",
    "title": "Demonstration Commands",
    "content": "There are several different commands available in the demonstration from the console port: . General Application Commands: . | current - Displays the current configuration . | start - Starts the packet relay service . | stop - Stops the packet relay service . | . Relay Service Configuration: . | relayhost &lt; host name &gt; - Sets the host to which packets are to be relayed . | relayport &lt; port number &gt; - Sets the port to which packets are to be relayed . | ipv4port &lt; port number &gt; - Sets the IPv4 port that the relay server will listen to for packets to relay . | ipv6port &lt; port number &gt; - Sets the IPv6 port that the relay server will listen to for packets to relay . | . Relay Client Configuration and Commands: . | relayclienthost - Sets the host to which packets are to be sent . | relayclientiter - The number of packets to generate . | relayclientstart - Starts the relay client. This command must be used after the general application start. After a start is called, and the first packet is received by either the relay or the relay server, periodic updates will be sent to the console with information about the number of packets and bytes received. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_relay/docs/readme_run_application.html#demonstration-commands",
    "relUrl": "/apps/berkeley_udp_relay/docs/readme_run_application.html#demonstration-commands"
  },"178": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | To test the UDP packet relay with IPv4, send the following commands, . | relayclienthost &lt; ip address of the relay client &gt; . | relayclientiter &lt; number of packets to relay &gt; . | relayhost &lt; ip address of the host to which packets are to be relayed &gt; . | relayport &lt; port number to which packets are to be relayed &gt; . | ipv4port &lt; port number to which the relay server listens to, for packets to relay &gt; . | current . | start . | relayclientstart . | . | Output - The above steps will relay the UDP packet from the host address set using the relayclienthost command to the destination address set by the command relayhost. The relay packet will be received at the port set by command relayport. | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_relay/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/berkeley_udp_relay/docs/readme_run_application.html#running-the-demonstration"
  },"179": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_relay/docs/readme_run_application.html",
    "relUrl": "/apps/berkeley_udp_relay/docs/readme_run_application.html"
  },"180": {
    "doc": "Running Application",
    "title": "TCP/IP UDP Server Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_server/docs/readme_run_application.html#tcpip-udp-server-running-application",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_run_application.html#tcpip-udp-server-running-application"
  },"181": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP UDP Server on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP UDP Server on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP UDP Server on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP UDP Server on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_server/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_run_application.html#mplab-x-ide-project"
  },"182": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | As soon as a valid IP address is assigned through the DHCP to the demonstration, it is ready to accept a UDP/IP connection on port 9760. | Send a UDP packet to the IP address of the hardware board and port 9760 from any UDP Client application running on the computer (SocketTest, Packet Sender etc). | The UDP Server demonstration running on the evaluation kit will echo back everything it receives along the connection. | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_server/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_run_application.html#running-the-demonstration"
  },"183": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_server/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_run_application.html"
  },"184": {
    "doc": "Running Application",
    "title": "TCP/IP Web Server NVM MPFS Running Application",
    "content": "The HTTP net server module uses Microchip Proprietary File System (MPFS) to read web pages from the Non-Volatile Memory (NVM). The Non-Volatile Memory (NVM) is one of the memory media is used to store the web server pages. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_server_nvm_mpfs/docs/readme_run_application.html#tcpip-web-server-nvm-mpfs-running-application",
    "relUrl": "/apps/web_server_nvm_mpfs/docs/readme_run_application.html#tcpip-web-server-nvm-mpfs-running-application"
  },"185": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP Web net Server on a development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP Web net Server on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_server_nvm_mpfs/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/web_server_nvm_mpfs/docs/readme_run_application.html#mplab-x-ide-project"
  },"186": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . An HTTP server is hosted by the demonstration application. Open_a web browser and direct it to the board running the HTTP server by typing the URL in the address bar (for example, https://mchpboard_c), and then pressing Enter. The demonstration application features following: . Real-time Hardware Control and Dynamic Variables - On the Overview page the LEDs can be clicked to toggle the LEDs on the Microchip hardware development board. The SWITCHes on the Microchip hardware development board can be pressed to toggle the Buttons on the web page. The dynamic variables can be updated in real-time on the HTTP server. Note: For the LED and SWITCH functionality portion of the demonstration, configure the GPIOs connected to LEDs and Switches on Microchip hardware development board, through the Pin Configuration manager in MPLAB® Harmony Configurator (MHC). | Form Processing - Input can be handled from the client by using the GET and POST methods (this functionality controls the on-board LEDs and is operational only on the Explorer 16 Development Board) . | Authentication - Shows an example of the commonly used restricted access feature . | Cookies - Shows an example of storing small text strings on the client side . | Server Side Includes - An example of how SSI can be used to support dynamic content . | File Uploads - Shows an example of a file upload using the POST method. The HTTP server can_accept_a user-defined MPFS/MPFS2 image file for web pages. | Send E-mail - Shows simple SMTP POST methods . | Dynamic DNS - Exercises Dynamic DNS capabilities . | Network Configuration - The MAC address, host name, and IP address of the evaluation kit can be viewed in the Network Configuration page and some configurations can be updated . | MPFS Upload - A new set of web pages can be uploaded to the web server using this feature, which is accessed through http://mchpboard_c/mpfsupload . | . Notes: The location of the MPFS image is fixed at the beginning of the Flash page specified by DRV_MEMORY_DEVICE_START_ADDRESS. The size of the MPFS upload is limited to DRV_MEMORY_DEVICE_MEDIA_SIZE in the demonstration. The HTTP File Upload functionality has to be enabled when the project is generated. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_server_nvm_mpfs/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/web_server_nvm_mpfs/docs/readme_run_application.html#running-the-demonstration"
  },"187": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_server_nvm_mpfs/docs/readme_run_application.html",
    "relUrl": "/apps/web_server_nvm_mpfs/docs/readme_run_application.html"
  },"188": {
    "doc": "Running Application",
    "title": "TCP/IP SNMP SDCARD FATFS Running Application",
    "content": "This SNMP application opens a file named snmp.bib in the root directory of the SD card and reads its content into memory. Also web pages stored in an external SD card and is accessed through a FAT FS API. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_sdcard_fatfs/docs/readme_run_application.html#tcpip-snmp-sdcard-fatfs-running-application",
    "relUrl": "/apps/snmpv3_sdcard_fatfs/docs/readme_run_application.html#tcpip-snmp-sdcard-fatfs-running-application"
  },"189": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the SNMPv3 SDSPI FAT FS on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a FreeRTOS implementation. | . | pic32mz_da_sk.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the SNMPv3 SDMMC FAT FS on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This is a bare-metal(non-RTOS) implementation. | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the SNMPv3 SDMMC FAT FS on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This is a FreeRTOS implementation. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_sdcard_fatfs/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/snmpv3_sdcard_fatfs/docs/readme_run_application.html#mplab-x-ide-project"
  },"190": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Ensure a microSD/SD card is formatted and loaded with the snmp.bib file along with the web pages provided within the&lt; install-dir &gt;/net/apps/snmpv3_sdcard_fatfs/firmware/src/web_pages directory. | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | SNMP Demo Execution: . | The SNMP and SNMPv3 server is hosted by the application. | Open a SNMP manager (iREASONING SNMP manager is recommended) and Follow the steps given in iREASONING Networks MIB Browser section in the Third-Party help for complete details on using and configuring the application demonstration using the iREASONING SNMP Manager. | SNMP MIB Browser - . | Several SNMP MIB browsers are available. Users can also install a customized MIB browser specific to their application. | Verify SNMP Get, GetNext, GetBulk, Set requests and Get response operations . | For SNMP v2c , the Agent is configured with three Read communities (“public”, “read”, “ “) and three Write communities (“private”,”write”,”public”). | community Index | Read | Write | . | 1 | public | private | . | 2 | read | write | . | 3 | —– | public | . | For SNMP v3, the Agent is configured as per the following table: . | Type | USER 1 | USER 2 | USER 3 | . | USM User | microchip | SnmpAdmin | root | . | Security Level | auth, priv | auth, no priv | no auth, no priv | . | Auth Algorithm | MD5 | SHA1 | N/A | . | Auth Password | auth12345 | ChandlerUS | N/A | . | Privacy Algorithm | AES | N/A | N/A | . | Privacy Password | priv12345 | N/A | N/A | . The Microchip SNMP Stack supports both TRAP version 1 and TRAP version 2. The default trap output is a multi-varbind SNMPv3 TRAP version 2. Users is required to select and configure the Trap receiver to visualize the trap output in the iReasoning MIB browser. | . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_sdcard_fatfs/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/snmpv3_sdcard_fatfs/docs/readme_run_application.html#running-the-demonstration"
  },"191": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/snmpv3_sdcard_fatfs/docs/readme_run_application.html",
    "relUrl": "/apps/snmpv3_sdcard_fatfs/docs/readme_run_application.html"
  },"192": {
    "doc": "Running Application",
    "title": "TCP/IP Berkeley UDP Client Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_client/docs/readme_run_application.html#tcpip-berkeley-udp-client-application",
    "relUrl": "/apps/berkeley_udp_client/docs/readme_run_application.html#tcpip-berkeley-udp-client-application"
  },"193": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the Berkeley UDP Client on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the Berkeley UDP Client on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on bare-metal(non-RTOS). | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the Berkeley UDP Client on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_client/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/berkeley_udp_client/docs/readme_run_application.html#mplab-x-ide-project"
  },"194": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . setudppacketoptions, getudppacketoptions and sendudppacket are the UDP client APP commands. | Set the UDP packet options by typing setudppacketoptions at the terminal console. | Verify the UDP packet settings by typing getudppacketoptions at the terminal console. | Send the UDP packet to the destination using the sendudppacket command. | After the sendudppacket command is input, the demonstration will make a DNS query to look up the host name and send a UDP packet to that host. | The output message will be received by the UDP server on the port that is configured by the command setudppacketoptions. | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_client/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/berkeley_udp_client/docs/readme_run_application.html#running-the-demonstration"
  },"195": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_udp_client/docs/readme_run_application.html",
    "relUrl": "/apps/berkeley_udp_client/docs/readme_run_application.html"
  },"196": {
    "doc": "Running Application",
    "title": "TCP/IP UDP Client Server Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client_server/docs/readme_run_application.html#tcpip-udp-client-server-running-application",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_run_application.html#tcpip-udp-client-server-running-application"
  },"197": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP UDP Client Server on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP UDP Client Server on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP UDP Client Server on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP UDP Client Server on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client_server/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_run_application.html#mplab-x-ide-project"
  },"198": {
    "doc": "Running Application",
    "title": "Demonstration Commands",
    "content": "There are three sequential commands implemented in this demonstration. | setudppacketoptions &lt; hostname &gt; &lt; port &gt; &lt; message &gt; - This command specifies the following parameters for the UDP packet: Destination IP Address or Host name, Destination Port and Message to transfer . | getudppacketoptions - This command displays the current options . | sendudppacket - This command sends a UDP packet . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client_server/docs/readme_run_application.html#demonstration-commands",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_run_application.html#demonstration-commands"
  },"199": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . setudppacketoptions, getudppacketoptions and sendudppacket are the UDP client APP commands. | Set the UDP packet options by typing setudppacketoptions at the terminal console. | Verify the UDP packet settings by typing getudppacketoptions at the terminal console. | Send the UDP packet to the destination using the sendudppacket command. | After the sendudppacket command is input, the demonstration will make a DNS query to look up the host name and send a UDP packet to that host. | The output message will be received by the UDP server on the port that is configured by the command setudppacketoption. | . | Testing the UDP Server part of demonstration: . | As soon as a valid IP address is assigned through the DHCP to the demonstration, it is ready to accept a UDP/IP connection on port 9760. | Send a UDP packet to the IP address of the hardware board and port 9760 from any UDP Client application running on the computer (SocketTest, Packet Sender etc). | The UDP Server demonstration running on the evaluation kit will echo back everything it receives along the connection. | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client_server/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_run_application.html#running-the-demonstration"
  },"200": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client_server/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_run_application.html"
  },"201": {
    "doc": "Running Application",
    "title": "TCP/IP WolfSSL MQTT Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfmqtt_demo/docs/readme_run_application.html#tcpip-wolfssl-mqtt-running-application",
    "relUrl": "/apps/wolfmqtt_demo/docs/readme_run_application.html#tcpip-wolfssl-mqtt-running-application"
  },"202": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk.X | PIC32MZ2048EFM144 | PIC32MZ EF Starter Kit | Demonstrates the wolfMQTT on a development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the wolfMQTT on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfmqtt_demo/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/wolfmqtt_demo/docs/readme_run_application.html#mplab-x-ide-project"
  },"203": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . The wolfMQTT demo is interactive, using a set of special MQTT commands that have been added to this demo. Pressing “mqtt help” at the command prompt displays the list of the available commands/options: . | Most of the commands are self explanatory. All settings come with default values. A brief description of the most important settings/commands follows: . | . | “mqtt broker”: sets the MQTT broker to connect to. The default value is “iot.eclipse.org” . | “mqtt port”: sets the MQTT port to use. Default is 1883 . | “mqtt qos”: setd the QoS. Default is MQTT_QOS_0. | “mqtt topi”: sets the MQTT topic. Default is “MQTT_NET_Client topic” . | “mqtt tls”: sets the force TLS flag. Default is 0. | “mqtt user”: sets the user name. Default is “MQTT_NET_User” . | “mqtt txbuf”: sets the size of the TX buffer for the connection. Default is 1024 . | “mqtt rxbuf”: sets the size of the RX buffer for the connection. Default is 1024 . | . Note: The connection to the broker is normally done using the port number: 1883 for plain connections, 8883 for encrypted ones. | Wolf MQTT Connection: . Using the “force TLS” will force an encrypted connection regardless of the port number. The wolfMQTT demo is based on the examples provided by wolfMQTT. To allow a simple usage of the wolfMQTT library, a wolfMQTT NET Glue layer has been added to the Harmony port, . The NET glue layer takes care of all the connections to the broker, supporting both encrypted and plain connections. This way the application does not have to be concerned with the communication mechanisms and can use directly the wolfMQTT API on a Harmony platform without the need to add other supporting code. The configuration parameters for the wolfmqtt demonstration are defined in the app_mqtt_task.h file that’s part of the project. The configuration parameters for the NET glue layer can be configured with MHC (see MHC Configuration). The demo starts with all parameters having default values (see above). If needed, parameters can be adjusted as the application requires. Then a connection to the broker can be started using the command: “mqtt start”. A successful connection should render the following output: . The “mqtt stop” command can be used to request the ongoing MQTT transaction to be aborted. The “mqtt stat” can be used to display the current state of the MQTT connection cycle. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfmqtt_demo/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/wolfmqtt_demo/docs/readme_run_application.html#running-the-demonstration"
  },"204": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfmqtt_demo/docs/readme_run_application.html",
    "relUrl": "/apps/wolfmqtt_demo/docs/readme_run_application.html"
  },"205": {
    "doc": "Running Application",
    "title": "TCP/IP TCP and UDP Client Server Running Application",
    "content": "The Client Server configuration use combination of both TCP and UDP sockets for both client and server communication. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_client_server/docs/readme_run_application.html#tcpip-tcp-and-udp-client-server-running-application",
    "relUrl": "/apps/tcpip_client_server/docs/readme_run_application.html#tcpip-tcp-and-udp-client-server-running-application"
  },"206": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP TCP Client Server on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP TCP Client Server on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_client_server/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/tcpip_client_server/docs/readme_run_application.html#mplab-x-ide-project"
  },"207": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution: . | Once the demonstration starts executing, we can observe the current IP settings at the Tera Term terminal port. | Using “help” will display the available commands that can be used for this demo. | The application can create 4 separate connections, each one running in its own thread: . | A TCP client connection | A TCP server connection | A UDP client connection | A UDP server connection | . | Each connection has its own set of commands. | They can open or close the sockets, send messages to the socket they are connected to, they can display the received messages, etc. | Using your preferred networking tools on the PC side ( netcat, Packet Sender, Hercules, python scripts, etc., etc. ) create sockets that talk to the ones opened by the client server application. | This way you can exchange data with any/all of the communication threads that the demonstration creates. | . | After the successful broad bring up, the console output becomes . | For TCP Client test, input the following command from the serial port: openurl &lt; url &gt; - The &lt; url &gt; argument must be a fully formed URL; for instance, http://www.microchip.com/. For this above URL , the DNS module will make a DNS query. Then it will open a connection to the requested URL and perform a simple HTTP GET command. The response received from the server will be printed on the terminal application through the serial port. The expected output - . | For TCP Server test, the TCP Client application is required to run on the computer (SocketTest, Packet Sender etc). In this demonstration, we use the program, SocketTest (http://sockettest.sourceforge.net/). This demonstration is tested with SocketTest v3.0. | Open the SocketTest software and set the configuration as shown in the following figure. | Press the Connect button on the SocketTest software after setting the configuration. The serial terminal indicates that the connection has been established. | Type any message in the message box of the SocketTest program, and press the Send button. The Server running on the development board will echo back the message to the SocketTest program. | . | Simillarly UDP Client and Server test also performed using SocketTest tool. | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_client_server/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_client_server/docs/readme_run_application.html#running-the-demonstration"
  },"208": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_client_server/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_client_server/docs/readme_run_application.html"
  },"209": {
    "doc": "Running Application",
    "title": "TCP/IP Berkeley TCP Server Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_server/docs/readme_run_application.html#tcpip-berkeley-tcp-server-running-application",
    "relUrl": "/apps/berkeley_tcp_server/docs/readme_run_application.html#tcpip-berkeley-tcp-server-running-application"
  },"210": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the Berkeley TCP Server on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the Berkeley TCP Server on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on bare-metal(non-RTOS). | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the Berkeley TCP Server on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_server/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/berkeley_tcp_server/docs/readme_run_application.html#mplab-x-ide-project"
  },"211": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | As soon as a valid IP address is assigned through the DHCP to the demonstration, it is ready to accept a TCP/IP connection on port 9760. | Send a TCP packet to the IP address of the hardware board using port 9760 from any TCP Client application running on the computer. | The TCP Server demonstration running on the evaluation kit will echo back everything it receives along the connection. | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_server/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/berkeley_tcp_server/docs/readme_run_application.html#running-the-demonstration"
  },"212": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_server/docs/readme_run_application.html",
    "relUrl": "/apps/berkeley_tcp_server/docs/readme_run_application.html"
  },"213": {
    "doc": "Running Application",
    "title": "TCP/IP UDP Client Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client/docs/readme_run_application.html#tcpip-udp-client-running-application",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_run_application.html#tcpip-udp-client-running-application"
  },"214": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the UDP Client on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP UDP Client on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the UDP Client on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP UDP Client on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_run_application.html#mplab-x-ide-project"
  },"215": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . setudppacketoptions, getudppacketoptions and sendudppacket are the UDP client APP commands. | Set the UDP packet options by typing setudppacketoptions at the terminal console. | Verify the UDP packet settings by typing getudppacketoptions at the terminal console. | Send the UDP packet to the destination using the sendudppacket command. | After the sendudppacket command is input, the demonstration will make a DNS query to look up the host name and send a UDP packet to that host. | The output message will be received by the UDP server on the port that is configured by the command setudppacketoptions. | For UDP Client test, the UDP Server application is required to run on the computer (SocketTest, Packet Sender etc). This demonstration is tested with SocketTest v3.0(http://sockettest.sourceforge.net/) . | Open the SocketTest software and select UDP server for the configured port number as per the command setudppacketoptions. | . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_run_application.html#running-the-demonstration"
  },"216": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_udp_client/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_run_application.html"
  },"217": {
    "doc": "Running Application",
    "title": "TCP/IP WolfSSL TCP Client Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_client/docs/readme_run_application.html#tcpip-wolfssl-tcp-client-running-application",
    "relUrl": "/apps/wolfssl_tcp_client/docs/readme_run_application.html#tcpip-wolfssl-tcp-client-running-application"
  },"218": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the wolfSSL TCP Client on a development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. WolfSSL Hardware crypto enabled | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the wolfSSL TCP Client on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_ef_sk_sw.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the wolfSSL TCP Client on a development board with PIC32MZ2048EFH144 device with and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. WolfSSL Software crypto enabled | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_client/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/wolfssl_tcp_client/docs/readme_run_application.html#mplab-x-ide-project"
  },"219": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution: . As soon as a valid IP address is assigned through the DHCP to the demonstration, it is ready to accept console commands. There are three commands available in the demonstration from the serial port: . openurl &lt; url &gt; - The &lt; url &gt; argument must be a fully formed URL; for instance, http://www.microchip.com/ ipmode &lt; mode &gt; - The &lt; mode &gt; argument selects the IP version. 0 - Any IP version, 4 - IPv4 only, 6 - IPv6 only stats - Output the statistics of the previous openurl run. Statistics such as how long each phase of the connection took, and how many bytes were transferred. | After the successful broad bring up, the console output becomes . | Input the following command from the serial port: openurl &lt; url &gt; - The &lt; url &gt; argument must be a fully formed URL; for instance, https://www.microchip.com/. For this above URL , the DNS module will make a DNS query. Then it will open a connection to the requested URL and perform a simple HTTP GET command. The response received from the server will be printed on the terminal application through the serial port. The expected output - . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_client/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/wolfssl_tcp_client/docs/readme_run_application.html#running-the-demonstration"
  },"220": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_client/docs/readme_run_application.html",
    "relUrl": "/apps/wolfssl_tcp_client/docs/readme_run_application.html"
  },"221": {
    "doc": "Running Application",
    "title": "TCP/IP TCP Client Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client/docs/readme_run_application.html#tcpip-tcp-client-running-application",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_run_application.html#tcpip-tcp-client-running-application"
  },"222": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP TCP Client on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on baremetal. | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP TCP Client on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk.X | PIC32MZ2048EFH144 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP TCP Client on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on baremetal. | . | pic32mz_da_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP TCP Client on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_run_application.html#mplab-x-ide-project"
  },"223": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | After the successful broad bring up, the console output becomes . | For TCP Client test, input the following command from the serial port: . | . openurl &lt; url &gt; - The &lt; url &gt; argument must be a fully formed URL; for instance, http://www.microchip.com/. For this above URL , the DNS module will make a DNS query. Then it will open a connection to the requested URL and perform a simple HTTP GET command. The response received from the server will be printed on the terminal application through the serial port. The expected output - ![tcpip_tcp_client_project](/net_apps_pic32mz/apps/tcpip_tcp_client/docs/images/http_put_6.png) . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_run_application.html#running-the-demonstration"
  },"224": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_run_application.html"
  },"225": {
    "doc": "Running Application",
    "title": "TCP/IP Berkeley TCP Client Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_client/docs/readme_run_application.html#tcpip-berkeley-tcp-client-running-application",
    "relUrl": "/apps/berkeley_tcp_client/docs/readme_run_application.html#tcpip-berkeley-tcp-client-running-application"
  },"226": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the Berkeley TCP Client on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the Berkeley TCP Client on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on bare-metal(non-RTOS). | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the Berkeley TCP Client on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_client/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/berkeley_tcp_client/docs/readme_run_application.html#mplab-x-ide-project"
  },"227": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | After the successful broad bring up, the console output becomes . | For TCP Client test, input the following command from the serial port: . | . openurl &lt; url &gt; - The &lt; url &gt; argument must be a fully formed URL; for instance, http://www.microchip.com/. For this above URL , the DNS module will make a DNS query. Then it will open a connection to the requested URL and perform a simple HTTP GET command. The response received from the server will be printed on the terminal application through the serial port. The expected output - ![tcpip_berkeley_tcp_client_project](/net_apps_pic32mz/apps/berkeley_tcp_client/docs/images/http_put_6.png) . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_client/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/berkeley_tcp_client/docs/readme_run_application.html#running-the-demonstration"
  },"228": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/berkeley_tcp_client/docs/readme_run_application.html",
    "relUrl": "/apps/berkeley_tcp_client/docs/readme_run_application.html"
  },"229": {
    "doc": "Running Application",
    "title": "TCP/IP TCP Server Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_server/docs/readme_run_application.html#tcpip-tcp-server-running-application",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_run_application.html#tcpip-tcp-server-running-application"
  },"230": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP TCP Server on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on without FreeRTOS. | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP TCP Server on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_ef_sk_enc28j60.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit + External Ethernet Pictail Controller ENC28j60 + I/O Expansion Board | Demonstrates the TCP/IP TCP Server on development board with PIC32MZ2048EFH144 device and external Ethernet controller ENC28J60. This is a bare-metal (non-RTOS) implementation | . | pic32mz_ef_sk_encx24j600.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit + External Ethernet Pictail Controller ENCx24j600 + I/O Expansion Board | Demonstrates the TCP/IP TCP Server on development board with PIC32MZ2048EFH144 device and external Ethernet controller ENCx24j600. This is a bare-metal (non-RTOS) implementation | . | pic32mz_da_sk.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP TCP Server on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on without FreeRTOS. | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP TCP Server on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_server/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_run_application.html#mplab-x-ide-project"
  },"231": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | As soon as a valid IP address is assigned through the DHCP to the demonstration, it is ready to accept a TCP/IP connection on port 9760. | Send a TCP packet to the IP address of the hardware board using port 9760 from any TCP Client application running on the computer. | The TCP Server demonstration running on the evaluation kit will echo back everything it receives along the connection. | For TCP Server test, the TCP Client application is required to run on the computer (SocketTest, Packet Sender etc). In this demonstration, we use the program, SocketTest (http://sockettest.sourceforge.net/). This demonstration is tested with SocketTest v3.0. | Open the SocketTest software and set the configuration as shown in the following figure. | . | Press the Connect button on the SocketTest software after setting the configuration. The serial terminal indicates that the connection has been established. | Type any message in the message box of the SocketTest program, and press the Send button. The Server running on the development board will echo back the message to the SocketTest program. | . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_server/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_run_application.html#running-the-demonstration"
  },"232": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_server/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_run_application.html"
  },"233": {
    "doc": "Running Application",
    "title": "TCP/IP WolfSSL TCP Server Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_server/docs/readme_run_application.html#tcpip-wolfssl-tcp-server-running-application",
    "relUrl": "/apps/wolfssl_tcp_server/docs/readme_run_application.html#tcpip-wolfssl-tcp-server-running-application"
  },"234": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the wolfSSL TCP Server on a development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the wolfSSL TCP Server on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_ef_sk_sw.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the wolfSSL TCP Server on a development board with PIC32MZ2048EFH144 device with and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. WolfSSL Software crypto enabled | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_server/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/wolfssl_tcp_server/docs/readme_run_application.html#mplab-x-ide-project"
  },"235": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . As soon as a valid IP address is assigned through the DHCP to the demonstration, it is ready to serve Web pages. The demonstration does not offer any additional functionality through the serial port; however, the current IP can be checked. Use any Web browser (i.e., Chrome, Internet Explorer, Firefox, etc.) to connect to the Web server with either http:// or https://. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_server/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/wolfssl_tcp_server/docs/readme_run_application.html#running-the-demonstration"
  },"236": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/wolfssl_tcp_server/docs/readme_run_application.html",
    "relUrl": "/apps/wolfssl_tcp_server/docs/readme_run_application.html"
  },"237": {
    "doc": "Running Application",
    "title": "TCP/IP Web NET Server NVM MPFS Running Application",
    "content": "The HTTP net server module uses Microchip Proprietary File System (MPFS) to read web pages from the Non-Volatile Memory (NVM). The Non-Volatile Memory (NVM) is one of the memory media is used to store the web server pages. ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_nvm_mpfs/docs/readme_run_application.html#tcpip-web-net-server-nvm-mpfs-running-application",
    "relUrl": "/apps/web_net_server_nvm_mpfs/docs/readme_run_application.html#tcpip-web-net-server-nvm-mpfs-running-application"
  },"238": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP Web net Server on a development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP Web net Server on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP Web net Server on a development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP Web net Server on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_nvm_mpfs/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/web_net_server_nvm_mpfs/docs/readme_run_application.html#mplab-x-ide-project"
  },"239": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . An HTTP server is hosted by the demonstration application. Open_a web browser and direct it to the board running the HTTP server by typing the URL in the address bar (for example, https://mchpboard_c), and then pressing Enter. The demonstration application features following: . Real-time Hardware Control and Dynamic Variables - On the Overview page the LEDs can be clicked to toggle the LEDs on the Microchip hardware development board. The SWITCHes on the Microchip hardware development board can be pressed to toggle the Buttons on the web page. The dynamic variables can be updated in real-time on the HTTP server. Note: For the LED and SWITCH functionality portion of the demonstration, configure the GPIOs connected to LEDs and Switches on Microchip hardware development board, through the Pin Configuration manager in MPLAB® Harmony Configurator (MHC). | Form Processing - Input can be handled from the client by using the GET and POST methods (this functionality controls the on-board LEDs and is operational only on the Explorer 16 Development Board) . | Authentication - Shows an example of the commonly used restricted access feature . | Cookies - Shows an example of storing small text strings on the client side . | Server Side Includes - An example of how SSI can be used to support dynamic content . | File Uploads - Shows an example of a file upload using the POST method. The HTTP server can_accept_a user-defined MPFS/MPFS2 image file for web pages. | Send E-mail - Shows simple SMTP POST methods . | Dynamic DNS - Exercises Dynamic DNS capabilities . | Network Configuration - The MAC address, host name, and IP address of the evaluation kit can be viewed in the Network Configuration page and some configurations can be updated . | MPFS Upload - A new set of web pages can be uploaded to the web server using this feature, which is accessed through http://mchpboard_c/mpfsupload . | . Notes: The location of the MPFS image is fixed at the beginning of the Flash page specified by DRV_MEMORY_DEVICE_START_ADDRESS. The size of the MPFS upload is limited to DRV_MEMORY_DEVICE_MEDIA_SIZE in the demonstration. The HTTP File Upload functionality has to be enabled when the project is generated. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_nvm_mpfs/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/web_net_server_nvm_mpfs/docs/readme_run_application.html#running-the-demonstration"
  },"240": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/web_net_server_nvm_mpfs/docs/readme_run_application.html",
    "relUrl": "/apps/web_net_server_nvm_mpfs/docs/readme_run_application.html"
  },"241": {
    "doc": "Running Application",
    "title": "TCP/IP TCP Client Server Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client_server/docs/readme_run_application.html#tcpip-tcp-client-server-running-application",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_run_application.html#tcpip-tcp-client-server-running-application"
  },"242": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP TCP Client Server on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on baremetal. | . | pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP TCP Client on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . | pic32mz_da_sk.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP TCP Client Server on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on baremetal. | . | pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP TCP Client on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client_server/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_run_application.html#mplab-x-ide-project"
  },"243": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution: . | After the successful broad bring up, the console output becomes . | For TCP Client test, input the following command from the serial port: openurl &lt; url &gt; - The &lt; url &gt; argument must be a fully formed URL; for instance, http://www.microchip.com/. For this above URL , the DNS module will make a DNS query. Then it will open a connection to the requested URL and perform a simple HTTP GET command. The response received from the server will be printed on the terminal application through the serial port. The expected output - . | For TCP Server test, the TCP Client application is required to run on the computer (SocketTest, Packet Sender etc). In this demonstration, we use the program, SocketTest (http://sockettest.sourceforge.net/). This demonstration is tested with SocketTest v3.0. | Open the SocketTest software and set the configuration as shown in the following figure. | Press the Connect button on the SocketTest software after setting the configuration. The serial terminal indicates that the connection has been established. | Type any message in the message box of the SocketTest program, and press the Send button. The Server running on the development board will echo back the message to the SocketTest program. | . | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client_server/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_run_application.html#running-the-demonstration"
  },"244": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mz/apps/tcpip_tcp_client_server/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_run_application.html"
  },"245": {
    "doc": "Harmony 3 TCP/IP Application for PIC32MZ Family",
    "title": "Harmony 3 TCP/IP Application for PIC32MZ Family",
    "content": "[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com) # Harmony 3 TCP/IP Application for PIC32MZ Family MPLAB® Harmony 3 is an extension of the MPLAB® ecosystem for creating embedded firmware solutions for Microchip 32-bit SAM and PIC microcontroller and microprocessor devices. Refer to the following links for more information. - [Microchip 32-bit MCUs](https://www.microchip.com/design-centers/32-bit) - [Microchip 32-bit MPUs](https://www.microchip.com/design-centers/32-bit-mpus) - [Microchip MPLAB X IDE](https://www.microchip.com/mplab/mplab-x-ide) - [Microchip MPLAB Harmony](https://www.microchip.com/mplab/mplab-harmony) - [Microchip MPLAB Harmony Pages](https://microchip-mplab-harmony.github.io/) This repository contains the MPLAB® Harmony 3 Network Package (Net). The Net repo provides a free fast to market TCP/IP stack for Microchip 32-bit SAM and PIC microprocessor devices. The repo contains multiple applications that demonstrate communication over TCP/IP using well known protocols like TCP, UDP, HTTP, SMTP, etc. Refer to the following links for release notes, training materials, and interface reference information. - [Release Notes](release_notes.md) - [MPLAB® Harmony License](/net_apps_pic32mz/mplab_harmony_license.html) To clone or download these applications from Github, go to the [main page of this repository](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mz_ef) and then click **Clone** button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these [instructions](https://github.com/Microchip-MPLAB-Harmony/contentmanager/wiki). ## Contents Summary | Folder | Description | --- | --- | apps | Demonstration of TCP/IP PIC32MZ EF & DA Applications | docs | Documents TCP/IP Application in html format for offline viewing. Use [github pages](https://microchip-mplab-harmony.github.io/net_apps_pic32mz/) of this repository for viewing it online. | ## Code Examples The following applications are provided to demonstrate the typical or interesting usage models of one or more peripheral libraries. | Name | Description | ---- | ----------- |berkeley_tcp_client | [TCP/IP Berkeley TCP Client Application](/net_apps_pic32mz/apps/berkeley_tcp_client/readme.html) |berkeley_tcp_server | [TCP/IP Berkeley TCP Server Application](/net_apps_pic32mz/apps/berkeley_tcp_server/readme.html) |berkeley_udp_client | [TCP/IP Berkeley UDP Client Application](/net_apps_pic32mz/apps/berkeley_udp_client/readme.html) |berkeley_udp_server | [TCP/IP Berkeley UDP Server Application](/net_apps_pic32mz/apps/berkeley_udp_server/readme.html) |berkeley_udp_relay | [TCP/IP Berkeley UDP Relay Application](/net_apps_pic32mz/apps/berkeley_udp_relay/readme.html) |iperf_demo | [TCP/IP IPERF Demo Applications](/net_apps_pic32mz/apps/iperf_demo/readme.html) |tcpip_tcp_client | [TCP/IP TCP Client Application](/net_apps_pic32mz/apps/tcpip_tcp_client/readme.html) |tcpip_tcp_client_server | [TCP/IP TCP Client Server Application](/net_apps_pic32mz/apps/tcpip_tcp_client_server/readme.html) |tcpip_client_server | [TCP/IP TCP & UDP Client Server Application](/net_apps_pic32mz/apps/tcpip_client_server/readme.html) |tcpip_tcp_server | [TCP/IP TCP Server Application](/net_apps_pic32mz/apps/tcpip_tcp_server/readme.html) |tcpip_udp_client | [TCP/IP UDP Client Application](/net_apps_pic32mz/apps/tcpip_udp_client/readme.html) |tcpip_udp_server | [TCP/IP UDP Server Application](/net_apps_pic32mz/apps/tcpip_udp_server/readme.html) |tcpip_udp_client_server | [TCP/IP UDP Client Server Application](/net_apps_pic32mz/apps/tcpip_udp_client_server/readme.html) |snmpv3_nvm_mpfs | [TCP/IP SNMP & Secure Web Server NVM with MPFS Application](/net_apps_pic32mz/apps/snmpv3_nvm_mpfs/readme.html) |snmpv3_sdcard_fatfs | [TCP/IP SNMP & Secure Web Server SDCARD with FATFS Application](/net_apps_pic32mz/apps/snmpv3_sdcard_fatfs/readme.html) |web_ftp_server_mpfs_fatfs | [TCP/IP Secure WEB & FTP Server NVM MPFS & SDCARD FATFS Application](/net_apps_pic32mz/apps/web_ftp_server_mpfs_fatfs/readme.html)|web_ftp_server_usb_fatfs | [TCP/IP secure WEB & FTP Server USB and SDCARD Application](apps/web_ftp_server_usb_fatfs/readme.md)|web_net_server_nvm_mpfs | [TCP/IP Secure WEB Server NVM MPFS Application](/net_apps_pic32mz/apps/web_net_server_nvm_mpfs/readme.html)|web_net_server_sdcard_fatfs | [TCP/IP Secure WEB Server SDCARD FATFS Application](/net_apps_pic32mz/apps/web_net_server_sdcard_fatfs/readme.html)|web_server_nvm_mpfs | [TCP/IP WEB Server NVM MPFS Application](/net_apps_pic32mz/apps/web_server_nvm_mpfs/readme.html)|wolfssl_tcp_client | [TCP/IP Secured TCP Client Application](/net_apps_pic32mz/apps/wolfssl_tcp_client/readme.html)|wolfssl_tcp_server | [TCP/IP Secured TCP Server Application](/net_apps_pic32mz/apps/wolfssl_tcp_server/readme.html)|wolfmqtt_demo | [TCP/IP Secured MQTT Server Application](/net_apps_pic32mz/apps/wolfmqtt_demo/readme.html)| [![License](https://img.shields.io/badge/license-Harmony%20license-orange.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mz/blob/master/mplab_harmony_license.md) [![Latest release](https://img.shields.io/github/release/Microchip-MPLAB-Harmony/net_apps_pic32mz.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mz/releases/latest) [![Latest release date](https://img.shields.io/github/release-date/Microchip-MPLAB-Harmony/net_apps_pic32mz.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mz/releases/latest) [![Commit activity](https://img.shields.io/github/commit-activity/y/Microchip-MPLAB-Harmony/net_apps_pic32mz.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mz/graphs/commit-activity) [![Contributors](https://img.shields.io/github/contributors-anon/Microchip-MPLAB-Harmony/net_apps_pic32mz.svg)]() ____ [![Follow us on Youtube](https://img.shields.io/badge/Youtube-Follow%20us%20on%20Youtube-red.svg)](https://www.youtube.com/user/MicrochipTechnology) [![Follow us on LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20us%20on%20LinkedIn-blue.svg)](https://www.linkedin.com/company/microchip-technology) [![Follow us on Facebook](https://img.shields.io/badge/Facebook-Follow%20us%20on%20Facebook-blue.svg)](https://www.facebook.com/microchiptechnology/) [![Follow us on Twitter](https://img.shields.io/twitter/follow/MicrochipTech.svg?style=social)](https://twitter.com/MicrochipTech) [![](https://img.shields.io/github/stars/Microchip-MPLAB-Harmony/net_apps_pic32mz.svg?style=social)]() [![](https://img.shields.io/github/watchers/Microchip-MPLAB-Harmony/net_apps_pic32mz.svg?style=social)]() ",
    "url": "http://localhost:4000/net_apps_pic32mz/",
    "relUrl": "/"
  }
}
`;
var data_for_search

var repo_name = "net_apps_pic32mz";
var doc_folder_name = "docs";
var localhost_path = "http://localhost:4000/";
var home_index_string = "Harmony 3 TCP/IP Application for PIC32MZ Family";

(function (jtd, undefined) {

// Event handling

jtd.addEvent = function(el, type, handler) {
  if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}
jtd.removeEvent = function(el, type, handler) {
  if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
}
jtd.onReady = function(ready) {
  // in case the document is already rendered
  if (document.readyState!='loading') ready();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', ready);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState=='complete') ready();
  });
}

// Show/hide mobile menu

function initNav() {
  jtd.addEvent(document, 'click', function(e){
    var target = e.target;
    while (target && !(target.classList && target.classList.contains('nav-list-expander'))) {
      target = target.parentNode;
    }
    if (target) {
      e.preventDefault();
      target.parentNode.classList.toggle('active');
    }
  });

  const siteNav = document.getElementById('site-nav');
  const mainHeader = document.getElementById('main-header');
  const menuButton = document.getElementById('menu-button');

  jtd.addEvent(menuButton, 'click', function(e){
    e.preventDefault();

    if (menuButton.classList.toggle('nav-open')) {
      siteNav.classList.add('nav-open');
      mainHeader.classList.add('nav-open');
    } else {
      siteNav.classList.remove('nav-open');
      mainHeader.classList.remove('nav-open');
    }
  });
}
// Site search

function initSearch() {

    data_for_search = JSON.parse(myVariable);
    lunr.tokenizer.separator = /[\s/]+/

    var index = lunr(function () {
        this.ref('id');
        this.field('title', { boost: 200 });
        this.field('content', { boost: 2 });
        this.field('url');
        this.metadataWhitelist = ['position']

        var location = document.location.pathname;
        var path = location.substring(0, location.lastIndexOf("/"));
        var directoryName = path.substring(path.lastIndexOf("/")+1);

        var cur_path_from_repo = path.substring(path.lastIndexOf(repo_name));

        // Decrement depth by 2 as HTML files are placed in repo_name/doc_folder_name
        var cur_depth_from_doc_folder = (cur_path_from_repo.split("/").length - 2);

        var rel_path_to_doc_folder = "";

        if (cur_depth_from_doc_folder == 0) {
            rel_path_to_doc_folder = "./"
        }
        else {
            for (var i = 0; i < cur_depth_from_doc_folder; i++)
            {
                rel_path_to_doc_folder = rel_path_to_doc_folder + "../"
            }
        }

        for (var i in data_for_search) {

            data_for_search[i].url = data_for_search[i].url.replace(localhost_path + repo_name, rel_path_to_doc_folder);

            if (data_for_search[i].title == home_index_string)
            {
                data_for_search[i].url = data_for_search[i].url + "index.html"
            }

            this.add({
                id: i,
                title: data_for_search[i].title,
                content: data_for_search[i].content,
                url: data_for_search[i].url
            });
        }
    });

    searchLoaded(index, data_for_search);
}function searchLoaded(index, docs) {
  var index = index;
  var docs = docs;
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var mainHeader = document.getElementById('main-header');
  var currentInput;
  var currentSearchIndex = 0;

  function showSearch() {
    document.documentElement.classList.add('search-active');
  }

  function hideSearch() {
    document.documentElement.classList.remove('search-active');
  }

  function update() {
    currentSearchIndex++;

    var input = searchInput.value;
    if (input === '') {
      hideSearch();
    } else {
      showSearch();
      // scroll search input into view, workaround for iOS Safari
      window.scroll(0, -1);
      setTimeout(function(){ window.scroll(0, 0); }, 0);
    }
    if (input === currentInput) {
      return;
    }
    currentInput = input;
    searchResults.innerHTML = '';
    if (input === '') {
      return;
    }

    var results = index.query(function (query) {
      var tokens = lunr.tokenizer(input)
      query.term(tokens, {
        boost: 10
      });
      query.term(tokens, {
        wildcard: lunr.Query.wildcard.TRAILING
      });
    });

    if ((results.length == 0) && (input.length > 2)) {
      var tokens = lunr.tokenizer(input).filter(function(token, i) {
        return token.str.length < 20;
      })
      if (tokens.length > 0) {
        results = index.query(function (query) {
          query.term(tokens, {
            editDistance: Math.round(Math.sqrt(input.length / 2 - 1))
          });
        });
      }
    }

    if (results.length == 0) {
      var noResultsDiv = document.createElement('div');
      noResultsDiv.classList.add('search-no-result');
      noResultsDiv.innerText = 'No results found';
      searchResults.appendChild(noResultsDiv);

    } else {
      var resultsList = document.createElement('ul');
      resultsList.classList.add('search-results-list');
      searchResults.appendChild(resultsList);

      addResults(resultsList, results, 0, 10, 100, currentSearchIndex);
    }

    function addResults(resultsList, results, start, batchSize, batchMillis, searchIndex) {
      if (searchIndex != currentSearchIndex) {
        return;
      }
      for (var i = start; i < (start + batchSize); i++) {
        if (i == results.length) {
          return;
        }
        addResult(resultsList, results[i]);
      }
      setTimeout(function() {
        addResults(resultsList, results, start + batchSize, batchSize, batchMillis, searchIndex);
      }, batchMillis);
    }

    function addResult(resultsList, result) {
      var doc = docs[result.ref];

      var resultsListItem = document.createElement('li');
      resultsListItem.classList.add('search-results-list-item');
      resultsList.appendChild(resultsListItem);

      var resultLink = document.createElement('a');
      resultLink.classList.add('search-result');
      resultLink.setAttribute('href', doc.url);
      resultsListItem.appendChild(resultLink);

      var resultTitle = document.createElement('div');
      resultTitle.classList.add('search-result-title');
      resultLink.appendChild(resultTitle);

      var resultDoc = document.createElement('div');
      resultDoc.classList.add('search-result-doc');
      resultDoc.innerHTML = '<svg viewBox="0 0 24 24" class="search-result-icon"><use xlink:href="#svg-doc"></use></svg>';
      resultTitle.appendChild(resultDoc);

      var resultDocTitle = document.createElement('div');
      resultDocTitle.classList.add('search-result-doc-title');
      resultDocTitle.innerHTML = doc.doc;
      resultDoc.appendChild(resultDocTitle);
      var resultDocOrSection = resultDocTitle;

      if (doc.doc != doc.title) {
        resultDoc.classList.add('search-result-doc-parent');
        var resultSection = document.createElement('div');
        resultSection.classList.add('search-result-section');
        resultSection.innerHTML = doc.title;
        resultTitle.appendChild(resultSection);
        resultDocOrSection = resultSection;
      }

      var metadata = result.matchData.metadata;
      var titlePositions = [];
      var contentPositions = [];
      for (var j in metadata) {
        var meta = metadata[j];
        if (meta.title) {
          var positions = meta.title.position;
          for (var k in positions) {
            titlePositions.push(positions[k]);
          }
        }
        if (meta.content) {
          var positions = meta.content.position;
          for (var k in positions) {
            var position = positions[k];
            var previewStart = position[0];
            var previewEnd = position[0] + position[1];
            var ellipsesBefore = true;
            var ellipsesAfter = true;
            for (var k = 0; k < 5; k++) {
              var nextSpace = doc.content.lastIndexOf(' ', previewStart - 2);
              var nextDot = doc.content.lastIndexOf('. ', previewStart - 2);
              if ((nextDot >= 0) && (nextDot > nextSpace)) {
                previewStart = nextDot + 1;
                ellipsesBefore = false;
                break;
              }
              if (nextSpace < 0) {
                previewStart = 0;
                ellipsesBefore = false;
                break;
              }
              previewStart = nextSpace + 1;
            }
            for (var k = 0; k < 10; k++) {
              var nextSpace = doc.content.indexOf(' ', previewEnd + 1);
              var nextDot = doc.content.indexOf('. ', previewEnd + 1);
              if ((nextDot >= 0) && (nextDot < nextSpace)) {
                previewEnd = nextDot;
                ellipsesAfter = false;
                break;
              }
              if (nextSpace < 0) {
                previewEnd = doc.content.length;
                ellipsesAfter = false;
                break;
              }
              previewEnd = nextSpace;
            }
            contentPositions.push({
              highlight: position,
              previewStart: previewStart, previewEnd: previewEnd,
              ellipsesBefore: ellipsesBefore, ellipsesAfter: ellipsesAfter
            });
          }
        }
      }

      if (titlePositions.length > 0) {
        titlePositions.sort(function(p1, p2){ return p1[0] - p2[0] });
        resultDocOrSection.innerHTML = '';
        addHighlightedText(resultDocOrSection, doc.title, 0, doc.title.length, titlePositions);
      }

      if (contentPositions.length > 0) {
        contentPositions.sort(function(p1, p2){ return p1.highlight[0] - p2.highlight[0] });
        var contentPosition = contentPositions[0];
        var previewPosition = {
          highlight: [contentPosition.highlight],
          previewStart: contentPosition.previewStart, previewEnd: contentPosition.previewEnd,
          ellipsesBefore: contentPosition.ellipsesBefore, ellipsesAfter: contentPosition.ellipsesAfter
        };
        var previewPositions = [previewPosition];
        for (var j = 1; j < contentPositions.length; j++) {
          contentPosition = contentPositions[j];
          if (previewPosition.previewEnd < contentPosition.previewStart) {
            previewPosition = {
              highlight: [contentPosition.highlight],
              previewStart: contentPosition.previewStart, previewEnd: contentPosition.previewEnd,
              ellipsesBefore: contentPosition.ellipsesBefore, ellipsesAfter: contentPosition.ellipsesAfter
            }
            previewPositions.push(previewPosition);
          } else {
            previewPosition.highlight.push(contentPosition.highlight);
            previewPosition.previewEnd = contentPosition.previewEnd;
            previewPosition.ellipsesAfter = contentPosition.ellipsesAfter;
          }
        }

        var resultPreviews = document.createElement('div');
        resultPreviews.classList.add('search-result-previews');
        resultLink.appendChild(resultPreviews);

        var content = doc.content;
        for (var j = 0; j < Math.min(previewPositions.length, 3); j++) {
          var position = previewPositions[j];

          var resultPreview = document.createElement('div');
          resultPreview.classList.add('search-result-preview');
          resultPreviews.appendChild(resultPreview);

          if (position.ellipsesBefore) {
            resultPreview.appendChild(document.createTextNode('... '));
          }
          addHighlightedText(resultPreview, content, position.previewStart, position.previewEnd, position.highlight);
          if (position.ellipsesAfter) {
            resultPreview.appendChild(document.createTextNode(' ...'));
          }
        }
      }
      var resultRelUrl = document.createElement('span');
      resultRelUrl.classList.add('search-result-rel-url');
      resultRelUrl.innerText = doc.relUrl;
      resultTitle.appendChild(resultRelUrl);
    }

    function addHighlightedText(parent, text, start, end, positions) {
      var index = start;
      for (var i in positions) {
        var position = positions[i];
        var span = document.createElement('span');
        span.innerHTML = text.substring(index, position[0]);
        parent.appendChild(span);
        index = position[0] + position[1];
        var highlight = document.createElement('span');
        highlight.classList.add('search-result-highlight');
        highlight.innerHTML = text.substring(position[0], index);
        parent.appendChild(highlight);
      }
      var span = document.createElement('span');
      span.innerHTML = text.substring(index, end);
      parent.appendChild(span);
    }
  }

  jtd.addEvent(searchInput, 'focus', function(){
    setTimeout(update, 0);
  });

  jtd.addEvent(searchInput, 'keyup', function(e){
    switch (e.keyCode) {
      case 27: // When esc key is pressed, hide the results and clear the field
        searchInput.value = '';
        break;
      case 38: // arrow up
      case 40: // arrow down
      case 13: // enter
        e.preventDefault();
        return;
    }
    update();
  });

  jtd.addEvent(searchInput, 'keydown', function(e){
    switch (e.keyCode) {
      case 38: // arrow up
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          active.classList.remove('active');
          if (active.parentElement.previousSibling) {
            var previous = active.parentElement.previousSibling.querySelector('.search-result');
            previous.classList.add('active');
          }
        }
        return;
      case 40: // arrow down
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          if (active.parentElement.nextSibling) {
            var next = active.parentElement.nextSibling.querySelector('.search-result');
            active.classList.remove('active');
            next.classList.add('active');
          }
        } else {
          var next = document.querySelector('.search-result');
          if (next) {
            next.classList.add('active');
          }
        }
        return;
      case 13: // enter
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          active.click();
        } else {
          var first = document.querySelector('.search-result');
          if (first) {
            first.click();
          }
        }
        return;
    }
  });

  jtd.addEvent(document, 'click', function(e){
    if (e.target != searchInput) {
      hideSearch();
    }
  });
}

// Switch theme

jtd.getTheme = function() {
  var cssFileHref = document.querySelector('[rel="stylesheet"]').getAttribute('href');
  return cssFileHref.substring(cssFileHref.lastIndexOf('-') + 1, cssFileHref.length - 4);
}

jtd.setTheme = function(theme) {
  var cssFile = document.querySelector('[rel="stylesheet"]');
  cssFile.setAttribute('href', 'http://localhost:4000/net_apps_pic32mz/assets/css/just-the-docs-' + theme + '.css');
}

// Document ready

jtd.onReady(function(){
  initNav();
  initSearch();
});

})(window.jtd = window.jtd || {});



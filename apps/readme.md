---
parent: Harmony 3 TCP/IP Application for PIC32MZ Family
title: TCP/IP Network Setup
nav_order: 1
has_children: true
has_toc: false
---
# TCP/IP Network Setup

For the TCP/IP demonstrations, both the target board and the host computer should be in the same network. The host computer can be connected to a router via an ethernet cable or Wi-Fi. The target board should be connected to the router via an ethernet cable. Please refer to the following connection diagram.

![TCP/IP Network Setup](images/connection_4.png)

1. All the TCP/IP Application Demonstration projects that are part of this distribution use the Microchip hardware development boards. They are pre-configured with specific PHY Drivers. The default PHY driver can be changed as some of the hardware boards support different PHY daughter boards. To use a different PHY for a specific board, use MPLAB® Harmony Configurator (MHC) to select and configure the PHY. Make sure that correct PHY address and configuration flags are used for the particular PHY daughter board. The MII/RMII and I/O configuration flags should match the hardware for the PHY board.
The TCP/IP application demonstrations assume that IPv4 is enabled. If IPv4 is not enabled in MHC, the code in app.c will not build and needs to be updated to remove the IPv4 dependencies.

2. All the demos have DHCP enabled, and expect a DHCP server to be available. If there is no DHCP server, then the default static IP address will be used: 192.168.100.11. If this static address does not match your network settings, use MPLAB® Harmony Configurator (MHC) to modify the static IP address of the network interface.

3. The NetBIOS name of the TCP/IP application is specified during the initialization of TCP/IP stack. It is the **hostName** member of **TCPIP_HOSTS_CONFIGURATION** structure. The **NetBIOS** service must be enabled in demonstration configuration, for the TCP/IP demonstration to respond to NetBIOS queries. Alternatively, use the IPv4 or IPv6 address (if IPv6 is enabled) of the board directly.

4. The IPv4 and IPv6 addresses can be obtained by running the TCP/IP Discovery utility on the computer. It requires the TCP/IP Announce module enabled in demonstration configuration, through MHC.





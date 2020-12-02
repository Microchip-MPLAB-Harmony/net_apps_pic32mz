---
parent: Harmony 3 TCP/IP Application for PIC32MZ Family
title: TCP/IP Berkeley UDP Relay
has_children: true
has_toc: false
---
[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# TCP/IP Berkeley UDP Relay

The Berkeley UDP Relay configuration demonstrates the use of multiple sockets for both sending and receiving. There are three different sub-functions of this application: 

* UDP Relay, which accepts UDP packets on one socket, and sends the packets out on a different socket 
* UDP Relay Client, which generates UDP traffic that is compatible with the UDP Relay Server 
* UDP Relay Server, which receives and checks traffic for a packet count and reports is any packets are dropped 



## Development kits
The following table provides links to the documentation to the TCP/IP Berkeley UDP Relay Application on PIC32MZ EF and DA family on both Bare-metal ( non-RTOS ) and FreeRTOS.


| Development Kit |
|:---------|
|[PIC32MZ Starter Kit MHC Configuration](docs/readme_mhc_configuration.md) |
|[PIC32MZ Starter Kit Hardware Configuration](docs/readme_hardware_configuration.md) |
|[PIC32MZ Starter Kit Run Application](docs/readme_run_application.md) |

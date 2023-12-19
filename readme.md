![Microchip logo](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_logo.png)
![Harmony logo small](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_mplab_harmony_logo_small.png)

# Harmony 3 Net library application examples for PIC32MZ family

MPLAB® Harmony 3 is an extension of the MPLAB® ecosystem for creating embedded firmware solutions for Microchip 32-bit SAM and PIC® microcontroller and microprocessor devices.  Refer to the following links for more information.

- [Microchip 32-bit MCUs](https://www.microchip.com/design-centers/32-bit)
- [Microchip 32-bit MPUs](https://www.microchip.com/design-centers/32-bit-mpus)
- [Microchip MPLAB X IDE](https://www.microchip.com/mplab/mplab-x-ide)
- [Microchip MPLAB® Harmony](https://www.microchip.com/mplab/mplab-harmony)
- [Microchip MPLAB® Harmony Pages](https://microchip-mplab-harmony.github.io/)

This repository contains the MPLAB® Harmony 3 Net library application examples for PIC32MZ family

- [Release Notes](./release_notes.md)
- [Microchip Software License Agreement](./mplab_harmony_license.md)

# Contents Summary

| Folder     | Description                                               |
| ---        | ---                                                       |
| apps       | Contains Net library example applications        |
| docs       | Contains documentation in html format for offline viewing (to be used only after cloning this repository onto a local machine). Use [github pages](https://microchip-mplab-harmony.github.io/net_apps_pic32mz/) of this repository for viewing it online.|

## Code Examples

The following applications are provided to demonstrate the typical or interesting usage models of the Net libraries.

| Name | Description |
| ---- | ----------- |
| [berkeley_tcp_client](./docs/GUID-42F3AE83-551C-46BA-82E8-E1887A38D861.html) | This example application shows a TCP Client demo using BSD API |
| [berkeley_tcp_server](./docs/GUID-508C7BED-0EBE-4324-9D97-7674F8587AA0.html) | This example application shows a TCP Server demo using BSD API |
| [berkeley_udp_client](./docs/GUID-641F1177-2D60-4F73-B789-75D84BF7E3DE.html) | This example application shows a UDP Client demo using BSD API |
| [berkeley_udp_relay](./docs/GUID-61972412-01B0-4ED3-A8FF-EAEEE6EE67C4.html) | This example application shows a UDP Relay demo using BSD API |
| [berkeley_udp_server](./docs/GUID-593C6DF2-417D-4D7A-8AF7-58F0934CD381.html)  | This example application shows a UDP Server demo using BSD API |
| [iperf_demo](./docs/GUID-3053C09C-9E26-4370-9326-C272FD63EF2E.html) | This example application shows running iperf and measuring the network performance |
| [snmpv3_nvm_mpfs](./docs/GUID-B4FD67E2-927A-499F-A4EC-4125281B5AE4.html) | This example application shows a SNMP & Web Server with Microchip Proprietary File System (MPFS) in the Non-Volatile Memory (NVM)  |
| [snmpv3_sdcard_fatfs](./docs/GUID-220605C9-D85C-4C7C-AF71-32CAB7948216.html) | This example application shows a SNMP & Web Server with FAT FS file system on the external SD card |
| [tcpip_client_server](./docs/GUID-4200DE77-9144-41A2-86FB-6EF3B624303E.html) | This example application shows a multi-threaded example with TCP and UDP server and client threads |
| [tcpip_tcp_client](./docs/GUID-6AAE041E-FA83-41EA-AB57-D3A4C68AA0B9.html) | This example application shows a TCP Client demo using Harmony native API |
| [tcpip_tcp_client_server](./docs/GUID-6ABD89F7-455E-40DE-B113-F05360EB3C18.html) | This example application shows a TCP Client and Server demo using Harmony native API |
| [tcpip_tcp_server](./docs/GUID-CB66FBEC-2A26-42EB-8D57-41C205A6D2D1.html)  | This example application shows a TCP Server demo using Harmony native API |
| [tcpip_tcp_server_bridge](./docs/GUID-F6CB5AD1-285A-4B06-88D7-DA316429FA7D.html)  | This example application shows a TCP Server Bridge demo using Harmony native API |
| [tcpip_tcp_server_dual_intf](./docs/GUID-5ECB97C7-6505-4748-B263-E0412B60DF9E.html)  | This example application shows a TCP Server Dual Interface demo using Harmony native API |
| [tcpip_tcp_server_ipv4_fwd](./docs/GUID-C284613D-89EA-4B1D-8E65-A3E5F73024B1.html)  | This example application shows a TCP Server IPv4 Forwarding demo using Harmony native API |
| [tcpip_udp_client](./docs/GUID-F3606D97-AA35-448C-9C43-5AA654AEEA77.html) | This example application shows a UDP Client demo using Harmony native API |
| [tcpip_udp_client_server](./docs/GUID-91937E7A-9C9D-42CF-A1AB-33272BF9C882.html) | This example application shows a UDP Client and Server demo using Harmony native API|
| [tcpip_udp_server](./docs/GUID-5438F082-FEFD-407F-8A23-0F45E590883E.html) | This example application shows a UDP Server demo using Harmony native API |
| [web_ftp_server_mpfs_fatfs](./docs/GUID-5964AB33-E2C1-444C-BD8B-B3564F198731.html)| This example application shows a Web server using NVM MPFS and FTP server using SDCARD FATFS|
| [web_net_server_nvm_mpfs](./docs/GUID-91DACBA9-7604-4BAE-8BEE-D3EB8B3AEB4E.html) | This example application shows a Web server with Microchip Proprietary File System (MPFS) in the Non-Volatile Memory (NVM) |
| [web_net_server_ppp](./docs/GUID-EF8C8FA4-CBBF-4BED-A7F6-1810080B7668.html) | This example application shows creating an PPP interface and a Web server with Microchip Proprietary File System (MPFS) in the Non-Volatile Memory (NVM) |
| [web_net_server_sdcard_fatfs](./docs/GUID-C7C913D7-9924-41F3-B5FE-417777457612.html) | This example application shows a Web server with FAT FS file system on the external SD card |
| [wolfmqtt_demo](./docs/GUID-A3992BB9-1698-44B6-98D1-489765E3E9A9.html) | This example application demonstrates a simple MQTT application using the 3rd party wolfMQTT library |
| [wolfssl_tcp_client](./docs/GUID-EAFAC274-BD06-4CB8-8797-15A853587DD8.html) | This example application shows a connection to a Web server using TLS to encrypt the connection with wolfSSL |
| [wolfssl_tcp_server](./docs/GUID-1F1EE0EB-CFE4-4D37-AE67-057D2A700185.html) | This example application shows Web server demo accepting encrypted TLS connections using wolfSSL |
____


[![License](https://img.shields.io/badge/license-Harmony%20license-orange.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mz/blob/master/mplab_harmony_license.md)
[![Latest release](https://img.shields.io/github/release/Microchip-MPLAB-Harmony/net_apps_pic32mz.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mz/releases/latest)
[![Latest release date](https://img.shields.io/github/release-date/Microchip-MPLAB-Harmony/net_apps_pic32mz.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mz/releases/latest)
[![Commit activity](https://img.shields.io/github/commit-activity/y/Microchip-MPLAB-Harmony/net_apps_pic32mz.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mz/graphs/commit-activity)
[![Contributors](https://img.shields.io/github/contributors-anon/Microchip-MPLAB-Harmony/net_apps_pic32mz.svg)]()

____

[![Follow us on Youtube](https://img.shields.io/badge/Youtube-Follow%20us%20on%20Youtube-red.svg)](https://www.youtube.com/user/MicrochipTechnology)
[![Follow us on LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20us%20on%20LinkedIn-blue.svg)](https://www.linkedin.com/company/microchip-technology)
[![Follow us on Facebook](https://img.shields.io/badge/Facebook-Follow%20us%20on%20Facebook-blue.svg)](https://www.facebook.com/microchiptechnology/)
[![Follow us on Twitter](https://img.shields.io/twitter/follow/MicrochipTech.svg?style=social)](https://twitter.com/MicrochipTech)

[![](https://img.shields.io/github/stars/Microchip-MPLAB-Harmony/net_apps_pic32mz.svg?style=social)]()
[![](https://img.shields.io/github/watchers/Microchip-MPLAB-Harmony/net_apps_pic32mz.svg?style=social)]()



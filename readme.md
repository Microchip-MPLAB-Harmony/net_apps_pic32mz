---
title: Harmony 3 TCP/IP Application for PIC32MZ Family
nav_order: 1
has_children: true
has_toc: false
---
[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# Harmony 3 TCP/IP Application for PIC32MZ Family

MPLAB® Harmony 3 is an extension of the MPLAB® ecosystem for creating
embedded firmware solutions for Microchip 32-bit SAM and PIC microcontroller
and microprocessor devices.  Refer to the following links for more information.
 - [Microchip 32-bit MCUs](https://www.microchip.com/design-centers/32-bit)
 - [Microchip 32-bit MPUs](https://www.microchip.com/design-centers/32-bit-mpus)
 - [Microchip MPLAB X IDE](https://www.microchip.com/mplab/mplab-x-ide)
 - [Microchip MPLAB Harmony](https://www.microchip.com/mplab/mplab-harmony)
 - [Microchip MPLAB Harmony Pages](https://microchip-mplab-harmony.github.io/)

This repository contains the MPLAB® Harmony 3 Network Package (Net).  The
Net repo provides a free fast to market TCP/IP stack for Microchip 32-bit SAM and PIC microprocessor
devices. The repo contains multiple applications that demonstrate communication over TCP/IP
using well known protocols like TCP, UDP, HTTP, SMTP, etc.
Refer to the following links for release notes, training materials, and interface
reference information.

- [Release Notes](release_notes.md)
- [MPLAB® Harmony License](mplab_harmony_license.md)

To clone or download these applications from Github, go to the [main page of this repository](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mz_ef) and then click **Clone** button to clone this repository or download as zip file.
This content can also be downloaded using content manager by following these [instructions](https://github.com/Microchip-MPLAB-Harmony/contentmanager/wiki).

## Contents Summary

| Folder     | Description                              |
| ---        | ---                                      |
| apps       | Demonstration of TCP/IP PIC32MZ EF & DA Applications     |
| docs       | Documents TCP/IP Application in html format for offline viewing. Use [github pages](https://microchip-mplab-harmony.github.io/net_apps_pic32mz/) of this repository for viewing it online. |


## Code Examples

The following applications are provided to demonstrate the typical or interesting usage models of one or more peripheral libraries.

| Name | Description |
| ---- | ----------- |
|berkeley_tcp_client  | [TCP/IP Berkeley TCP Client Application](apps/berkeley_tcp_client/readme.md)  |
|berkeley_tcp_server  | [TCP/IP Berkeley TCP Server Application](apps/berkeley_tcp_server/readme.md)  |
|berkeley_udp_client  | [TCP/IP Berkeley UDP Client Application](apps/berkeley_udp_client/readme.md)  |
|berkeley_udp_server  | [TCP/IP Berkeley UDP Server Application](apps/berkeley_udp_server/readme.md)  |
|berkeley_udp_relay   | [TCP/IP Berkeley UDP Relay  Application](apps/berkeley_udp_relay/readme.md)   |
|iperf_demo           | [TCP/IP IPERF Demo Applications](apps/iperf_demo/readme.md)                   |
|tcpip_tcp_client     | [TCP/IP TCP Client Application](apps/tcpip_tcp_client/readme.md)              |
|tcpip_tcp_client_server     | [TCP/IP TCP Client Server Application](apps/tcpip_tcp_client_server/readme.md)        |
|tcpip_client_server     | [TCP/IP TCP & UDP Client Server Application](apps/tcpip_client_server/readme.md)              |
|tcpip_tcp_server     | [TCP/IP TCP Server Application](apps/tcpip_tcp_server/readme.md)              |
|tcpip_udp_client     | [TCP/IP UDP Client Application](apps/tcpip_udp_client/readme.md)              |
|tcpip_udp_server     | [TCP/IP UDP Server Application](apps/tcpip_udp_server/readme.md)              |
|tcpip_udp_client_server     | [TCP/IP UDP Client Server Application](apps/tcpip_udp_client_server/readme.md)              |
|tcpip_tcp_server_bridge     | [TCP/IP WEB Server MAC Bridge Application](apps/tcpip_tcp_server_bridge/readme.md)              |
|tcpip_tcp_server_ipfwd     | [TCP/IP WEB Server IPv4 Forwarding Application](apps/tcpip_tcp_server_ipfwd/readme.md)              |
|snmpv3_nvm_mpfs  | [TCP/IP SNMP & Secure Web Server NVM with MPFS Application](apps/snmpv3_nvm_mpfs/readme.md)       |
|snmpv3_sdcard_fatfs  | [TCP/IP SNMP & Secure Web Server SDCARD with FATFS Application](apps/snmpv3_sdcard_fatfs/readme.md)       |
|web_ftp_server_mpfs_fatfs | [TCP/IP Secure WEB & FTP Server NVM MPFS & SDCARD FATFS Application](apps/web_ftp_server_mpfs_fatfs/readme.md)|
|web_ftp_server_usb_fatfs | [TCP/IP secure WEB & FTP Server USB and SDCARD Application](apps/web_ftp_server_usb_fatfs/readme.md)|
|web_net_server_nvm_mpfs | [TCP/IP Secure WEB Server NVM MPFS Application](apps/web_net_server_nvm_mpfs/readme.md)|
|web_net_server_sdcard_fatfs | [TCP/IP Secure WEB Server SDCARD FATFS Application](apps/web_net_server_sdcard_fatfs/readme.md)|
|web_server_nvm_mpfs | [TCP/IP WEB Server NVM MPFS Application](apps/web_server_nvm_mpfs/readme.md)|
|wolfssl_tcp_client | [TCP/IP Secured TCP Client Application](apps/wolfssl_tcp_client/readme.md)|
|wolfssl_tcp_server | [TCP/IP Secured TCP Server Application](apps/wolfssl_tcp_server/readme.md)|
|wolfmqtt_demo | [TCP/IP Secured MQTT Server Application](apps/wolfmqtt_demo/readme.md)|



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

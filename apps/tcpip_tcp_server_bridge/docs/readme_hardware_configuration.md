---
grand_parent:  Harmony 3 TCP/IP Application for PIC32MZ Family
parent: TCP/IP TCP MAC Bridge Application
title: Hardware Configuration
nav_order: 2
has_children: false
has_toc: false
---
[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# TCP/IP TCP MAC Bridge Hardware Configuration

This section describes PIC32MZ EF device hardware configuration for **external Ethernet controller ENC624J600** with PIC32MZ2048EFH144 development board.

  * Refer to the PIC32MZ EF Ethernet Starter Kit [User Guide](http://ww1.microchip.com/downloads/en/devicedoc/70005230b.pdf)

  * Refer to the ENCX24j600 External Ethernet PICtail Plus Daughter Board [User Guide][https://www.microchip.com/developmenttools/ProductDetails/AC164132]

  * Refer to Starter Kit I/O Expansion Board [User Guide][https://www.microchip.com/developmenttools/ProductDetails/DM320002]

  * The Fast 100Mbps Ethernet PICtail Plus Daughter Board is inserted to J2(or J4) on the Starter Kit I/O Expansion Board. The J2, PICtail Plus (SPI) connector on Fast 100Mbps Ethernet PICtail Plus Daughter Board is attached to I/O Expansion Board with white arrows on the two boards lined up. The PICtail daughter board is inserted to use SPI1.

  * The PIC32MZ Embedded Connectivity with FPU (EF) Starter Kit is connected to J1 on the Starter Kit I/O Expansion board.

  * The pin 46 on J10 and pin 47 on J11 (on I/O Expansion board) need to be connected to control the Chip-Select line by the PIC32.

  * To power the set-up, connect the micro USB cable from the computer to the micro-A/B port J4 on the PIC32MZ EF Starter Kit

  * For serial console, connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit

    ![required_enc28j60_setup](images/PIC32MZ_ENCX24J600.png)
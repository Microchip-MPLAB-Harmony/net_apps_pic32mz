---
grand_parent:  Harmony 3 TCP/IP Application for PIC32MZ Family
parent: TCP/IP Web NET Server SDCARD Application
title: Hardware Configuration
nav_order: 2
has_children: false
has_toc: false
---
[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# TCP/IP Web NET Server SDCARD FATFS Hardware Configuration

This is the following section describes the hardware configuration and one of the configuration can be used for this application demonstration.

1. This section describes the PIC32MZ EF Device hardware configuration with  **SDMMC(Secure Digital/ MultiMediaCard interface)** interface.

    ![required_hardware](images/IOExpansion_SDMMCDaughter_PIC32EF.png)

  * Refer to the PIC32MZ EF Starter Kit User Guide

  *  Refer to the Starter Kit I/O Expansion Board - [DM320002 User Guide](https://www.microchip.com/developmenttools/ProductDetails/DM320002)

  *  Refer to the SDMMC PICtail daughter board - [AC164122 User Guide](https://www.microchip.com/developmenttools/ProductDetails/AC164122)

  * Insert the SDMMC PICtail daughter board (AC164122) into the SPI1 slot of the I/O Expansion Board (DM320002)

  * Insert the PIC32MZ EF Starter Kit into the I/O Expansion Board (DM320002)

  * Establish a connection between the router/switch with the PIC32MZ Starter Kit through the RJ45 connector on PHY daughter board. Power the board using the 9V power adapter

  * The demo application is configured for the SPI1 slot, using the following I/O pins:

      |SPI 1| Pin Selection|
      |:----:|:----:|
      |SCK1 - SPI clock | RD1 |
      |SDI1 - SPI Data Input| RD14 |
      |SDO1 -  SPI Data Output| RD10  |
      | SPI Chip Select| RB1 |

2. This section describes the PIC32MZ DA device default hardware configuration use USB device as **on board debugger and programmer** for this application demonstration.

    * Refer to the PIC32MZ DA Ethernet Starter Kit [User Guide](http://ww1.microchip.com/downloads/en/DeviceDoc/70005311A.pdf) for the programming/debugging options supported.

      ![required_hardware](images/PIC32MZ_DA_USB_ETHERNET.png)

    * No hardware related configuration or jumper setting changes are necessary.
    Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit

    * Connect micro USB cable from the computer to the USB connector(J4) on the PIC32MZ DA Starter Kit

    * Connect micro USB cable from the computer to the USB-UART connector(J5) on the PIC32MZ DA Starter Kit 

    * Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board.

    * Insert MicroSD Card in the MicroSD Card slot (J10) on the development board
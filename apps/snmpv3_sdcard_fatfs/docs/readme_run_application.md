---
grand_parent:  Harmony 3 TCP/IP Application for PIC32MZ Family
parent: TCP/IP SNMP SDCARD FATFS Application
title: Running Application
nav_order: 3
has_children: false
has_toc: false
---
[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# TCP/IP SNMP SDCARD FATFS Running Application

This SNMP application opens a file named **snmp.bib** in the root directory of the SD card and reads its content into memory. Also web pages stored in an external SD card and is accessed through a FAT FS API.


## MPLAB X IDE Project
This table list the name and location of the MPLAB X IDE project folder for the demonstration.

|Project Name|  Target Device|  Target Development Board | Description  |
|:-------------:|:---------:|:---------:|:---------:|
|pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit |Demonstrates the SNMPv3 SDSPI FAT FS on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a FreeRTOS implementation.   |
|pic32mz_da_sk.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit |Demonstrates the SNMPv3 SDMMC FAT FS on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This is a bare-metal(non-RTOS) implementation.   |
|pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit |Demonstrates the SNMPv3 SDMMC FAT FS on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This is a FreeRTOS implementation.   |

## Running The Demonstration

1. Ensure a microSD/SD card is formatted and loaded with the snmp.bib file along with the web pages provided within the< install-dir >/net/apps/snmpv3_sdcard_fatfs/firmware/src/web_pages directory. 

2. Configure the Development Board as given  **[Configure Hardware](readme_hardware_configuration.md)**.

3. Make the demonstration setup as shown [Network Setup](../../readme.md).

4. Build and download the demonstration project on the target board.

5. If the board has a UART connection:

    1. A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector.

    2. Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port.

    3. Set the serial baud rate to 115200 baud in the terminal application.

    4. See that the initialization prints on the serial port terminal.

    5. When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal.

        * Alternatively: Use the Announce service or ping to get the IP address of the board.

        * Run **tcpip_discoverer.jar** to discover the IPv4 and IPv6 address for the board.

6. SNMP Demo Execution:

    1. The SNMP and SNMPv3 server is hosted by the application.

    2. Open a SNMP manager (iREASONING SNMP manager is recommended) and Follow the steps given in **iREASONING Networks MIB Browser section** in the Third-Party help for complete details on using and configuring the application demonstration using the iREASONING SNMP Manager.

    3. SNMP MIB Browser -
    
        - Several SNMP MIB browsers are available. Users can also install a customized MIB browser specific to their application.

        - Verify SNMP Get, GetNext, GetBulk, Set requests and Get response operations .

        - For SNMP v2c , the Agent is configured with three Read communities ("public", "read", " ") and three Write communities ("private","write","public").

            |community Index|  Read |  Write |
            |:-----: | ----- | ----- |
            |1 | public | private |
            |2 |  read|  write|
            |3 | ----- | public |

        - For SNMP v3, the Agent is configured as per the following table:

            |Type|  USER 1|  USER 2|  USER 3|
            | ----- | ----- | ----- | ----- |  
            |USM User | microchip | SnmpAdmin | root  |
            |Security Level|  auth, priv|  auth, no priv|  no auth, no priv  |
            |Auth Algorithm|  MD5 |  SHA1 | N/A  |
            |Auth Password  |auth12345 | ChandlerUS | N/A  |
            |Privacy Algorithm | AES  |N/A | N/A |
            |Privacy Password | priv12345 |  N/A | N/A  |

            The Microchip SNMP Stack supports both TRAP version 1 and TRAP version 2. The default trap output is a multi-varbind SNMPv3 TRAP version 2. Users is required to select and configure the Trap receiver to visualize the trap output in the iReasoning MIB browser.

---
grand_parent:  Harmony 3 TCP/IP Application for PIC32MZ Family
parent: TCP/IP UDP Client
title: Running Application
nav_order: 3
has_children: false
has_toc: false
---
[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# TCP/IP UDP Client Running Application

## MPLAB X IDE Project
This table list the name and location of the MPLAB X IDE project folder for the demonstration.

|Project Name|  Target Device|  Target Development Board | Description  |
|:-------------:|:---------:|:---------:|:---------:|
|pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit |Demonstrates the UDP Client on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS.   |
|pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the TCP/IP UDP Client on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. |
|pic32mz_da_sk.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit |Demonstrates the UDP Client on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS.   |
|pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit | Demonstrates the TCP/IP UDP Client on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. |


## Running The Demonstration

1. Configure the Development Board as given  **[Configure Hardware](readme_hardware_configuration.md)**.

2. Make the demonstration setup as shown [Network Setup](../../readme.md).

3. Build and download the demonstration project on the target board.

4. If the board has a UART connection:

    1. A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector.

    2. Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port.

    3. Set the serial baud rate to 115200 baud in the terminal application.

    4. See that the initialization prints on the serial port terminal.

    5. When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal.

		* Alternatively: Use the Announce service or ping to get the IP address of the board.

        * Run **tcpip_discoverer.jar** to discover the IPv4 and IPv6 address for the board.
        
5. Execution :

    **setudppacketoptions**, **getudppacketoptions** and **sendudppacket** are the UDP client APP commands.

    1. Set the UDP packet options by typing **setudppacketoptions** at the terminal console.
    
    2. Verify the UDP packet settings by typing **getudppacketoptions** at the terminal console.
    
    3. Send the UDP packet to the destination using the **sendudppacket** command.

    4. After the **sendudppacket** command is input, the demonstration will make a DNS query to look up the host name and send a UDP packet to that host.

    5. The output message will be received by the UDP server on the port that is configured by the command **setudppacketoptions**.

    6. For UDP Client test, the UDP Server application is required to run on the computer (SocketTest, Packet Sender etc). This demonstration is tested with **SocketTest v3.0(http://sockettest.sourceforge.net/)** .
        * Open the **SocketTest** software and select UDP server for the configured port number as per the command **setudppacketoptions**.

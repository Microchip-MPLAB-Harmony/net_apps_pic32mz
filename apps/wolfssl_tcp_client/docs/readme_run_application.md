---
grand_parent:  Harmony 3 TCP/IP Application for PIC32MZ Family
parent: TCP/IP WolfSSL TCP Client
title: Running Application
nav_order: 3
has_children: false
has_toc: false
---
[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# TCP/IP WolfSSL TCP Client Running Application

## MPLAB X IDE Project
This table list the name and location of the MPLAB X IDE project folder for the demonstration.

|Project Name|  Target Device|  Target Development Board | Description  |
|:-------------:|:---------:|:---------:|:---------:|
|pic32mz_ef_sk.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the wolfSSL TCP Client on a development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. WolfSSL Hardware crypto enabled  |
|pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the wolfSSL TCP Client on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS. |
|pic32mz_ef_sk_sw.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit | Demonstrates the wolfSSL TCP Client on a development board with PIC32MZ2048EFH144 device with  and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. WolfSSL Software crypto enabled |


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
        
5. Execution:

    As soon as a valid IP address is assigned through the DHCP to the demonstration, it is ready to accept console commands.

    There are three commands available in the demonstration from the serial port:

    openurl < url > - The < url > argument must be a fully formed URL; for instance, https://www.microchip.com/
    ipmode < mode > - The < mode > argument selects the IP version. 0 - Any IP version, 4 - IPv4 only, 6 - IPv6 only
    stats - Output the statistics of the previous openurl run. Statistics such as how long each phase of the connection took, and how many bytes were transferred.

	1. After the successful broad bring up, the console output becomes

        ![tcpip_tcp_client_server_project](images/dhcp_5.png)

    2. Input the following command from the serial port: openurl < url > - The < url > argument must be a fully formed URL; for instance, https://www.microchip.com/.

        For this above URL , the DNS module will make a DNS query. Then it will open a connection to the requested URL and perform a simple HTTP GET command.
        The response received from the server will be printed on the terminal application through the serial port.

        The expected output -

        ![tcpip_tcp_client_server_project](images/http_put_6.png)

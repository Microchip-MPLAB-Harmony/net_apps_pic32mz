# TCP/IP SNMP SDCARD FATFS Application

The Microchip SNMP Server is a multi-lingual implementation, which supports SNMPv1, V2c, and V3 server features simultaneously. The SNMP Server is implemented to address the requirements of embedded applications and works with both IPv4 and IPv6 addresses.

**TCP/IP SNMP SDCARD FATFS MHC Configuration**

The following Project Graph diagram shows the Harmony components included in the application demonstration.

-   MHC is launched by selecting **Tools \> Embedded \> MPLAB® Harmony 3 Configurator** from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated.

    ![tcpip_pic32mz_project](../../docs/GUID-9B937DEB-C777-4C34-A7F8-2996E32EE5E1-low.png)

-   **TCP/IP Root Layer Project Graph**

    -   PIC32MZ EF Device performs read/write to an SD card using SDSPI Module

        SDSPI module is selected with SPI peripheral.

        SDSPI driver uses an instance of the SPI driver to communicate to the SD card over the SPI bus.

        The TCP/IP application demonstrates FAT file system to read/write to an SD card using SDSPI driver. SNMP and WebServer demo applications use SPI peripheral to read/write from SDMMC module.

        ![tcpip_pic32mz_project](../../docs/GUID-91F67DB4-B84E-4FE1-B505-AAA8F6210356-low.png)

    -   PIC32MZ DA device performs read/write to an SD card using SDMMC driver. SNMP and WebServer demo applications use SDMMC driver to read/write from SDHC peripheral module.

        ![tcpip_pic32mzda_project](../../docs/GUID-8F603694-D6B5-46EA-8DF7-9944BF827660-low.png)

        Wolfssl crypto module enabled with MD5,SHA authentication and AES encryption/decryption privacy protocol are enabled. Wolfssl library used a open a secured socket.

        ![tcpip_pic32mz_project](../../docs/GUID-EDFCC477-0CE1-47CE-AC8E-9FC2483C7CF1-low.png)

        **FreeRTOS** component is required for RTOS application. For bare-metal \(non-RTOS\) **FreeRTOS** component should not be selected.

        ![tcpip_pic32mz_project](../../docs/GUID-600C8A78-860E-483D-8C09-8B16D5E1D938-low.png)

        TCP sockets calculate the ISN using the wolfSSL crypto library.

-   **TCP/IP Required Application**

    TCP/IP demo use these application module components for this demo.

    **Announce** module to discover the Microchip devices within a local network.

    **DHCP Client** module to discover the IPv4 address from the nearest DHCP Server.

    **HTTPNET** module is selected to run the web\_server for the port number **443**.

    **SNMP** and **SNMPv3** are an application layer protocols that facilitates the exchange of management information among network devices.

    ![tcpip_pic32mz_project](../../docs/GUID-A6DFD60F-FF16-403F-9F0E-8369E21DF3C1-low.png)

    **Maximum SNMP Message Size** can be increased and the value should be multiple of 32 bytes for larger GET-Bulk response.

-   **TCPIP Driver Layer**

    **Internal ethernet driver\(ethmac\)** is enabled with the external **LAN8740 PHY driver** library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed.

    ![tcpip_pic32mz_project](../../docs/GUID-060D07A9-FE8E-4381-9550-8D0F45A95323-low.png)


**TCP/IP SNMP SDCARD FATFS Hardware Configuration**

This is the following section describes the hardware configuration and one of the configuration can be used for this application demonstration.

1.  This section describes the PIC32MZ EF Device hardware configuration with **SDMMC\(Secure Digital/ MultiMediaCard interface\)** interface.

    ![required_hardware](../../docs/GUID-9E516971-B4DD-43D6-AC71-DD0C5BD57BBE-low.png)


-   Refer to the PIC32MZ EF Starter Kit User Guide

-   Refer to the Starter Kit I/O Expansion Board - [DM320002 User Guide](https://www.microchip.com/developmenttools/ProductDetails/DM320002)

-   Refer to the SDMMC PICtail daughter board - [AC164122 User Guide](https://www.microchip.com/developmenttools/ProductDetails/AC164122)

-   Insert the SDMMC PICtail daughter board \(AC164122\) into the SPI1 slot of the I/O Expansion Board \(DM320002\)

-   Insert the PIC32MZ EF Starter Kit into the I/O Expansion Board \(DM320002\)

-   Establish a connection between the router/switch with the PIC32MZ Starter Kit through the RJ45 connector on PHY daughter board. Power the board using the 9V power adapter

-   The demo application is configured for the SPI1 slot, using the following I/O pins:

    |SPI 1|Pin Selection|
    |-----|-------------|
    |SCK1 - SPI clock|RD1|
    |SDI1 - SPI Data Input|RD14|
    |SDO1 - SPI Data Output|RD10|
    |SPI Chip Select|RB1|


1.  This section describes the PIC32MZ DA device default hardware configuration use USB device as **on board debugger and programmer** for this application demonstration.

    -   Refer to the PIC32MZ DA Ethernet Starter Kit [User Guide](http://ww1.microchip.com/downloads/en/DeviceDoc/70005311A.pdf) for the programming/debugging options supported.

        ![required_hardware](../../docs/GUID-28BB3160-D05D-474F-9FC5-12320C46252A-low.png)

    -   No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit

    -   Connect micro USB cable from the computer to the USB connector\(J4\) on the PIC32MZ DA Starter Kit

    -   Connect micro USB cable from the computer to the USB-UART connector\(J5\) on the PIC32MZ DA Starter Kit

    -   Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board.

    -   Insert MicroSD Card in the MicroSD Card slot \(J10\) on the development board


**TCP/IP SNMP SDCARD FATFS Running Application**

This SNMP application opens a file named **snmp.bib** in the root directory of the SD card and reads its content into memory. Also web pages stored in an external SD card and is accessed through a FAT FS API.

This table list the name and location of the MPLAB X IDE project folder for the demonstration.

|Project Name|Target Device|Target Development Board|Description|
|------------|-------------|------------------------|-----------|
|pic32mz\_ef\_sk\_freertos.X|PIC32MZ2048EFH144|PIC32MZ EF Starter Kit|Demonstrates the SNMPv3 SDSPI FAT FS on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a FreeRTOS implementation.|
|pic32mz\_da\_sk.X|PIC32MZ2064DAS169|PIC32MZ DA Starter Kit|Demonstrates the SNMPv3 SDMMC FAT FS on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This is a bare-metal\(non-RTOS\) implementation.|
|pic32mz\_da\_sk\_freertos.X|PIC32MZ2064DAS169|PIC32MZ DA Starter Kit|Demonstrates the SNMPv3 SDMMC FAT FS on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This is a FreeRTOS implementation.|

1.  Ensure a microSD/SD card is formatted and loaded with the snmp.bib file along with the web pages provided within the< install-dir \>/net/apps/snmpv3\_sdcard\_fatfs/firmware/src/web\_pages directory.


**Running Demonstration Steps**

1.  Build and download the demonstration project on the target board.

2.  If the board has a UART connection:

    1.  A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector.

    2.  Open a standard terminal application on the computer \(like Hyper-terminal or Tera Term\) and configure the virtual COM port.

    3.  Set the serial baud rate to 115200 baud in the terminal application.

    4.  See that the initialization prints on the serial port terminal.

    5.  When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal.

        -   Alternatively: Use the Announce service or ping to get the IP address of the board.

        -   Run **tcpip\_discoverer.jar** to discover the IPv4 and IPv6 address for the board.

3.  SNMP Demo Execution:

    1.  The SNMP and SNMPv3 server is hosted by the application.

    2.  Open a SNMP manager \(iREASONING SNMP manager is recommended\) and Follow the steps given in **iREASONING Networks MIB Browser section** in the Third-Party help for complete details on using and configuring the application demonstration using the iREASONING SNMP Manager.

    3.  SNMP MIB Browser -

        -   Several SNMP MIB browsers are available. Users can also install a customized MIB browser specific to their application.

        -   Verify SNMP Get, GetNext, GetBulk, Set requests and Get response operations .

        -   For SNMP v2c , the Agent is configured with three Read communities \("public", "read", " "\) and three Write communities \("private","write","public"\).

            |community Index|Read|Write|
            |---------------|----|-----|
            |1|public|private|
            |2|read|write|
            |3|-----|public|

        -   For SNMP v3, the Agent is configured as per the following table:

            |Type|USER 1|USER 2|USER 3|
            |----|------|------|------|
            |USM User|microchip|SnmpAdmin|root|
            |Security Level|auth, priv|auth, no priv|no auth, no priv|
            |Auth Algorithm|MD5|SHA1|N/A|
            |Auth Password|auth12345|ChandlerUS|N/A|
            |Privacy Algorithm|AES|N/A|N/A|
            |Privacy Password|priv12345|N/A|N/A|

            The Microchip SNMP Stack supports both TRAP version 1 and TRAP version 2. The default trap output is a multi-varbind SNMPv3 TRAP version 2. Users is required to select and configure the Trap receiver to visualize the trap output in the iReasoning MIB browser.


**Parent topic:**[MPLAB® Harmony 3 TCP/IP Application for PIC32MZ Family](../../docs/GUID-E3619664-D1A4-427D-A50A-7CBF1634F410.md)


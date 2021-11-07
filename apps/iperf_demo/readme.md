# TCP/IP IPERF Application

Iperf is a standard networking tool that helps to measure networking bandwidth and performance.

The iperf demo creates an application that can be used for running iperf and measuring the network performance.

**TCP/IP IPERF Application MHC Configuration**

The following Project Graph diagram shows the Harmony components included in the application demonstration.

-   MHC is launched by selecting **Tools \> Embedded \> MPLAB® Harmony 3 Configurator** from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated.

    ![tcpip_pic32mz_project](../../docs/GUID-9B937DEB-C777-4C34-A7F8-2996E32EE5E1-low.png)

-   **TCP/IP Root Layer Project Graph**

    The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands.

    This is the basic configuration with SYS\_CONSOLE, SYS\_DEBUG and SYS\_COMMAND modules. These modules are required for TCP/IP command execution.

    ![tcpip_pic32mz_project](../../docs/GUID-A3F03F6D-ABD4-4BFA-822D-248EEFEAADD7-low.png)

    **FreeRTOS** component is required for RTOS application. For bare-metal \(non-RTOS\) **FreeRTOS** component should not be selected.

    **NOTE** - The above diagram contains **FreeRTOS** component and that is required for RTOS application. For bare-metal\(non-RTOS\) **FreeRTOS** component shouldn't be selected.

    ![tcpip_pic32mz_project](../../docs/GUID-3D4D5D22-47FC-43D8-B74A-E055541ACA72-low.png)

    TCP sockets calculate the ISN using the wolfSSL crypto library.

-   **TCP/IP Required Application**

    TCP/IP demo use these application module components for this demo.

    **Announce** module to discover the Microchip devices within a local network.

    **DHCP Client** module to discover the IPv4 address from the nearest DHCP Server.

    **IPERF** module is used to run the network benchmark program.

    The default sizes of the Iperf RX and TX buffers are set to 4KB. The performance of a socket is highly dependent on the size of its buffers. So it's a good idea to use as large as possible buffers for the sockets that need high throughput. Bigger buffers will help obtain higher performance numbers.

    The other iperf parameters could be left with their default values.

    For a description of the parameters see the **IPERF Module** of the TCIP Library document.

    ![tcpip_pic32mz_project](../../docs/GUID-6D28DD82-9B0C-44DE-BEF5-CE31FD63A084-low.png)

-   **TCPIP Driver Layer**

    **Internal ethernet driver\(ethmac\)** is enabled with the external **LAN8740 PHY driver** library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed.

    ![tcpip_pic32mz_project](../../docs/GUID-060D07A9-FE8E-4381-9550-8D0F45A95323-low.png)


**TCP/IP IPERF Application Hardware Configuration**

This is the following section describes the hardware configuration and one of the configuration can be used for this application demonstration.

1.  This section describes the PIC32MZ EF device default hardware configuration use USB device as **on board debugger and programmer** for this application demonstration as per the microcontroller.

    -   Refer to the PIC32MZ EF Ethernet Starter Kit [User Guide](http://ww1.microchip.com/downloads/en/devicedoc/70005230b.pdf)

        ![reuired_hardware](../../docs/GUID-D271A617-441D-4CA4-B92C-BCD1DF80C669-low.png)

    -   No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ EF Ethernet Starter Kit

    -   Connect the mini USB cable from the computer to the USB-UART connector on the PIC32MZ EF Starter Kit

    -   Establish a connection between the router/switch with the PIC32MZ EF Starter Kit through the RJ45 connector on PHY daughter board

2.  This section describes the PIC32MZ EF device hardware configuration with the combination of **RealICE, or ICD4** and the Starter Kit I/O Expansion Board for debugging and programming for this application demonstration.

    ![reuired_hardware](../../docs/GUID-3E034137-03DA-4203-92E9-90F1A606DE82-low.png)

    -   Connect the 168 pin to 132 pin Starter Kit Adapter board to the Starter Kit I/O Expansion Board, optionally use a nylon nut and bolt to secure the two boards together

    -   Connect the PIC32MZ Extended Connectivity w/FPU \(EF\) Starter kit to the 168 pin to 132 pin Starter Kit Adapter board, optionally use a nylon nut and bolt to secure the two boards together

    -   Connect the RealICE, or ICD to the RJ-11 port on the Starter Kit I/O Expansion Board

    -   Connect a USB Mini-b \(5 pin\) cable to the DEBUG USB port connect an Ethernet cable to the Ethernet Port

    -   Connect the 9V power supply to the Starter Kit I/O Expansion Board

3.  This section describes the PIC32MZ DA device default hardware configuration which use USB device as **on board debugger and programmer** for this application demonstration.

    -   Refer to the PIC32MZ DA Ethernet Starter Kit [User Guide](http://ww1.microchip.com/downloads/en/DeviceDoc/70005311A.pdf) for the programming/debugging options supported.

        ![reuired_hardware](../../docs/GUID-28BB3160-D05D-474F-9FC5-12320C46252A-low.png)

    -   No hardware related configuration or jumper setting changes are necessary. Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MZ DA Ethernet Starter Kit

    -   Connect micro USB cable from the computer to the USB connector\(J4\) on the PIC32MZ DA Starter Kit

    -   Connect micro USB cable from the computer to the USB-UART connector\(J5\) on the PIC32MZ DA Starter Kit

    -   Establish a connection between the router/switch with the PIC32MZ DA Starter Kit through the RJ45 connector on PHY daughter board


**TCP/IP IPERF Running Application**

This table list the name and location of the MPLAB X IDE project folder for the demonstration.

|Project Name|Target Device|Target Development Board|Description|
|------------|-------------|------------------------|-----------|
|pic32mz\_ef\_sk.X|PIC32MZ2048EFH144|PIC32MZ EF Starter Kit|Demonstrates the TCP/IP iperf demo on a development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on baremetal\( non-RTOS \).|
|pic32mz\_ef\_sk\_freertos.X|PIC32MZ2048EFH144|PIC32MZ EF Starter Kit|Demonstrates the TCP/IP iperf demo on a development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS.|
|pic32mz\_da\_sk.X|PIC32MZ2064DAS169|PIC32MZ DA Starter Kit|Demonstrates the TCP/IP iperf demo on a development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on baremetal\( non-RTOS \).|
|pic32mz\_da\_sk\_freertos.X|PIC32MZ2064DAS169|PIC32MZ DA Starter Kit|Demonstrates the TCP/IP iperf demo on a development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This implementation is based on FreeRTOS.|

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

3.  Execution :

    -   The iperf demo is interactive, using a set of special iperf commands that are supported by the standard set of TCP/IP commands.

    -   Pressing "help iperf" at the command prompt displays the list of the available iperf commands/options:

        ![tcpip_iperf_project](../../docs/GUID-64FE56B3-057F-4582-8A6B-C559E5AD7721-low.png)

    -   A brief description of the most important settings/commands follows:

        -   "iperf": starts the iperf session. Use "iperf -s" for a server connection or "iperf -c address" for a client connection

            -   Look at the Iperf Module for examples of iperf benchmarks

        -   "iperfk" kills an ongoing iperf test. This is mainly useful for killing a iperf server waiting for connections. But the command could be also used to abort client test.

        -   "iperfi -a address" allows to set the interface to use for iperf when the test is run on a multi-interface host. When multiple iperf instabces are used, the extra parameter "-i" could be used to specify the iperf index to which the command refers to.

        -   "iperfs" command could be used to set the socket TX or RX buffer size dynamically. For example:

            -   "iperfs -tx 2048"

    **Note:**

    -   The iperf demo uses very few TCP/IP modules, to minimize the stack overhead and to obtain good throughput numbers.

        -   However ICMP server, NBNS and Announce modules are enabled to assist in the discovery of the board on the network.

        -   DHCP client is also enabled for acquiring a valid IP address within the network.

        -   Some of these modules could be further disabled if they are not used in the specific network environment of the application.

    -   The data throughput could vary dependent on the iperf socket settings and the network conditions.

        -   Larger TX and RX buffers will increase the corresponding throughput.

        -   Various devices on the network on the link between the board and the machine running the iperf application \(switches, routers, etc.\) could also affect the throughput.

        -   User can eliminate these effects by connecting the board running the iperf demo directly to the machine running the test on the PC side \(Linux, Windows, etc.\)


**Parent topic:**[MPLAB® Harmony 3 TCP/IP Application for PIC32MZ Family](../../docs/GUID-E3619664-D1A4-427D-A50A-7CBF1634F410.md)


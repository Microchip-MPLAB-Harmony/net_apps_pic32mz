---
grand_parent:  Harmony 3 TCP/IP Application for PIC32MZ Family
parent: TCP/IP Web NET Server SDCARD Application
title: Running Application
nav_order: 3
has_children: false
has_toc: false
---
[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# TCP/IP Web NET Server SDCARD FATFS Running Application

This Web Net Server application uses the SD card as a memory media and reads the web pages stored according to the configured mount path. Web Server reads the external SD card content using FAT FS API.

## MPLAB X IDE Project
This table list the name and location of the MPLAB X IDE project folder for the demonstration.

|Project Name|  Target Device|  Target Development Board | Description  |
|:-------------:|:---------:|:---------:|:---------:|
|pic32mz_ef_sk_freertos.X | PIC32MZ2048EFH144 | PIC32MZ EF Starter Kit |Demonstrates the web net server SDCARD FAT FS on development board with PIC32MZ2048EFH144 device and LAN8740 PHY daughter board. This is a FreeRTOS implementation.   |
|pic32mz_da_sk.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit |Demonstrates the web net server SDCARD FAT FS on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This is a bare-metal( non-RTOS ) implementation.   |
|pic32mz_da_sk_freertos.X | PIC32MZ2064DAS169 | PIC32MZ DA Starter Kit |Demonstrates the web net server SDCARD FAT FS on development board with PIC32MZ2064DAS169 device and LAN8740 PHY daughter board. This is a FreeRTOS implementation.   |


## Running The Demonstration

1. Ensure a microSD/SD card is formatted and loaded with the web pages provided within the < install-dir >/net/apps/web_net_server_sdcard_fatfs/firmware/src/web_pages directory.

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

6. Execution:

    An HTTP server is hosted by the demonstration application. Open_a web browser and direct it to the board running the HTTP server by typing the URL in the address bar (for example, https://mchpboard_c), and then pressing Enter. 

    The demonstration application features following: 

    Real-time Hardware Control and Dynamic Variables - On the Overview page the LEDs can be clicked to toggle the LEDs on the Microchip hardware development board. The SWITCHes on the Microchip hardware development board can be pressed to toggle the Buttons on the web page. The dynamic variables can be updated in real-time on the HTTP server. 

    **Note:**  For the LED and SWITCH functionality portion of the demonstration, configure the GPIOs connected to LEDs and Switches on Microchip hardware development board, through the Pin Configuration manager in MPLAB® Harmony Configurator (MHC).  

    1. **Form Processing** - Input can be handled from the client by using the GET and POST methods (this functionality controls the on-board LEDs and is operational only on the Explorer 16 Development Board)

    2. **Authentication** - Shows an example of the commonly used restricted access feature 
    
    3. **Cookies** - Shows an example of storing small text strings on the client side 

    4. **Server Side Includes** - An example of how SSI can be used to support dynamic content 

    5. **File Uploads** - Shows an example of a file upload using the POST method. The HTTP server can_accept_a user-defined MPFS/MPFS2 image file for web pages. 
    
    6. **Send E-mail** - Shows simple SMTP POST methods 

    7. **Dynamic DNS** - Exercises Dynamic DNS capabilities 
    
    8. **Network Configuration** - The MAC address, host name, and IP address of the evaluation kit can be viewed in the Network Configuration page and some configurations can be updated 
    
    9. **MPFS Upload** - A new set of web pages can be uploaded to the web server using this feature, which is accessed through http://mchpboard_c/mpfsupload 

   
   ![tcpip_web_net_sdcard_server_project](images/sdcard_fs_run_welcome_screen.png)

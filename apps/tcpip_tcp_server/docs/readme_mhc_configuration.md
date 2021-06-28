---
grand_parent:  Harmony 3 TCP/IP Application for PIC32MZ Family
parent: TCP/IP TCP Server
title: MHC Configuration
nav_order: 1
has_children: false
has_toc: false
---
[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# TCP/IP TCP Server MHC Configuration

The following Project Graph diagram shows the Harmony components included in the TCP Server demonstration application.

* MHC is launched by selecting **Tools > Embedded > MPLAB® Harmony 3 Configurator** from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated.

    ![tcpip_pic32mz_project](images/database_migration_successful.png)

* **TCP/IP Root Layer Project Graph**

    1. TCP/IP stack module with **internal ethmac**

        The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands.

        This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution.

        ![tcpip_pic32mz_project](images/tcpip_default_required_root.png)

        **FreeRTOS** component is required for RTOS application. For bare-metal (non-RTOS) **FreeRTOS** component should not be selected.

        **NOTE** - The above diagram contains **FreeRTOS** component  and that is required for RTOS application. For bare-metal(non-RTOS) **FreeRTOS** component shouldn't be selected.
        
        ![tcpip_pic32mz_project](images/tcpip_tcp_demo_root2.png)
        
        TCP sockets calculate the ISN using the wolfSSL crypto library. 


    2. TCP/IP stack module with **external mac daughter board**

         Both ENC28j60 and ENCX24j600 daughter board use SPI1 driver and peripheral to communicate with the PIC32MZ EF controller. -

         ![tcpip_pic32mz_project](images/tcpip_tcp_demo_enc28j60_root.png)

* **TCP/IP Application Layer**

  TCP/IP demo use these application module components for this demo.
  
  **Announce** module to discover the Microchip devices within a local network.
  
  **DHCP Client** module to discover the IPv4 address from the nearest DHCP Server.
  
  **DNS Client** provides DNS resolution capabilities to the stack. 
  

    ![tcpip_pic32mz_project](images/tcpip_app_layer.png)

* **TCPIP Driver Layer**

    1. **Internal ethernet driver(ethmac)**

          **Internal ethernet driver(ethmac)** is enabled with the external **LAN8740 PHY driver** library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed.

          ![tcpip_pic32mz_project](images/tcpip_driver_component.png)

    2. **External ENC28j60 ethernet driver**

        TCP/IP ENC28j60 driver module selected for the external ethernet  mac ENC28j60 device. For high MAC TX and RX performance DRV_ENC28j60_MAC_TX_DESCRIPTORS and DRV_ENC28j60_MAC_RX_DESCRIPTORS can be configured respectively more than the default descriptor value size "2".
        ![tcpip_pic32mzef_project](images/tcpip_tcp_demo_enc28j60_driver.png)

        GPIO RH12 pin is configured for SPI chip select.

        ![tcpip_pic32mz_project](images/tcpip_tcp_demo_enc28j60_driver_config.png)
        


    3. **External ENCX24j600 ethernet driver**

        TCP/IP ENCx24j600 driver module selected for the external ethernet  mac ENC28j60 device. For high MAC TX and RX performance DRV_ENCX24j600_MAC_TX_DESCRIPTORS and DRV_ENCX24j600_MAC_RX_DESCRIPTORS can be configured respectively more than the default descriptor value size "2".

        ![tcpip_pic32mz_project](images/tcpip_tcp_demo_encx24j600_driver.png)

        GPIO RE9 pin is configured for SPI chip select.

        ![tcpip_pic32mz_project](images/tcpip_tcp_demo_enc624j600_driver_config.png)

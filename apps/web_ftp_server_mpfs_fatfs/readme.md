---
parent: Harmony 3 TCP/IP Application for PIC32MZ Family
title: TCP/IP WEB-NET & FTP SERVER with MPFS & FATF FS
has_children: true
has_toc: false
---
[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# TCP/IP WEB & FTP SERVER Application with MPFS & FATF FS

The Web and FTP Server configuration demonstrates creating an application where HTTP web server will use MPFS FS with NVM media and FTP server will use FAT FS with SDCARD as media.

The Non-Volatile Memory (NVM) Microchip Proprietary File System (MPFS) is used for storing the web pages in the internal Flash.

The FAT FS File System is used for storing any type of files and FTP server will read from and write to this FS.


## Development kits
The following table provides links to the documentation to the **multi media** TCP/IP Application on PIC32MZ EF & DA family on both bare-metal ( non-RTOS ) and FreeRTOS.


| Development Kit |
|:---------|
|[PIC32MZ Starter Kit MHC Configuration](docs/readme_mhc_configuration.md) |
|[PIC32MZ Starter Kit Hardware Configuration](docs/readme_hardware_configuration.md) |
|[PIC32MZ Starter Kit Run Application](docs/readme_run_application.md) |

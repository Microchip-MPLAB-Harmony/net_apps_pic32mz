![Microchip logo](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_logo.png)
![Harmony logo small](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_mplab_harmony_logo_small.png)

# Microchip MPLAB® Harmony 3 Release Notes

## Network Application Examples for PIC32MZ EF and PIC32MZ DA Family, v3.9.0

### New Features
- Addition of PPP demo for PIC32MZ EF Curiosity 2.0.
- Addition of TCP Server Dual Interface demo for PIC32MZ EF Starter Kit.
- All applications with TCP/IP Configurator Plugin.

### Improvements and Bug Fixes
- Fix for bind operation in berkeley module.
- Fix for 'IntegerSymbol not found' MCC failure.
- ETHPHY driver write function.
- Updated demo documentation.

### Known Issues
- Hardware crypto with wolfssl(v5.4.0) not working on PIC32MZ EF Starter Kit.
- Build warnings for third_party/wolfMQTT/mqtt_socket.c in wolfMQTT demo.
    - Workaround is to uncheck 'Make warnings into errors' in xc32 options for this file.
- PPP demo needs to run on a board containing special hardware token support.
    - The demo depends on the TM library which is not publicly available.
    - The demo can be used as it is but cannot be re-configured and regenerated with MCC.


### Development Tools

- [MPLAB® X IDE, v6.15](https://www.microchip.com/mplab/mplab-x-ide) or later
- [MPLAB® XC32 C/C++ Compiler, v4.35](https://www.microchip.com/mplab/compilers) or later
- [MPLAB® Code Configurator(MCC) Plugin, v5.3.7](https://www.microchip.com/en-us/tools-resources/configure/mplab-code-configurator) or later
- [MPLAB® Harmony v3 net repository, v3.11.0](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.11.0)
- [MPLAB® Harmony v3 net\_apps\_pic32mz demo apps repository, v3.9.0](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mz/tree/v3.9.0)

### Development Kit Support

This release supports applications for the following development kit.

| Development Kits |
| --- |
| [PIC32MZ Embedded Connectivity with FPU (EF) Starter Kit](https://www.microchip.com/en-us/development-tool/DM320007)|
| [PIC32MZ Embedded Connectivity with FPU (EF) Starter Kit (CRYPTO)](https://www.microchip.com/en-us/development-tool/DM320007-C)|
| [PIC32MZ Embedded Graphics with Stacked DRAM (DA) Starter Kit](https://www.microchip.com/en-us/development-tool/DM320010-C) |
| [CURIOSITY PIC32MZ EF 2.0 DEVELOPMENT BOARD](https://www.microchip.com/en-us/development-tool/DM320209) |



## Net Release Notes

- See the [Net 3.11.0 Release Notes](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.11.0)

---
## Harmony 3 Network application examples for PIC32MZEF and PIC32MZDA family  v3.8.0

### New Features
New features added in this release are as follows:

- Applications migrated from MHC to MCC
- Migration of select applications to the Net Plugin (beta)

### KNOWN ISSUES

The current known issues are as follows:
* wolfSSL/wolfCrypto PIC32M projects should be built with xc32 version >= 3.01.
    - Otherwise the build will fail.
* HTTP_NET projects using https with wolfSSL/wolfCrypt need to use xc32 v3.01.
    - A crash occurrs with xc32 v4.0.
    - Issue is under investigation.
* HTTP_NET FreeRTOS demos need a heap size of 200K when using the XC32 v4.0.0 compiler.


 

### Development Tools

- [MPLAB� X IDE v6.00](https://www.microchip.com/mplab/mplab-x-ide) or later
- [MPLAB� XC32 C/C++ Compiler v4.00](https://www.microchip.com/mplab/compilers) or later
- [Harmony net repository, 3.8.0](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.8.0)
- [Harmony net_apps_pic32mz demo apps repositories, 3.8.0](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mz/tree/v3.8.0)
- MPLAB Code Configurator (MCC), 5.1.2
- MCC Harmony Core, 1.1.0

#### Development Kit Support

This release supports applications for the following development kits

| Development Kits |
| --- |
| [PIC32MZEF Embedded Connectivity with FPU Starter Kit](https://www.microchip.com/DevelopmentTools/ProductDetails/DM320007-C) |
| [PIC32MZ Embedded Graphics with Stacked DRAM (DA) Starter Kit](https://www.microchip.com/developmenttools/ProductDetails/DM320010-C) |


## Full release notes

- See the full [Net 3.8.0 Release notes](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.8.0)


## Harmony 3 Network application examples for PIC32MZEF and PIC32MZDA family  v3.7.0

### New Features
New features added in this release are as follows:

- Applications migrated from the net repository to this new application repository for PIC32MZEF and PIC32MZDA development boards


### Development Tools

- [MPLAB� X IDE v5.45](https://www.microchip.com/mplab/mplab-x-ide) or later
- [MPLAB� XC32 C/C++ Compiler v2.50](https://www.microchip.com/mplab/compilers) or later
- [Harmony net repository, 3.7.0](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.7.0)
- [Harmony net_apps_pic32mz demo apps repositories, 3.7.0](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mz/tree/v3.7.0)


#### Development Kit Support

This release supports applications for the following development kits

| Development Kits |
| --- |
| [PIC32MZEF Embedded Connectivity with FPU Starter Kit](https://www.microchip.com/DevelopmentTools/ProductDetails/DM320007-C) |
| [PIC32MZ Embedded Graphics with Stacked DRAM (DA) Starter Kit](https://www.microchip.com/developmenttools/ProductDetails/DM320010-C) |


## Full release notes

- See the full [Net 3.7.0 Release notes](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.7.0)



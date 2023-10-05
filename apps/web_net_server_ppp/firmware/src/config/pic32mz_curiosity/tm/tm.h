/**************************************************************************
  Token Manager Library Header

  Company:
    Microchip Technology Inc.

  File Name:
    tm.h
  
  Summary:
    Token Manager library header for Microchip software monetization 
    API functions.

  Description:
    This header file contains function prototypes and definitions of
    the data types and constants that make up the Microchip Token Manager
    software monetization API
**************************************************************************/

//DOM-IGNORE-BEGIN
/*****************************************************************************
 Copyright (C) 2022 Microchip Technology Inc. and its subsidiaries.

Microchip Technology Inc. and its subsidiaries.

Subject to your compliance with these terms, you may use Microchip software 
and any derivatives exclusively with Microchip products. It is your 
responsibility to comply with third party license terms applicable to your 
use of third party software (including open source software) that may 
accompany Microchip software.

THIS SOFTWARE IS SUPPLIED BY MICROCHIP "AS IS". NO WARRANTIES, WHETHER 
EXPRESS, IMPLIED OR STATUTORY, APPLY TO THIS SOFTWARE, INCLUDING ANY IMPLIED 
WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A PARTICULAR 
PURPOSE.

IN NO EVENT WILL MICROCHIP BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE, 
INCIDENTAL OR CONSEQUENTIAL LOSS, DAMAGE, COST OR EXPENSE OF ANY KIND 
WHATSOEVER RELATED TO THE SOFTWARE, HOWEVER CAUSED, EVEN IF MICROCHIP HAS 
BEEN ADVISED OF THE POSSIBILITY OR THE DAMAGES ARE FORESEEABLE. TO THE 
FULLEST EXTENT ALLOWED BY LAW, MICROCHIP'S TOTAL LIABILITY ON ALL CLAIMS IN 
ANY WAY RELATED TO THIS SOFTWARE WILL NOT EXCEED THE AMOUNT OF FEES, IF ANY, 
THAT YOU HAVE PAID DIRECTLY TO MICROCHIP FOR THIS SOFTWARE.
*****************************************************************************/
//DOM-IGNORE-END

/* Defines Microchip CRYPTO API layer */


#ifndef MC_TM_API_H
#define MC_TM_API_H

#include <stdint.h>
#include <stdbool.h>

#ifdef __cplusplus
    extern "C" {
#endif

//******************************************************************************
/* Function:
    bool TM_ValidateTokenLevel(uint8_t level)

  Summary:
    This function is called by Microchip monetized software to check the 
    token level of a Magic Number (MN) located in a special read-only flash 
    memory location of the the MCU. 

  Description:
    This function is called by software to check token level of a 
    Magic Number (MN) is located in a special read-only flash 
    memory location of the the MCU. If MN is not present or invalid, returns
    false.  If the requested level argument is less than the MN Token
    level, it also returns false.  Otherwise, the MN has a token level 
    greater than the requested level and returns true.  Monetized software 
    should only execute at a given level, if and only if TM_ValidateTokenLevel 
    returns true

  Precondition:
	None.

  Parameters:
    level - Requested token level

  Returns:
    false - Invalid MN, or MN token level too low. 
	true  - Valid token level

  Example:

    #include "tm.h"

    #define EXEC_TOKEN_LEVEL 5
    if (!TM_ValidateTokenLevel(EXEC_TOKEN_LEVEL)
       TM_Fault(EXEC_TOKEN_LEVEL);  //Stops execution
    
*/
bool TM_ValidateTokenLevel(uint8_t level);

#ifdef __cplusplus
    }  /* extern "C" */ 
#endif


#endif /* MC_TM_API_H */


/*******************************************************************************
 Source file for the Net Pres Encryption glue functions to work with Harmony


  Summary:


  Description:

*******************************************************************************/

/*
Copyright (C) 2013-2023, Microchip Technology Inc., and its subsidiaries. All rights reserved.

The software and documentation is provided by microchip and its contributors
"as is" and any express, implied or statutory warranties, including, but not
limited to, the implied warranties of merchantability, fitness for a particular
purpose and non-infringement of third party intellectual property rights are
disclaimed to the fullest extent permitted by law. In no event shall microchip
or its contributors be liable for any direct, indirect, incidental, special,
exemplary, or consequential damages (including, but not limited to, procurement
of substitute goods or services; loss of use, data, or profits; or business
interruption) however caused and on any theory of liability, whether in contract,
strict liability, or tort (including negligence or otherwise) arising in any way
out of the use of the software and documentation, even if advised of the
possibility of such damage.

Except as expressly permitted hereunder and subject to the applicable license terms
for any third-party software incorporated in the software and any applicable open
source software license terms, no license or other rights, whether express or
implied, are granted under any patent or other intellectual property rights of
Microchip or any third party.
*/


#include "net_pres_enc_glue.h"
#include "net_pres/pres/net_pres_transportapi.h"
#include "net_pres/pres/net_pres_certstore.h"

#include "config.h"
#include "wolfssl/ssl.h"
#include "wolfssl/wolfcrypt/logging.h"
#include "wolfssl/wolfcrypt/random.h"

extern  int CheckAvailableSize(WOLFSSL *ssl, int size);


typedef struct 
{
    WOLFSSL_CTX* context;
    NET_PRES_TransportObject * transObject;
    bool isInited;
}net_pres_wolfsslInfo;

// Temporary fix till crypto library is upgraded to recent wolfssl versions.
int  InitRng(RNG* rng)
{
    return wc_InitRng(rng);
}

NET_PRES_EncProviderObject net_pres_EncProviderStreamClient0 = 
{
    .fpInit =    NET_PRES_EncProviderStreamClientInit0,
    .fpDeinit =  NET_PRES_EncProviderStreamClientDeinit0,
    .fpOpen =    NET_PRES_EncProviderStreamClientOpen0,
    .fpConnect = NET_PRES_EncProviderClientConnect0,
    .fpClose =   NET_PRES_EncProviderConnectionClose0,
    .fpWrite =   NET_PRES_EncProviderWrite0,
    .fpWriteReady =   NET_PRES_EncProviderWriteReady0,
    .fpRead =    NET_PRES_EncProviderRead0,
    .fpReadReady = NET_PRES_EncProviderReadReady0,
    .fpPeek =    NET_PRES_EncProviderPeek0,
    .fpIsInited = NET_PRES_EncProviderStreamClientIsInited0,
    .fpOutputSize = NET_PRES_EncProviderOutputSize0,
    .fpMaxOutputSize = NET_PRES_EncProviderMaxOutputSize0,
};
	
	
	

		
bool NET_PRES_EncProviderStreamClientInit0(NET_PRES_TransportObject * transObject)
{
    //TODO: Enter in code to initialize the provider
    return false;
}
bool NET_PRES_EncProviderStreamClientDeinit0(void)
{
    //TODO: Enter in code to deinitialize the provider
    return false;
}
bool NET_PRES_EncProviderStreamClientOpen0(uintptr_t transHandle, void * providerData)
{
    //TODO: Enter in code to open a connection with the provider
    return false;
}
bool NET_PRES_EncProviderStreamClientIsInited0(void)
{
    //TODO: Enter in code to open a connection with the provider
    return false;
}
NET_PRES_EncSessionStatus NET_PRES_EncProviderClientConnect0(void * providerData)
{
    //TODO: Enter in code to Connect a connection through the provider
    return NET_PRES_ENC_SS_FAILED;
}
NET_PRES_EncSessionStatus NET_PRES_EncProviderConnectionClose0(void * providerData)
{
    //TODO: Enter in code to close a connection through provider
    return false;
}
int32_t NET_PRES_EncProviderWrite0(void * providerData, const uint8_t * buffer, uint16_t size)
{
    //TODO: Enter in  code to write data through the provider
    return 0;
}
uint16_t NET_PRES_EncProviderWriteReady0(void * providerData, uint16_t reqSize, uint16_t minSize)
{
    //TODO: Enter in  code to check write ready through the provider
    return 0;
}
int32_t NET_PRES_EncProviderRead0(void * providerData, uint8_t * buffer, uint16_t size)
{
    //TODO: Enter in  code to read data from the provider
    return 0;
}

int32_t NET_PRES_EncProviderReadReady0(void * providerData)
{
    //TODO: Enter in  code to read data from the provider
    return 0;
}
        
int32_t NET_PRES_EncProviderPeek0(void * providerData, uint8_t * buffer, uint16_t size)
{
    //TODO: Enter in  code to peek at data held by provider
    return 0;
}
int32_t NET_PRES_EncProviderOutputSize0(void * providerData, int32_t inSize)
{
    //TODO: Enter in  code to get the provider output size
    return 0;
}
int32_t NET_PRES_EncProviderMaxOutputSize0(void * providerData)
{
    //TODO: Enter in  code to get the provider max output size
    return 0;
}

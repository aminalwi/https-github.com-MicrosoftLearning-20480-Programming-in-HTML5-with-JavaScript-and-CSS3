﻿// This script is for a Web Worker.
addEventListener("message", function (event) {
    const imageData = event.data;
    const pixels = imageData.data;
    for (let i = 0; i < pixels.length; i += 4) {
        grayscalePixel(pixels, i);
    }
    postMessage({ done: imageData });
});

function grayscalePixel(pixels, index) {
    /// <summary>Updates the pixel, starting at the given index, to be gray scale.</summary>

    const brightness = 0.34 * pixels[index] + 0.5 * pixels[index + 1] + 0.16 * pixels[index + 2];

    pixels[index] = brightness; // red
    pixels[index + 1] = brightness; // green
    pixels[index + 2] = brightness; // blue
};

// SIG // Begin signature block
// SIG // MIIaVgYJKoZIhvcNAQcCoIIaRzCCGkMCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFLFPp86/CptT
// SIG // 50D37VTN59N1wuFGoIIVJjCCBJkwggOBoAMCAQICEzMA
// SIG // AACdHo0nrrjz2DgAAQAAAJ0wDQYJKoZIhvcNAQEFBQAw
// SIG // eTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWlj
// SIG // cm9zb2Z0IENvZGUgU2lnbmluZyBQQ0EwHhcNMTIwOTA0
// SIG // MjE0MjA5WhcNMTMwMzA0MjE0MjA5WjCBgzELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjENMAsGA1UECxMETU9QUjEeMBwGA1UE
// SIG // AxMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuqRJbBD7Ipxl
// SIG // ohaYO8thYvp0Ka2NBhnScVgZil5XDWlibjagTv0ieeAd
// SIG // xxphjvr8oxElFsjAWCwxioiuMh6I238+dFf3haQ2U8pB
// SIG // 72m4aZ5tVutu5LImTXPRZHG0H9ZhhIgAIe9oWINbSY+0
// SIG // 39M11svZMJ9T/HprmoQrtyFndNT2eLZhh5iUfCrPZ+kZ
// SIG // vtm6Y+08Tj59Auvzf6/PD7eBfvT76PeRSLuPPYzIB5Mc
// SIG // 87115PxjICmfOfNBVDgeVGRAtISqN67zAIziDfqhsg8i
// SIG // taeprtYXuTDwAiMgEPprWQ/grZ+eYIGTA0wNm2IZs7uW
// SIG // vJFapniGdptszUzsErU4RwIDAQABo4IBDTCCAQkwEwYD
// SIG // VR0lBAwwCgYIKwYBBQUHAwMwHQYDVR0OBBYEFN5R3Bvy
// SIG // HkoFPxIcwbzDs2UskQWYMB8GA1UdIwQYMBaAFMsR6MrS
// SIG // tBZYAck3LjMWFrlMmgofMFYGA1UdHwRPME0wS6BJoEeG
// SIG // RWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL01pY0NvZFNpZ1BDQV8wOC0zMS0yMDEw
// SIG // LmNybDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKG
// SIG // Pmh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2Vy
// SIG // dHMvTWljQ29kU2lnUENBXzA4LTMxLTIwMTAuY3J0MA0G
// SIG // CSqGSIb3DQEBBQUAA4IBAQAqpPfuwMMmeoNiGnicW8X9
// SIG // 7BXEp3gT0RdTKAsMAEI/OA+J3GQZhDV/SLnP63qJoc1P
// SIG // qeC77UcQ/hfah4kQ0UwVoPAR/9qWz2TPgf0zp8N4k+R8
// SIG // 1W2HcdYcYeLMTmS3cz/5eyc09lI/R0PADoFwU8GWAaJL
// SIG // u78qA3d7bvvQRooXKDGlBeMWirjxSmkVXTP533+UPEdF
// SIG // Ha7Ki8f3iB7q/pEMn08HCe0mkm6zlBkB+F+B567aiY9/
// SIG // Wl6EX7W+fEblR6/+WCuRf4fcRh9RlczDYqG1x1/ryWlc
// SIG // cZGpjVYgLDpOk/2bBo+tivhofju6eUKTOUn10F7scI1C
// SIG // dcWCVZAbtVVhMIIEujCCA6KgAwIBAgIKYQKSSgAAAAAA
// SIG // IDANBgkqhkiG9w0BAQUFADB3MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSEwHwYDVQQDExhNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0EwHhcNMTIwMTA5MjIyNTU5WhcNMTMwNDA5MjIy
// SIG // NTU5WjCBszELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjENMAsGA1UE
// SIG // CxMETU9QUjEnMCUGA1UECxMebkNpcGhlciBEU0UgRVNO
// SIG // OkI4RUMtMzBBNC03MTQ0MSUwIwYDVQQDExxNaWNyb3Nv
// SIG // ZnQgVGltZS1TdGFtcCBTZXJ2aWNlMIIBIjANBgkqhkiG
// SIG // 9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzWPD96K1R9n5OZRT
// SIG // rGuPpnk4IfTRbj0VOBbBcyyZj/vgPFvhokyLsquLtPJK
// SIG // x7mTUNEm9YdTsHp180cPFytnLGTrYOdKjOCLXsRWaTc6
// SIG // KgRdFwHIv6m308mro5GogeM/LbfY5MR4AHk5z/3HZOIj
// SIG // EnieDHYnSY+arA504wZVVUnI7aF8cEVhfrJxFh7hwUG5
// SIG // 0tIy6VIk8zZQBNfdbzxJ1QvUdkD8ZWUTfpVROtX/uJqn
// SIG // V2tLFeU3WB/cAA3FrurfgUf58FKu5s9arOAUSqZxlID6
// SIG // /bAjMGDpg2CsDiQe/xHy56VVYpXun3+eKdbNSwp2g/BD
// SIG // BN8GSSDyU1pEsFF6OQIDAQABo4IBCTCCAQUwHQYDVR0O
// SIG // BBYEFM0ZrGFNlGcr9q+UdVnb8FgAg6E6MB8GA1UdIwQY
// SIG // MBaAFCM0+NlSRnAK7UD7dvuzK7DDNbMPMFQGA1UdHwRN
// SIG // MEswSaBHoEWGQ2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNv
// SIG // bS9wa2kvY3JsL3Byb2R1Y3RzL01pY3Jvc29mdFRpbWVT
// SIG // dGFtcFBDQS5jcmwwWAYIKwYBBQUHAQEETDBKMEgGCCsG
// SIG // AQUFBzAChjxodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpL2NlcnRzL01pY3Jvc29mdFRpbWVTdGFtcFBDQS5j
// SIG // cnQwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDQYJKoZIhvcN
// SIG // AQEFBQADggEBAFEc1t82HdyAvAKnxpnfFsiQBmkVmjK5
// SIG // 82QQ0orzYikbeY/KYKmzXcTkFi01jESb8fRcYaRBrpqL
// SIG // ulDRanlqs2KMnU1RUAupjtS/ohDAR9VOdVKJHj+Wao8u
// SIG // QBQGcu4/cFmSXYXtg5n6goSe5AMBIROrJ9bMcUnl2h3/
// SIG // bzwJTtWNZugMyX/uMRQCN197aeyJPkV/JUTnHxrWxRrD
// SIG // SuTh8YSY50/5qZinGEbshGzsqQMK/Xx6Uh2ca6SoD5iS
// SIG // pJJ4XCt4432yx9m2cH3fW3NTv6rUZlBL8Mk7lYXlwUpl
// SIG // nSVYULsgVJF5OhsHXGpXKK8xx5/nwx3uR/0n13/PdNxl
// SIG // xT8wggW8MIIDpKADAgECAgphMyYaAAAAAAAxMA0GCSqG
// SIG // SIb3DQEBBQUAMF8xEzARBgoJkiaJk/IsZAEZFgNjb20x
// SIG // GTAXBgoJkiaJk/IsZAEZFgltaWNyb3NvZnQxLTArBgNV
// SIG // BAMTJE1pY3Jvc29mdCBSb290IENlcnRpZmljYXRlIEF1
// SIG // dGhvcml0eTAeFw0xMDA4MzEyMjE5MzJaFw0yMDA4MzEy
// SIG // MjI5MzJaMHkxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xIzAhBgNV
// SIG // BAMTGk1pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENBMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsnJZ
// SIG // XBkwZL8dmmAgIEKZdlNsPhvWb8zL8epr/pcWEODfOnSD
// SIG // GrcvoDLs/97CQk4j1XIA2zVXConKriBJ9PBorE1LjaW9
// SIG // eUtxm0cH2v0l3511iM+qc0R/14Hb873yNqTJXEXcr609
// SIG // 4CholxqnpXJzVvEXlOT9NZRyoNZ2Xx53RYOFOBbQc1sF
// SIG // umdSjaWyaS/aGQv+knQp4nYvVN0UMFn40o1i/cvJX0Yx
// SIG // ULknE+RAMM9yKRAoIsc3Tj2gMj2QzaE4BoVcTlaCKCoF
// SIG // MrdL109j59ItYvFFPeesCAD2RqGe0VuMJlPoeqpK8kbP
// SIG // Nzw4nrR3XKUXno3LEY9WPMGsCV8D0wIDAQABo4IBXjCC
// SIG // AVowDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUyxHo
// SIG // ytK0FlgByTcuMxYWuUyaCh8wCwYDVR0PBAQDAgGGMBIG
// SIG // CSsGAQQBgjcVAQQFAgMBAAEwIwYJKwYBBAGCNxUCBBYE
// SIG // FP3RMU7TJoqV4ZhgO6gxb6Y8vNgtMBkGCSsGAQQBgjcU
// SIG // AgQMHgoAUwB1AGIAQwBBMB8GA1UdIwQYMBaAFA6sgmBA
// SIG // VieX5SUT/CrhClOVWeSkMFAGA1UdHwRJMEcwRaBDoEGG
// SIG // P2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL21pY3Jvc29mdHJvb3RjZXJ0LmNybDBU
// SIG // BggrBgEFBQcBAQRIMEYwRAYIKwYBBQUHMAKGOGh0dHA6
// SIG // Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMvTWlj
// SIG // cm9zb2Z0Um9vdENlcnQuY3J0MA0GCSqGSIb3DQEBBQUA
// SIG // A4ICAQBZOT5/Jkav629AsTK1ausOL26oSffrX3XtTDst
// SIG // 10OtC/7L6S0xoyPMfFCYgCFdrD0vTLqiqFac43C7uLT4
// SIG // ebVJcvc+6kF/yuEMF2nLpZwgLfoLUMRWzS3jStK8cOeo
// SIG // DaIDpVbguIpLV/KVQpzx8+/u44YfNDy4VprwUyOFKqSC
// SIG // HJPilAcd8uJO+IyhyugTpZFOyBvSj3KVKnFtmxr4HPBT
// SIG // 1mfMIv9cHc2ijL0nsnljVkSiUc356aNYVt2bAkVEL1/0
// SIG // 2q7UgjJu/KSVE+Traeepoiy+yCsQDmWOmdv1ovoSJgll
// SIG // OJTxeh9Ku9HhVujQeJYYXMk1Fl/dkx1Jji2+rTREHO4Q
// SIG // FRoAXd01WyHOmMcJ7oUOjE9tDhNOPXwpSJxy0fNsysHs
// SIG // cKNXkld9lI2gG0gDWvfPo2cKdKU27S0vF8jmcjcS9G+x
// SIG // PGeC+VKyjTMWZR4Oit0Q3mT0b85G1NMX6XnEBLTT+yzf
// SIG // H4qerAr7EydAreT54al/RrsHYEdlYEBOsELsTu2zdnnY
// SIG // CjQJbRyAMR/iDlTd5aH75UcQrWSY/1AWLny/BSF64pVB
// SIG // J2nDk4+VyY3YmyGuDVyc8KKuhmiDDGotu3ZrAB2WrfIW
// SIG // e/YWgyS5iM9qqEcxL5rc43E91wB+YkfRzojJuBj6DnKN
// SIG // waM9rwJAav9pm5biEKgQtDdQCNbDPTCCBgcwggPvoAMC
// SIG // AQICCmEWaDQAAAAAABwwDQYJKoZIhvcNAQEFBQAwXzET
// SIG // MBEGCgmSJomT8ixkARkWA2NvbTEZMBcGCgmSJomT8ixk
// SIG // ARkWCW1pY3Jvc29mdDEtMCsGA1UEAxMkTWljcm9zb2Z0
// SIG // IFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5MB4XDTA3
// SIG // MDQwMzEyNTMwOVoXDTIxMDQwMzEzMDMwOVowdzELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAn6Fssd/bSJIqfGsuGeG94uPF
// SIG // mVEjUK3O3RhOJA/u0afRTK10MCAR6wfVVJUVSZQbQpKu
// SIG // mFwwJtoAa+h7veyJBw/3DgSY8InMH8szJIed8vRnHCz8
// SIG // e+eIHernTqOhwSNTyo36Rc8J0F6v0LBCBKL5pmyTZ9co
// SIG // 3EZTsIbQ5ShGLieshk9VUgzkAyz7apCQMG6H81kwnfp+
// SIG // 1pez6CGXfvjSE/MIt1NtUrRFkJ9IAEpHZhEnKWaol+TT
// SIG // BoFKovmEpxFHFAmCn4TtVXj+AZodUAiFABAwRu233iNG
// SIG // u8QtVJ+vHnhBMXfMm987g5OhYQK1HQ2x/PebsgHOIktU
// SIG // //kFw8IgCwIDAQABo4IBqzCCAacwDwYDVR0TAQH/BAUw
// SIG // AwEB/zAdBgNVHQ4EFgQUIzT42VJGcArtQPt2+7MrsMM1
// SIG // sw8wCwYDVR0PBAQDAgGGMBAGCSsGAQQBgjcVAQQDAgEA
// SIG // MIGYBgNVHSMEgZAwgY2AFA6sgmBAVieX5SUT/CrhClOV
// SIG // WeSkoWOkYTBfMRMwEQYKCZImiZPyLGQBGRYDY29tMRkw
// SIG // FwYKCZImiZPyLGQBGRYJbWljcm9zb2Z0MS0wKwYDVQQD
// SIG // EyRNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRo
// SIG // b3JpdHmCEHmtFqFKoKWtTHNY9AcTLmUwUAYDVR0fBEkw
// SIG // RzBFoEOgQYY/aHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraS9jcmwvcHJvZHVjdHMvbWljcm9zb2Z0cm9vdGNl
// SIG // cnQuY3JsMFQGCCsGAQUFBwEBBEgwRjBEBggrBgEFBQcw
// SIG // AoY4aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraS9j
// SIG // ZXJ0cy9NaWNyb3NvZnRSb290Q2VydC5jcnQwEwYDVR0l
// SIG // BAwwCgYIKwYBBQUHAwgwDQYJKoZIhvcNAQEFBQADggIB
// SIG // ABCXisNcA0Q23em0rXfbznlRTQGxLnRxW20ME6vOvnuP
// SIG // uC7UEqKMbWK4VwLLTiATUJndekDiV7uvWJoc4R0Bhqy7
// SIG // ePKL0Ow7Ae7ivo8KBciNSOLwUxXdT6uS5OeNatWAweaU
// SIG // 8gYvhQPpkSokInD79vzkeJkuDfcH4nC8GE6djmsKcpW4
// SIG // oTmcZy3FUQ7qYlw/FpiLID/iBxoy+cwxSnYxPStyC8jq
// SIG // cD3/hQoT38IKYY7w17gX606Lf8U1K16jv+u8fQtCe9RT
// SIG // ciHuMMq7eGVcWwEXChQO0toUmPU8uWZYsy0v5/mFhsxR
// SIG // VuidcJRsrDlM1PZ5v6oYemIp76KbKTQGdxpiyT0ebR+C
// SIG // 8AvHLLvPQ7Pl+ex9teOkqHQ1uE7FcSMSJnYLPFKMcVpG
// SIG // QxS8s7OwTWfIn0L/gHkhgJ4VMGboQhJeGsieIiHQQ+kr
// SIG // 6bv0SMws1NgygEwmKkgkX1rqVu+m3pmdyjpvvYEndAYR
// SIG // 7nYhv5uCwSdUtrFqPYmhdmG0bqETpr+qR/ASb/2KMmyy
// SIG // /t9RyIwjyWa9nR2HEmQCPS2vWY+45CHltbDKY7R4VAXU
// SIG // QS5QrJSwpXirs6CWdRrZkocTdSIvMqgIbqBbjCW/oO+E
// SIG // yiHW6x5PyZruSeD3AWVviQt9yGnI5m7qp5fOMSn/DsVb
// SIG // XNhNG6HY+i+ePy5VFmvJE6P9MYIEnDCCBJgCAQEwgZAw
// SIG // eTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWlj
// SIG // cm9zb2Z0IENvZGUgU2lnbmluZyBQQ0ECEzMAAACdHo0n
// SIG // rrjz2DgAAQAAAJ0wCQYFKw4DAhoFAKCBvjAZBgkqhkiG
// SIG // 9w0BCQMxDAYKKwYBBAGCNwIBBDAcBgorBgEEAYI3AgEL
// SIG // MQ4wDAYKKwYBBAGCNwIBFTAjBgkqhkiG9w0BCQQxFgQU
// SIG // 2Cipb7iwTA64vtwDCpASj/QhS8owXgYKKwYBBAGCNwIB
// SIG // DDFQME6gJoAkAE0AaQBjAHIAbwBzAG8AZgB0ACAATABl
// SIG // AGEAcgBuAGkAbgBnoSSAImh0dHA6Ly93d3cubWljcm9z
// SIG // b2Z0LmNvbS9sZWFybmluZyAwDQYJKoZIhvcNAQEBBQAE
// SIG // ggEANdrT8rHO9Jkb0Lm7Ms197MKn+c0DLrkkVWV5p0Po
// SIG // 2S4pqNorZ0eOxkNF+W5flThoujYG+BzufVP3S25emoNf
// SIG // B1so6uz7M+63W5Sds2r/DC4g7gApHdfuCmQ7NHQAbOUq
// SIG // MyqDv5qSyZm6uQ5i6cI3aUSFVRqDeeVMUHyBIa3Dtqxf
// SIG // 5At3ckgVmW6lay58p8xzPv0PUPWKWCGY9QaBDmrDKpTA
// SIG // OK/567R4lOkvtsKyn4nMSYRzt9HdgmB090+v3JNEBU+w
// SIG // m8sy07cKJbB+pK7yIX8tQe3A87I85f/V3/EV+iT1rwM8
// SIG // bSlts2zBo/D2sAtZdnBxOZGXKCKOCkV79Mq1MqGCAh8w
// SIG // ggIbBgkqhkiG9w0BCQYxggIMMIICCAIBATCBhTB3MQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSEwHwYDVQQDExhNaWNyb3Nv
// SIG // ZnQgVGltZS1TdGFtcCBQQ0ECCmECkkoAAAAAACAwCQYF
// SIG // Kw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0B
// SIG // BwEwHAYJKoZIhvcNAQkFMQ8XDTEyMTExNTAwMDgxNVow
// SIG // IwYJKoZIhvcNAQkEMRYEFJfFI3iXk6x2xl70KQ7rOSU+
// SIG // 0zmXMA0GCSqGSIb3DQEBBQUABIIBAEZOIKCqsnshCG2M
// SIG // 2nL6cL6zEwNng8LlNlduH8dmRXSUcXh08R9htVDYTzyQ
// SIG // eoAV4yibtraoNukz3MpRvnkxApwB/hMh2rQDgsJEOA6N
// SIG // dkKhxE93Z/lNwxakYuIgKwu+cPsS9vEjKtnf6L5RW4sI
// SIG // 2J31/OqJyJpe2vek/EMGIRIs4MdC5Uw3lcLZy1KyGbn9
// SIG // 3FKH3FIXil0Wg3iJj2wnbsFZohnPJbI0QCKX4N5+Glx/
// SIG // tqySlwF1ksISjvtklev943kaRL3spsvpuyro9w3hxd1z
// SIG // tkwOBPHkDwiJXmZREn3/v4+BTsKRgOkUN+57re6BDUYJ
// SIG // NBRK/7yQG7+U2u3Kjlg=
// SIG // End signature block

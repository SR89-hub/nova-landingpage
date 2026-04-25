Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("c:\Users\sonal\Downloads\AEON_EVOKE-main\nova\src\assets\image.png")
$bmp = new-object System.Drawing.Bitmap($img)
$color = $bmp.GetPixel(0,0)
Write-Output ("#{0:X2}{1:X2}{2:X2}" -f $color.R, $color.G, $color.B)

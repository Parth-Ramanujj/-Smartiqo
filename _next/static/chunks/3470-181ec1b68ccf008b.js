(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3470],
  {
    10338: (e, t, o) => {
      "use strict";
      o.d(t, { fL: () => x, vQ: () => S, vs: () => h, w3: () => $ });
      var n = o(15933);
      function a() {
        let e = (0, n._)([
          '$ErrorActionPreference = "Stop"\n$script:logPath = $null\n$script:logWriteWarningShown = $false\n\nfunction Log($message) {\n  Write-Host $message\n  if ($script:logPath) {\n    try {\n      Add-Content -LiteralPath $script:logPath -Value $message -ErrorAction Stop\n    } catch {\n      if (-not $script:logWriteWarningShown) {\n        $script:logWriteWarningShown = $true\n        Write-Host "[WARN] Could not write to log file. Continuing CDR generation. $($_.Exception.Message)"\n      }\n    }\n  }\n}\n\nfunction Fail($message) {\n  Write-Host ""\n  if ($script:logPath) {\n    Add-Content -LiteralPath $script:logPath -Value "ERROR: $message"\n  }\n  Write-Error $message\n  exit 1\n}\n\n$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path\n$outputDir = Join-Path $scriptRoot "output"\nNew-Item -ItemType Directory -Force -Path $outputDir | Out-Null\n$script:logPath = Join-Path $outputDir "create-cdr.log"\nSet-Content -LiteralPath $script:logPath -Value "SwitchCraft CDR creation started at $(Get-Date -Format o)"\n\n$manifestPath = Join-Path $scriptRoot "manifest.json"\nif (-not (Test-Path -LiteralPath $manifestPath)) {\n  Fail "manifest.json was not found next to this script."\n}\n\n$manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json\nif ($null -eq $manifest.designs -or $manifest.designs.Count -eq 0) {\n  Fail "The manifest does not contain any designs."\n}\n\nLog "Starting CorelDRAW..."\n$corel = $null\ntry {\n  $corel = [Runtime.InteropServices.Marshal]::GetActiveObject("CorelDRAW.Application")\n} catch {\n  $corel = $null\n}\n\nif ($null -eq $corel) {\n  try {\n    $corel = New-Object -ComObject "CorelDRAW.Application"\n  } catch {\n    Fail "Could not start CorelDRAW. Install CorelDRAW on this Windows PC and try again. $($_.Exception.Message)"\n  }\n}\n\n$corel.Visible = $true\ntry {\n  $corel.DisplayAlerts = 0\n} catch {}\ntry {\n  $doc = $corel.CreateDocument()\n} catch {\n  Fail "CorelDRAW opened, but a new document could not be created. $($_.Exception.Message)"\n}\n\n$svgFilter = 1345\ntry {\n  $importOptions = $corel.CreateStructImportOptions()\n} catch {\n  $importOptions = $null\n}\n\nfunction Resolve-AssetPath($relativePath) {\n  $path = Join-Path $scriptRoot $relativePath\n  if (-not (Test-Path -LiteralPath $path)) {\n    throw "Missing asset: $relativePath"\n  }\n  return $path\n}\n\nfunction Format-Bounds($bounds) {\n  if ($null -eq $bounds) { return "<null>" }\n  return "X={0:N5}, Y={1:N5}, W={2:N5}, H={3:N5}, CX={4:N5}, CY={5:N5}" -f $bounds.X, $bounds.Y, $bounds.Width, $bounds.Height, $bounds.CenterX, $bounds.CenterY\n}\n\nfunction Import-Svg($relativePath) {\n  $path = Resolve-AssetPath $relativePath\n\n  $layer = $corel.ActiveLayer\n  try {\n    $options = $importOptions\n    if ($null -eq $options) {\n      $options = $corel.CreateStructImportOptions()\n    }\n    $filter = $layer.ImportEx($path, $svgFilter, $options)\n    if ($null -ne $filter) {\n      $filter.Finish() | Out-Null\n    }\n  } catch {\n    throw "CorelDRAW could not import $relativePath. $($_.Exception.Message)"\n  }\n\n  Start-Sleep -Milliseconds 200\n  return $corel.ActiveSelectionRange\n}\n\nfunction Import-Cdr($relativePath, $label) {\n  $path = Resolve-AssetPath $relativePath\n  Log ("Importing native CDR asset for {0}: {1}" -f $label, $relativePath)\n\n  $layer = $corel.ActiveLayer\n  try {\n    $options = $importOptions\n    if ($null -eq $options) {\n      $options = $corel.CreateStructImportOptions()\n    }\n    # Use auto-detect filter (0) for CDR files\n    $filter = $layer.ImportEx($path, 0, $options)\n    if ($null -ne $filter) {\n      $filter.Finish() | Out-Null\n    }\n  } catch {\n    throw "CorelDRAW could not import native CDR asset $relativePath. $($_.Exception.Message)"\n  }\n\n  Start-Sleep -Milliseconds 200\n  return $corel.ActiveSelectionRange\n}\n\nfunction Center-Range($range) {\n  if ($null -eq $range) { return }\n  try { $range.AlignToPageCenter(3) } catch {}\n  try { $range.AlignToPageCenter(12) } catch {}\n}\n\nfunction Prepare-ImportedShape($range) {\n  if ($null -eq $range) { return $null }\n  try {\n    if ($range.Count -gt 1) {\n      $range.Group() | Out-Null\n      return $corel.ActiveShape\n    }\n    if ($range.Count -eq 1) {\n      return $range.Item(1)\n    }\n  } catch {}\n\n  try {\n    if ($null -ne $corel.ActiveShape) {\n      return $corel.ActiveShape\n    }\n  } catch {}\n\n  return $range\n}\n\nfunction Set-ShapeBlack($shape) {\n  if ($null -eq $shape) { return }\n  \n  if ($shape.Outline.Type -ne 0) {\n    try { $shape.Outline.Color.RGBAssign(0, 0, 0) } catch {}\n  }\n\n  try {\n    for ($i = 1; $i -le $shape.Shapes.Count; $i += 1) {\n      Set-ShapeBlack $shape.Shapes.Item($i)\n    }\n  } catch {}\n}\n\nfunction Set-RangeBlack($range) {\n  if ($null -eq $range) { return }\n  try {\n    for ($i = 1; $i -le $range.Count; $i += 1) {\n      try {\n        Set-ShapeBlack $range.Item($i)\n      } catch {}\n    }\n  } catch {\n    try { Set-ShapeBlack $range } catch {}\n  }\n}\n\nfunction Get-ShapeBounds($shape) {\n  if ($null -eq $shape) { return $null }\n  $x = 0.0\n  $y = 0.0\n  $w = 0.0\n  $h = 0.0\n\n  try {\n    $shape.GetBoundingBox([ref]$x, [ref]$y, [ref]$w, [ref]$h, $true)\n    return @{\n      X = $x\n      Y = $y\n      Width = $w\n      Height = $h\n      CenterX = $x + ($w / 2)\n      CenterY = $y + ($h / 2)\n    }\n  } catch {\n    return $null\n  }\n}\n\nfunction Get-ClosestSnapTarget($shapes, $predX, $predY, $baseWidth) {\n  $bestDist = 999999.0\n  $bestX = $predX\n  $bestY = $predY\n  \n  $maxTargetWidth = $baseWidth * 0.2\n\n  $stack = New-Object System.Collections.ArrayList\n  [void]$stack.Add($shapes)\n\n  while ($stack.Count -gt 0) {\n    $currentShapes = $stack[$stack.Count - 1]\n    $stack.RemoveAt($stack.Count - 1)\n\n    if ($null -eq $currentShapes) { continue }\n\n    for ($i = 1; $i -le $currentShapes.Count; $i += 1) {\n      $s = $currentShapes.Item($i)\n      if ($null -eq $s -or $s.Name -eq "ImportedIcon_IgnoreMe") { continue }\n\n      try {\n        if ($s.Type -eq 7) { \n          [void]$stack.Add($s.Shapes)\n        } else {\n          $x = 0.0; $y = 0.0; $w = 0.0; $h = 0.0\n          $s.GetBoundingBox([ref]$x, [ref]$y, [ref]$w, [ref]$h, $true)\n          \n          if ($w -gt 0 -and $h -gt 0 -and $w -lt $maxTargetWidth -and $h -lt $maxTargetWidth) {\n            $ratio = $w / $h\n            if ($ratio -gt 0.8 -and $ratio -lt 1.2) {\n              $cx = $x + ($w / 2)\n              $cy = $y + ($h / 2)\n              \n              $dx = $cx - $predX\n              $dy = $cy - $predY\n              $dist = [math]::Sqrt($dx*$dx + $dy*$dy)\n              \n              if ($dist -lt $bestDist) {\n                $bestDist = $dist\n                $bestX = $cx\n                $bestY = $cy\n              }\n            }\n          }\n        }\n      } catch {}\n    }\n  }\n  \n  if ($bestDist -lt ($baseWidth * 0.2)) {\n    return @{ X = $bestX; Y = $bestY }\n  }\n  \n  return @{ X = $predX; Y = $predY }\n}\n\nfunction Match-ShapeBounds($shape, $targetBounds) {\n  if ($null -eq $shape -or $null -eq $targetBounds) { return }\n\n  try {\n    $shape.SetSize($targetBounds.Width, $targetBounds.Height)\n  } catch {\n    try {\n      $shape.SizeWidth = $targetBounds.Width\n      $shape.SizeHeight = $targetBounds.Height\n    } catch {}\n  }\n\n  try {\n    $shape.CenterX = $targetBounds.CenterX\n    $shape.CenterY = $targetBounds.CenterY\n  } catch {}\n}\n\nfunction Place-ShapeRelativeToBase($shape, $baseBounds, $placement, $label) {\n  if ($null -eq $shape -or $null -eq $baseBounds -or $null -eq $placement) { return }\n\n  $targetWidth = [double]$baseBounds.Width * [double]$placement.widthPct\n  $targetHeight = [double]$baseBounds.Height * [double]$placement.heightPct\n  $targetCenterX = [double]$baseBounds.X + ([double]$baseBounds.Width * ([double]$placement.xPct + ([double]$placement.widthPct / 2)))\n  $targetCenterY = [double]$baseBounds.Y + ([double]$baseBounds.Height * (1 - [double]$placement.yPct - ([double]$placement.heightPct / 2)))\n\n  Log "$label target: xPct=$($placement.xPct), yPct=$($placement.yPct), widthPct=$($placement.widthPct), heightPct=$($placement.heightPct)"\n  Log "$label target Corel center: X=$targetCenterX, Y=$targetCenterY, W=$targetWidth, H=$targetHeight"\n  Log "$label before place: $(Format-Bounds (Get-ShapeBounds $shape))"\n\n  # Do not scale native accessories to prevent stretching and distortion of design.\n  # Keep their original designer-drawn width and height.\n\n  try {\n    $shape.CenterX = $targetCenterX\n    $shape.CenterY = $targetCenterY\n  } catch {}\n\n  Log "$label after place:  $(Format-Bounds (Get-ShapeBounds $shape))"\n}\n\n$blackColor = $corel.CreateRGBColor(0, 0, 0)\n\n$designNumber = 0\nforeach ($design in $manifest.designs) {\n  $designNumber += 1\n  Log "Importing design $designNumber..."\n\n  if ($designNumber -gt 1) {\n    $page = $doc.AddPages(1)\n    $page.Activate()\n  } else {\n    $doc.ActivePage.Activate()\n  }\n\n  $baseShape = $null\n  $baseBounds = $null\n  $useNative = $false\n  try {\n    $useNative = $null -ne $design.native -and $null -ne $design.native.base -and [string]$design.native.base -ne ""\n  } catch {\n    $useNative = $false\n  }\n\n  if ($useNative) {\n    Log "Using native CDR v2 path for $($design.panelKey)/$($design.sizeClass)."\n    Log "Importing native base: $($design.native.base)"\n    $baseRange = Import-Cdr $design.native.base "base"\n    $baseShape = Prepare-ImportedShape $baseRange\n    if ($null -ne $baseShape) {\n      Center-Range $baseShape\n      $baseBounds = Get-ShapeBounds $baseShape\n      Log "Native base bounds: $(Format-Bounds $baseBounds)"\n      try { $baseShape.OrderToBack() } catch {}\n    }\n\n    $accessoryIndex = 0\n    foreach ($accessory in $design.native.accessories) {\n      $accessoryIndex += 1\n      $label = "native accessory $accessoryIndex [$($accessory.item)]"\n      Log "Importing $label from $($accessory.asset)"\n      $accessoryRange = Import-Cdr $accessory.asset $label\n      $accessoryShape = Prepare-ImportedShape $accessoryRange\n      if ($null -ne $accessoryShape) {\n        Place-ShapeRelativeToBase $accessoryShape $baseBounds $accessory $label\n        try { $accessoryShape.OrderToFront() } catch {}\n      }\n    }\n\n    try {\n      foreach ($unsupported in $design.native.unsupportedAccessories) {\n        Log "UNMAPPED accessory kept out of native CDR layer: [$($unsupported.optionType)] $($unsupported.item) / $($unsupported.switchId). Reason: $($unsupported.reason)"\n      }\n    } catch {}\n\n    if ($null -ne $design.native.icons -and $design.native.icons.Count -gt 0) {\n      $iconIdx = 0\n      foreach ($icon in $design.native.icons) {\n        $iconIdx += 1\n        $label = "native icon $iconIdx [$($icon.fileName)]"\n        Log "Importing $label at xPct=$($icon.xPct), yPct=$($icon.yPct)"\n        $iconRange = Import-Svg $icon.fileName\n        $iconShape = Prepare-ImportedShape $iconRange\n        if ($null -ne $iconShape) {\n          $iconShape.Name = "ImportedIcon_IgnoreMe"\n          \n          $predX = [double]$baseBounds.X + ([double]$baseBounds.Width * [double]$icon.xPct)\n          $predY = [double]$baseBounds.Y + ([double]$baseBounds.Height * (1 - [double]$icon.yPct))\n          \n          $snap = Get-ClosestSnapTarget $doc.ActivePage.Shapes $predX $predY $baseBounds.Width\n          Log "Snapping icon from pred ($predX, $predY) to ($($snap.X), $($snap.Y))"\n\n          $iconShape.CenterX = $snap.X\n          $iconShape.CenterY = $snap.Y\n          try { $iconShape.OrderToFront() } catch {}\n        }\n      }\n    } else {\n      Log "Importing selected website SVG icons: $($design.nativeIcons)"\n      $iconsRange = Import-Svg $design.nativeIcons\n      $iconsShape = Prepare-ImportedShape $iconsRange\n      if ($null -ne $iconsShape) {\n        Match-ShapeBounds $iconsShape $baseBounds\n        if ($null -eq $baseBounds) {\n          Center-Range $iconsShape\n        }\n        try { $iconsShape.OrderToFront() } catch {}\n      }\n    }\n  } else {\n    Log "Using SVG fallback path for $($design.panelKey)/$($design.sizeClass)."\n    Log "Importing base: $($design.base)"\n    $baseRange = Import-Svg $design.base\n    $baseShape = Prepare-ImportedShape $baseRange\n    if ($null -ne $baseShape) {\n      Center-Range $baseShape\n      $baseBounds = Get-ShapeBounds $baseShape\n      try { $baseShape.OrderToBack() } catch {}\n    }\n\n    Log "Importing icons: $($design.icons)"\n    $iconsRange = Import-Svg $design.icons\n    $iconsShape = Prepare-ImportedShape $iconsRange\n    if ($null -ne $iconsShape) {\n      Match-ShapeBounds $iconsShape $baseBounds\n      if ($null -eq $baseBounds) {\n        Center-Range $iconsShape\n      }\n      try { $iconsShape.OrderToFront() } catch {}\n    }\n  }\n}\n\n\n\n$outputFile = if ($manifest.outputFileName) { $manifest.outputFileName } else { "switchcraft-order.cdr" }\n$outputPath = Join-Path $outputDir $outputFile\n\nLog "Saving CDR: $outputPath"\ntry {\n  $saveOptions = $corel.CreateStructSaveAsOptions()\n  $doc.SaveAs($outputPath, $saveOptions)\n} catch {\n  Fail "The SVG files were imported, but CorelDRAW could not save the CDR file. $($_.Exception.Message)"\n}\n\nLog ""\nLog "Created CDR:"\nLog $outputPath\nexit 0\n',
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let r = "/cdr-assets/edge",
        i = {
          module2: "base-edge-2m-standard.cdr",
          module3: "base-edge-3m-standard.cdr",
          module4: "base-edge-4m-standard.cdr",
          module6: "base-edge-6m-standard.cdr",
          module8: "base-edge-8m-standard.cdr",
          module12: "base-edge-12m-standard-2row.cdr",
          "module4-socket1": "base-edge-4m-round-socket-left-2m-right.cdr",
          "module6-socket1": "base-edge-6m-round-socket-left-4m-right.cdr",
          "module6-socket2":
            "base-edge-6m-round-sockets-left-right-2m-center.cdr",
          "module8-socket1": "base-edge-8m-round-socket-left-6m-right.cdr",
          "module8-socket2":
            "base-edge-8m-round-sockets-left-right-4m-center.cdr",
          "module12-socketh":
            "base-edge-12m-top-6m-bottom-round-sockets-left-right-2m-center.cdr",
          "module12-socketv":
            "base-edge-12m-round-sockets-left-column-4m-right-stack.cdr",
        },
        c = {
          "Telephone (RJ11)": "accessory-1m-telephone-rj11.cdr",
          "Ethernet (RJ45)": "accessory-1m-ethernet-rj45.cdr",
          "TV Socket": "accessory-1m-tv-socket.cdr",
          "2 Switch": "accessory-2m-2-switch.cdr",
          "2 Switch 1 HV": "accessory-2m-2-switch.cdr",
          "2 TW": "accessory-2m-2-switch.cdr",
          "2 HV": "accessory-2m-2-switch.cdr",
          Bell: "accessory-2m-bell.cdr",
          Curtain: "accessory-2m-curtain.cdr",
          "2 Curtain": "accessory-2m-2-curtain.cdr",
          "3 Pin Socket": "accessory-2m-3-pin-socket.cdr",
          "Universal Socket": "accessory-2m-universal-socket.cdr",
          "16A Socket": "accessory-2m-16a-socket.cdr",
          "2 Dimmer(Phase Cut)": "accessory-2m-2-dimmer-phase-cut.cdr",
          "USB-Type C": "accessory-2m-usb-type-c.cdr",
          "4 Switch (4-Module)": "accessory-4m-4-switch.cdr",
          "4 TW": "accessory-4m-4-switch.cdr",
          "4 HV": "accessory-4m-4-switch.cdr",
          "4 Switch + 1 Fan": "accessory-4m-4-switch-1-fan.cdr",
          "6 Switch": "accessory-4m-6-switch.cdr",
          "6 TW": "accessory-4m-6-switch.cdr",
          "6 HV": "accessory-4m-6-switch.cdr",
          "8 Switch": "accessory-6m-8-switch.cdr",
          "8 TW": "accessory-6m-8-switch.cdr",
          "6 Switch + 1 Fan": "accessory-6m-6-switch-1-fan.cdr",
          "4 Switch + 2 Fan": "accessory-6m-4-switch-2-fan.cdr",
          "10 Switch": "accessory-8m-10-switch.cdr",
          "6 Switch + 2 Fan": "accessory-8m-6-switch-2-fan.cdr",
          "8 Switch + 1 Fan": "accessory-8m-8-switch-1-fan.cdr",
          "4 Switch (2-Module)": "accessory-2m-4-switch.cdr",
          "4 Scene Controller": "accessory-2m-4-scene-controller.cdr",
        };
      function l(e, t) {
        return (
          (null != e ? e : "")
            .trim()
            .replace(/[^a-zA-Z0-9._ -]+/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/(^[.-]+|[.-]+$)/g, "") || t
        );
      }
      function s(e) {
        return e
          .replace(
            /\b(stroke|fill)\s*:\s*(?!none\b|transparent\b|currentColor\b|url\()[^;}]+/gi,
            "$1:#000000",
          )
          .replace(
            /\b(stroke|fill)="(?!none\b|transparent\b|currentColor\b|url\()[^"]*"/gi,
            '$1="#000000"',
          )
          .replace(
            /\b(stroke|fill)='(?!none\b|transparent\b|currentColor\b|url\()[^']*'/gi,
            "$1='#000000'",
          );
      }
      function d(e) {
        return (null != e ? e : []).map((e) => {
          var t, o;
          return {
            optionType: null != (t = e.optionType) ? t : "",
            options: (null != (o = e.options) ? o : []).map((e) => {
              var t, o, n, a, r;
              return {
                id: null != (t = e.id) ? t : "",
                instanceId: null != (o = e.instanceId) ? o : "",
                item: null != (n = e.item) ? n : "",
                switchId: null != (a = e.switchId) ? a : "",
                color: null != (r = e.color) ? r : "",
              };
            }),
          };
        });
      }
      function h(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        var o,
          n,
          a,
          r,
          i,
          c,
          l,
          s,
          h = JSON.stringify({
            panel:
              null != (i = null == e || null == (o = e.panel) ? void 0 : o.item)
                ? i
                : "",
            size:
              null != (c = null == e || null == (n = e.size) ? void 0 : n.item)
                ? c
                : "",
            material:
              null !=
              (l = null == e || null == (a = e.material) ? void 0 : a.item)
                ? l
                : "",
            technology:
              null !=
              (s = null == e || null == (r = e.technology) ? void 0 : r.item)
                ? s
                : "",
            accessories: d(null == e ? void 0 : e.accessories),
            accessories1: d(null == e ? void 0 : e.accessories1),
            accessories2: d(null == e ? void 0 : e.accessories2),
            accessories3: d(null == e ? void 0 : e.accessories3),
            color: d(null == e ? void 0 : e.color),
            dropped: t.map((e) => {
              var t, o, n, a, r, i;
              return {
                divId: null != (t = e.divId) ? t : "",
                switchId: null != (o = e.switchId) ? o : "",
                iconId: null != (n = e.iconId) ? n : "",
                iconType: null != (a = e.iconType) ? a : "",
                src: null != (i = null != (r = e.src) ? r : e.iconUrl) ? i : "",
              };
            }),
          });
        let u = 5381;
        for (let e = 0; e < h.length; e += 1)
          u = ((u << 5) + u) ^ h.charCodeAt(e);
        return (u >>> 0).toString(36);
      }
      function u(e) {
        try {
          let t = new URL(e, window.location.href);
          if ("/_next/image" === t.pathname) {
            let e = t.searchParams.get("url");
            if (e) return new URL(e, window.location.href).href;
          }
        } catch (e) {}
        return e;
      }
      async function p(e, t) {
        if (e.startsWith("data:image/svg+xml;base64,"))
          try {
            let t = e.split(",")[1];
            if (t) return decodeURIComponent(escape(atob(t)));
          } catch (e) {
            throw Error("Failed to decode base64 ".concat(t, ": ").concat(e));
          }
        let o = u(e),
          n = await fetch(o);
        if (!n.ok)
          throw Error(
            "Failed to fetch "
              .concat(t, " from ")
              .concat(o, ": HTTP ")
              .concat(n.status),
          );
        return n.text();
      }
      async function v(e, t) {
        let o = u(e),
          n = await fetch(o);
        if (!n.ok)
          throw Error(
            "Failed to fetch "
              .concat(t, " from ")
              .concat(o, ": HTTP ")
              .concat(n.status),
          );
        return n.arrayBuffer();
      }
      function g(e) {
        let t = Number.parseFloat(e);
        return Number.isFinite(t) ? t : 0;
      }
      function m(e) {
        return (null != e ? e : "").trim().replace(/\s+/g, " ");
      }
      function f(e, t) {
        return {
          xPct: (e.left - t.left) / t.width,
          yPct: (e.top - t.top) / t.height,
          widthPct: e.width / t.width,
          heightPct: e.height / t.height,
        };
      }
      let y = {
        module12: [
          { xPct: 0.1772, yPct: 0.1347, widthPct: 0.2152, heightPct: 0.3158 },
          { xPct: 0.3924, yPct: 0.1347, widthPct: 0.2152, heightPct: 0.3158 },
          { xPct: 0.6076, yPct: 0.1347, widthPct: 0.2152, heightPct: 0.3158 },
          { xPct: 0.1772, yPct: 0.5495, widthPct: 0.2152, heightPct: 0.3158 },
          { xPct: 0.3924, yPct: 0.5495, widthPct: 0.2152, heightPct: 0.3158 },
          { xPct: 0.6076, yPct: 0.5495, widthPct: 0.2152, heightPct: 0.3158 },
        ],
        module8: [
          { xPct: 0.1362, yPct: 0.2344, widthPct: 0.1819, heightPct: 0.5312 },
          { xPct: 0.3181, yPct: 0.2344, widthPct: 0.1819, heightPct: 0.5312 },
          { xPct: 0.5, yPct: 0.2344, widthPct: 0.1819, heightPct: 0.5312 },
          { xPct: 0.6819, yPct: 0.2344, widthPct: 0.1819, heightPct: 0.5312 },
        ],
        module6: [
          { xPct: 0.1787, yPct: 0.2344, widthPct: 0.2142, heightPct: 0.5312 },
          { xPct: 0.3929, yPct: 0.2344, widthPct: 0.2142, heightPct: 0.5312 },
          { xPct: 0.6071, yPct: 0.2344, widthPct: 0.2142, heightPct: 0.5312 },
        ],
        module4: [
          { xPct: 0.1806, yPct: 0.2344, widthPct: 0.3194, heightPct: 0.5312 },
          { xPct: 0.5, yPct: 0.2344, widthPct: 0.3194, heightPct: 0.5312 },
        ],
        module2: [
          { xPct: 0.27, yPct: 0.2344, widthPct: 0.46, heightPct: 0.5312 },
        ],
        "module6-socket1": [
          { xPct: 0.1787, yPct: 0.2344, widthPct: 0.2142, heightPct: 0.5312 },
          { xPct: 0.3929, yPct: 0.2344, widthPct: 0.4284, heightPct: 0.5312 },
        ],
        "module6-socket2": [
          { xPct: 0.1787, yPct: 0.2344, widthPct: 0.2142, heightPct: 0.5312 },
          { xPct: 0.3929, yPct: 0.2344, widthPct: 0.2142, heightPct: 0.5312 },
          { xPct: 0.6071, yPct: 0.2344, widthPct: 0.2142, heightPct: 0.5312 },
        ],
        "module8-socket1": [
          { xPct: 0.1362, yPct: 0.2344, widthPct: 0.1819, heightPct: 0.5312 },
          { xPct: 0.3181, yPct: 0.2344, widthPct: 0.5457, heightPct: 0.5312 },
        ],
        "module8-socket2": [
          { xPct: 0.1362, yPct: 0.2344, widthPct: 0.1819, heightPct: 0.5312 },
          { xPct: 0.3181, yPct: 0.2344, widthPct: 0.3638, heightPct: 0.5312 },
          { xPct: 0.6819, yPct: 0.2344, widthPct: 0.1819, heightPct: 0.5312 },
        ],
        "module12-socketh": [
          { xPct: 0.1772, yPct: 0.1347, widthPct: 0.2152, heightPct: 0.3158 },
          { xPct: 0.3924, yPct: 0.1347, widthPct: 0.2152, heightPct: 0.3158 },
          { xPct: 0.6076, yPct: 0.1347, widthPct: 0.2152, heightPct: 0.3158 },
          { xPct: 0.1772, yPct: 0.5495, widthPct: 0.2152, heightPct: 0.3158 },
          { xPct: 0.3924, yPct: 0.5495, widthPct: 0.2152, heightPct: 0.3158 },
          { xPct: 0.6076, yPct: 0.5495, widthPct: 0.2152, heightPct: 0.3158 },
        ],
        "module12-socketv": [
          { xPct: 0.1772, yPct: 0.1347, widthPct: 0.2152, heightPct: 0.3158 },
          { xPct: 0.3924, yPct: 0.1347, widthPct: 0.4304, heightPct: 0.3158 },
          { xPct: 0.1772, yPct: 0.5495, widthPct: 0.2152, heightPct: 0.3158 },
          { xPct: 0.3924, yPct: 0.5495, widthPct: 0.4304, heightPct: 0.3158 },
        ],
        "module4-socket1": [
          { xPct: 0.1806, yPct: 0.2344, widthPct: 0.3194, heightPct: 0.5312 },
          { xPct: 0.5, yPct: 0.2344, widthPct: 0.3194, heightPct: 0.5312 },
        ],
      };
      function w(e) {
        try {
          let t = new URL(e, window.location.href);
          return "".concat(t.origin).concat(t.pathname);
        } catch (t) {
          return e;
        }
      }
      async function x(e) {
        var t, o, n;
        let {
            timeoutMs: a,
            moduleUrl: r,
            previewKey: i,
          } = "number" == typeof e
            ? { timeoutMs: e, moduleUrl: "", previewKey: "" }
            : {
                timeoutMs:
                  null != (t = null == e ? void 0 : e.timeoutMs) ? t : 5e3,
                moduleUrl:
                  null != (o = null == e ? void 0 : e.moduleUrl) ? o : "",
                previewKey:
                  null != (n = null == e ? void 0 : e.previewKey) ? n : "",
              },
          c = Date.now();
        for (; Date.now() - c < a; ) {
          let e = document.getElementById("drag-drop-area");
          if (e) {
            let t = e.querySelector("[data-cdr-render-key]") || e,
              o =
                e.getAttribute("data-module-url") ||
                t.getAttribute("data-module-url") ||
                "",
              n = t.getBoundingClientRect(),
              a = !r || o === r,
              c =
                !i ||
                (function (e) {
                  let t = e.querySelector("[data-cdr-render-key]");
                  return (
                    (null == t
                      ? void 0
                      : t.getAttribute("data-cdr-render-key")) ||
                    e.getAttribute("data-cdr-render-key") ||
                    ""
                  );
                })(e) === i;
            if (o && a && c && n && n.width > 0 && n.height > 0)
              return void (await new Promise((e) => requestAnimationFrame(e)));
          }
          await new Promise((e) => setTimeout(e, 100));
        }
        throw Error("Timed out waiting for the hidden design preview.");
      }
      function I(e, t) {
        let o = "http://www.w3.org/2000/svg",
          n = document.createElementNS(o, "svg");
        n.setAttribute("xmlns", o),
          n.setAttribute(
            "viewBox",
            "0 0 ".concat(e.width, " ").concat(e.height),
          ),
          n.setAttribute("width", "".concat(e.width)),
          n.setAttribute("height", "".concat(e.height));
        let a = document.createElementNS(o, "rect");
        return (
          a.setAttribute("x", "0"),
          a.setAttribute("y", "0"),
          a.setAttribute("width", "".concat(e.width)),
          a.setAttribute("height", "".concat(e.height)),
          a.setAttribute("fill", "#000000"),
          a.setAttribute("fill-opacity", "0"),
          a.setAttribute("stroke", "#000000"),
          a.setAttribute("stroke-opacity", "0"),
          a.setAttribute("stroke-width", "0.1"),
          n.appendChild(a),
          t.forEach((e) => n.appendChild(e.cloneNode(!0))),
          new XMLSerializer().serializeToString(n)
        );
      }
      async function $(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          { area: o, moduleUrl: n } = (function () {
            let e = document.getElementById("drag-drop-area");
            if (!e) throw Error("The hidden design preview is not ready yet.");
            let t = e.querySelector("[data-cdr-render-key]") || e,
              o =
                e.getAttribute("data-module-url") ||
                t.getAttribute("data-module-url") ||
                "";
            if (!o)
              throw Error("The design preview is missing its module SVG URL.");
            return { area: t, moduleUrl: o };
          })(),
          { panelKey: a, sizeClass: d } = (function (e) {
            var t, o;
            let n = e.replace(/\\/g, "/"),
              a = /\/module-svgs\/([^/]+)\/([^/?#]+)\.svg(?:[?#].*)?$/i.exec(n);
            return {
              panelKey: null != (t = null == a ? void 0 : a[1]) ? t : "panel",
              sizeClass: null != (o = null == a ? void 0 : a[2]) ? o : "module",
            };
          })(n),
          h = l("".concat(a, "-").concat(d), "switchcraft-design"),
          u = "".concat(h, " (1) (").concat(e, ").svg"),
          v = "".concat(h, "-icons (2) (").concat(e, ").svg"),
          x = "".concat(h, "-selected-icons (3) (").concat(e, ").svg"),
          $ = s(await p(n, "module SVG")),
          S = o.getBoundingClientRect(),
          b = Array.from(o.querySelectorAll('[data-cdr-accessory="true"]'))
            .map((e) => {
              var t, o, n;
              return {
                optionType: m(
                  null != (t = e.getAttribute("data-cdr-option-type")) ? t : "",
                ),
                item: m(null != (o = e.getAttribute("data-cdr-item")) ? o : ""),
                switchId:
                  null != (n = e.getAttribute("data-cdr-switch-id")) ? n : "",
                rect: e.getBoundingClientRect(),
              };
            })
            .filter((e) => e.item && e.rect.width > 0 && e.rect.height > 0),
          P = new Map(),
          j = [],
          D = [],
          T = (function (e, t, o, n) {
            if ("edge" !== e) return null;
            let a = i[t];
            if (!a) return null;
            if (t.includes("socket")) {
              let e = o.filter((e) => "Universal Socket" === e.item);
              if (e.length > 0) {
                if ("module4-socket1" === t)
                  a = "base-edge-4m-universal-socket-left-2m-right.cdr";
                else if ("module6-socket1" === t)
                  a = "base-edge-6m-universal-socket-left-4m-right.cdr";
                else if ("module8-socket1" === t)
                  a = "base-edge-8m-universal-socket-left-6m-right.cdr";
                else if ("module6-socket2" === t) {
                  let t = e.some((e) => f(e.rect, n).xPct < 0.4),
                    o = e.some((e) => f(e.rect, n).xPct > 0.4);
                  t && o
                    ? (a =
                        "base-edge-6m-universal-sockets-left-right-2m-center.cdr")
                    : t && !o
                      ? (a =
                          "base-edge-6m-universal-left-round-right-2m-center.cdr")
                      : !t &&
                        o &&
                        (a =
                          "base-edge-6m-universal-sockets-left-right-2m-center.cdr");
                } else if ("module8-socket2" === t) {
                  let t = e.some((e) => f(e.rect, n).xPct < 0.4),
                    o = e.some((e) => f(e.rect, n).xPct > 0.4);
                  t && o
                    ? (a =
                        "base-edge-8m-universal-sockets-left-right-4m-center.cdr")
                    : t && !o
                      ? (a =
                          "base-edge-8m-universal-left-round-right-4m-center.cdr")
                      : !t &&
                        o &&
                        (a =
                          "base-edge-8m-universal-sockets-left-right-4m-center.cdr");
                }
              }
            }
            return {
              fileName: a,
              sourceUrl: "".concat(r, "/base/").concat(a),
              zipPath: "native/base/".concat(a),
            };
          })(a, d, b, S);
        b.forEach((e, t) => {
          let o = f(e.rect, S),
            n = (function (e, t, o, n) {
              let a = y[t];
              if (!a || 0 === a.length) return e;
              let r = e.xPct + e.widthPct / 2,
                i = e.yPct + e.heightPct / 2,
                c = [],
                l = 1 / 0;
              for (let t = 1; t <= a.length; t++)
                for (let s = 0; s <= a.length - t; s++) {
                  let d = a.slice(s, s + t),
                    h = Math.min(...d.map((e) => e.xPct)),
                    u = Math.max(...d.map((e) => e.xPct + e.widthPct)),
                    p = Math.min(...d.map((e) => e.yPct)),
                    v = Math.max(...d.map((e) => e.yPct + e.heightPct)),
                    g = u - h,
                    m = v - p,
                    f =
                      Math.abs(r - (h + g / 2)) +
                      Math.abs(i - (p + m / 2)) +
                      Math.abs(e.widthPct - g) +
                      Math.abs(e.heightPct - m);
                  void 0 !== o &&
                    void 0 !== n &&
                    n > 0 &&
                    (f += 1e-4 * Math.abs(s - (o / n) * a.length)),
                    f < l && ((l = f), (c = d));
                }
              if (0 === c.length) return e;
              let s = Math.min(...c.map((e) => e.xPct)),
                d = Math.max(...c.map((e) => e.xPct + e.widthPct)),
                h = Math.min(...c.map((e) => e.yPct));
              return {
                xPct: s,
                yPct: h,
                widthPct: d - s,
                heightPct: Math.max(...c.map((e) => e.yPct + e.heightPct)) - h,
              };
            })(o, d, t, b.length),
            i = n.xPct + n.widthPct / 2 - (o.xPct + o.widthPct / 2),
            l = n.yPct + n.heightPct / 2 - (o.yPct + o.heightPct / 2);
          P.set(e.switchId, { x: i, y: l });
          let s = (function (e, t) {
            if ("edge" !== e) return null;
            let o = c[m(t)];
            return o
              ? {
                  fileName: o,
                  sourceUrl: "".concat(r, "/accessories/").concat(o),
                  zipPath: "native/accessories/".concat(o),
                }
              : null;
          })(a, e.item);
          return T
            ? s
              ? void j.push({
                  optionType: e.optionType,
                  item: e.item,
                  switchId: e.switchId,
                  asset: s,
                  ...n,
                })
              : void D.push({
                  optionType: e.optionType,
                  item: e.item,
                  switchId: e.switchId,
                  reason:
                    "No confirmed native CDR accessory asset is mapped for this website accessory.",
                  ...n,
                })
            : void D.push({
                optionType: e.optionType,
                item: e.item,
                switchId: e.switchId,
                reason:
                  "edge" === a
                    ? "No native Edge base CDR is mapped for ".concat(d, ".")
                    : "Native CDR v2 is currently mapped only for Edge panels, not ".concat(
                        a,
                        ".",
                      ),
                ...n,
              });
        });
        let C = [],
          k = [],
          M = (function (e) {
            let t = [],
              o = new Set(),
              n = (e) => {
                if (!(null == e ? void 0 : e.src) || o.has(e)) return;
                let n = (function (e) {
                  let t = e.getBoundingClientRect(),
                    o = window.getComputedStyle(e),
                    n = g(o.paddingLeft),
                    a = g(o.paddingRight),
                    r = g(o.paddingTop),
                    i = g(o.paddingBottom);
                  return {
                    left: t.left + n,
                    top: t.top + r,
                    width: Math.max(0, t.width - n - a),
                    height: Math.max(0, t.height - r - i),
                  };
                })(e);
                n.width <= 0 ||
                  n.height <= 0 ||
                  (o.add(e), t.push({ image: e, rect: n }));
              };
            return (
              e.querySelectorAll(".dropped-icon").forEach((e) => {
                n(e instanceof HTMLImageElement ? e : e.querySelector("img"));
              }),
              e.querySelectorAll("[data-slot]").forEach((e) => {
                n(e.querySelector("img"));
              }),
              t
            );
          })(o),
          N = (function (e) {
            let t = new Set(),
              o = new Set();
            for (let r of e) {
              var n, a;
              let e =
                null != (a = null != (n = r.src) ? n : r.iconUrl) ? a : "";
              e && t.add(w(e)), r.divId && o.add(r.divId);
            }
            return { sources: t, slotIds: o };
          })(t),
          R = [],
          F = [],
          A = 1;
        for (let { image: t, rect: o } of M) {
          let n = s(await p(t.src, "icon SVG")),
            a = (function (e, t) {
              let o = new DOMParser().parseFromString(e, "image/svg+xml"),
                n = o.getElementsByTagName("parsererror")[0];
              if (n) {
                var a;
                let e =
                  null == (a = n.textContent)
                    ? void 0
                    : a.trim().replace(/\s+/g, " ");
                throw Error(
                  "Invalid ".concat(t, ": ").concat(e || "SVG parser error"),
                );
              }
              if ("svg" !== o.documentElement.localName.toLowerCase())
                throw Error(
                  "Invalid ".concat(t, ": expected an SVG root element."),
                );
              return o.documentElement;
            })(n, "icon SVG");
          if (
            (a.setAttribute("width", "".concat(o.width)),
            a.setAttribute("height", "".concat(o.height)),
            a.getAttribute("viewBox") ||
              a.setAttribute(
                "viewBox",
                "0 0 ".concat(o.width, " ").concat(o.height),
              ),
            a.setAttribute("x", "".concat(o.left - S.left)),
            a.setAttribute("y", "".concat(o.top - S.top)),
            a.setAttribute("overflow", "visible"),
            a.setAttribute("preserveAspectRatio", "xMidYMid meet"),
            C.push(a),
            (function (e, t) {
              var o;
              let n = e.closest("[data-slot]"),
                a =
                  null != (o = null == n ? void 0 : n.getAttribute("data-slot"))
                    ? o
                    : "";
              return (
                !!(a && t.slotIds.has(a)) ||
                (!!t.sources.size && t.sources.has(w(e.src)))
              );
            })(t, N))
          ) {
            var E;
            k.push(a);
            let r = "assets/"
              .concat(h, "-design-")
              .concat(e, "-icon-")
              .concat(A, ".svg");
            A++;
            let i = (o.left + o.width / 2 - S.left) / S.width,
              c = (o.top + o.height / 2 - S.top) / S.height,
              l =
                null == (E = t.closest("[data-cdr-switch-id]"))
                  ? void 0
                  : E.getAttribute("data-cdr-switch-id");
            if (l && P.has(l)) {
              let e = P.get(l);
              (i += e.x), (c += e.y);
            }
            R.push({ fileName: r, svgText: n, xPct: i, yPct: c }),
              F.push({ fileName: r, xPct: i, yPct: c });
          }
        }
        let G = T
          ? {
              mode: "edge-cdr-v2",
              base: T,
              accessories: j,
              unsupportedAccessories: D,
              icons: F,
            }
          : void 0;
        return {
          index: e,
          panelKey: a,
          sizeClass: d,
          baseFileName: u,
          iconsFileName: v,
          nativeIconsFileName: x,
          moduleSvg: $,
          iconsSvg: I(S, C),
          nativeIconsSvg: I(S, k),
          width: S.width,
          height: S.height,
          slotCount: C.length,
          native: G,
          nativeIconsList: R,
        };
      }
      async function S(e, t) {
        if (!e.length)
          throw Error("No designs were available for the CDR package.");
        let { default: n } = await Promise.all([o.e(4134), o.e(9311)]).then(
            o.t.bind(o, 59311, 23),
          ),
          r = new n(),
          i = r.folder("assets");
        if (!i) throw Error("Could not create assets folder in ZIP.");
        for (let t of e)
          if (
            (i.file(t.baseFileName, t.moduleSvg),
            i.file(t.iconsFileName, t.iconsSvg),
            i.file(t.nativeIconsFileName, t.nativeIconsSvg),
            t.nativeIconsList)
          )
            for (let e of t.nativeIconsList) {
              let t = e.fileName.startsWith("assets/")
                ? e.fileName.substring(7)
                : e.fileName;
              i.file(t, e.svgText);
            }
        let c = new Map();
        for (let t of e)
          if (t.native)
            for (let e of (c.set(t.native.base.zipPath, t.native.base),
            t.native.accessories))
              c.set(e.asset.zipPath, e.asset);
        for (let [e, t] of c)
          r.file(
            e,
            await v(t.sourceUrl, "native CDR asset ".concat(t.fileName)),
          );
        r.folder("output");
        let s = (function (e, t) {
          var o, n, a;
          let r = l(
            null != (o = t.orderLabel) ? o : t.orderId,
            "switchcraft-order",
          );
          return {
            version: 1,
            createdAt: new Date().toISOString(),
            orderId: t.orderId,
            orderLabel: r,
            orderName: null != (n = t.orderName) ? n : "",
            customerName: null != (a = t.customerName) ? a : "",
            outputFileName: "".concat(r, ".cdr"),
            designs: e.map((e) => ({
              index: e.index,
              panelKey: e.panelKey,
              sizeClass: e.sizeClass,
              base: "assets/".concat(e.baseFileName),
              icons: "assets/".concat(e.iconsFileName),
              nativeIcons: "assets/".concat(e.nativeIconsFileName),
              width: e.width,
              height: e.height,
              slotCount: e.slotCount,
              native: e.native
                ? {
                    mode: e.native.mode,
                    base: e.native.base.zipPath,
                    accessories: e.native.accessories.map((e) => ({
                      optionType: e.optionType,
                      item: e.item,
                      switchId: e.switchId,
                      asset: e.asset.zipPath,
                      xPct: e.xPct,
                      yPct: e.yPct,
                      widthPct: e.widthPct,
                      heightPct: e.heightPct,
                    })),
                    unsupportedAccessories: e.native.unsupportedAccessories,
                    icons: e.native.icons,
                  }
                : null,
            })),
          };
        })(e, t);
        r.file("manifest.json", JSON.stringify(s, null, 2)),
          r.file(
            "README.txt",
            "SwitchCraft CDR Package\r\n\r\nHow to use:\r\n1. Extract this ZIP file to a normal folder.\r\n2. Double-click run-create-cdr.bat.\r\n3. CorelDRAW will open locally, import the SVG designs, and save the CDR in the output folder.\r\n\r\nRequirements:\r\n- Windows PC\r\n- CorelDRAW installed\r\n- PowerShell enabled\r\n\r\nFiles:\r\n- assets/: SVG fallback assets and selected website icon overlays\r\n- native/: Corel-native CDR base/accessory assets used by the v2 Edge manufacturing path\r\n- manifest.json: import order, native asset placement, fallback assets, and output name\r\n- create-cdr.ps1: CorelDRAW automation script\r\n- run-create-cdr.bat: double-click launcher\r\n- output/: generated CDR destination\r\n\r\nCurrent v2 coverage:\r\n- Native CDR base/accessory placement is wired for Edge panels where a confirmed CDR asset exists.\r\n- Selected website SVG icons are still imported as SVG overlays.\r\n- Unsupported panels, sizes, or accessories fall back to the previous SVG import path or are logged as unmapped in output/create-cdr.log.\r\n\r\nIf CorelDRAW shows an import option dialog, confirm the default import settings and rerun if needed.\r\n",
          ),
          r.file(
            "run-create-cdr.bat",
            '@echo off\r\nsetlocal\r\ncd /d "%~dp0"\r\npowershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0create-cdr.ps1"\r\nif errorlevel 1 (\r\n  echo.\r\n  echo CDR creation failed. Read the error above.\r\n  pause\r\n  exit /b %ERRORLEVEL%\r\n)\r\necho.\r\necho Done. Check the output folder.\r\npause\r\n',
          ),
          r.file("create-cdr.ps1", String.raw(a()));
        let d = await r.generateAsync({ type: "blob" }),
          h = "".concat(
            l(s.orderLabel, "switchcraft-order"),
            "-cdr-package.zip",
          ),
          u = URL.createObjectURL(d),
          p = document.createElement("a");
        (p.href = u),
          (p.download = h),
          document.body.appendChild(p),
          p.click(),
          p.remove(),
          URL.revokeObjectURL(u);
      }
    },
    20760: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => X });
      var n = o(95155),
        a = o(12115),
        r = o(66766),
        i = o(34540),
        c = o(27363);
      let l = (e) => {
        let { src: t, CloseIconComponent: o } = e,
          a = (0, i.d4)((e) => e.selectionData.currentStep);
        return (0, n.jsxs)("div", {
          className:
            "w-full h-full bg-inherit flex items-center justify-center relative",
          children: [
            t.map((e, t) =>
              (0, n.jsx)(
                "div",
                {
                  className: "relative w-full h-full",
                  style: { padding: "0.3vh" },
                  children: (0, n.jsx)(r.default, {
                    src: e,
                    alt: "Switch image ".concat(t + 1),
                    fill: !0,
                    style: { objectFit: "contain" },
                  }),
                },
                t,
              ),
            ),
            o && (4 === a.stepNo || 5 === a.stepNo) && (0, n.jsx)(o, {}),
          ],
        });
      };
      var s = o(58190),
        d = o(20343),
        h = o(66964),
        u = o(96107),
        p = o(19607);
      class v {
        get connectTarget() {
          return this.dropTarget;
        }
        reconnect() {
          let e =
            this.didHandlerIdChange() ||
            this.didDropTargetChange() ||
            this.didOptionsChange();
          e && this.disconnectDropTarget();
          let t = this.dropTarget;
          if (this.handlerId) {
            if (!t) {
              this.lastConnectedDropTarget = t;
              return;
            }
            e &&
              ((this.lastConnectedHandlerId = this.handlerId),
              (this.lastConnectedDropTarget = t),
              (this.lastConnectedDropTargetOptions = this.dropTargetOptions),
              (this.unsubscribeDropTarget = this.backend.connectDropTarget(
                this.handlerId,
                t,
                this.dropTargetOptions,
              )));
          }
        }
        receiveHandlerId(e) {
          e !== this.handlerId && ((this.handlerId = e), this.reconnect());
        }
        get dropTargetOptions() {
          return this.dropTargetOptionsInternal;
        }
        set dropTargetOptions(e) {
          this.dropTargetOptionsInternal = e;
        }
        didHandlerIdChange() {
          return this.lastConnectedHandlerId !== this.handlerId;
        }
        didDropTargetChange() {
          return this.lastConnectedDropTarget !== this.dropTarget;
        }
        didOptionsChange() {
          return !(0, h.b)(
            this.lastConnectedDropTargetOptions,
            this.dropTargetOptions,
          );
        }
        disconnectDropTarget() {
          this.unsubscribeDropTarget &&
            (this.unsubscribeDropTarget(),
            (this.unsubscribeDropTarget = void 0));
        }
        get dropTarget() {
          return (
            this.dropTargetNode ||
            (this.dropTargetRef && this.dropTargetRef.current)
          );
        }
        clearDropTarget() {
          (this.dropTargetRef = null), (this.dropTargetNode = null);
        }
        constructor(e) {
          (this.hooks = (0, p.i)({
            dropTarget: (e, t) => {
              this.clearDropTarget(),
                (this.dropTargetOptions = t),
                (0, u.i)(e)
                  ? (this.dropTargetRef = e)
                  : (this.dropTargetNode = e),
                this.reconnect();
            },
          })),
            (this.handlerId = null),
            (this.dropTargetRef = null),
            (this.dropTargetOptionsInternal = null),
            (this.lastConnectedHandlerId = null),
            (this.lastConnectedDropTarget = null),
            (this.lastConnectedDropTargetOptions = null),
            (this.backend = e);
        }
      }
      var g = o(53767),
        m = o(46885),
        f = o(53856);
      let y = !1;
      class w {
        receiveHandlerId(e) {
          this.targetId = e;
        }
        getHandlerId() {
          return this.targetId;
        }
        subscribeToStateChange(e, t) {
          return this.internalMonitor.subscribeToStateChange(e, t);
        }
        canDrop() {
          if (!this.targetId) return !1;
          (0, f.V)(
            !y,
            "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor",
          );
          try {
            return (
              (y = !0), this.internalMonitor.canDropOnTarget(this.targetId)
            );
          } finally {
            y = !1;
          }
        }
        isOver(e) {
          return (
            !!this.targetId &&
            this.internalMonitor.isOverTarget(this.targetId, e)
          );
        }
        getItemType() {
          return this.internalMonitor.getItemType();
        }
        getItem() {
          return this.internalMonitor.getItem();
        }
        getDropResult() {
          return this.internalMonitor.getDropResult();
        }
        didDrop() {
          return this.internalMonitor.didDrop();
        }
        getInitialClientOffset() {
          return this.internalMonitor.getInitialClientOffset();
        }
        getInitialSourceClientOffset() {
          return this.internalMonitor.getInitialSourceClientOffset();
        }
        getSourceClientOffset() {
          return this.internalMonitor.getSourceClientOffset();
        }
        getClientOffset() {
          return this.internalMonitor.getClientOffset();
        }
        getDifferenceFromInitialOffset() {
          return this.internalMonitor.getDifferenceFromInitialOffset();
        }
        constructor(e) {
          (this.targetId = null), (this.internalMonitor = e.getMonitor());
        }
      }
      var x = o(8903);
      class I {
        canDrop() {
          let e = this.spec,
            t = this.monitor;
          return !e.canDrop || e.canDrop(t.getItem(), t);
        }
        hover() {
          let e = this.spec,
            t = this.monitor;
          e.hover && e.hover(t.getItem(), t);
        }
        drop() {
          let e = this.spec,
            t = this.monitor;
          if (e.drop) return e.drop(t.getItem(), t);
        }
        constructor(e, t) {
          (this.spec = e), (this.monitor = t);
        }
      }
      function $(e, t) {
        let o = (0, d.I)(e, t),
          n = (function () {
            let e = (0, g.u)();
            return (0, a.useMemo)(() => new w(e), [e]);
          })(),
          r = (function (e) {
            let t = (0, g.u)(),
              o = (0, a.useMemo)(() => new v(t.getBackend()), [t]);
            return (
              (0, m.E)(
                () => (
                  (o.dropTargetOptions = e || null),
                  o.reconnect(),
                  () => o.disconnectDropTarget()
                ),
                [e],
              ),
              o
            );
          })(o.options);
        let i = (0, g.u)(),
          c = (function (e, t) {
            let o = (0, a.useMemo)(() => new I(e, t), [t]);
            return (
              (0, a.useEffect)(() => {
                o.spec = e;
              }, [e]),
              o
            );
          })(o, n),
          l = (function (e) {
            let { accept: t } = e;
            return (0, a.useMemo)(
              () => (
                (0, f.V)(null != e.accept, "accept must be defined"),
                Array.isArray(t) ? t : [t]
              ),
              [t],
            );
          })(o);
        return (
          (0, m.E)(
            function () {
              let [e, t] = (0, x.l)(l, c, i);
              return n.receiveHandlerId(e), r.receiveHandlerId(e), t;
            },
            [i, n, c, r, l.map((e) => e.toString()).join("|")],
          ),
          [
            (0, s.j)(o.collect, n, r),
            (0, a.useMemo)(() => r.hooks.dropTarget(), [r]),
          ]
        );
      }
      var S = o(97781),
        b = o(69242);
      let P = {
          "Touch Panel": {
            vertIconGap: "6.76vh",
            horizIconGap: "2.50vh",
            horizBlockGap: "22.08vh",
            vertBlockGap: "9.82vh",
            fourSceneHorizGap: "6.67vh",
            fourSceneVertGap: "6.76vh",
            fourSwitchOneFanHorizGap: "49.01vh",
            fourSwitchOneFanVertGap: "15.58vh",
          },
          Color: {
            vertIconGap: "6.57vh",
            horizIconGap: "1.35vh",
            horizBlockGap: "20.56vh",
            vertBlockGap: "9.82vh",
          },
          Edge: {
            vertIconGap: "5.79vh",
            horizIconGap: "1.35vh",
            horizBlockGap: "20.67vh",
            vertBlockGap: "9.82vh",
          },
          "Royal Edge": {
            vertIconGap: "6.76vh",
            horizIconGap: "1.35vh",
            horizBlockGap: "21.16vh",
            vertBlockGap: "9.82vh",
          },
        },
        j = {
          "Touch Panel": {
            "2 Module": { vertIconGap: "6.76vh" },
            "4 Module": { horizBlockGap: "0vh" },
            "6 Module": { horizBlockGap: "11.38vh" },
            "8 Module": { vertIconGap: "7.03vh" },
            "12 Module": {},
            "4 Module 1 Socket": {},
            "6 Module 1 Socket": {},
            "8 Module S": { vertIconGap: "6.76vh" },
            "8 Module 1 Socket": {},
            "8 Module 2 Socket": {},
            "12 Module 2 Socket H": {},
            "12 Module 2 Socket V": {},
            "16 Module": {},
            "18 Module": {},
          },
          Color: {
            "2 Module": {},
            "4 Module": {},
            "6 Module": {},
            "8 Module": {},
            "12 Module": {},
            "4 Module 1 Socket": {},
            "6 Module 1 Socket": {},
            "8 Module S": {},
            "8 Module 1 Socket": {},
            "8 Module 2 Socket": {},
            "12 Module 2 Socket H": {},
            "12 Module 2 Socket V": {},
            "16 Module": {},
            "18 Module": {},
          },
          Edge: {
            "2 Module": { vertIconGap: "5.79vh" },
            "4 Module": {},
            "6 Module": { vertIconGap: "5.79vh" },
            "8 Module": { vertIconGap: "5.79vh" },
            "12 Module": { vertIconGap: "5.79vh" },
            "4 Module 1 Socket": {},
            "6 Module 1 Socket": {},
            "8 Module S": {},
            "8 Module 1 Socket": {},
            "8 Module 2 Socket": {},
            "12 Module 2 Socket H": {},
            "12 Module 2 Socket V": {},
            "16 Module": {},
            "18 Module": {},
          },
          "Royal Edge": {
            "2 Module": {},
            "4 Module": {},
            "6 Module": {},
            "8 Module": {},
            "12 Module": {},
            "4 Module 1 Socket": {},
            "6 Module 1 Socket": {},
            "8 Module S": {},
            "8 Module 1 Socket": {},
            "8 Module 2 Socket": {},
            "12 Module 2 Socket H": {},
            "12 Module 2 Socket V": {},
            "16 Module": {},
            "18 Module": {},
          },
        };
      function D(e, t) {
        var o;
        return (null == (o = j[e]) ? void 0 : o[t]) || {};
      }
      let T = {
        "Touch Panel": {
          "2 Module": { vertIconGap: "5.79vh", horizBlockGap: "6.67vh" },
          "3 Module": {},
          "4 Module": {},
          "4 Module 1 Socket": {},
          "6 Module": {},
          "6 Module 1 Socket": {},
          "6 Module 2 Socket": {},
          "8 Module": {},
          "8 Module S": {},
          "8 Module 1 Socket": {},
          "8 Module 2 Socket": {},
          "12 Module": {},
          "12 Module 2 Socket H": {},
          "12 Module 2 Socket V": {},
          "16 Module": {},
          "18 Module": {},
        },
        Color: {
          "2 Module": { horizBlockGap: "5vh" },
          "3 Module": {},
          "4 Module": {},
          "4 Module 1 Socket": {},
          "6 Module": {},
          "6 Module 1 Socket": {},
          "6 Module 2 Socket": {},
          "8 Module": {},
          "8 Module S": {},
          "8 Module 1 Socket": {},
          "8 Module 2 Socket": {},
          "12 Module": {},
          "12 Module 2 Socket H": {},
          "12 Module 2 Socket V": {},
          "16 Module": {},
          "18 Module": {},
        },
        Edge: {
          "2 Module": { horizBlockGap: "4.5vh" },
          "3 Module": {},
          "4 Module": {},
          "4 Module 1 Socket": {},
          "6 Module": {},
          "6 Module 1 Socket": {},
          "6 Module 2 Socket": {},
          "8 Module": {},
          "8 Module S": {},
          "8 Module 1 Socket": {},
          "8 Module 2 Socket": {},
          "12 Module": {},
          "12 Module 2 Socket H": {},
          "12 Module 2 Socket V": {},
          "16 Module": {},
          "18 Module": {},
        },
        "Royal Edge": {
          "2 Module": { horizBlockGap: "7vh" },
          "3 Module": {},
          "4 Module": {},
          "4 Module 1 Socket": {},
          "6 Module": {},
          "6 Module 1 Socket": {},
          "6 Module 2 Socket": {},
          "8 Module": {},
          "8 Module S": {},
          "8 Module 1 Socket": {},
          "8 Module 2 Socket": {},
          "12 Module": {},
          "12 Module 2 Socket H": {},
          "12 Module 2 Socket V": {},
          "16 Module": {},
          "18 Module": {},
        },
      };
      function C(e, t) {
        var o, n;
        return null != (n = null == (o = T[e]) ? void 0 : o[t]) ? n : {};
      }
      var k = o(59805);
      let M = (e) => {
          var t;
          let {
              switchId: o,
              itemName: c,
              itemId: l,
              withFan: s = !1,
              CloseIconComponent: d,
              halfModule: h = !1,
              horizIconGap: u,
              vertIconGap: p,
              placeholderFirst: v,
              placeholderSecond: g,
              slot1Accept: m,
              slot2Accept: f,
              hideSlotCloseIcons: y = !1,
              hideEdgeDefaultIcons: w = !1,
              topSlotId: x,
            } = e,
            I = (0, i.wA)(),
            j = (0, i.d4)((e) => e.cartData.defaultFanImage),
            T = (0, i.d4)((e) => {
              var t;
              return null == (t = e.cartData.cartData.panel) ? void 0 : t.item;
            }),
            C = (0, i.d4)((e) => {
              var t;
              return null == (t = e.cartData.cartData.size) ? void 0 : t.item;
            }),
            M = "Color" === T || "Royal Edge" === T,
            N = D(null != T ? T : "", null != C ? C : ""),
            R = (0, a.useMemo)(() => {
              var e, t, o;
              return null !=
                (o =
                  null != (t = null != p ? p : N.vertIconGap)
                    ? t
                    : null == (e = P[null != T ? T : ""])
                      ? void 0
                      : e.vertIconGap)
                ? o
                : "6.76vh";
            }, [T, C, p, N.vertIconGap]),
            F = (0, a.useMemo)(() => {
              var e, t, o;
              return null !=
                (o =
                  null != (t = null != u ? u : N.horizIconGap)
                    ? t
                    : null == (e = P[null != T ? T : ""])
                      ? void 0
                      : e.horizIconGap)
                ? o
                : "2.50vh";
            }, [T, C, u, N.horizIconGap]),
            A = "".concat(o, "-").concat(null != l ? l : "item-1", "-div1"),
            E = "".concat(o, "-").concat(null != l ? l : "item-1", "-div2"),
            G = "".concat(o, "-").concat(null != l ? l : "item-1", "-fan"),
            [O, B] = (0, a.useState)(!1),
            [_, z] = (0, a.useState)(!1),
            [H, V] = (0, a.useState)(!1),
            L = (0, i.d4)((e) => e.cartData.droppedItems),
            W = (0, i.d4)((e) => e.selectionData.currentStep),
            Y = 4 === W.stepNo || 5 === W.stepNo,
            X = new Set(["fan", "light dimmer"]),
            q = (e) => "fan" === (null != e ? e : "").trim().toLowerCase(),
            U = (e) => L.some((t) => t.divId === e && t.switchId === o),
            J = (e, t, n) => {
              let a = "string" == typeof e.iconType ? e.iconType.trim() : "",
                r = a.toLowerCase(),
                i = q(a) ? "Fan" : a;
              if (void 0 !== n) {
                let e = 0 === n ? m : f;
                if (e) {
                  if (!e.map((e) => e.toLowerCase()).includes(r)) return;
                } else if (X.has(r)) return;
              }
              let c = L.find((e) => e.divId === t && e.switchId === o);
              if (c) {
                let e = k.A.getFirstDropId();
                if (k.A.isActiveStep5() && e && c.id === e) return;
                c.id && I((0, S.removeDroppedItem)({ id: c.id }));
                let t = L.indexOf(c);
                if (-1 !== t) {
                  let e = q(c.iconType) ? "Fan" : c.iconType;
                  I((0, S.removeIcon)({ optionType: e, index: t }));
                }
              }
              let l = {
                iconId: e.id,
                divId: t,
                src: e.src,
                switchId: o,
                iconType: i,
                price: e.price,
              };
              I((0, S.addDroppedItem)(l)),
                I(
                  (0, S.addIcon)({
                    optionType: i,
                    option: {
                      id: l.iconId,
                      item: l.src,
                      price: l.price,
                      switchId: l.switchId,
                    },
                  }),
                );
            },
            [{ isOver: K }, Z] = $({
              accept: "icon",
              drop: (e) => J(e, A, 0),
              collect: (e) => ({ isOver: e.isOver() }),
            }),
            [{ isOver: Q }, ee] = $({
              accept: "icon",
              drop: (e) => J(e, E, 1),
              collect: (e) => ({ isOver: e.isOver() }),
            }),
            [{ isOver: et }, eo] = $({
              accept: "icon",
              drop: (e) => {
                if (q(e.iconType)) {
                  if (U(G)) {
                    let e = L.find((e) => e.divId === G && e.switchId === o);
                    if (
                      ((null == e ? void 0 : e.id) &&
                        I((0, S.removeDroppedItem)({ id: e.id })),
                      e)
                    ) {
                      let t = q(e.iconType) ? "Fan" : e.iconType;
                      I(
                        (0, S.removeIcon)({
                          optionType: t,
                          index: L.indexOf(e),
                        }),
                      );
                    }
                  }
                  J({ ...e, iconType: "Fan" }, G);
                }
              },
              collect: (e) => ({ isOver: e.isOver() }),
            }),
            en = (e) => {
              let t = L.findIndex(
                  (t) =>
                    t.iconId === e.iconId &&
                    t.divId === e.divId &&
                    t.switchId === e.switchId,
                ),
                o = k.A.getFirstDropId();
              (k.A.isActiveStep5() &&
                o &&
                (e.id === o || (-1 !== t && L[t].id === o))) ||
                (e.id
                  ? I((0, S.removeDroppedItem)({ id: e.id }))
                  : -1 !== t &&
                    L[t].id &&
                    I((0, S.removeDroppedItem)({ id: L[t].id })),
                -1 !== t &&
                  I((0, S.removeIcon)({ optionType: e.iconType, index: t })));
            },
            ea = (0, a.useMemo)(() => {
              if ("Touch Panel" !== T) return ["", ""];
              switch (c) {
                case "2 Switch 1 HV":
                  return [
                    "/icon/m2/touchdefault.svg",
                    "/icon/m2/HVTouchpanel.svg",
                  ];
                case "2 HV":
                case "4 HV":
                case "6 HV":
                  return [
                    "/icon/m2/HVTouchpanel.svg",
                    "/icon/m2/HVTouchpanel.svg",
                  ];
                case "2 TW":
                case "4 TW":
                case "6 TW":
                case "8 TW":
                  return ["/icon/m2/touch2way.svg", "/icon/m2/touch2way.svg"];
                default:
                  return [
                    "/icon/m2/touchdefault.svg",
                    "/icon/m2/touchdefault.svg",
                  ];
              }
            }, [T, c]),
            er = (0, a.useMemo)(() => {
              if ("Edge" !== T && "Color" !== T && "Royal Edge" !== T)
                return [void 0, void 0];
              switch (c) {
                case "2 Switch 1 HV":
                  return [void 0, "/icon/m2/HV.svg"];
                case "2 HV":
                case "4 HV":
                case "6 HV":
                  return ["/icon/m2/HV.svg", "/icon/m2/HV.svg"];
                case "2 TW":
                case "4 TW":
                case "6 TW":
                case "8 TW":
                  return ["/icon/m2/twoway.svg", "/icon/m2/twoway.svg"];
                default:
                  return [void 0, void 0];
              }
            }, [T, c]),
            ei = (e, t, o, a, r, i) => {
              let c = U(e),
                l = L.filter((t) => t.divId === e);
              if ("Touch Panel" === T || "Edge" === T) {
                let d;
                if ("Touch Panel" === T)
                  d = 0 === i && v ? v : 1 === i && g ? g : ea[i];
                else {
                  var s;
                  let e = 0 === i ? v : g,
                    t = ((e) =>
                      !!e &&
                      (e.endsWith("/HV.svg") || e.endsWith("/twoway.svg")))(e)
                      ? e
                      : null != (s = er[i])
                        ? s
                        : void 0;
                  !c &&
                    (t
                      ? (d = t)
                      : 0 === i && v
                        ? (d = v)
                        : 1 === i && g
                          ? (d = g)
                          : w || (d = "/icon/Icons80x80px/EdgeDefault.svg"));
                }
                return (0, n.jsxs)("div", {
                  ref: t,
                  id: 0 === i ? x : void 0,
                  "data-slot": e,
                  className: "".concat(
                    o ? "opacity-50" : "opacity-100",
                    " relative",
                  ),
                  onMouseEnter: () => r(!0),
                  onMouseLeave: () => r(!1),
                  style: { width: "3.828vh", height: "3.828vh" },
                  children: [
                    c
                      ? l.map((e) =>
                          (0, n.jsx)(
                            "div",
                            {
                              className: "dropped-icon",
                              style: { width: "100%", height: "100%" },
                              children: (0, n.jsx)("img", {
                                src: e.src,
                                alt: e.iconId,
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "contain",
                                  padding: "0.2vh",
                                },
                              }),
                            },
                            e.iconId,
                          ),
                        )
                      : (0, n.jsx)("div", {
                          style: { width: "100%", height: "100%" },
                          children: d
                            ? (0, n.jsx)("img", {
                                src: d,
                                alt: "placeholder",
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "contain",
                                  padding: "0.2vh",
                                },
                              })
                            : (0, n.jsx)("div", {
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  border: "1.2pt solid #00a0e1",
                                  borderRadius: "0.664vh",
                                },
                              }),
                        }),
                    !y &&
                      c &&
                      a &&
                      Y &&
                      l.map((e) =>
                        (0, n.jsx)(
                          b.A,
                          {
                            onClick: () => en(e),
                            className:
                              "absolute -top-2 -right-2 cursor-pointer text-red-500 bg-white rounded-full",
                            style: { fontSize: "2vh" },
                          },
                          e.iconId,
                        ),
                      ),
                  ],
                });
              }
              if (M) {
                let s = c ? l[0] : null,
                  d = s
                    ? s.src
                    : 0 === i && (null != v ? v : er[0])
                      ? null != v
                        ? v
                        : er[0]
                      : 1 === i && (null != g ? g : er[1])
                        ? null != g
                          ? g
                          : er[1]
                        : void 0;
                return (0, n.jsxs)("div", {
                  ref: t,
                  "data-slot": e,
                  style: {
                    width: "4.812vh",
                    height: "4.812vh",
                    border: "1.2pt solid #00a0e1",
                    borderRadius: "0.664vh",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: o ? 0.5 : 1,
                    cursor: "pointer",
                  },
                  onMouseEnter: () => r(!0),
                  onMouseLeave: () => r(!1),
                  children: [
                    d &&
                      (0, n.jsx)("img", {
                        className: "dropped-icon",
                        src: d,
                        alt: "placeholder",
                        style: {
                          width: "85%",
                          height: "85%",
                          objectFit: "contain",
                          padding: "0.1vh",
                        },
                      }),
                    !y &&
                      s &&
                      a &&
                      Y &&
                      (0, n.jsx)(b.A, {
                        onClick: () => en(s),
                        className:
                          "absolute top-0 right-0 cursor-pointer text-red-500 bg-white rounded-full",
                        style: { fontSize: "1.5vh" },
                      }),
                  ],
                });
              }
              let d = "Color" !== T;
              return (0, n.jsx)("div", {
                ref: t,
                "data-slot": e,
                className: "".concat(
                  o ? "opacity-50" : "opacity-100",
                  " relative",
                ),
                onMouseEnter: () => r(!0),
                onMouseLeave: () => r(!1),
                children: (0, n.jsxs)("div", {
                  className:
                    "\n            relative flex justify-center items-center\n            "
                      .concat(
                        d && !c ? "h-[40px] w-[40px]" : "h-[50px] w-[50px]",
                        "\n            ",
                      )
                      .concat(
                        d ? "rounded-full" : "rounded-lg",
                        "\n            ",
                      )
                      .concat(
                        c ? "" : "border-2 border-[#00 a0 e1]",
                        "\n          ",
                      ),
                  children: [
                    c
                      ? l.map((e) =>
                          (0, n.jsx)(
                            "img",
                            {
                              className: "dropped-icon",
                              src: e.src,
                              alt: e.iconId,
                              style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                padding: "0.15vh",
                              },
                            },
                            e.iconId,
                          ),
                        )
                      : null,
                    !y &&
                      c &&
                      a &&
                      Y &&
                      l.map((e) =>
                        (0, n.jsx)(
                          b.A,
                          {
                            onClick: () => en(e),
                            className:
                              "absolute -top-2 -right-2 cursor-pointer text-red-500 shadow-[0_0_6px_rgba(255,0,0,0.8)] bg-white rounded-full",
                            style: { fontSize: d ? 16 : 20 },
                          },
                          e.iconId,
                        ),
                      ),
                  ],
                }),
              });
            };
          return (0, n.jsxs)("div", {
            className: ""
              .concat(h ? "10.1845vh" : "20.369vh", " ")
              .concat(
                h ? "15.23vh" : "20.369vh",
                " flex flex-col items-center justify-center relative",
              ),
            style: { gap: "".concat(R, " ").concat(F) },
            children: [
              h
                ? ei(A, Z, K, O, B, 0)
                : (0, n.jsxs)(n.Fragment, {
                    children: [ei(A, Z, K, O, B, 0), ei(E, ee, Q, _, z, 1)],
                  }),
              s &&
                "Touch Panel" === T &&
                (0, n.jsxs)("div", {
                  ref: eo,
                  "data-slot": G,
                  className: "".concat(
                    et ? "opacity-50" : "opacity-100",
                    " relative m-2",
                  ),
                  onMouseEnter: () => V(!0),
                  onMouseLeave: () => V(!1),
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        " relative flex justify-center items-center h-[3.155vh] w-[3.155vh] border-[0.4vh] border-[#00AFEF] rounded-[0.65vh] bg-transparent ",
                      children: U(G)
                        ? (0, n.jsx)("div", {
                            className: "h-[1.503vh] w-[1.503vh] dropped-icon",
                            children: (0, n.jsx)(r.default, {
                              src:
                                (null == (t = L.find((e) => e.divId === G))
                                  ? void 0
                                  : t.src) || j,
                              alt: "Fan",
                              width: 1,
                              height: 1,
                              style: { width: "100%", height: "100%" },
                            }),
                          })
                        : (0, n.jsx)("div", {
                            className: "h-[0.851vh] w-[0.851vh] dropped-icon",
                            children: (0, n.jsx)(r.default, {
                              src:
                                "Touch Panel" === T
                                  ? "/icon/Icons80x80px/Fan/touchfandefault.svg"
                                  : "/icon/Icons80x80px/Fan/Fan Default.svg",
                              alt: "Default Fan",
                              width: 1,
                              height: 1,
                              style: { width: "100%", height: "100%" },
                            }),
                          }),
                    }),
                    !y &&
                      U(G) &&
                      H &&
                      Y &&
                      (0, n.jsx)(b.A, {
                        onClick: () => {
                          let e = L.find((e) => e.divId === G && q(e.iconType));
                          e && en(e);
                        },
                        className:
                          "absolute -top-2 -right-2 cursor-pointer text-red-500 shadow-[0_0_6px_rgba(255,0,0,0.8)] bg-white rounded-full",
                        style: { fontSize: "2vh" },
                      }),
                  ],
                }),
              d && (4 === W.stepNo || 5 === W.stepNo) && (0, n.jsx)(d, {}),
            ],
          });
        },
        N = (e) => {
          let { switchId: t, CloseIconComponent: o } = e;
          return (0, n.jsx)(M, {
            switchId: t,
            itemName: "Curtain",
            placeholderFirst: "/icon/Icons80x80px/curtain/open.svg",
            placeholderSecond: "/icon/Icons80x80px/curtain/close.svg",
            hideSlotCloseIcons: !0,
            CloseIconComponent: o,
          });
        };
      var R = o(70015);
      let F = (e) => {
          var t, o, a, r, c, l;
          let s,
            d,
            {
              switchId: h,
              itemName: u,
              horizIconGap: p,
              vertIconGap: v,
              CloseIconComponent: g,
            } = e,
            m = (0, i.d4)((e) => {
              var t;
              return null == (t = e.cartData.cartData.panel) ? void 0 : t.item;
            }),
            f = null != m ? m : "",
            y = (0, i.d4)((e) => {
              var t;
              return null == (t = e.cartData.cartData.size) ? void 0 : t.item;
            }),
            w = C(f, null != y ? y : ""),
            x =
              null !=
              (r =
                null != (a = null != v ? v : w.vertIconGap)
                  ? a
                  : null == (t = P[f])
                    ? void 0
                    : t.vertIconGap)
                ? r
                : "6.76vh",
            I =
              null !=
              (l =
                null != (c = null != p ? p : w.horizBlockGap)
                  ? c
                  : null == (o = P[f])
                    ? void 0
                    : o.horizBlockGap)
                ? l
                : "1.35vh";
          return (
            ("4 Switch" === u || "4 Switch (4-Module)" === u) &&
              ("Touch Panel" === f
                ? ((s = "/icon/m2/touch2way.svg"),
                  (d = "/icon/m2/HVTouchpanel.svg"))
                : ("Edge" === f,
                  (s = "/icon/m2/twoway.svg"),
                  (d = "/icon/m2/HV.svg"))),
            (0, n.jsxs)("div", {
              draggable: !1,
              className: "flex items-center relative",
              style: { columnGap: I },
              children: [
                (0, n.jsx)(M, {
                  switchId: "".concat(h, "-1"),
                  itemName: u,
                  horizIconGap: I,
                  vertIconGap: x,
                }),
                (0, n.jsx)(M, {
                  switchId: "".concat(h, "-2"),
                  itemName: u,
                  horizIconGap: I,
                  vertIconGap: x,
                  placeholderFirst: s,
                  placeholderSecond: d,
                }),
                g && (0, n.jsx)(g, {}),
              ],
            })
          );
        },
        A = (e) => {
          var t, o;
          let {
              switchId: a,
              itemName: r = "4 Switch (2-Module)",
              CloseIconComponent: c,
            } = e,
            l = (0, i.d4)((e) => {
              var t;
              return (
                (null == (t = e.cartData.cartData.panel) ? void 0 : t.item) ||
                ""
              );
            }),
            s = { fourSceneHorizGap: "6.67vh", fourSceneVertGap: "6.76vh" },
            d = R.dO[l],
            h =
              null != (t = null == d ? void 0 : d.fourSceneHorizGap)
                ? t
                : s.fourSceneHorizGap,
            u =
              null != (o = null == d ? void 0 : d.fourSceneVertGap)
                ? o
                : s.fourSceneVertGap,
            p = [
              "".concat(a, "-scene-0"),
              "".concat(a, "-scene-1"),
              "".concat(a, "-scene-2"),
              "".concat(a, "-scene-3"),
            ];
          return (0, n.jsxs)("div", {
            className: "flex flex-col items-center relative",
            style: { rowGap: u },
            children: [
              (0, n.jsxs)("div", {
                className: "flex items-center justify-center",
                style: { columnGap: h },
                children: [
                  (0, n.jsx)(M, {
                    switchId: p[0],
                    itemName: r,
                    halfModule: !0,
                  }),
                  (0, n.jsx)(M, {
                    switchId: p[1],
                    itemName: r,
                    halfModule: !0,
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "flex items-center justify-center",
                style: { columnGap: h },
                children: [
                  (0, n.jsx)(M, {
                    switchId: p[2],
                    itemName: r,
                    halfModule: !0,
                  }),
                  (0, n.jsx)(M, {
                    switchId: p[3],
                    itemName: r,
                    halfModule: !0,
                  }),
                ],
              }),
              c && (0, n.jsx)(c, {}),
            ],
          });
        },
        E = (e) => {
          var t, o;
          let {
              switchId: a,
              horizIconGap: r,
              vertIconGap: c,
              placeholderFirst: l,
              placeholderSecond: s,
              CloseIconComponent: d,
            } = e,
            h = (0, i.d4)((e) => {
              var t;
              return null == (t = e.cartData.cartData.panel) ? void 0 : t.item;
            }),
            u = (0, i.d4)((e) => {
              var t;
              return null == (t = e.cartData.cartData.size) ? void 0 : t.item;
            }),
            p =
              null != (t = R.dO[null != h ? h : ""])
                ? t
                : {
                    vertIconGap: "6.76vh",
                    horizBlockGap: "1.35vh",
                    vertBlockGap: "9.82vh",
                  },
            v = "Touch Panel" === h && "2 Module" === u,
            g = null != c ? c : v ? p.fourSceneVertGap : p.vertIconGap,
            m =
              null != r
                ? r
                : v
                  ? p.fourSceneHorizGap
                  : null != (o = p.horizIconGap)
                    ? o
                    : p.horizBlockGap,
            f = "Touch Panel" === h;
          return (0, n.jsxs)("div", {
            className: "flex flex-col items-center relative",
            style: { gap: g },
            children: [
              (0, n.jsxs)("div", {
                className: "flex",
                style: { columnGap: m },
                children: [
                  (0, n.jsx)(M, {
                    switchId: "".concat(a, "-1"),
                    itemName: "4 Switch",
                    horizIconGap: m,
                    vertIconGap: g,
                  }),
                  (0, n.jsx)(M, {
                    switchId: "".concat(a, "-2"),
                    itemName: "4 Switch",
                    horizIconGap: m,
                    vertIconGap: g,
                    placeholderFirst:
                      null != l
                        ? l
                        : f
                          ? "/icon/m2/touch2way.svg"
                          : "Edge" === h || "Color" === h || "Royal Edge" === h
                            ? "/icon/m2/twoway.svg"
                            : void 0,
                    placeholderSecond:
                      null != s
                        ? s
                        : f
                          ? "/icon/m2/HVTouchpanel.svg"
                          : "Edge" === h || "Color" === h || "Royal Edge" === h
                            ? "/icon/m2/HV.svg"
                            : void 0,
                  }),
                ],
              }),
              d && (0, n.jsx)(d, {}),
            ],
          });
        },
        G = (e) => "fan" === (null != e ? e : "").trim().toLowerCase(),
        O = (e) => {
          var t, o, a, c, l, s;
          let {
              switchId: d,
              itemId: h,
              defaultFanIcon: u,
              defaultDimmerIcon: p,
              slotGap: v = "4.74vh",
              slotSize: g = "3.155vh",
              fanVertOffset: m = "0vh",
              dimmerVertOffset: f = "0vh",
              centerDimmer: y = !1,
              CloseIconComponent: w,
            } = e,
            x = (0, i.wA)(),
            I = (0, i.d4)((e) => e.selectionData.currentStep),
            P = (0, i.d4)((e) => e.cartData.closeIconColor),
            j = (0, i.d4)((e) => e.cartData.droppedItems),
            D = (0, i.d4)((e) => {
              var t, o;
              return null !=
                (o = null == (t = e.cartData.cartData.panel) ? void 0 : t.item)
                ? o
                : "Touch Panel";
            }),
            T = {
              "Touch Panel": { width: "3.902vh", height: "3.77vh" },
              Edge: { width: "3.263vh", height: "3.284vh" },
              Color: { width: "4.812vh", height: "4.812vh" },
              "Royal Edge": { width: "4.952vh", height: "4.952vh" },
            },
            C = {
              "Touch Panel": { width: "1.018vh", height: "11.264vh" },
              Edge: { width: "0.656vh", height: "10.713vh" },
              Color: { width: "0.875vh", height: "15.321vh" },
              "Royal Edge": { width: "0.9vh", height: "15.765vh" },
            },
            { width: M, height: N } = null != (a = T[D]) ? a : T["Touch Panel"],
            { width: R, height: F } = null != (c = C[D]) ? c : C["Touch Panel"],
            A = "Color" === D || "Royal Edge" === D,
            E = "".concat(d, "-").concat(h, "-fan"),
            O = "".concat(d, "-").concat(h, "-dim"),
            B = (e) => j.some((t) => t.divId === e && t.switchId === d),
            _ = (e) => j.find((t) => t.divId === e && t.switchId === d),
            z = (e) => {
              let t = j.findIndex(
                  (t) =>
                    t.iconId === e.iconId &&
                    t.divId === e.divId &&
                    t.switchId === e.switchId,
                ),
                o = k.A.getFirstDropId();
              if (k.A.isActiveStep5() && o) {
                var n;
                if (
                  (null == e ? void 0 : e.id) === o ||
                  (t >= 0 && (null == (n = j[t]) ? void 0 : n.id) === o)
                )
                  return;
              }
              if (
                (e.id
                  ? x((0, S.removeDroppedItem)({ id: e.id }))
                  : t >= 0 &&
                    j[t].id &&
                    x((0, S.removeDroppedItem)({ id: j[t].id })),
                t >= 0)
              ) {
                let o = G(e.iconType) ? "Fan" : e.iconType;
                x((0, S.removeIcon)({ optionType: o, index: t }));
              }
            },
            [{ isOver: H }, V] = $({
              accept: "icon",
              drop: (e) => {
                if (!G(e.iconType)) return;
                let t = _(E);
                if (t) {
                  let e = k.A.getFirstDropId();
                  if (k.A.isActiveStep5() && e && t.id === e) return;
                  z(t);
                }
                let o = {
                  iconId: e.iconId,
                  divId: E,
                  src: e.src,
                  switchId: d,
                  iconType: "Fan",
                  price: e.price,
                };
                x((0, S.addDroppedItem)(o)),
                  x(
                    (0, S.addIcon)({
                      optionType: "Fan",
                      option: {
                        id: o.iconId,
                        item: o.src,
                        price: o.price,
                        switchId: d,
                      },
                    }),
                  );
              },
              collect: (e) => ({ isOver: e.isOver() }),
            }),
            [{ isOver: L }, W] = $({
              accept: "icon",
              drop: (e) => {
                let t = _(O);
                if (t) {
                  let e = k.A.getFirstDropId();
                  if (k.A.isActiveStep5() && e && t.id === e) return;
                  z(t);
                }
                let o = {
                  iconId: e.iconId,
                  divId: O,
                  src: e.src,
                  switchId: d,
                  iconType: e.iconType,
                  price: e.price,
                };
                x((0, S.addDroppedItem)(o)),
                  x(
                    (0, S.addIcon)({
                      optionType: o.iconType,
                      option: {
                        id: o.iconId,
                        item: o.src,
                        price: o.price,
                        switchId: d,
                      },
                    }),
                  );
              },
              collect: (e) => ({ isOver: e.isOver() }),
            }),
            Y =
              null !=
              (l = null == (t = j.find((e) => e.divId === E)) ? void 0 : t.src)
                ? l
                : u,
            X =
              null !=
              (s = null == (o = j.find((e) => e.divId === O)) ? void 0 : o.src)
                ? s
                : p;
          return (0, n.jsxs)("div", {
            style: {
              position: "relative",
              display: "flex",
              alignItems: "flex-start",
              columnGap: v,
            },
            children: [
              (0, n.jsxs)("div", {
                ref: V,
                "data-slot": E,
                style: {
                  position: "relative",
                  width: A ? M : g,
                  height: A ? M : g,
                  opacity: H ? 0.5 : 1,
                  ...(A && {
                    border: "1.2pt solid #00a0e1",
                    borderRadius: "0.664vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }),
                },
                children: [
                  A
                    ? (0, n.jsx)(r.default, {
                        src: Y,
                        alt: "Fan",
                        width: 1,
                        height: 1,
                        style: { width: "70%", height: "70%" },
                        priority: !0,
                      })
                    : (0, n.jsx)("div", {
                        className: "dropped-icon",
                        style: {
                          position: "absolute",
                          top: m,
                          width: M,
                          height: N,
                        },
                        children: (0, n.jsx)(r.default, {
                          src: Y,
                          alt: "Fan",
                          fill: !0,
                          style: { objectFit: "contain" },
                          priority: !0,
                        }),
                      }),
                  B(E) &&
                    5 === I.stepNo &&
                    (0, n.jsx)(b.A, {
                      onClick: () => z(_(E)),
                      style: {
                        position: "absolute",
                        bottom: "-2.3vh",
                        right: "-1vh",
                        color: "#".concat(P),
                        cursor: "pointer",
                        fontSize: "2vh",
                      },
                    }),
                ],
              }),
              (0, n.jsxs)("div", {
                ref: W,
                "data-slot": O,
                style: {
                  position: "relative",
                  width: g,
                  height: g,
                  opacity: L ? 0.5 : 1,
                },
                children: [
                  (0, n.jsx)("div", {
                    className: "dropped-icon",
                    style: {
                      position: "absolute",
                      top: y ? "calc(50% - (".concat(F, " / 2))") : f,
                      width: R,
                      height: F,
                    },
                    children: (0, n.jsx)(r.default, {
                      src: X,
                      alt: "Dimmer",
                      fill: !0,
                      style: { objectFit: "contain" },
                      priority: !0,
                    }),
                  }),
                  B(O) &&
                    5 === I.stepNo &&
                    (0, n.jsx)(b.A, {
                      onClick: () => z(_(O)),
                      style: {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        color: "#".concat(P),
                        cursor: "pointer",
                        fontSize: "1.5vh",
                      },
                    }),
                ],
              }),
              w && (4 === I.stepNo || 5 === I.stepNo) && (0, n.jsx)(w, {}),
            ],
          });
        },
        B = (e) => "fan" === (null != e ? e : "").trim().toLowerCase(),
        _ = (e) => {
          let {
              switchId: t,
              itemName: o,
              horizIconGap: a,
              vertIconGap: r,
              CloseIconComponent: c,
            } = e,
            l = (0, i.d4)((e) => e.selectionData.currentStep),
            s = (0, i.d4)((e) => {
              var t;
              return null == (t = e.cartData.cartData.panel) ? void 0 : t.item;
            }),
            d = (() => {
              switch (s) {
                case "Edge":
                  return "8.42vh";
                case "Color":
                  return "7.87vh";
                case "Royal Edge":
                  return "8.10vh";
                default:
                  return "9.47vh";
              }
            })(),
            h = (() => {
              switch (s) {
                case "Edge":
                  return "5.79vh";
                case "Color":
                  return "6.57vh";
                default:
                  return "6.76vh";
              }
            })(),
            u = null != a ? a : d,
            p = null != r ? r : h,
            v =
              ("Touch Panel" === s ||
                "Edge" === s ||
                "Color" === s ||
                "Royal Edge" === s) &&
              "6 Switch" === o,
            g = v
              ? "Touch Panel" === s
                ? "/icon/m2/touch2way.svg"
                : "/icon/m2/twoway.svg"
              : void 0,
            m = v
              ? "Touch Panel" === s
                ? "/icon/m2/HVTouchpanel.svg"
                : "/icon/m2/HV.svg"
              : void 0;
          return (0, n.jsxs)("div", {
            className: "flex items-center justify-center",
            style: { columnGap: u },
            children: [
              [1, 2, 3].map((e) =>
                (0, n.jsx)(
                  M,
                  {
                    switchId: "".concat(t, "-").concat(e),
                    itemName: o,
                    horizIconGap: u,
                    vertIconGap: p,
                    ...(3 === e && v
                      ? { placeholderFirst: g, placeholderSecond: m }
                      : {}),
                  },
                  "".concat(t, "-").concat(e),
                ),
              ),
              c && (4 === l.stepNo || 5 === l.stepNo) && (0, n.jsx)(c, {}),
            ],
          });
        },
        z = (e) => "fan" === (null != e ? e : "").trim().toLowerCase(),
        H = (e) => "fan" === (null != e ? e : "").trim().toLowerCase();
      var V = o(1743),
        L = o(99511);
      let W = {
          TwoSwitch: M,
          Curtain: N,
          FourSwitch4Mod: F,
          FourSwitch2Mod: A,
          FourSwitch_OneFan: (e) => {
            var t;
            let { switchId: o, CloseIconComponent: a } = e,
              r = (0, i.d4)((e) => e.selectionData.currentStep),
              c =
                null !=
                (t = (0, i.d4)((e) => {
                  var t;
                  return null == (t = e.cartData.cartData.panel)
                    ? void 0
                    : t.item;
                }))
                  ? t
                  : "Touch Panel",
              l = "7.21vh",
              s = "7.21vh",
              d = "4.73vh",
              h = "5.43vh";
            "Edge" === c
              ? ((l = "6.24vh"), (s = "6.24vh"), (d = "4.87vh"), (h = "5.64vh"))
              : "Color" === c
                ? ((l = "6.41vh"),
                  (s = "6.57vh"),
                  (d = "5.70vh"),
                  (h = "6.73vh"))
                : "Royal Edge" === c &&
                  ((l = "6.60vh"),
                  (s = "6.76vh"),
                  (d = "5.86vh"),
                  (h = "6.93vh"));
            let u = "Touch Panel" === c;
            return (0, n.jsxs)("div", {
              className: "flex items-center relative",
              children: [
                (0, n.jsx)(E, {
                  switchId: o,
                  horizIconGap: l,
                  vertIconGap: s,
                  placeholderFirst: u
                    ? "/icon/m2/touch2way.svg"
                    : "Edge" === c || "Color" === c || "Royal Edge" === c
                      ? "/icon/m2/twoway.svg"
                      : void 0,
                  placeholderSecond: u
                    ? "/icon/m2/HVTouchpanel.svg"
                    : "Edge" === c || "Color" === c || "Royal Edge" === c
                      ? "/icon/m2/HV.svg"
                      : void 0,
                }),
                (0, n.jsx)("div", {
                  style: { marginLeft: d },
                  children: (0, n.jsx)(O, {
                    switchId: o,
                    itemId: "Fan1",
                    slotGap: h,
                    defaultFanIcon: u
                      ? "/icon/Icons80x80px/Fan/touchfandefault.svg"
                      : "/icon/Icons80x80px/Fan/Fan Default.svg",
                    defaultDimmerIcon: u
                      ? "/icon/Icons80x80px/Dimmer/touchdimmer.svg"
                      : "Edge" === c
                        ? "/icon/Icons80x80px/Dimmer/defaultdimmer.svg"
                        : "/icon/Icons80x80px/Dimmer/dimmer.svg",
                    centerDimmer: !0,
                  }),
                }),
                a && (4 === r.stepNo || 5 === r.stepNo) && (0, n.jsx)(a, {}),
              ],
            });
          },
          FourSwitch_TwoFan: function (e) {
            let t,
              o,
              a,
              { switchId: r, CloseIconComponent: c } = e,
              l = (0, i.wA)(),
              s = (0, i.d4)((e) => e.cartData.droppedItems),
              d = (0, i.d4)((e) => e.selectionData.currentStep),
              h = (0, i.d4)((e) => {
                var t;
                return (
                  (null == (t = e.cartData.cartData.panel) ? void 0 : t.item) ||
                  ""
                );
              }),
              u =
                "Touch Panel" === h
                  ? "/icon/Icons80x80px/Fan/touchfandefault.svg"
                  : "/icon/Icons80x80px/Fan/Fan Default.svg",
              p =
                "Touch Panel" === h
                  ? "/icon/Icons80x80px/Dimmer/touchdimmer.svg"
                  : "Edge" === h
                    ? "/icon/Icons80x80px/Dimmer/defaultdimmer.svg"
                    : "/icon/Icons80x80px/Dimmer/dimmer.svg";
            switch (h) {
              case "Touch Panel":
                (t = "-4.45vh"), (o = "12.62vh"), (a = "7.20vh");
                break;
              case "Color":
                (t = "1.38vh"), (o = "7.87vh"), (a = "6.57vh");
                break;
              case "Edge":
                (t = "-4.49vh"), (o = "11.63vh"), (a = "6.37vh");
                break;
              case "Royal Edge":
                (t = "1.35vh"), (o = "8.10vh"), (a = "6.76vh");
                break;
              default:
                (t = "9.73vh"), (o = "12.62vh"), (a = "7.20vh");
            }
            let v = "".concat(r, "-dimmer-left"),
              g = "".concat(r, "-dimmer-right"),
              [{ isOver: m }, f] = $({
                accept: "icon",
                drop: (e) => {
                  var t;
                  if (!B(e.iconType)) return;
                  let o = s.find((e) => e.divId === v && e.switchId === r);
                  if (o) {
                    let e = k.A.getFirstDropId();
                    if (k.A.isActiveStep5() && e && o.id === e) return;
                    o.id && l((0, S.removeDroppedItem)({ id: o.id })),
                      l(
                        (0, S.removeIcon)({
                          optionType: B(o.iconType) ? "Fan" : o.iconType,
                          index: s.indexOf(o),
                        }),
                      );
                  }
                  let n = {
                    iconId: null != (t = e.iconId) ? t : e.id,
                    divId: v,
                    src: e.src,
                    switchId: r,
                    iconType: "Fan",
                    price: e.price,
                  };
                  l((0, S.addDroppedItem)(n)),
                    l(
                      (0, S.addIcon)({
                        optionType: "Fan",
                        option: {
                          id: n.iconId,
                          item: n.src,
                          price: n.price,
                          switchId: r,
                        },
                      }),
                    );
                },
                collect: (e) => ({ isOver: e.isOver() }),
              }),
              [{ isOver: y }, w] = $({
                accept: "icon",
                drop: (e) => {
                  var t;
                  if (!B(e.iconType)) return;
                  let o = s.find((e) => e.divId === g && e.switchId === r);
                  if (o) {
                    let e = k.A.getFirstDropId();
                    if (k.A.isActiveStep5() && e && o.id === e) return;
                    o.id && l((0, S.removeDroppedItem)({ id: o.id })),
                      l(
                        (0, S.removeIcon)({
                          optionType: B(o.iconType) ? "Fan" : o.iconType,
                          index: s.indexOf(o),
                        }),
                      );
                  }
                  let n = {
                    iconId: null != (t = e.iconId) ? t : e.id,
                    divId: g,
                    src: e.src,
                    switchId: r,
                    iconType: "Fan",
                    price: e.price,
                  };
                  l((0, S.addDroppedItem)(n)),
                    l(
                      (0, S.addIcon)({
                        optionType: "Fan",
                        option: {
                          id: n.iconId,
                          item: n.src,
                          price: n.price,
                          switchId: r,
                        },
                      }),
                    );
                },
                collect: (e) => ({ isOver: e.isOver() }),
              }),
              x = (e, o, a) => {
                let i = s.some((e) => e.divId === a && e.switchId === r),
                  c = s.find((e) => e.divId === a && e.switchId === r);
                return (0, n.jsx)("div", {
                  ref: e,
                  "data-slot": a,
                  style: {
                    width: "3.155vh",
                    height: "3.155vh",
                    opacity: o ? 0.5 : 1,
                    marginRight: a === v ? t : void 0,
                    marginLeft: a === g ? t : void 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  },
                  children: (0, n.jsx)("img", {
                    className: "dropped-icon",
                    src: i ? c.src : p,
                    alt: "Dimmer",
                    style: { height: "11.264vh", objectFit: "contain" },
                  }),
                });
              },
              I = "Touch Panel" === h,
              b = I
                ? "/icon/m2/touch2way.svg"
                : "Edge" === h || "Color" === h || "Royal Edge" === h
                  ? "/icon/m2/twoway.svg"
                  : void 0,
              P = I
                ? "/icon/m2/HVTouchpanel.svg"
                : "Edge" === h || "Color" === h || "Royal Edge" === h
                  ? "/icon/m2/HV.svg"
                  : void 0;
            return (0, n.jsxs)("div", {
              className: "flex items-center",
              style: { columnGap: o },
              children: [
                x(f, m, v),
                [0, 1, 2].map((e) => {
                  let t = 0 === e || 2 === e ? u : b,
                    o = 2 === e ? P : void 0;
                  return (0, n.jsx)(
                    M,
                    {
                      switchId: "".concat(r, "-pair-").concat(e),
                      itemName: "Switch Pair ".concat(e + 1),
                      placeholderFirst: o,
                      placeholderSecond: t,
                      vertIconGap: a,
                      ...(0 === e || 2 === e ? { slot2Accept: ["Fan"] } : {}),
                    },
                    "".concat(r, "-pair-").concat(e),
                  );
                }),
                x(w, y, g),
                c && (4 === d.stepNo || 5 === d.stepNo) && (0, n.jsx)(c, {}),
              ],
            });
          },
          FourSceneController: (e) => {
            var t, o;
            let { switchId: a, CloseIconComponent: r } = e,
              c = (0, i.d4)((e) => {
                var t;
                return (
                  (null == (t = e.cartData.cartData.panel) ? void 0 : t.item) ||
                  ""
                );
              }),
              l = { fourSceneHorizGap: "6.67vh", fourSceneVertGap: "6.76vh" },
              s = R.dO[c],
              d =
                null != (t = null == s ? void 0 : s.fourSceneHorizGap)
                  ? t
                  : l.fourSceneHorizGap,
              h =
                null != (o = null == s ? void 0 : s.fourSceneVertGap)
                  ? o
                  : l.fourSceneVertGap,
              u = (0, i.d4)((e) => e.selectionData.currentStep),
              p = [
                "".concat(a, "-scene-0"),
                "".concat(a, "-scene-1"),
                "".concat(a, "-scene-2"),
                "".concat(a, "-scene-3"),
              ],
              v = (0, i.d4)((e) => e.defaultIcons.icons),
              g = (e) => {
                var t;
                return null == (t = v.find((t) => t.id === e)) ? void 0 : t.src;
              },
              m = {
                topLeft: g("1214"),
                bottomLeft: g("1215"),
                topRight: g("1216"),
                bottomRight: g("1217"),
              };
            return (0, n.jsxs)("div", {
              className: "flex flex-col items-center",
              style: { rowGap: h },
              children: [
                (0, n.jsxs)("div", {
                  className: "flex items-center justify-center",
                  style: { columnGap: d },
                  children: [
                    (0, n.jsx)(M, {
                      switchId: p[0],
                      itemName: "4 Scene Controller",
                      halfModule: !0,
                      placeholderFirst: m.topLeft,
                    }),
                    (0, n.jsx)(M, {
                      switchId: p[1],
                      itemName: "4 Scene Controller",
                      halfModule: !0,
                      placeholderFirst: m.topRight,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex items-center justify-center",
                  style: { columnGap: d },
                  children: [
                    (0, n.jsx)(M, {
                      switchId: p[2],
                      itemName: "4 Scene Controller",
                      halfModule: !0,
                      placeholderFirst: m.bottomLeft,
                    }),
                    (0, n.jsx)(M, {
                      switchId: p[3],
                      itemName: "4 Scene Controller",
                      halfModule: !0,
                      placeholderFirst: m.bottomRight,
                    }),
                  ],
                }),
                r && (4 === u.stepNo || 5 === u.stepNo) && (0, n.jsx)(r, {}),
              ],
            });
          },
          EightSwitch: (e) => {
            let { switchId: t, itemName: o, CloseIconComponent: a } = e,
              r = (0, i.d4)((e) => e.selectionData.currentStep),
              c = (0, i.d4)((e) => {
                var t, o;
                return null !=
                  (o =
                    null == (t = e.cartData.cartData.panel) ? void 0 : t.item)
                  ? o
                  : "Touch Panel";
              });
            (0, i.d4)((e) => {
              var t, o;
              return null !=
                (o = null == (t = e.cartData.cartData.size) ? void 0 : t.item)
                ? o
                : "";
            });
            let l = "2.50vh",
              s = "6.76vh";
            switch (c) {
              case "Edge":
                (l = "1.35vh"), (s = "5.80vh");
                break;
              case "Color":
                (l = "1.35vh"), (s = "7vh");
                break;
              case "Royal Edge":
                (l = "1.35vh"), (s = "7.21vh");
            }
            let d = (() => {
                switch (c) {
                  case "Edge":
                    return "8.42vh";
                  case "Color":
                    return "8.05vh";
                  case "Royal Edge":
                    return "8.28vh";
                  default:
                    return "9.47vh";
                }
              })(),
              h =
                ("Touch Panel" === c ||
                  "Edge" === c ||
                  "Color" === c ||
                  "Royal Edge" === c) &&
                "8 Switch" === o,
              u = h
                ? "Touch Panel" === c
                  ? "/icon/m2/touch2way.svg"
                  : "/icon/m2/twoway.svg"
                : void 0,
              p = h
                ? "Touch Panel" === c
                  ? "/icon/m2/HVTouchpanel.svg"
                  : "/icon/m2/HV.svg"
                : void 0,
              v = Array.from({ length: 4 }, (e, o) =>
                "".concat(t, "-eightSwitch-").concat(o + 1),
              );
            return (0, n.jsxs)("div", {
              className: "h-full flex items-center relative",
              style: { columnGap: d, rowGap: "0", justifyContent: "center" },
              children: [
                v.map((e, t) =>
                  (0, n.jsx)(
                    M,
                    {
                      switchId: e,
                      itemName: o,
                      horizIconGap: l,
                      vertIconGap: s,
                      ...(3 === t
                        ? { placeholderFirst: u, placeholderSecond: p }
                        : {}),
                    },
                    e,
                  ),
                ),
                a && (4 === r.stepNo || 5 === r.stepNo) && (0, n.jsx)(a, {}),
              ],
            });
          },
          EightSwitch_OneFan: function (e) {
            var t, o, a, c, l, s, d;
            let h,
              {
                switchId: u,
                itemName: p,
                CloseIconComponent: v,
                gapOverrides: g,
                fanGapAdjustVH: m,
                dimmerGapAdjustVH: f,
                bottomOverrides: y,
                fanBottomOffsetVH: w,
              } = e,
              x = (0, i.wA)(),
              I = (0, i.d4)((e) => e.selectionData.currentStep),
              b =
                (0, i.d4)((e) => {
                  var t;
                  return null == (t = e.cartData.cartData.panel)
                    ? void 0
                    : t.item;
                }) || "",
              P = (0, i.d4)((e) => e.cartData.droppedItems),
              j = "Color" === b || "Royal Edge" === b,
              D = "Touch Panel" === b || "Edge" === b,
              T = {
                "Touch Panel": { width: "3.41vh", height: "3.295vh" },
                Edge: { width: "3.41vh", height: "3.295vh" },
                Color: { width: "4.812vh", height: "4.812vh" },
                "Royal Edge": { width: "4.952vh", height: "4.952vh" },
              },
              { width: C, height: N } = b && T[b] ? T[b] : T["Touch Panel"];
            switch (b) {
              case "Touch Panel":
                h = "10.37vh";
                break;
              case "Color":
              case "Edge":
                h = "9.30vh";
                break;
              case "Royal Edge":
                h = "9.37vh";
                break;
              default:
                h = "9.73vh";
            }
            let R = {
                "Touch Panel": { beforeFanVH: 0, beforeDimmerVH: 0 },
                Edge: { beforeFanVH: 0, beforeDimmerVH: 0 },
                Color: { beforeFanVH: 0, beforeDimmerVH: 0 },
                "Royal Edge": { beforeFanVH: 0, beforeDimmerVH: 0 },
                ...(g || {}),
              },
              F = (b && R[b]) || {},
              A = (null != (a = F.beforeFanVH) ? a : 0) + (null != m ? m : 0),
              E =
                (null != (c = F.beforeDimmerVH) ? c : 0) + (null != f ? f : 0),
              G = {
                "Touch Panel": { fanBottomVH: 1.05 },
                Edge: { fanBottomVH: 0.9 },
                Color: { fanBottomVH: 0 },
                "Royal Edge": { fanBottomVH: 0 },
                ...(y || {}),
              },
              O =
                (null != (l = ((b && G[b]) || {}).fanBottomVH) ? l : 0) +
                (null != w ? w : 0),
              B = "16.369vh",
              H = "".concat(u, "-fan-right"),
              V = "".concat(u, "-dimmer-right"),
              L =
                null !=
                (s =
                  null == (t = P.find((e) => e.divId === H && e.switchId === u))
                    ? void 0
                    : t.src)
                  ? s
                  : "Touch Panel" === b
                    ? "/icon/Icons80x80px/Fan/touchfandefault.svg"
                    : "/icon/Icons80x80px/Fan/Fan Default.svg",
              W =
                null !=
                (d =
                  null == (o = P.find((e) => e.divId === V && e.switchId === u))
                    ? void 0
                    : o.src)
                  ? d
                  : "Touch Panel" === b
                    ? "/icon/Icons80x80px/Dimmer/touchdimmer.svg"
                    : "Edge" === b
                      ? "/icon/Icons80x80px/Dimmer/defaultdimmer.svg"
                      : "/icon/Icons80x80px/Dimmer/dimmer.svg",
              Y = (e, t) => {
                var o, n;
                let a = P.find((t) => t.divId === e && t.switchId === u);
                if (a) {
                  let e = k.A.getFirstDropId();
                  if (k.A.isActiveStep5() && e && a.id === e) return;
                  let t = P.indexOf(a);
                  a.id && x((0, S.removeDroppedItem)({ id: a.id }));
                  let o = z(a.iconType) ? "Fan" : a.iconType;
                  x((0, S.removeIcon)({ optionType: o, index: t }));
                }
                let r = z(t.iconType) ? "Fan" : t.iconType,
                  i = {
                    iconId:
                      null != (n = null != (o = t.iconId) ? o : t.id) ? n : "",
                    divId: e,
                    src: t.src,
                    switchId: u,
                    iconType: r,
                    price: t.price,
                  };
                x((0, S.addDroppedItem)(i)),
                  x(
                    (0, S.addIcon)({
                      optionType: r,
                      option: {
                        id: i.iconId,
                        item: i.src,
                        price: i.price,
                        switchId: u,
                      },
                    }),
                  );
              },
              [{ isOver: X }, q] = $({
                accept: "icon",
                drop: (e) => {
                  z(e.iconType) && Y(H, { ...e, iconType: "Fan" });
                },
                collect: (e) => ({ isOver: e.isOver() }),
              }),
              [{ isOver: U }, J] = $({
                accept: "icon",
                drop: (e) => {
                  "Dimmer" === e.iconType && Y(V, e);
                },
                collect: (e) => ({ isOver: e.isOver() }),
              });
            return (0, n.jsxs)("div", {
              className: "flex items-start justify-center",
              style: { columnGap: h },
              children: [
                (0, n.jsx)("div", {
                  style: {
                    height: B,
                    display: "flex",
                    alignItems: D ? "center" : "flex-start",
                  },
                  children: (0, n.jsx)(M, {
                    switchId: "".concat(u, "-left2"),
                    itemName: "2 Switch",
                  }),
                }),
                (0, n.jsx)("div", {
                  style: {
                    height: B,
                    display: "flex",
                    alignItems: D ? "center" : "flex-start",
                  },
                  children: (0, n.jsx)(_, {
                    switchId: u,
                    itemName: "6 Switch",
                  }),
                }),
                (0, n.jsx)("div", {
                  style: {
                    height: B,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    marginLeft: A ? "".concat(A, "vh") : void 0,
                  },
                  children: (0, n.jsx)("div", {
                    ref: q,
                    "data-slot": H,
                    style: {
                      position: "relative",
                      width: C,
                      height: N,
                      opacity: X ? 0.5 : 1,
                      marginBottom: O ? "".concat(O, "vh") : void 0,
                      ...(j && {
                        border: "1.2pt solid #00a0e1",
                        borderRadius: "0.664vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }),
                    },
                    children: j
                      ? (0, n.jsx)(r.default, {
                          src: L,
                          alt: "Fan",
                          width: 1,
                          height: 1,
                          style: { width: "70%", height: "70%" },
                        })
                      : (0, n.jsx)(r.default, {
                          className: "dropped-icon",
                          src: L,
                          alt: "Fan",
                          fill: !0,
                          style: { objectFit: "contain" },
                        }),
                  }),
                }),
                (0, n.jsx)("div", {
                  style: {
                    height: B,
                    display: "flex",
                    alignItems: "flex-start",
                    marginLeft: E ? "".concat(E, "vh") : void 0,
                  },
                  children: (0, n.jsx)("div", {
                    ref: J,
                    "data-slot": V,
                    style: {
                      position: "relative",
                      width: "0.889vh",
                      height: "100%",
                      opacity: U ? 0.5 : 1,
                    },
                    children: (0, n.jsx)(r.default, {
                      className: "dropped-icon",
                      src: W,
                      alt: "Dimmer",
                      fill: !0,
                      style: { objectFit: "contain" },
                    }),
                  }),
                }),
                v && (4 === I.stepNo || 5 === I.stepNo) && (0, n.jsx)(v, {}),
              ],
            });
          },
          SixSwitch: _,
          SixSwitch_OneFan: (e) => {
            var t;
            let { switchId: o, itemName: a, CloseIconComponent: r } = e,
              c = (0, i.d4)((e) => e.selectionData.currentStep),
              l =
                null !=
                (t = (0, i.d4)((e) => {
                  var t;
                  return null == (t = e.cartData.cartData.panel)
                    ? void 0
                    : t.item;
                }))
                  ? t
                  : "Touch Panel",
              s = "7.20vh",
              d = "7.21vh",
              h = "4.79vh",
              u = "5.87vh";
            "Edge" === l
              ? ((s = "6.23vh"), (d = "6.24vh"), (h = "4.88vh"), (u = "6.06vh"))
              : "Color" === l
                ? ((s = "5.69vh"),
                  (d = "6.57vh"),
                  (h = "5.70vh"),
                  (u = "5.54vh"))
                : "Royal Edge" === l &&
                  ((s = "5.85vh"),
                  (d = "6.76vh"),
                  (h = "5.43vh"),
                  (u = "5.70vh"));
            let p = a.includes("6 Switch") ? "6 Switch" : a;
            return (0, n.jsxs)("div", {
              className: "h-full flex items-center justify-center relative",
              children: [
                (0, n.jsx)(_, {
                  switchId: o,
                  itemName: p,
                  horizIconGap: s,
                  vertIconGap: d,
                }),
                (0, n.jsx)("div", {
                  style: { marginLeft: h },
                  children: (0, n.jsx)(O, {
                    switchId: o,
                    itemId: "Fan1",
                    slotGap: u,
                    defaultFanIcon:
                      "Touch Panel" === l
                        ? "/icon/Icons80x80px/Fan/touchfandefault.svg"
                        : "/icon/Icons80x80px/Fan/Fan Default.svg",
                    defaultDimmerIcon:
                      "Touch Panel" === l
                        ? "/icon/Icons80x80px/Dimmer/touchdimmer.svg"
                        : "Edge" === l
                          ? "/icon/Icons80x80px/Dimmer/defaultdimmer.svg"
                          : "/icon/Icons80x80px/Dimmer/dimmer.svg",
                    centerDimmer: !0,
                  }),
                }),
                r && (4 === c.stepNo || 5 === c.stepNo) && (0, n.jsx)(r, {}),
              ],
            });
          },
          SixSwitch_TwoFan: function (e) {
            var t, o, a, c, l, s, d, h, u;
            let p,
              { switchId: v, itemName: g, CloseIconComponent: m } = e,
              f = (0, i.wA)(),
              y = (0, i.d4)((e) => e.selectionData.currentStep),
              w = (0, i.d4)((e) => {
                var t;
                return (
                  (null == (t = e.cartData.cartData.panel) ? void 0 : t.item) ||
                  ""
                );
              }),
              x = (0, i.d4)((e) => e.cartData.droppedItems),
              I = "Color" === w || "Royal Edge" === w,
              b = {
                "Touch Panel": { width: "3.41vh", height: "3.295vh" },
                Edge: { width: "3.41vh", height: "3.295vh" },
                Color: { width: "4.812vh", height: "4.812vh" },
                "Royal Edge": { width: "4.952vh", height: "4.952vh" },
              },
              { width: P, height: j } =
                null != (l = b[w]) ? l : b["Touch Panel"],
              D =
                "Touch Panel" === w
                  ? "/icon/Icons80x80px/Fan/touchfandefault.svg"
                  : "/icon/Icons80x80px/Fan/Fan Default.svg",
              T =
                "Touch Panel" === w
                  ? "/icon/Icons80x80px/Dimmer/touchdimmer.svg"
                  : "Edge" === w
                    ? "/icon/Icons80x80px/Dimmer/defaultdimmer.svg"
                    : "/icon/Icons80x80px/Dimmer/dimmer.svg",
              C = g.includes("6 Switch") ? "6 Switch" : g;
            switch (w) {
              case "Touch Panel":
                p = "10.37vh";
                break;
              case "Color":
              case "Edge":
                p = "9.30vh";
                break;
              case "Royal Edge":
                p = "9.37vh";
                break;
              default:
                p = "9.73vh";
            }
            let M = "16.369vh",
              N = "".concat(v, "-fan-left"),
              R = "".concat(v, "-fan-right"),
              F = "".concat(v, "-dimmer-left"),
              A = "".concat(v, "-dimmer-right"),
              E =
                null !=
                (s =
                  null == (t = x.find((e) => e.divId === N && e.switchId === v))
                    ? void 0
                    : t.src)
                  ? s
                  : D,
              G =
                null !=
                (d =
                  null == (o = x.find((e) => e.divId === R && e.switchId === v))
                    ? void 0
                    : o.src)
                  ? d
                  : D,
              O =
                null !=
                (h =
                  null == (a = x.find((e) => e.divId === F && e.switchId === v))
                    ? void 0
                    : a.src)
                  ? h
                  : T,
              B =
                null !=
                (u =
                  null == (c = x.find((e) => e.divId === A && e.switchId === v))
                    ? void 0
                    : c.src)
                  ? u
                  : T,
              z = (e, t) => {
                var o;
                let n = x.find((t) => t.divId === e && t.switchId === v);
                if (n) {
                  let e = k.A.getFirstDropId();
                  if (k.A.isActiveStep5() && e && n.id === e) return;
                  let t = x.indexOf(n);
                  n.id && f((0, S.removeDroppedItem)({ id: n.id }));
                  let o = H(n.iconType) ? "Fan" : n.iconType;
                  f((0, S.removeIcon)({ optionType: o, index: t }));
                }
                let a = H(t.iconType) ? "Fan" : t.iconType,
                  r = {
                    iconId: null != (o = t.iconId) ? o : t.id,
                    divId: e,
                    src: t.src,
                    switchId: v,
                    iconType: a,
                    price: t.price,
                  };
                f((0, S.addDroppedItem)(r)),
                  f(
                    (0, S.addIcon)({
                      optionType: a,
                      option: {
                        id: r.iconId,
                        item: r.src,
                        price: r.price,
                        switchId: v,
                      },
                    }),
                  );
              },
              [{ isOver: V }, L] = $({
                accept: "icon",
                drop: (e) => {
                  "Dimmer" === e.iconType && z(F, e);
                },
                collect: (e) => ({ isOver: e.isOver() }),
              }),
              [{ isOver: W }, Y] = $({
                accept: "icon",
                drop: (e) => {
                  H(e.iconType) && z(N, { ...e, iconType: "Fan" });
                },
                collect: (e) => ({ isOver: e.isOver() }),
              }),
              [{ isOver: X }, q] = $({
                accept: "icon",
                drop: (e) => {
                  H(e.iconType) && z(R, { ...e, iconType: "Fan" });
                },
                collect: (e) => ({ isOver: e.isOver() }),
              }),
              [{ isOver: U }, J] = $({
                accept: "icon",
                drop: (e) => {
                  "Dimmer" === e.iconType && z(A, e);
                },
                collect: (e) => ({ isOver: e.isOver() }),
              });
            return (0, n.jsxs)("div", {
              className: "flex items-start justify-center",
              style: { columnGap: p },
              children: [
                (0, n.jsx)("div", {
                  style: {
                    height: M,
                    display: "flex",
                    alignItems: "flex-start",
                  },
                  children: (0, n.jsx)("div", {
                    ref: L,
                    "data-slot": F,
                    style: {
                      position: "relative",
                      width: "0.889vh",
                      height: "100%",
                      opacity: V ? 0.5 : 1,
                    },
                    children: (0, n.jsx)(r.default, {
                      className: "dropped-icon",
                      src: O,
                      alt: "Dimmer",
                      fill: !0,
                      style: { objectFit: "contain" },
                    }),
                  }),
                }),
                (0, n.jsx)("div", {
                  style: {
                    height: M,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  },
                  children: (0, n.jsx)("div", {
                    ref: Y,
                    "data-slot": N,
                    style: {
                      position: "relative",
                      width: P,
                      height: j,
                      opacity: W ? 0.5 : 1,
                      ...(I && {
                        border: "1.2pt solid #00a0e1",
                        borderRadius: "0.664vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }),
                    },
                    children: I
                      ? (0, n.jsx)(r.default, {
                          src: E,
                          alt: "Fan",
                          width: 1,
                          height: 1,
                          style: { width: "70%", height: "70%" },
                        })
                      : (0, n.jsx)(r.default, {
                          className: "dropped-icon",
                          src: E,
                          alt: "Fan",
                          fill: !0,
                          style: { objectFit: "contain" },
                        }),
                  }),
                }),
                (0, n.jsx)(_, { switchId: v, itemName: C }),
                (0, n.jsx)("div", {
                  style: {
                    height: M,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  },
                  children: (0, n.jsx)("div", {
                    ref: q,
                    "data-slot": R,
                    style: {
                      position: "relative",
                      width: P,
                      height: j,
                      opacity: X ? 0.5 : 1,
                      ...(I && {
                        border: "1.2pt solid #00a0e1",
                        borderRadius: "0.664vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }),
                    },
                    children: I
                      ? (0, n.jsx)(r.default, {
                          src: G,
                          alt: "Fan",
                          width: 1,
                          height: 1,
                          style: { width: "70%", height: "70%" },
                        })
                      : (0, n.jsx)(r.default, {
                          className: "dropped-icon",
                          src: G,
                          alt: "Fan",
                          fill: !0,
                          style: { objectFit: "contain" },
                        }),
                  }),
                }),
                (0, n.jsx)("div", {
                  style: {
                    height: M,
                    display: "flex",
                    alignItems: "flex-start",
                  },
                  children: (0, n.jsx)("div", {
                    ref: J,
                    "data-slot": A,
                    style: {
                      position: "relative",
                      width: "0.889vh",
                      height: "100%",
                      opacity: U ? 0.5 : 1,
                    },
                    children: (0, n.jsx)(r.default, {
                      className: "dropped-icon",
                      src: B,
                      alt: "Dimmer",
                      fill: !0,
                      style: { objectFit: "contain" },
                    }),
                  }),
                }),
                m && (4 === y.stepNo || 5 === y.stepNo) && (0, n.jsx)(m, {}),
              ],
            });
          },
          TenSwitch: (e) => {
            let t,
              o,
              { switchId: a, CloseIconComponent: r } = e,
              c = (0, i.d4)((e) => {
                var t;
                return (
                  (null == (t = e.cartData.cartData.panel) ? void 0 : t.item) ||
                  ""
                );
              });
            (0, i.d4)((e) => {
              var t;
              return (
                (null == (t = e.cartData.cartData.size) ? void 0 : t.item) || ""
              );
            });
            let l = (0, i.d4)((e) => e.selectionData.currentStep);
            switch (c) {
              case "Touch Panel":
              case "Royal Edge":
                (t = "10.36vh"), (o = "7.21vh");
                break;
              case "Color":
              case "Edge":
                (t = "9.29vh"), (o = "6.24vh");
                break;
              default:
                (t = "2.50vh"), (o = "6.76vh");
            }
            return (0, n.jsxs)("div", {
              className: "h-full flex items-center justify-center relative",
              style: { columnGap: t },
              children: [
                Array.from({ length: 5 }, (e, r) => {
                  let i,
                    l = "".concat(a, "-tenSwitch-").concat(r),
                    s = "item-".concat(r + 1),
                    d = "Switch ".concat(r + 1),
                    h = "Edge" === c || "Color" === c || "Royal Edge" === c;
                  return (
                    3 === r
                      ? (i =
                          "Touch Panel" === c
                            ? "/icon/m2/touch2way.svg"
                            : h
                              ? "/icon/m2/twoway.svg"
                              : void 0)
                      : 4 === r &&
                        (i =
                          "Touch Panel" === c
                            ? "/icon/m2/HVTouchpanel.svg"
                            : h
                              ? "/icon/m2/HV.svg"
                              : void 0),
                    (0, n.jsx)(
                      M,
                      {
                        switchId: l,
                        itemId: s,
                        itemName: d,
                        horizIconGap: t,
                        vertIconGap: o,
                        placeholderFirst: i,
                        placeholderSecond: i,
                      },
                      l,
                    )
                  );
                }),
                r && (4 === l.stepNo || 5 === l.stepNo) && (0, n.jsx)(r, {}),
              ],
            });
          },
          TwoDimmer_PhaseCut: (e) => {
            let { CloseIconComponent: t } = e,
              o = ["/icon/m2/increase.png", "/icon/m2/decrease.png"],
              a = (0, i.d4)((e) => e.selectionData.currentStep);
            return (0, n.jsxs)("div", {
              className:
                "w-full h-full bg-inherit flex flex-col items-center justify-around relative",
              children: [
                [1, 2].map((e, t) =>
                  (0, n.jsx)(
                    "div",
                    {
                      className: "flex w-full justify-around",
                      children: o.map((e, t) =>
                        (0, n.jsx)(
                          "div",
                          {
                            className: "relative w-[3.155vh] h-[3.155vh]",
                            children: (0, n.jsx)(r.default, {
                              src: e,
                              alt: "Switch image ".concat(t + 1),
                              fill: !0,
                              style: { objectFit: "contain" },
                            }),
                          },
                          t,
                        ),
                      ),
                    },
                    t,
                  ),
                ),
                t && (4 === a.stepNo || 5 === a.stepNo) && (0, n.jsx)(t, {}),
              ],
            });
          },
          TwoCurtain: (e) => {
            var t;
            let { switchId: o, CloseIconComponent: a } = e,
              r = (0, i.d4)((e) => {
                var t;
                return (
                  (null == (t = e.cartData.cartData.panel) ? void 0 : t.item) ||
                  ""
                );
              }),
              c = R.dO[r],
              l =
                null != (t = null == c ? void 0 : c.fourSceneHorizGap)
                  ? t
                  : "6.67vh";
            return (0, n.jsxs)("div", {
              className: "flex items-center justify-center relative",
              style: { columnGap: l },
              children: [
                (0, n.jsx)(N, { switchId: "".concat(o, "-0") }),
                (0, n.jsx)(N, { switchId: "".concat(o, "-1") }),
                a && (0, n.jsx)(a, {}),
              ],
            });
          },
          USBTypeC: (e) => {
            let { switchId: t, CloseIconComponent: o } = e,
              a = (0, i.d4)((e) => e.selectionData.currentStep);
            return (0, n.jsxs)("div", {
              className:
                "w-[21vh] h-[22.312vh] flex items-center justify-center relative",
              style: { gap: "6.76vh" },
              children: [
                (0, n.jsx)("div", {
                  style: {
                    position: "relative",
                    width: "21vh",
                    height: "22.312vh",
                  },
                  children: (0, n.jsx)(r.default, {
                    src: "/icon/m2/usb-typec.svg",
                    alt: "USB Type C",
                    fill: !0,
                    style: { objectFit: "contain" },
                  }),
                }),
                o && (4 === a.stepNo || 5 === a.stepNo) && (0, n.jsx)(o, {}),
              ],
            });
          },
          Tel: (e) => {
            let { switchId: t, CloseIconComponent: o } = e,
              i = (0, a.useRef)(null),
              [c, l] = (0, a.useState)("calc(50% - 5.25vh)");
            return (
              (0, a.useEffect)(() => {
                var e;
                let t = i.current;
                if (!t) return;
                let o = t.parentElement;
                if (!o) return;
                let n = Array.from(o.children)
                    .filter((e) => "true" === e.getAttribute("data-tel"))
                    .indexOf(t),
                  a = [
                    "calc(50% - 5.25vh)",
                    "calc(25% - 5.25vh)",
                    "calc(75% - 5.25vh)",
                  ];
                l(null != (e = a[n]) ? e : a[0]);
              }, []),
              (0, n.jsx)("div", {
                ref: i,
                "data-tel": "true",
                style: {
                  position: "absolute",
                  top: "calc(50% - 11.156vh)",
                  left: c,
                  width: "10.5vh",
                  height: "22.312vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                children: (0, n.jsxs)("div", {
                  style: {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  children: [
                    (0, n.jsx)(r.default, {
                      src: "/icon/m1/Tel.svg",
                      alt: "Tel",
                      fill: !0,
                      style: { objectFit: "contain" },
                    }),
                    o && (0, n.jsx)(o, {}),
                  ],
                }),
              })
            );
          },
          Ethernet: (e) => {
            let { switchId: t, CloseIconComponent: o } = e;
            return (0, n.jsx)("div", {
              style: {
                position: "absolute",
                top: "calc(50% - 11.156vh)",
                left: "calc(50% - 5.25vh)",
                width: "10.5vh",
                height: "22.312vh",
              },
              "data-eth": "true",
              children: (0, n.jsxs)("div", {
                style: {
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                children: [
                  (0, n.jsx)(r.default, {
                    src: "/icon/m1/Ethernet.svg",
                    alt: "Ethernet",
                    fill: !0,
                    style: { objectFit: "contain" },
                  }),
                  o && (0, n.jsx)(o, {}),
                ],
              }),
            });
          },
          Laptop: (e) => {
            let { switchId: t, CloseIconComponent: o } = e;
            return (0, n.jsx)("div", {
              style: {
                position: "absolute",
                top: "calc(50% - 11.156vh)",
                left: "calc(50% - 5.25vh)",
                width: "10.5vh",
                height: "22.312vh",
              },
              "data-eth": "true",
              children: (0, n.jsxs)("div", {
                style: {
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                children: [
                  (0, n.jsx)(r.default, {
                    src: "/icon/m1/Laptop.svg",
                    alt: "Laptop",
                    fill: !0,
                    style: { objectFit: "contain" },
                  }),
                  o && (0, n.jsx)(o, {}),
                ],
              }),
            });
          },
          Socket16A: (e) => {
            let { switchId: t, CloseIconComponent: o } = e,
              a = (0, i.d4)((e) => e.selectionData.currentStep);
            return (0, n.jsx)("div", {
              style: {
                position: "absolute",
                top: "calc(50% - 11.4915vh)",
                left: "calc(50% - 10.8605vh)",
                width: "21.721vh",
                height: "22.983vh",
              },
              children: (0, n.jsxs)("div", {
                style: { position: "relative", width: "100%", height: "100%" },
                children: [
                  (0, n.jsx)(r.default, {
                    src: "/icon/m2/16A Socket.svg",
                    alt: "16A Socket",
                    fill: !0,
                    style: { objectFit: "contain" },
                  }),
                  o && (4 === a.stepNo || 5 === a.stepNo) && (0, n.jsx)(o, {}),
                ],
              }),
            });
          },
        },
        Y = (e) => {
          var t, o;
          let {
              canvasNo: a,
              modularNo: r,
              optionType: s,
              option: d,
              highlightColor: h,
              topSlotId: u,
            } = e,
            p = (0, i.wA)(),
            v = (0, i.d4)((e) => e.cartData.cartData),
            g = (0, i.d4)((e) => e.selectionData.currentStep),
            m = (0, i.d4)((e) => {
              var t, o;
              return (
                (null == (o = e.cartData.cartData) || null == (t = o.panel)
                  ? void 0
                  : t.item) || ""
              );
            }),
            f = (
              null != (t = R.dO[m])
                ? t
                : {
                    vertIconGap: "6.76vh",
                    horizBlockGap: "1.35vh",
                    vertBlockGap: "9.82vh",
                  }
            ).vertIconGap,
            y = "".concat(a, "-").concat(r),
            w = () => {
              var e;
              let t = null != (e = (0, c.jh)(s)) ? e : 0;
              p(
                (0, S.removeAccessory)({
                  optionType: s,
                  id: d.id,
                  instanceId: d.instanceId,
                }),
              ),
                p((0, V.W_)(t)),
                1 === a ? p((0, V.L)(t)) : p((0, V.Ey)(t)),
                p((0, S.removeIconFromDeletedAccessory)({ switchId: y })),
                p((0, L.bG)({ cartData: v }));
            },
            x = (e) => {
              e.preventDefault(), e.stopPropagation();
            },
            I = () =>
              g.stepNo >= 6
                ? null
                : (0, n.jsx)("span", {
                    onPointerDown: x,
                    onMouseDown: x,
                    onTouchStart: x,
                    onClick: (e) => {
                      x(e), w();
                    },
                    draggable: !1,
                    className: "absolute cursor-pointer",
                    style: { zIndex: 1, bottom: "-1.5vh", right: "-1.5vh" },
                    children: (0, n.jsx)(b.A, {
                      style: { color: "red", fontSize: "2vh" },
                    }),
                  }),
            $ = null,
            P = [];
          if ("Bell" === d.item)
            P =
              "Color" === m || "Royal Edge" === m
                ? ["/icon/m2/Bell2.svg"]
                : ["/icon/m2/Bell.svg"];
          else if ("2 Dimmer(Phase Cut)" === d.item)
            P = ["/icon/m2/2Dimmer.svg"];
          else if ("4 Switch" === d.item) $ = "2 Modular" === s ? A : F;
          else {
            let e = (0, c.r)(d.item);
            e.includes("/")
              ? (P = e.split(","))
              : ($ = null != (o = W[e]) ? o : null);
          }
          return (0, n.jsx)("div", {
            "data-cdr-accessory": "true",
            "data-cdr-option-type": s,
            "data-cdr-item": d.item,
            "data-cdr-switch-id": y,
            className:
              "w-full h-full flex flex-col items-center justify-center relative",
            style: {
              gap: f,
              filter: h ? "drop-shadow(0 0 0.75vh ".concat(h, ")") : void 0,
            },
            children: d.id
              ? $ === M
                ? (0, n.jsx)(M, {
                    switchId: y,
                    itemName: d.item,
                    itemId: d.id,
                    CloseIconComponent: I,
                    topSlotId: u,
                  })
                : $
                  ? (0, n.jsx)($, {
                      switchId: y,
                      CloseIconComponent: I,
                      itemName: d.item,
                    })
                  : (0, n.jsx)(l, { src: P, CloseIconComponent: I })
              : (0, n.jsx)("div", {
                  className: "w-full h-full bg-transparent",
                }),
          });
        },
        X = (e) => {
          let t,
            o,
            {
              canvasNo: l,
              showCanvasBorder: s,
              data: d = [],
              draggableItems: h = !1,
              draggableRow: u = !1,
              modulesPerRowOverride: p,
              onItemSwap: v,
              onItemDragStart: g,
              onRowDragStart: m,
              onRowDragOver: f,
              onRowDrop: y,
              onDrop: w,
              onClick: x,
            } = e,
            I = a.useCallback((e) => {
              var t;
              return null != (t = e.instanceId) ? t : e.id;
            }, []),
            $ = (0, i.d4)((e) => e.cartData.cartData.panel),
            S = null == $ ? void 0 : $.item,
            b = (0, i.d4)((e) => {
              var t;
              return null == (t = e.cartData.cartData.size) ? void 0 : t.item;
            }),
            P = S ? R.dO[S] : void 0,
            j = (0, i.d4)((e) => e.selectionData.currentStep.stepNo),
            T = j < 5,
            k = 1 === l ? "tour-first-2switch-top-drop" : void 0,
            [M, N] = a.useState(null),
            [F, A] = a.useState(null),
            [E, G] = a.useState({
              activePointerId: null,
              pointerType: null,
              isDragging: !1,
              draggedIndex: null,
              startX: 0,
              startY: 0,
            }),
            O = "4 Module 1 Socket" === b,
            B = "6 Module 1 Socket" === b,
            _ = "6 Module 2 Socket" === b,
            z =
              ("12 Module 2 Socket H" !== b || 1 !== l) &&
              !!b &&
              [
                "4 Module 1 Socket",
                "6 Module 1 Socket",
                "6 Module 2 Socket",
                "8 Module 2 Socket",
                "12 Module 2 Socket H",
                "12 Module 2 Socket V",
                "8 Module S",
              ].includes(b),
            H = b ? (0, c.wq)(b) : 0,
            V = null != p ? p : H,
            L = O ? 1 : V / 2;
          switch (S) {
            case "Touch Panel":
            default:
              (t = 21.721), (o = 22.983);
              break;
            case "Edge":
            case "Color":
              (t = 21.087), (o = 22.313);
              break;
            case "Royal Edge":
              (t = 20.37), (o = 20.37);
          }
          let W = ["#2196f3", "#f44336", "#4caf50"][l - 1] || "#ffffff",
            X = {
              position: "relative",
              padding: "0.5rem",
              width: "".concat(L * t, "vh"),
              height: "".concat(o, "vh"),
              cursor: x ? "pointer" : "default",
              border: "none",
              boxShadow:
                O || B || _ || !s
                  ? void 0
                  : "0 0 ".concat("0.25vh", " ").concat(W),
              animation:
                O || B || _ || null === M
                  ? void 0
                  : "rainbowBorder 3s linear infinite",
            },
            q = (e) => (t) => {
              h &&
                (t.stopPropagation(),
                t.dataTransfer.setData(
                  "swap-item",
                  JSON.stringify({ row: l - 1, idx: e }),
                ),
                null == g || g(l - 1, e));
            },
            U = (e) => (t) => {
              h &&
                Array.from(t.dataTransfer.types).includes("swap-item") &&
                (t.preventDefault(), N(e));
            },
            J = (e) => (t) => {
              if (h && Array.from(t.dataTransfer.types).includes("swap-item")) {
                t.preventDefault(),
                  N(null),
                  A(e),
                  setTimeout(() => A(null), 300);
                try {
                  let { row: o, idx: n } = JSON.parse(
                    t.dataTransfer.getData("swap-item"),
                  );
                  null == v || v(o, n, l - 1, e);
                } catch (e) {}
              }
            },
            K = (e) => () => {
              M === e && N(null);
            },
            Z = (e) => (t) => {
              h &&
                (null === E.activePointerId ||
                  E.activePointerId === t.pointerId) &&
                (t.stopPropagation(),
                G({
                  activePointerId: t.pointerId,
                  pointerType: t.pointerType,
                  isDragging: !0,
                  draggedIndex: e,
                  startX: t.clientX,
                  startY: t.clientY,
                }),
                null == g || g(l - 1, e));
            },
            Q = (e) => (t) => {
              h &&
                E.activePointerId === t.pointerId &&
                E.isDragging &&
                (t.preventDefault(), N(e));
            },
            ee = (e) => (t) => {
              h &&
                E.activePointerId === t.pointerId &&
                (t.preventDefault(),
                E.isDragging &&
                  null !== E.draggedIndex &&
                  (N(null),
                  A(e),
                  setTimeout(() => A(null), 300),
                  null == v || v(l - 1, E.draggedIndex, l - 1, e)),
                G({
                  activePointerId: null,
                  pointerType: null,
                  isDragging: !1,
                  draggedIndex: null,
                  startX: 0,
                  startY: 0,
                }));
            },
            et = () => {
              G({
                activePointerId: null,
                pointerType: null,
                isDragging: !1,
                draggedIndex: null,
                startX: 0,
                startY: 0,
              }),
                N(null);
            },
            eo = (e) => (t) => {
              if (!h) return;
              t.preventDefault(), t.stopPropagation();
              let o = t.touches[0];
              o &&
                (G({
                  activePointerId: o.identifier,
                  pointerType: "touch",
                  isDragging: !0,
                  draggedIndex: e,
                  startX: o.clientX,
                  startY: o.clientY,
                }),
                null == g || g(l - 1, e));
            },
            en = (e) => (t) => {
              h && E.isDragging && (t.preventDefault(), N(e));
            },
            ea = (e) => (t) => {
              h &&
                E.isDragging &&
                (t.preventDefault(),
                null !== E.draggedIndex &&
                  (N(null),
                  A(e),
                  setTimeout(() => A(null), 300),
                  null == v || v(l - 1, E.draggedIndex, l - 1, e)),
                G({
                  activePointerId: null,
                  pointerType: null,
                  isDragging: !1,
                  draggedIndex: null,
                  startX: 0,
                  startY: 0,
                }));
            },
            er = d.flatMap((e) => e.options),
            ei = "Touch Panel" === S && "2 Module" === b && 4 === er.length,
            ec = d.flatMap((e) =>
              e.options.map(() =>
                "4 Modular" === e.optionType
                  ? S && b
                    ? C(S, b).horizBlockGap
                    : ""
                  : S && b
                    ? D(S, b).horizIconGap
                    : "",
              ),
            ),
            el = (e, t) =>
              e ? (t ? (parseFloat(e) > parseFloat(t) ? e : t) : e) : t,
            es = ei
              ? null == P
                ? void 0
                : P.fourSceneHorizGap
              : el(null == P ? void 0 : P.horizBlockGap, ec.reduce(el, void 0));
          ei ? null == P || P.fourSceneVertGap : null == P || P.vertBlockGap;
          let ed = parseFloat(null != es ? es : "0"),
            eh = d.flatMap((e) =>
              e.options.map((t) => ({
                optionType: e.optionType,
                option: t,
                span: (0, c.jh)(e.optionType) / 2,
              })),
            ),
            eu =
              eh.every((e) => 0.5 === e.span) &&
              eh.length <= 2 * L &&
              eh.length > 1;
          return (0, n.jsxs)("div", {
            style: X,
            onClick: x,
            draggable: u,
            onDragStartCapture: u
              ? (e) => {
                  e.dataTransfer.setData("swap-row", String(l - 1)),
                    null == m || m(e);
                }
              : void 0,
            onDragOver: u
              ? (e) => {
                  Array.from(e.dataTransfer.types).includes("swap-row") &&
                    (e.preventDefault(), null == f || f(e));
                }
              : (e) => e.preventDefault(),
            onDrop: (e) => {
              e.preventDefault();
              let t = Array.from(e.dataTransfer.types);
              if (u && t.includes("swap-row")) {
                null == y || y(e);
                return;
              }
              if (w)
                try {
                  let { optionType: t, option: o } = JSON.parse(
                    e.dataTransfer.getData("application/json"),
                  );
                  w(t, o, l - 1);
                } catch (e) {}
            },
            children: [
              _ &&
                (() => {
                  let e = L * t + (L - 1) * ed,
                    a = "calc(50% - ".concat(e / 2, "vh)"),
                    i = "calc(".concat(a, " + ").concat(t + ed, "vh)"),
                    c = (0, n.jsx)("div", {
                      style: {
                        position: "absolute",
                        top: "calc(50% - ".concat(o / 2, "vh)"),
                        left: a,
                        width: "".concat(t, "vh"),
                        height: "".concat(o, "vh"),
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        pointerEvents: "none",
                      },
                      children: (0, n.jsx)(r.default, {
                        src: "/glass-socket.png",
                        alt: "Socket",
                        fill: !0,
                        style: { objectFit: "contain" },
                        priority: !0,
                      }),
                    }),
                    s = (0, n.jsx)("div", {
                      style: {
                        position: "absolute",
                        top: "calc(50% - ".concat(o / 2, "vh)"),
                        left: "calc("
                          .concat(a, " + ")
                          .concat(2 * (t + ed), "vh)"),
                        width: "".concat(t, "vh"),
                        height: "".concat(o, "vh"),
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        pointerEvents: "none",
                      },
                      children: (0, n.jsx)(r.default, {
                        src: "/glass-socket.png",
                        alt: "Socket",
                        fill: !0,
                        style: { objectFit: "contain" },
                        priority: !0,
                      }),
                    }),
                    d =
                      j < 5
                        ? (0, n.jsx)("div", {
                            style: {
                              position: "absolute",
                              top: "calc(50% - ".concat(o / 2, "vh)"),
                              left: i,
                              width: "".concat(t, "vh"),
                              height: "".concat(o, "vh"),
                              border: "1px dashed rgba(255,255,255,0.8)",
                              pointerEvents: "none",
                            },
                          })
                        : null,
                    u = eh[0],
                    p = u ? u.span * t + (u.span - 1) * ed : 0,
                    v = (t - p) / 2,
                    g =
                      u &&
                      (0, n.jsx)("div", {
                        style: {
                          position: "absolute",
                          top: "calc(50% - ".concat(o / 2, "vh)"),
                          left: "calc(".concat(i, " + ").concat(v, "vh)"),
                          width: "".concat(p, "vh"),
                          height: "".concat(o, "vh"),
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow:
                            0 === M ? "0 0 0.5vh rgba(255,0,128,0.8)" : void 0,
                          animation:
                            0 === M
                              ? "rainbowBorder 3s linear infinite"
                              : void 0,
                          touchAction: "none",
                          userSelect: "none",
                          WebkitUserSelect: "none",
                        },
                        className: ""
                          .concat(0 === M ? "drop-glow" : "", " ")
                          .concat(0 === F ? "swap-animate" : ""),
                        draggable: h,
                        onDragStart: q(0),
                        onDragOver: U(0),
                        onDrop: J(0),
                        onDragLeave: K(0),
                        onPointerDown: Z(0),
                        onPointerMove: Q(0),
                        onPointerUp: ee(0),
                        onPointerCancel: et,
                        onTouchStart: eo(0),
                        onTouchMove: en(0),
                        onTouchEnd: ea(0),
                        children: (0, n.jsx)(Y, {
                          canvasNo: l,
                          modularNo: ""
                            .concat(u.optionType, "-")
                            .concat(I(u.option)),
                          optionType: u.optionType,
                          option: u.option,
                          topSlotId: k,
                        }),
                      });
                  return (0, n.jsxs)(n.Fragment, { children: [c, s, d, g] });
                })(),
              B &&
                (() => {
                  let e = L * t + (L - 1) * ed,
                    a = "calc(50% - ".concat(e / 2, "vh)"),
                    i = 2 * t + ed,
                    c = "calc(".concat(a, " + ").concat(t + ed, "vh)"),
                    d = eh.length;
                  return (0, n.jsxs)(n.Fragment, {
                    children: [
                      T &&
                        [1, 2].map((e) =>
                          (0, n.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                top: "calc(50% - ".concat(o / 2, "vh)"),
                                left: "calc("
                                  .concat(a, " + ")
                                  .concat(e * (t + ed), "vh)"),
                                width: "".concat(t, "vh"),
                                height: "".concat(o, "vh"),
                                border: "1px dashed rgba(255,255,255,0.8)",
                                pointerEvents: "none",
                                zIndex: 1,
                              },
                            },
                            e,
                          ),
                        ),
                      (0, n.jsx)("div", {
                        style: {
                          position: "absolute",
                          top: "calc(50% - ".concat(o / 2, "vh)"),
                          left: a,
                          width: "".concat(t, "vh"),
                          height: "".concat(o, "vh"),
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          pointerEvents: "none",
                          zIndex: 2,
                        },
                        children: (0, n.jsx)(r.default, {
                          src: "/glass-socket.png",
                          alt: "Socket",
                          fill: !0,
                          style: { objectFit: "contain" },
                          priority: !0,
                        }),
                      }),
                      (0, n.jsx)("div", {
                        style: {
                          position: "absolute",
                          top: "calc(50% - ".concat(o / 2, "vh)"),
                          left: c,
                          width: "".concat(i, "vh"),
                          height: "".concat(o, "vh"),
                          pointerEvents: "none",
                          zIndex: 1,
                          animation: s
                            ? "rainbowBorder 3s linear infinite"
                            : void 0,
                        },
                      }),
                      (0, n.jsxs)("div", {
                        style: {
                          position: "absolute",
                          top: "calc(50% - ".concat(o / 2, "vh)"),
                          left: c,
                          width: "".concat(i, "vh"),
                          height: "".concat(o, "vh"),
                          display: "grid",
                          gridTemplateColumns: "repeat(2, 1fr)",
                          justifyItems: "center",
                          alignItems: "center",
                          zIndex: 3,
                        },
                        children: [
                          1 === d &&
                            eh[0] &&
                            (0, n.jsx)("div", {
                              style: {
                                gridColumn: "1 / span 2",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "".concat(
                                  eh[0].span * t +
                                    (eh[0].span > 1
                                      ? (eh[0].span - 1) * ed
                                      : 0),
                                  "vh",
                                ),
                                height: "".concat(o, "vh"),
                                boxShadow:
                                  0 === M
                                    ? "0 0 0.5vh rgba(255,0,128,0.8)"
                                    : void 0,
                                animation:
                                  0 === M
                                    ? "rainbowBorder 3s linear infinite"
                                    : void 0,
                              },
                              draggable: h,
                              onDragStart: q(0),
                              onDragOver: U(0),
                              onDrop: J(0),
                              onDragLeave: K(0),
                              onPointerDown: Z(0),
                              onPointerMove: Q(0),
                              onPointerUp: ee(0),
                              onPointerCancel: et,
                              onTouchStart: eo(0),
                              onTouchMove: en(0),
                              onTouchEnd: ea(0),
                              children: (0, n.jsx)(Y, {
                                canvasNo: l,
                                modularNo: ""
                                  .concat(eh[0].optionType, "-")
                                  .concat(I(eh[0].option)),
                                optionType: eh[0].optionType,
                                option: eh[0].option,
                                topSlotId: k,
                              }),
                            }),
                          2 === d &&
                            eh.map((e, a) => {
                              let { optionType: r, option: i } = e;
                              return (0, n.jsx)(
                                "div",
                                {
                                  style: {
                                    gridColumn: a + 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "".concat(t, "vh"),
                                    height: "".concat(o, "vh"),
                                    boxShadow:
                                      M === a
                                        ? "0 0 0.5vh rgba(255,0,128,0.8)"
                                        : void 0,
                                    animation:
                                      M === a
                                        ? "rainbowBorder 3s linear infinite"
                                        : void 0,
                                  },
                                  draggable: h,
                                  onDragStart: q(a),
                                  onDragOver: U(a),
                                  onDrop: J(a),
                                  onDragLeave: K(a),
                                  onPointerDown: Z(a),
                                  onPointerMove: Q(a),
                                  onPointerUp: ee(a),
                                  onPointerCancel: et,
                                  onTouchStart: eo(a),
                                  onTouchMove: en(a),
                                  onTouchEnd: ea(a),
                                  children: (0, n.jsx)(Y, {
                                    canvasNo: l,
                                    modularNo: "".concat(r, "-").concat(I(i)),
                                    optionType: r,
                                    option: i,
                                    topSlotId: 0 === a ? k : void 0,
                                  }),
                                },
                                "".concat(r, "-").concat(I(i), "-").concat(a),
                              );
                            }),
                          d > 2 &&
                            eh.map((e, a) => {
                              let { optionType: r, option: i } = e;
                              return (0, n.jsx)(
                                "div",
                                {
                                  style: {
                                    gridColumn: (a % 2) + 1,
                                    gridRow: Math.floor(a / 2) + 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "".concat(t, "vh"),
                                    height: "".concat(o, "vh"),
                                    boxShadow:
                                      M === a
                                        ? "0 0 0.5vh rgba(255,0,128,0.8)"
                                        : void 0,
                                    animation:
                                      M === a
                                        ? "rainbowBorder 3s linear infinite"
                                        : void 0,
                                  },
                                  draggable: h,
                                  onDragStart: q(a),
                                  onDragOver: U(a),
                                  onDrop: J(a),
                                  onDragLeave: K(a),
                                  onPointerDown: Z(a),
                                  onPointerMove: Q(a),
                                  onPointerUp: ee(a),
                                  onPointerCancel: et,
                                  onTouchStart: eo(a),
                                  onTouchMove: en(a),
                                  onTouchEnd: ea(a),
                                  children: (0, n.jsx)(Y, {
                                    canvasNo: l,
                                    modularNo: "".concat(r, "-").concat(I(i)),
                                    optionType: r,
                                    option: i,
                                    topSlotId: 0 === a ? k : void 0,
                                  }),
                                },
                                "".concat(r, "-").concat(I(i), "-").concat(a),
                              );
                            }),
                        ],
                      }),
                    ],
                  });
                })(),
              1 === eh.length &&
                !B &&
                !_ &&
                1.5 !== L &&
                (() => {
                  let e = eh[0],
                    a = e.span,
                    r = a * t + (a - 1) * ed,
                    i = L * t + (L - 1) * ed;
                  return (0, n.jsxs)(n.Fragment, {
                    children: [
                      T &&
                        Array.from({ length: L }).map((e, a) =>
                          (0, n.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                top: "calc(50% - ".concat(o / 2, "vh)"),
                                left: "calc(50% - "
                                  .concat(i / 2, "vh + ")
                                  .concat(a * (t + ed), "vh)"),
                                width: "".concat(t, "vh"),
                                height: "".concat(o, "vh"),
                                border: "1px dashed rgba(255,255,255,0.8)",
                                pointerEvents: "none",
                              },
                            },
                            a,
                          ),
                        ),
                      (0, n.jsx)("div", {
                        style: {
                          position: "absolute",
                          top: "calc(50% - ".concat(o / 2, "vh)"),
                          left: "calc(50% - ".concat(r / 2, "vh)"),
                          width: "".concat(r, "vh"),
                          height: "".concat(o, "vh"),
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        children: (0, n.jsx)(Y, {
                          canvasNo: l,
                          modularNo: ""
                            .concat(e.optionType, "-")
                            .concat(I(e.option)),
                          optionType: e.optionType,
                          option: e.option,
                          topSlotId: k,
                        }),
                      }),
                    ],
                  });
                })(),
              !(_ || B || (1 === eh.length && 1.5 !== L) || eu) &&
                (z
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        T &&
                          Array.from({ length: L }).map((e, a) =>
                            (B || _) && 0 === a
                              ? null
                              : (0, n.jsx)(
                                  "div",
                                  {
                                    style: {
                                      position: "absolute",
                                      top: "calc(50% - ".concat(o / 2, "vh)"),
                                      left: "calc(50% - "
                                        .concat(
                                          (L * t + (L - 1) * ed) / 2,
                                          "vh + ",
                                        )
                                        .concat(a * (t + ed), "vh)"),
                                      width: "".concat(t, "vh"),
                                      height: "".concat(o, "vh"),
                                      border:
                                        "1px dashed rgba(255,255,255,0.8)",
                                      pointerEvents: "none",
                                    },
                                  },
                                  a,
                                ),
                          ),
                        (B || _) &&
                          (0, n.jsx)("div", {
                            style: {
                              position: "absolute",
                              top: "calc(50% - ".concat(o / 2, "vh)"),
                              left: "calc(50% - ".concat(
                                (L * t + (L - 1) * ed) / 2,
                                "vh)",
                              ),
                              width: "".concat(t, "vh"),
                              height: "".concat(o, "vh"),
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              pointerEvents: "none",
                            },
                            children: (0, n.jsx)(r.default, {
                              src: "/glass-socket.png",
                              alt: "Socket",
                              fill: !0,
                              style: { objectFit: "contain" },
                              priority: !0,
                            }),
                          }),
                        (() => {
                          let e = eh.reduce(
                              (e, o, n) => e + o.span * t + (n > 0 ? ed : 0),
                              0,
                            ),
                            a = L * t + (L - 1) * ed,
                            r = (a - e) / 2,
                            i = 0;
                          return (0, n.jsx)(n.Fragment, {
                            children: eh.map((e, c) => {
                              let { optionType: s, option: d, span: u } = e,
                                p = "calc(50% - "
                                  .concat(a / 2, "vh + ")
                                  .concat(r, "vh + ")
                                  .concat(i, "vh)"),
                                v = "".concat(
                                  u * t + (u > 1 ? (u - 1) * ed : 0),
                                  "vh",
                                ),
                                g = (0, n.jsx)(
                                  "div",
                                  {
                                    style: {
                                      position: "absolute",
                                      top: "calc(50% - ".concat(o / 2, "vh)"),
                                      left: p,
                                      width: v,
                                      height: "".concat(o, "vh"),
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      boxShadow:
                                        M === c
                                          ? "0 0 0.5vh rgba(255,0,128,0.8)"
                                          : void 0,
                                      animation:
                                        M === c
                                          ? "rainbowBorder 3s linear infinite"
                                          : void 0,
                                    },
                                    className: ""
                                      .concat(M === c ? "drop-glow" : "", " ")
                                      .concat(F === c ? "swap-animate" : ""),
                                    draggable: h,
                                    onDragStart: q(c),
                                    onDragOver: U(c),
                                    onDrop: J(c),
                                    onDragLeave: K(c),
                                    onPointerDown: Z(c),
                                    onPointerMove: Q(c),
                                    onPointerUp: ee(c),
                                    onPointerCancel: et,
                                    onTouchStart: eo(c),
                                    onTouchMove: en(c),
                                    onTouchEnd: ea(c),
                                    children: (0, n.jsx)(Y, {
                                      canvasNo: l,
                                      modularNo: "".concat(s, "-").concat(I(d)),
                                      optionType: s,
                                      option: d,
                                      topSlotId: 0 === c ? k : void 0,
                                    }),
                                  },
                                  "".concat(s, "-").concat(I(d), "-").concat(c),
                                );
                              return (i += u * t + ed), g;
                            }),
                          });
                        })(),
                      ],
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        T &&
                          Array.from({ length: V }).map((e, a) =>
                            (0, n.jsx)(
                              "div",
                              {
                                style: {
                                  position: "absolute",
                                  top: "calc(50% - ".concat(o / 2, "vh)"),
                                  left: "calc(50% - "
                                    .concat(((t / 2) * V) / 2, "vh + ")
                                    .concat(a * (t / 2 + ed), "vh)"),
                                  width: "".concat(t / 2, "vh"),
                                  height: "".concat(o, "vh"),
                                  border: "1px dashed rgba(255,255,255,0.8)",
                                  pointerEvents: "none",
                                },
                              },
                              a,
                            ),
                          ),
                        (B || _) &&
                          (0, n.jsx)("div", {
                            style: {
                              position: "absolute",
                              top: "calc(50% - ".concat(o / 2, "vh)"),
                              left: "calc(50% - ".concat(
                                ((t / 2) * V) / 2,
                                "vh)",
                              ),
                              width: "".concat(t / 2, "vh"),
                              height: "".concat(o, "vh"),
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              pointerEvents: "none",
                            },
                            children: (0, n.jsx)(r.default, {
                              src: "/glass-socket.png",
                              alt: "Socket",
                              fill: !0,
                              style: { objectFit: "contain" },
                              priority: !0,
                            }),
                          }),
                        (() => {
                          let e = t / 2,
                            a =
                              (V - eh.reduce((e, t) => e + 2 * t.span, 0)) / 2,
                            r = "calc(50% - ".concat(
                              (V * e + (V - 1) * ed) / 2,
                              "vh)",
                            ),
                            i = a * e + a * ed,
                            c = 0;
                          return (0, n.jsx)(n.Fragment, {
                            children: eh.map((t, a) => {
                              let { optionType: s, option: d, span: u } = t,
                                p = 2 * u;
                              ""
                                .concat(r, " + ")
                                .concat(i + c * (e + ed), "vh");
                              let v = (0, n.jsx)(
                                "div",
                                {
                                  style: {
                                    position: "absolute",
                                    top: "calc(50% - ".concat(o / 2, "vh)"),
                                    left: "calc("
                                      .concat(r, " + ")
                                      .concat(i + c * (e + ed), "vh)"),
                                    width: "".concat(
                                      p * e + (p - 1) * ed,
                                      "vh",
                                    ),
                                    height: "".concat(o, "vh"),
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow:
                                      M === a
                                        ? "0 0 0.5vh rgba(255,0,128,0.8)"
                                        : void 0,
                                    animation:
                                      M === a
                                        ? "rainbowBorder 3s linear infinite"
                                        : void 0,
                                  },
                                  className: ""
                                    .concat(M === a ? "drop-glow" : "", " ")
                                    .concat(F === a ? "swap-animate" : ""),
                                  draggable: h,
                                  onDragStart: q(a),
                                  onDragOver: U(a),
                                  onDrop: J(a),
                                  onDragLeave: K(a),
                                  onPointerDown: Z(a),
                                  onPointerMove: Q(a),
                                  onPointerUp: ee(a),
                                  onPointerCancel: et,
                                  onTouchStart: eo(a),
                                  onTouchMove: en(a),
                                  onTouchEnd: ea(a),
                                  children: (0, n.jsx)(Y, {
                                    canvasNo: l,
                                    modularNo: "".concat(s, "-").concat(I(d)),
                                    optionType: s,
                                    option: d,
                                    topSlotId: 0 === a ? k : void 0,
                                  }),
                                },
                                "".concat(s, "-").concat(I(d), "-").concat(a),
                              );
                              return (c += p), v;
                            }),
                          });
                        })(),
                      ],
                    })),
              eu &&
                (() => {
                  let e = eh.length,
                    r = t / 2,
                    i = V * r + (V - 1) * ed,
                    c = (i - (e * r + (e - 1) * ed)) / 2;
                  return (0, n.jsxs)(a.Fragment, {
                    children: [
                      T &&
                        Array.from({ length: V }).map((e, t) =>
                          (0, n.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                top: "calc(50% - ".concat(o / 2, "vh)"),
                                left: "calc(50% - "
                                  .concat(i / 2, "vh + ")
                                  .concat(t * (r + ed), "vh)"),
                                width: "".concat(r, "vh"),
                                height: "".concat(o, "vh"),
                                border: "1px dashed rgba(255,255,255,0.8)",
                                pointerEvents: "none",
                              },
                            },
                            t,
                          ),
                        ),
                      eh.map((e, t) => {
                        let { optionType: a, option: s } = e;
                        return (0, n.jsx)(
                          "div",
                          {
                            style: {
                              position: "absolute",
                              top: "calc(50% - ".concat(o / 2, "vh)"),
                              left: "calc(50% - "
                                .concat(i / 2, "vh + ")
                                .concat(c, "vh + ")
                                .concat(t * (r + ed), "vh)"),
                              width: "".concat(r, "vh"),
                              height: "".concat(o, "vh"),
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              boxShadow:
                                M === t
                                  ? "0 0 0.5vh rgba(255,0,128,0.8)"
                                  : void 0,
                              animation:
                                M === t
                                  ? "rainbowBorder 3s linear infinite"
                                  : void 0,
                            },
                            className: ""
                              .concat(M === t ? "drop-glow" : "", " ")
                              .concat(F === t ? "swap-animate" : ""),
                            draggable: h,
                            onDragStart: q(t),
                            onDragOver: U(t),
                            onDrop: J(t),
                            onDragLeave: K(t),
                            onPointerDown: Z(t),
                            onPointerMove: Q(t),
                            onPointerUp: ee(t),
                            onPointerCancel: et,
                            onTouchStart: eo(t),
                            onTouchMove: en(t),
                            onTouchEnd: ea(t),
                            children: (0, n.jsx)(Y, {
                              canvasNo: l,
                              modularNo: "".concat(a, "-").concat(I(s)),
                              optionType: a,
                              option: s,
                              topSlotId: 0 === t ? k : void 0,
                            }),
                          },
                          "".concat(a, "-").concat(I(s), "-").concat(t),
                        );
                      }),
                    ],
                  });
                })(),
            ],
          });
        };
    },
    53563: (e) => {
      e.exports = {
        "touch-panel-module2": "dragdrop_touch-panel-module2__ZGb2z",
        "touch-panel-module3": "dragdrop_touch-panel-module3__QUlyn",
        "touch-panel-module4": "dragdrop_touch-panel-module4__DrGcp",
        "touch-panel-module4-socket1":
          "dragdrop_touch-panel-module4-socket1__4z31N",
        "slot-left": "dragdrop_slot-left__hqnQX",
        "slot-right": "dragdrop_slot-right__F_tNU",
        "touch-panel-module6": "dragdrop_touch-panel-module6___5DAW",
        "touch-panel-module6-socket1":
          "dragdrop_touch-panel-module6-socket1__VtYYs",
        "touch-panel-module6-socket2":
          "dragdrop_touch-panel-module6-socket2__R2TXt",
        "touch-panel-module8": "dragdrop_touch-panel-module8__epgST",
        "touch-panel-module8-socket1":
          "dragdrop_touch-panel-module8-socket1__Mfs9v",
        "touch-panel-module8-socket2":
          "dragdrop_touch-panel-module8-socket2__yIXz5",
        "touch-panel-module12": "dragdrop_touch-panel-module12__ZLqz5",
        "touch-panel-module16": "dragdrop_touch-panel-module16__EqU2B",
        "touch-panel-module18": "dragdrop_touch-panel-module18__qE89G",
        "touch-panel-module12-socketv":
          "dragdrop_touch-panel-module12-socketv__zRotG",
        "touch-panel-module12-socketh":
          "dragdrop_touch-panel-module12-socketh__RWitZ",
        "touch-panel-module8s": "dragdrop_touch-panel-module8s__1sBYs",
        "edge-module2": "dragdrop_edge-module2__RexnK",
        "edge-module4": "dragdrop_edge-module4__TjNgB",
        "edge-module6": "dragdrop_edge-module6__7eZgo",
        "edge-module8": "dragdrop_edge-module8__RwtYx",
        "edge-module12": "dragdrop_edge-module12__uVBbv",
        "color-module2": "dragdrop_color-module2__4140f",
        "color-module4": "dragdrop_color-module4__2CqR8",
        "color-module6": "dragdrop_color-module6__gI7mh",
        "color-module8": "dragdrop_color-module8__K1_37",
        "color-module12": "dragdrop_color-module12__zne4D",
        "royal-edge-module2": "dragdrop_royal-edge-module2__PPRsM",
        "royal-edge-module4": "dragdrop_royal-edge-module4__pKOUb",
        "royal-edge-module6": "dragdrop_royal-edge-module6__Hb4vl",
        "royal-edge-module8": "dragdrop_royal-edge-module8__QyDWx",
        "royal-edge-module12": "dragdrop_royal-edge-module12__kQ304",
        "sixmodule-empty-slot": "dragdrop_sixmodule-empty-slot__YDngP",
        "eightmodule-empty-slot": "dragdrop_eightmodule-empty-slot__kk3BI",
        "multi-row-wrapper": "dragdrop_multi-row-wrapper__teaeA",
        "row-label": "dragdrop_row-label__C2IE2",
        "drag-container": "dragdrop_drag-container__GnL3C",
        "drop-glow": "dragdrop_drop-glow__a7IbF",
        "swap-animate": "dragdrop_swap-animate__GofXr",
        swapPulse: "dragdrop_swapPulse__qGMJ8",
        rainbowBorder: "dragdrop_rainbowBorder__NNPW2",
      };
    },
    70015: (e, t, o) => {
      "use strict";
      o.d(t, { Ay: () => m, dO: () => v });
      var n = o(95155),
        a = o(12115),
        r = o(34540),
        i = o(66766),
        c = o(53563),
        l = o.n(c),
        s = o(27363),
        d = o(20760),
        h = o(10338),
        u = o(97781);
      let p = {
          "8 Module S": { row1: 4, row2: 4 },
          "12 Module": { row1: 6, row2: 6 },
          "12 Module 2 Socket H": { row1: 6, row2: 2 },
          "12 Module 2 Socket V": { row1: 4, row2: 4 },
          "16 Module": { row1: 8, row2: 8 },
        },
        v = {
          "Touch Panel": {
            vertIconGap: "6.76vh",
            horizBlockGap: "0vh",
            vertBlockGap: "9.82vh",
            horizIconGap: "0vh",
            fourSceneHorizGap: "6.67vh",
            fourSceneVertGap: "6.76vh",
          },
          Color: {
            vertIconGap: "6.76vh",
            horizBlockGap: "0vh",
            vertBlockGap: "9.82vh",
          },
          Edge: {
            vertIconGap: "6.76vh",
            horizBlockGap: "0vh",
            vertBlockGap: "9.82vh",
            fourSceneHorizGap: "5.71vh",
            fourSceneVertGap: "5.79vh",
          },
          "Royal Edge": {
            vertIconGap: "6.76vh",
            horizBlockGap: "0vh",
            vertBlockGap: "9.82vh",
          },
        },
        g = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 6,
            o = e.flatMap((e) =>
              e.options.map((t) => ({
                optionType: e.optionType,
                option: t,
                span: (0, s.jh)(e.optionType),
              })),
            ),
            n = [[], [], []],
            a = 0,
            r = 0;
          for (let e of o) {
            if (a >= 3 || (r + e.span > t && (a++, (r = 0)), a >= 3)) break;
            n[a].push({ optionType: e.optionType, options: [e.option] }),
              (r += e.span);
          }
          return {
            rows: n,
            overflow: o.reduce((e, t) => e + t.span, 0) > 3 * t,
          };
        },
        m = () => {
          var e, t, o, c, m, f, y, w, x, I, $;
          let S = (0, r.wA)(),
            b = (0, r.d4)((e) => e.cartData.cartData),
            P = (0, r.d4)((e) => e.cartData.droppedItems),
            j = b.panel,
            D = null == j ? void 0 : j.item,
            T = !!(null == j ? void 0 : j.noFrame),
            C = null == (e = b.size) ? void 0 : e.item;
          (0, r.d4)((e) => e.selectionData.currentStep.stepNo);
          let k = null != (f = b.accessories) ? f : [],
            M = null != (y = b.accessories1) ? y : [],
            N = null != (w = b.accessories2) ? w : [],
            R = null != (x = b.color) ? x : [],
            F =
              null !=
              (I =
                null ==
                  (o = R.find((e) => "Material Color" === e.optionType)) ||
                null == (t = o.options[0])
                  ? void 0
                  : t.color)
                ? I
                : "#000",
            A =
              null !=
              ($ =
                null == (m = R.find((e) => "Frame Color" === e.optionType)) ||
                null == (c = m.options[0])
                  ? void 0
                  : c.color)
                ? $
                : "#000",
            E = C ? (0, s.YS)(C) : "",
            G = D ? D.toLowerCase().replace(/\s+/g, "-") : "",
            O = E && G ? "".concat(G, "-").concat(E) : E,
            B = {
              backgroundColor: F,
              borderRadius: "0.774vh",
              borderStyle: T ? "none" : "solid",
              borderColor: A,
              borderWidth: "Royal Edge" === D ? "4px 4px 12px 4px" : "4px",
              padding: "0.5rem",
            },
            _ = a.useMemo(
              () => ({
                id: "drag-drop-area",
                "data-cdr-render-key": (0, h.vs)(b, P),
              }),
              [b, P],
            ),
            z = (e) =>
              e.map((e) => ({
                optionType: e.optionType,
                options: e.options
                  .filter((e) => "string" == typeof e.id)
                  .map((e) => ({
                    id: e.id,
                    item: e.item,
                    price: e.price,
                    instanceId: e.instanceId,
                  })),
              })),
            H = z(k),
            V = z(M),
            L = z(N),
            [W, Y] = (0, a.useState)(0),
            [X, q] = (0, a.useState)(!1),
            [U, J] = (0, a.useState)(null),
            [K, Z] = (0, a.useState)(null),
            [Q, ee] = (0, a.useState)(null),
            et = (0, a.useCallback)((e) => {
              ee(e), setTimeout(() => ee(null), 3e3);
            }, []),
            {
              rows: [eo, en, ea],
              overflow: er,
            } = a.useMemo(() => g(H, 6), [H]);
          (0, a.useEffect)(() => {
            "18 Module" === C &&
              er &&
              et("Total accessories exceed 18 modules.");
          }, [C, er, et]);
          let ei = (e) => J(e),
            ec = (e) => e.preventDefault(),
            el = (e) => {
              if (null !== U && U !== e) {
                if (C) {
                  let e = p[C];
                  if (e) {
                    if (e.row1 !== e.row2) {
                      et("Rows have mismatched capacity"), J(null);
                      return;
                    }
                    let t = (e) =>
                        e
                          .flatMap((e) => e.options.map(() => e.optionType))
                          .reduce((e, t) => e + (0, s.jh)(t), 0),
                      o = t(V);
                    if (t(L) > e.row1 || o > e.row2) {
                      et("Rows have mismatched capacity"), J(null);
                      return;
                    }
                  }
                }
                S((0, u.swapAccessoryRows)()), q((e) => !e);
              }
              J(null);
            },
            es = (e, t) => {
              Z({ row: e, index: t });
            },
            ed = (e, t, o, n) => {
              if (!C) return;
              if ("18 Module" === C) {
                let a = z(k).flatMap((e) =>
                    e.options.map((t) => ({
                      optionType: e.optionType,
                      option: t,
                      span: (0, s.jh)(e.optionType),
                    })),
                  ),
                  r = [[], [], []],
                  i = 0,
                  c = 0;
                if (
                  (a.forEach((e, t) => {
                    i + e.span > 6 && (c++, (i = 0)),
                      c > 2 || (r[c].push(t), (i += e.span));
                  }),
                  e !== o)
                )
                  return void Z(null);
                let l = r[e] || [],
                  d = r[o] || [],
                  h = l[t],
                  p = d[n];
                return null == h || null == p
                  ? void Z(null)
                  : (S(
                      (0, u.moveAccessory)({
                        fromRow: 0,
                        fromIndex: h,
                        toRow: 0,
                        toIndex: p,
                      }),
                    ),
                    void Z(null));
              }
              if (e !== o) return void Z(null);
              let a = e,
                r = o;
              ("8 Module S" === C || "12 Module" === C || "16 Module" === C) &&
                X &&
                ((a = +(0 === e)), (r = +(0 === o)));
              let i = void 0 !== p[C],
                c = i ? a + 1 : a,
                l = i ? r + 1 : r;
              S(
                (0, u.moveAccessory)({
                  fromRow: c,
                  fromIndex: t,
                  toRow: l,
                  toIndex: n,
                }),
              ),
                Z(null);
            },
            eh = (0, a.useCallback)(
              (e, t, o, n) => {
                if (!C) return;
                if (
                  (S(
                    (0, u.addDroppedItem)({
                      id: o.id,
                      iconUrl: o.item,
                      xPercent: 0.5,
                      yPercent: 0.5,
                      sizePercent: 0.1,
                    }),
                  ),
                  "18 Module" === C)
                ) {
                  let {
                    rows: [e, a, r],
                  } = g(H, 6);
                  return ([e, a, r][n] || [])
                    .flatMap((e) => e.options.map(() => e.optionType))
                    .reduce((e, t) => e + (0, s.jh)(t), 0) +
                    (0, s.jh)(t) >
                    6
                    ? void et(
                        "Row ".concat(n + 1, " can hold at most 6 modules."),
                      )
                    : void S((0, u.addAccessory)({ optionType: t, option: o }));
                }
                let a = {
                  "8 Module 1 Socket": 6,
                  "8 Module 2 Socket": 4,
                  "6 Module 1 Socket": 4,
                  "6 Module 2 Socket": 2,
                  "4 Module 1 Socket": 2,
                };
                if (C && a[C]) {
                  let e = a[C],
                    n = (0, s.jh)(t);
                  return "6 Module 2 Socket" === C && 2 !== n
                    ? void et("Center block only fits a 2-module accessory.")
                    : H.flatMap((e) =>
                          e.options.map(() => e.optionType),
                        ).reduce((e, t) => e + (0, s.jh)(t), 0) +
                          n >
                        e
                      ? void et(
                          "This panel can hold at most ".concat(
                            e,
                            " modules in the drop area.",
                          ),
                        )
                      : void S(
                          (0, u.addAccessory)({ optionType: t, option: o }),
                        );
                }
                console.log("[16M DEBUG] handleDrop called", {
                  size: C,
                  incomingRow: n,
                  optionType: t,
                  swappedRows: X,
                });
                let r = n;
                if (
                  (("8 Module S" === C ||
                    "12 Module" === C ||
                    "16 Module" === C) &&
                    X &&
                    (r = +(0 === r)),
                  "3 Module" === C && (0, s.jh)(t),
                  "8 Module S" === C)
                ) {
                  let e = (0, s.jh)(t),
                    n = V.flatMap((e) =>
                      e.options.map(() => e.optionType),
                    ).reduce((e, t) => e + (0, s.jh)(t), 0),
                    a = L.flatMap((e) =>
                      e.options.map(() => e.optionType),
                    ).reduce((e, t) => e + (0, s.jh)(t), 0);
                  if (0 === r && n + e > 4)
                    if (!(a + e <= 4)) return void et("Both rows are full.");
                    else {
                      S((0, u.addAccessory2)({ optionType: t, option: o })),
                        S((0, u.addAccessory)({ optionType: t, option: o }));
                      return;
                    }
                  if (1 === r) {
                    if (a + e > 4) return void et("Row 2 only fits 4 modules.");
                    S((0, u.addAccessory2)({ optionType: t, option: o }));
                  } else S((0, u.addAccessory1)({ optionType: t, option: o }));
                  return void S(
                    (0, u.addAccessory)({ optionType: t, option: o }),
                  );
                }
                if ("12 Module 2 Socket H" === C && (0 === r || 1 === r)) {
                  let e = (0, s.jh)(t);
                  if (1 === r) {
                    let n = L.flatMap((e) =>
                      e.options.map(() => e.optionType),
                    ).reduce((e, t) => e + (0, s.jh)(t), 0);
                    if (2 !== e)
                      return void et("Block 4 only fits a 2-module accessory.");
                    if (n + e > 2) return void et("That slot is already full.");
                    S((0, u.addAccessory2)({ optionType: t, option: o }));
                  } else {
                    if (
                      V.flatMap((e) =>
                        e.options.map(() => e.optionType),
                      ).reduce((e, t) => e + (0, s.jh)(t), 0) +
                        e >
                      6
                    )
                      return void et("Row 1 can hold at most 6 modules.");
                    S((0, u.addAccessory1)({ optionType: t, option: o }));
                  }
                  S((0, u.addAccessory)({ optionType: t, option: o }));
                  return;
                }
                if ("12 Module 2 Socket V" === C && (0 === r || 1 === r)) {
                  let e = (0, s.jh)(t);
                  return 2 !== e && 4 !== e
                    ? void et("Only 2- or 4-module accessories can go here.")
                    : (0 === r ? V : L)
                          .flatMap((e) => e.options.map(() => e.optionType))
                          .reduce((e, t) => e + (0, s.jh)(t), 0) +
                          e >
                        4
                      ? void et(
                          "Row ".concat(r + 1, " can hold at most 4 modules."),
                        )
                      : void (0 === r
                          ? S(
                              (0, u.addAccessory1)({
                                optionType: t,
                                option: o,
                              }),
                            )
                          : S(
                              (0, u.addAccessory2)({
                                optionType: t,
                                option: o,
                              }),
                            ));
                }
                let i = p[C];
                if (i && (0 === r || 1 === r)) {
                  let e = (0, s.jh)(t);
                  return (0 === r ? V : L)
                    .flatMap((e) => e.options.map(() => e.optionType))
                    .reduce((e, t) => e + (0, s.jh)(t), 0) +
                    e >
                    (0 === r ? i.row1 : i.row2)
                    ? void et(
                        0 === r
                          ? "Row 1 can hold at most ".concat(
                              i.row1,
                              " modules.",
                            )
                          : "Row 2 can hold at most ".concat(
                              i.row2,
                              " modules.",
                            ),
                      )
                    : (0 === r
                        ? S((0, u.addAccessory1)({ optionType: t, option: o }))
                        : S((0, u.addAccessory2)({ optionType: t, option: o })),
                      void S(
                        (0, u.addAccessory)({ optionType: t, option: o }),
                      ));
                }
                console.log("handleDrop CALLED:", {
                  size: C,
                  optionType: t,
                  option: o,
                  incomingRow: n,
                }),
                  0 === r
                    ? S((0, u.addAccessory1)({ optionType: t, option: o }))
                    : S((0, u.addAccessory2)({ optionType: t, option: o })),
                  S((0, u.addAccessory)({ optionType: t, option: o }));
              },
              [S, H, V, L, C, et],
            ),
            eu = (e) =>
              (0, n.jsx)("div", {
                className: "flex-1 items-center justify-center sm:flex",
                children: e,
              });
          if ("4 Module 1 Socket" === C)
            return eu(
              (0, n.jsxs)("div", {
                ..._,
                className: ""
                  .concat(l()[O], " ")
                  .concat(l()["touch-panel-module4-socket1"]),
                style: B,
                onDragOver: (e) => e.preventDefault(),
                children: [
                  Q &&
                    (0, n.jsx)("div", {
                      style: {
                        width: "100%",
                        maxWidth: "40rem",
                        marginBottom: "1rem",
                        padding: "0.75rem 1rem",
                        background: "#f8d7da",
                        color: "#721c24",
                        border: "1px solid #f5c6cb",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                      },
                      children: Q,
                    }),
                  (0, n.jsxs)("div", {
                    className: l()["touch-panel-module4-socket1"],
                    children: [
                      (0, n.jsx)("div", {
                        className: l()["slot-left"],
                        style: { position: "relative" },
                        children: (0, n.jsx)(i.default, {
                          src: "/glass-socket.png",
                          alt: "Socket",
                          fill: !0,
                          sizes: "21.72vh",
                          style: { objectFit: "contain" },
                          priority: !0,
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: l()["slot-right"],
                        children: (0, n.jsx)(d.default, {
                          canvasNo: 1,
                          showCanvasBorder: !1,
                          data: H,
                          draggableItems: !0,
                          onItemDragStart: es,
                          onItemSwap: ed,
                          onDrop: (e, t) => eh(null, e, t, 0),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            );
          if ("6 Module 1 Socket" === C)
            return eu(
              (0, n.jsxs)("div", {
                ..._,
                className: ""
                  .concat(l()[O], " ")
                  .concat(l()["touch-panel-module6-socket1"]),
                style: B,
                onDragOver: (e) => e.preventDefault(),
                children: [
                  Q &&
                    (0, n.jsx)("div", {
                      style: {
                        width: "100%",
                        maxWidth: "40rem",
                        marginBottom: "1rem",
                        padding: "0.75rem 1rem",
                        background: "#f8d7da",
                        color: "#721c24",
                        border: "1px solid #f5c6cb",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                      },
                      children: Q,
                    }),
                  (0, n.jsx)(d.default, {
                    canvasNo: 1,
                    showCanvasBorder: !1,
                    data: H,
                    draggableItems: !0,
                    onItemDragStart: es,
                    onItemSwap: ed,
                    onDrop: (e, t) => eh(null, e, t, 0),
                  }),
                ],
              }),
            );
          if ("6 Module 2 Socket" === C)
            return eu(
              (0, n.jsxs)("div", {
                ..._,
                className: ""
                  .concat(l()[O], " ")
                  .concat(l()["touch-panel-module6-socket2"]),
                style: B,
                onDragOver: (e) => e.preventDefault(),
                children: [
                  Q &&
                    (0, n.jsx)("div", {
                      style: {
                        width: "100%",
                        maxWidth: "40rem",
                        marginBottom: "1rem",
                        padding: "0.75rem 1rem",
                        background: "#f8d7da",
                        color: "#721c24",
                        border: "1px solid #f5c6cb",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                      },
                      children: Q,
                    }),
                  (0, n.jsx)(d.default, {
                    canvasNo: 1,
                    showCanvasBorder: !1,
                    data: H,
                    draggableItems: !0,
                    onItemDragStart: es,
                    onItemSwap: ed,
                    onDrop: (e, t) => eh(null, e, t, 0),
                  }),
                ],
              }),
            );
          if ("8 Module 1 Socket" === C)
            return eu(
              (0, n.jsxs)("div", {
                ..._,
                className: [l()[O], l()["touch-panel-module8-socket1"]].join(
                  " ",
                ),
                style: { ...B, borderRadius: "0.451vh" },
                onDragOver: (e) => e.preventDefault(),
                children: [
                  Q &&
                    (0, n.jsx)("div", {
                      style: {
                        width: "100%",
                        maxWidth: "40rem",
                        marginBottom: "1rem",
                        padding: "0.75rem 1rem",
                        background: "#f8d7da",
                        color: "#721c24",
                        border: "1px solid #f5c6cb",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                      },
                      children: Q,
                    }),
                  (0, n.jsx)("div", {
                    className: l()["slot-left"],
                    style: { position: "relative" },
                    children: (0, n.jsx)(i.default, {
                      src: "/icon/m2/3PinSocket.svg",
                      alt: "Socket",
                      fill: !0,
                      sizes: "21.721vh",
                      style: { objectFit: "contain", pointerEvents: "none" },
                      priority: !0,
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: l()["slot-right"],
                    children: (0, n.jsx)(d.default, {
                      canvasNo: 1,
                      showCanvasBorder: !1,
                      data: H,
                      modulesPerRowOverride: 6,
                      draggableItems: !0,
                      onItemDragStart: es,
                      onItemSwap: ed,
                      onDrop: (e, t) => eh(null, e, t, 0),
                    }),
                  }),
                ],
              }),
            );
          if ("8 Module 2 Socket" === C)
            return eu(
              (0, n.jsxs)("div", {
                ..._,
                className: ""
                  .concat(l()[O], " ")
                  .concat(l()["touch-panel-module8-socket2"]),
                style: {
                  ...B,
                  width: "117.978vh",
                  height: "42vh",
                  borderRadius: "0.451vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0",
                },
                onDragOver: (e) => e.preventDefault(),
                children: [
                  Q &&
                    (0, n.jsx)("div", {
                      style: {
                        width: "100%",
                        maxWidth: "40rem",
                        marginBottom: "1rem",
                        padding: "0.75rem 1rem",
                        background: "#f8d7da",
                        color: "#721c24",
                        border: "1px solid #f5c6cb",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                      },
                      children: Q,
                    }),
                  (0, n.jsx)("div", {
                    style: {
                      width: "21.721vh",
                      height: "22.983vh",
                      position: "relative",
                    },
                    children: (0, n.jsx)(i.default, {
                      src: "/icon/m2/3PinSocket.svg",
                      alt: "Socket",
                      fill: !0,
                      sizes: "21.721vh",
                      style: { objectFit: "contain", pointerEvents: "none" },
                      priority: !0,
                    }),
                  }),
                  (0, n.jsx)(d.default, {
                    canvasNo: 1,
                    showCanvasBorder: !1,
                    data: H,
                    modulesPerRowOverride: 4,
                    draggableItems: !0,
                    onItemDragStart: es,
                    onItemSwap: ed,
                    onDrop: (e, t) => eh(null, e, t, 0),
                  }),
                  (0, n.jsx)("div", {
                    style: {
                      width: "21.721vh",
                      height: "22.983vh",
                      position: "relative",
                    },
                    children: (0, n.jsx)(i.default, {
                      src: "/icon/m2/3PinSocket.svg",
                      alt: "Socket",
                      fill: !0,
                      sizes: "21.721vh",
                      style: { objectFit: "contain", pointerEvents: "none" },
                      priority: !0,
                    }),
                  }),
                ],
              }),
            );
          if (
            (console.log({
              size: C,
              numeric: (0, s.wq)(C),
              cssClass: (0, s.YS)(C),
              spacing: v[C],
            }),
            "8 Module S" === C)
          ) {
            let e = X ? L : V,
              t = X ? V : L;
            return eu(
              (0, n.jsxs)("div", {
                ..._,
                className: [l()[O], l()["touch-panel-module8s"]].join(" "),
                style: B,
                onDragOver: (e) => e.preventDefault(),
                children: [
                  (0, n.jsx)(d.default, {
                    canvasNo: 1,
                    showCanvasBorder: !1,
                    data: e,
                    draggableItems: !0,
                    draggableRow: !0,
                    onRowDragStart: () => ei(0),
                    onRowDragOver: ec,
                    onRowDrop: () => el(0),
                    onItemDragStart: es,
                    onItemSwap: ed,
                    modulesPerRowOverride: 4,
                    onClick: () => Y(0),
                    onDrop: (e, t) => eh(null, e, t, 0),
                  }),
                  (0, n.jsx)(d.default, {
                    canvasNo: 2,
                    showCanvasBorder: !1,
                    data: t,
                    draggableItems: !0,
                    draggableRow: !0,
                    onRowDragStart: () => ei(1),
                    onRowDragOver: ec,
                    onRowDrop: () => el(1),
                    onItemDragStart: es,
                    onItemSwap: ed,
                    modulesPerRowOverride: 4,
                    onClick: () => Y(1),
                    onDrop: (e, t) => eh(null, e, t, 1),
                  }),
                ],
              }),
            );
          }
          if ("12 Module 2 Socket H" === C)
            return eu(
              (0, n.jsxs)("div", {
                ..._,
                className: ""
                  .concat(l()[O], " ")
                  .concat(l()["touch-panel-module12-socketh"]),
                style: {
                  ...B,
                  width: "100.493vh",
                  height: "72.103vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "0",
                },
                onDragOver: (e) => e.preventDefault(),
                children: [
                  (0, n.jsx)("div", { style: { height: "9.46vh" } }),
                  (0, n.jsx)("div", {
                    style: {
                      display: "flex",
                      justifyContent: "center",
                      gap: "0",
                    },
                    children: (0, n.jsx)(d.default, {
                      canvasNo: 1,
                      showCanvasBorder: !1,
                      data: V.slice(0, 3),
                      modulesPerRowOverride: 6,
                      draggableItems: !0,
                      onItemDragStart: es,
                      onItemSwap: ed,
                      onDrop: (e, t) => eh(null, e, t, 0),
                    }),
                  }),
                  (0, n.jsx)("div", { style: { height: "7.21vh" } }),
                  (0, n.jsxs)("div", {
                    style: {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0",
                    },
                    children: [
                      (0, n.jsx)("div", {
                        style: {
                          width: "21.721vh",
                          height: "22.983vh",
                          position: "relative",
                        },
                        children: (0, n.jsx)(i.default, {
                          src: "/icon/m2/3PinSocket.svg",
                          alt: "Socket",
                          fill: !0,
                          style: {
                            objectFit: "contain",
                            pointerEvents: "none",
                          },
                          priority: !0,
                        }),
                      }),
                      (0, n.jsx)(d.default, {
                        canvasNo: 2,
                        showCanvasBorder: !1,
                        data: L.slice(0, 1),
                        modulesPerRowOverride: 2,
                        draggableItems: !0,
                        onItemDragStart: es,
                        onItemSwap: ed,
                        onDrop: (e, t) => eh(null, e, t, 1),
                      }),
                      (0, n.jsx)("div", {
                        style: {
                          width: "21.721vh",
                          height: "22.983vh",
                          position: "relative",
                        },
                        children: (0, n.jsx)(i.default, {
                          src: "/icon/m2/3PinSocket.svg",
                          alt: "Socket",
                          fill: !0,
                          style: {
                            objectFit: "contain",
                            pointerEvents: "none",
                          },
                          priority: !0,
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", { style: { height: "9.46vh" } }),
                ],
              }),
            );
          if ("12 Module 2 Socket V" === C)
            return eu(
              (0, n.jsxs)("div", {
                ..._,
                className: [l()[O], l()["touch-panel-module12-socketv"]].join(
                  " ",
                ),
                style: {
                  ...B,
                  width: "100.493vh",
                  height: "72.103vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "0",
                },
                onDragOver: (e) => e.preventDefault(),
                children: [
                  (0, n.jsx)("div", { style: { height: "9.46vh" } }),
                  (0, n.jsxs)("div", {
                    style: {
                      display: "flex",
                      justifyContent: "center",
                      gap: "0",
                    },
                    children: [
                      (0, n.jsx)("div", {
                        style: {
                          width: "21.721vh",
                          height: "22.983vh",
                          position: "relative",
                        },
                        children: (0, n.jsx)(i.default, {
                          src: "/icon/m2/3PinSocket.svg",
                          alt: "Socket",
                          fill: !0,
                          style: {
                            objectFit: "contain",
                            pointerEvents: "none",
                          },
                          priority: !0,
                        }),
                      }),
                      (0, n.jsx)(d.default, {
                        canvasNo: 1,
                        showCanvasBorder: !1,
                        data: V.slice(0, 2),
                        modulesPerRowOverride: 4,
                        draggableItems: !0,
                        onItemDragStart: es,
                        onItemSwap: ed,
                        onDrop: (e, t) => eh(null, e, t, 0),
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", { style: { height: "7.21vh" } }),
                  (0, n.jsxs)("div", {
                    style: {
                      display: "flex",
                      justifyContent: "center",
                      gap: "0",
                    },
                    children: [
                      (0, n.jsx)("div", {
                        style: {
                          width: "21.721vh",
                          height: "22.983vh",
                          position: "relative",
                        },
                        children: (0, n.jsx)(i.default, {
                          src: "/icon/m2/3PinSocket.svg",
                          alt: "Socket",
                          fill: !0,
                          style: {
                            objectFit: "contain",
                            pointerEvents: "none",
                          },
                          priority: !0,
                        }),
                      }),
                      (0, n.jsx)(d.default, {
                        canvasNo: 2,
                        showCanvasBorder: !1,
                        data: L.slice(0, 2),
                        modulesPerRowOverride: 4,
                        draggableItems: !0,
                        onItemDragStart: es,
                        onItemSwap: ed,
                        onDrop: (e, t) => eh(null, e, t, 1),
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", { style: { height: "9.46vh" } }),
                ],
              }),
            );
          if ("12 Module" === C) {
            let e = X ? L : V,
              t = X ? V : L;
            return eu(
              (0, n.jsxs)("div", {
                ..._,
                className: [
                  l()[O],
                  l()["touch-panel-module12"],
                  l()["multi-row-wrapper"],
                ].join(" "),
                style: { ...B, marginBottom: 0 },
                children: [
                  (0, n.jsx)("div", {
                    onClick: () => Y(0),
                    children: (0, n.jsx)(d.default, {
                      canvasNo: 1,
                      showCanvasBorder: !1,
                      data: e,
                      draggableItems: !0,
                      draggableRow: !0,
                      onRowDragStart: () => ei(0),
                      onRowDragOver: ec,
                      onRowDrop: () => el(0),
                      onItemDragStart: es,
                      onItemSwap: ed,
                      modulesPerRowOverride: 6,
                      onClick: () => Y(0),
                      onDrop: (e, t) => eh(null, e, t, 0),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    onClick: () => Y(1),
                    children: (0, n.jsx)(d.default, {
                      canvasNo: 2,
                      showCanvasBorder: !1,
                      data: t,
                      draggableItems: !0,
                      draggableRow: !0,
                      onRowDragStart: () => ei(1),
                      onRowDragOver: ec,
                      onRowDrop: () => el(1),
                      onItemDragStart: es,
                      onItemSwap: ed,
                      modulesPerRowOverride: 6,
                      onClick: () => Y(1),
                      onDrop: (e, t) => eh(null, e, t, 1),
                    }),
                  }),
                ],
              }),
            );
          }
          if ("16 Module" === C) {
            let e = X ? L : V,
              t = X ? V : L;
            return eu(
              (0, n.jsxs)("div", {
                ..._,
                className: [
                  l()[O],
                  l()["touch-panel-module16"],
                  l()["multi-row-wrapper"],
                ].join(" "),
                style: B,
                children: [
                  (0, n.jsx)("div", {
                    onClick: () => Y(0),
                    children: (0, n.jsx)(d.default, {
                      canvasNo: 1,
                      showCanvasBorder: !1,
                      data: e,
                      draggableItems: !0,
                      draggableRow: !0,
                      onRowDragStart: () => ei(0),
                      onRowDragOver: ec,
                      onRowDrop: () => el(0),
                      onItemDragStart: es,
                      onItemSwap: ed,
                      modulesPerRowOverride: 8,
                      onClick: () => Y(0),
                      onDrop: (e, t) => eh(null, e, t, 0),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    onClick: () => Y(1),
                    children: (0, n.jsx)(d.default, {
                      canvasNo: 2,
                      showCanvasBorder: !1,
                      data: t,
                      draggableItems: !0,
                      draggableRow: !0,
                      onRowDragStart: () => ei(1),
                      onRowDragOver: ec,
                      onRowDrop: () => el(1),
                      onItemDragStart: es,
                      onItemSwap: ed,
                      modulesPerRowOverride: 8,
                      onClick: () => Y(1),
                      onDrop: (e, t) => eh(null, e, t, 1),
                    }),
                  }),
                ],
              }),
            );
          }
          return eu(
            "18 Module" === C
              ? (0, n.jsxs)("div", {
                  ..._,
                  className: [l()[O], l()["touch-panel-module18"]].join(" "),
                  style: { ...B, padding: 0 },
                  onDragOver: (e) => e.preventDefault(),
                  children: [
                    (0, n.jsx)("div", {
                      onClick: () => Y(0),
                      children: (0, n.jsx)(d.default, {
                        canvasNo: 1,
                        showCanvasBorder: !1,
                        data: eo,
                        modulesPerRowOverride: 6,
                        draggableItems: !0,
                        onItemDragStart: es,
                        onItemSwap: ed,
                        onDrop: (e, t) => {
                          eh(null, e, t, 0),
                            S(
                              (0, u.addAccessory)({ optionType: e, option: t }),
                            );
                        },
                      }),
                    }),
                    (0, n.jsx)("div", {
                      onClick: () => Y(1),
                      children: (0, n.jsx)(d.default, {
                        canvasNo: 2,
                        showCanvasBorder: !1,
                        data: en,
                        modulesPerRowOverride: 6,
                        draggableItems: !0,
                        onItemDragStart: es,
                        onItemSwap: ed,
                        onDrop: (e, t) => {
                          eh(null, e, t, 1),
                            S(
                              (0, u.addAccessory)({ optionType: e, option: t }),
                            );
                        },
                      }),
                    }),
                    (0, n.jsx)("div", {
                      onClick: () => Y(2),
                      children: (0, n.jsx)(d.default, {
                        canvasNo: 3,
                        showCanvasBorder: !1,
                        data: ea,
                        modulesPerRowOverride: 6,
                        draggableItems: !0,
                        onItemDragStart: es,
                        onItemSwap: ed,
                        onDrop: (e, t) => {
                          eh(null, e, t, 2),
                            S(
                              (0, u.addAccessory)({ optionType: e, option: t }),
                            );
                        },
                      }),
                    }),
                  ],
                })
              : (0, n.jsx)("div", {
                  ..._,
                  "data-module-url": (() => {
                    if (!C) return;
                    let e = D ? D.toLowerCase().replace(/\s+/g, "-") : "",
                      t = (0, s.YS)(C),
                      o = [...k, ...M, ...N].some((e) =>
                        e.options.some((e) => "Bell" === e.item),
                      );
                    return "/module-svgs/"
                      .concat(e, "/")
                      .concat(
                        "touch-panel" === e && "module2" === t && o
                          ? "module2bell.svg"
                          : "".concat(t, ".svg"),
                      );
                  })(),
                  className: "flex items-center justify-center ".concat(l()[O]),
                  style: B,
                  children: (0, n.jsx)(d.default, {
                    canvasNo: 1,
                    showCanvasBorder: !1,
                    data: H,
                    draggableItems: !0,
                    onItemDragStart: es,
                    onItemSwap: ed,
                    onClick: () => Y(0),
                    onDrop: (e, t) => eh(null, e, t, 0),
                  }),
                }),
          );
        };
    },
  },
]);

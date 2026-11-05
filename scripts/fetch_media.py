#!/usr/bin/env python3
"""Mirror publicly served official gallery assets into the static site."""
import json
import pathlib
import re
import time
import urllib.request
import urllib.error
from urllib.parse import urlsplit, urlunsplit
ROOT = pathlib.Path(__file__).resolve().parents[1]
SCRIPT = (ROOT / "app.js").read_text(encoding="utf-8")
MATCH = re.search(r"const screenshots = (\[[^\n]*\]);", SCRIPT)
if not MATCH:
    raise SystemExit("Could not locate gallery metadata")
items = json.loads(MATCH.group(1))
images = [("assets/gallery/%02d.jpg" % i, item["remote"]) for i,item in enumerate(items)]
base = "https://www.rockstargames.com/VI/_next/static/media/"
images += [
  ("assets/hero.jpg", base+"Jason_and_Lucia_14.10e7v.06pcm_t.jpg"),
  ("assets/media.jpg", base+"mediaDesktop.11iioep6d3wsf.jpg"),
  ("assets/places.jpg", base+"onlyInLeonidaDesktop.15y2n40f3axwo.jpg"),
  ("assets/vi.png", base+"vi.0hxa9-pf214xe.png"),
]
headers = {"User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36",
           "Referer":"https://www.rockstargames.com/VI/launch-gallery",
           "Accept":"image/avif,image/webp,image/apng,image/*,*/*;q=0.8"}
success=failed=0
for path,url in images:
    dest=ROOT/path
    if dest.exists() and dest.stat().st_size>10000:
        success+=1
        continue
    attempts = [url+"?akim=1&imdensity=1&imwidth=1600",
                url+"?akim=1&imdensity=1&imwidth=1280", url]
    loaded = False
    for candidate in attempts:
        try:
            req=urllib.request.Request(candidate,headers=headers)
            with urllib.request.urlopen(req,timeout=18) as response:
                data=response.read(12_000_000)
                mime=response.headers.get("Content-Type","").lower()
            if len(data)<10000 or not (data.startswith(bytes.fromhex("ffd8ff")) or data.startswith(bytes.fromhex("89504e47")) or data[:4]==b"RIFF"):
                print("Unexpected response for",path,"mime",mime,"len",len(data))
                continue
            dest.parent.mkdir(parents=True,exist_ok=True)
            dest.write_bytes(data)
            print("OK",path,len(data))
            success+=1
            loaded=True
            break
        except Exception as e:
            print(type(e).__name__,str(e)[:90],path)
            time.sleep(.2)
    if not loaded:
        failed+=1
        print("MISSING",path)
print("Downloaded:",success,"missing:",failed)

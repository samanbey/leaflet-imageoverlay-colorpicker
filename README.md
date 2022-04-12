# leaflet-imageoverlay-colorpicker
extends L.ImageOverlay with getColor(latlng) function

inspired by https://github.com/frogcat/leaflet-tilelayer-colorpicker

## API
``` javascript
// factory
const l=L.imageOverlay.colorPicker(url,bounds).addTo(map);

// getColor(latLng) returns Uint8Array ([r,g,b,a]) or null
map.on('click',e=>{
    let rgb=l.getColor(e.latlng); // pick color at mouse position
    console.log(rgb);
});
```

## Online demo
https://samanbey.github.io/leaflet-imageoverlay-colorpicker/


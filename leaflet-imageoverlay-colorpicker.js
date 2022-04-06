/**
 * L.ImageOverlay.ColorPicker
 *
 * extends L.ImageOverlay with getColor() function
 * inspired by https://github.com/frogcat/leaflet-tilelayer-colorpicker
 *
 * MIT License
 * Copyright (c) 2022 Gede Mátyás
 */
(function(){
    L.ImageOverlay.ColorPicker=L.ImageOverlay.extend({
        getColor: function(latlng) {
            let cp=this._map.project(latlng);
            let b=this.getBounds();
            let sw=this._map.project(b.getSouthWest());
            let ne=this._map.project(b.getNorthEast());
            let iw=this._image.naturalWidth, ih=this._image.naturalHeight;
            let x=Math.floor((cp.x-sw.x)/(ne.x-sw.x)*iw);
            let y=Math.floor((ne.y-cp.y)/(ne.y-sw.y)*ih);
            if (x<0||y<0||x>=iw||y>=ih)
                return null;
            let c=document.createElement("canvas");
            c.width=1;c.height=1;
            let ct=c.getContext('2d');
            ct.drawImage(this._image,-x,-y,iw,ih);
            let rgb=ct.getImageData(0,0,1,1).data;
            delete c;
            return rgb;
        }
    });
    L.imageOverlay.colorPicker=(url, opts)=>(new L.ImageOverlay.ColorPicker(url, opts));
})();

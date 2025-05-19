var wms_layers = [];


        var lyr_basemap_0 = new ol.layer.Tile({
            'title': 'basemap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_____1 = new ol.format.GeoJSON();
var features_____1 = format_____1.readFeatures(json_____1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_____1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_____1.addFeatures(features_____1);
var lyr_____1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_____1, 
                style: style_____1,
                popuplayertitle: 'مؤشرات_الزراعه_في_مشتهر',
                interactive: true,
                title: '<img src="styles/legend/____1.png" /> مؤشرات_الزراعه_في_مشتهر'
            });

lyr_basemap_0.setVisible(true);lyr_____1.setVisible(true);
var layersList = [lyr_basemap_0,lyr_____1];
lyr_____1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'الصحه': 'الصحه', 'رطوبه': 'رطوبه', });
lyr_____1.set('fieldImages', {'OBJECTID': '', 'Id': '', 'gridcode': '', 'Shape_Leng': '', 'Shape_Area': '', 'الصحه': '', 'رطوبه': '', });
lyr_____1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'gridcode': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'الصحه': 'inline label - always visible', 'رطوبه': 'inline label - always visible', });
lyr_____1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});